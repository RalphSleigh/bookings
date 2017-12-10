

module.exports = (sequelize, DataTypes) => {
	var participant = sequelize.define('participant', {
  name: {
    type:  DataTypes.STRING
  },
  age: {
    type:  DataTypes.STRING
  },
  diet: {
    type:  DataTypes.STRING
  },
  dietExtra: {
    type:  DataTypes.TEXT
  },
  medical: {
    type:  DataTypes.TEXT
  },
  days: {
	type:  DataTypes.INTEGER
  }
});

participant.associate = models => {
	models.participant.belongsTo(models.booking)
}

return participant

}