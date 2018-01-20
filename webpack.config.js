module.exports = () => {
    if (process.env.BOOKINGS_VAULT_URL) {

        return getConfigFromVault();

    } else {

        const config = {};
        /**
         * Server config
         */
        config.HOST = "localhost";
        config.PORT = 8080;
        config.BASE_PATH = "http://localhost:8080/";

        /**
         * Database
         */

        config.DB_URL = "sqlite://bookings.sqlite";

        /**
         *  Log on with google OAuth
         */
        config.GOOGLE_CLIENT_ID = "dsfgh";
        config.GOOGLE_CLIENT_SECRET = "sdfgh";
        config.GOOGLE_CALLBACK = "http://localhost:8080/auth/google/callback";

        /**
         * Log on with Facebook
         */
        config.FACEBOOK_APP_ID = "sfgh";
        config.FACEBOOK_APP_SECRET = "fghfg";

        /**
         * Service Account to send e-mail
         */
        config.EMAIL = false;
        config.EMAIL_FROM = "bookings-auto@woodcraft.org.uk";
        config.EMAIL_CLIENT_EMAIL = "";
        config.EMAIL_PRIVATE_KEY = "";

        return Promise.resolve(config);
    }
};

async function getConfigFromVault() {

    try {

        const url = require('url').URL;

        const vaultURL = new url(process.env.BOOKINGS_VAULT_URL);
        const connectURL = new url(process.env.BOOKINGS_VAULT_URL);

        connectURL.username = "";
        connectURL.password = "";
        connectURL.pathname = "";

        const options = {
            apiVersion: 'v1',
            endpoint: connectURL.toString().slice(0, -1), //don't ask stupid module..
            token: vaultURL.password //this token must allow us to create a corresponding approle secret
        };

        const role_name = "bookings_" + vaultURL.username;

        const vault = require("node-vault")(options);
        const secret = await vault.getApproleRoleSecret({role_name: role_name});//get an approle secret
        const login = await vault.approleLogin({role_id: role_name, secret_id: secret.data.secret_id});//use it to login as the approle
        vault.token = login.auth.client_token;

        const vaultConfig = {};

        vaultConfig.HOST = await getValue(vault, vaultURL.username, "HOST");
        vaultConfig.PORT = await getValue(vault, vaultURL.username, "PORT");
        vaultConfig.BASE_PATH = await getValue(vault, vaultURL.username, "BASE_PATH");

        vaultConfig.DB_URL = await getValue(vault, vaultURL.username, "DB_URL");

        vaultConfig.GOOGLE_CLIENT_ID = await getValue(vault, vaultURL.username, "GOOGLE_CLIENT_ID");
        vaultConfig.GOOGLE_CLIENT_SECRET = await getValue(vault, vaultURL.username, "GOOGLE_CLIENT_SECRET");
        vaultConfig.GOOGLE_CALLBACK = vaultConfig.basePath + 'auth/google/callback';

        vaultConfig.FACEBOOK_APP_ID = await getValue(vault, vaultURL.username, "FACEBOOK_APP_ID");
        vaultConfig.FACEBOOK_APP_SECRET = await getValue(vault, vaultURL.username, "FACEBOOK_APP_SECRET");

        vaultConfig.EMAIL = await getValue(vault, vaultURL.username, "EMAIL_ENABLED");

        return Promise.resolve(vaultConfig);
    } catch (error) {
        console.log(error);
        return {}
    }
}

async function getValue(vault, role_name, value) {
    const response = await vault.read('kv/bookings/' + role_name + '/' + value);
    return response.data.value;
}
