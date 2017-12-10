
var log = require('../logging.js');

module.exports = {}

module.exports.updateAssociation = (instance, key, Association, values) => {

	console.log(values)

	let ops = []
	//delete no longer present
	
	ops = [...ops, ...instance[key].filter(p => !values.find(q => q.id === p.id)).map(p => p.destroy())];
	//update existing
	ops = [...ops, ...values.map(p => Association.findOne({ where: { id: p.id } }).then(q => q ? q.update(p) : null))];
	//add new ones
	ops = [...ops, ...values.filter(p => !p.id).map(p => {
		p[instance.Model.name+'Id'] = instance.id;
		return Association.create(p);
	})];
	return Promise.all(ops);



}