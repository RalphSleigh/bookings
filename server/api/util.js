module.exports = {};

module.exports.updateAssociation = (instance, key, Association, values) => {

    let ops = [];
	//delete no longer present
	ops = [...ops, ...instance[key].filter(p => !values.find(q => q.id === p.id)).map(p => p.destroy())];
	//update existing
	ops = [...ops, ...values.filter(p => p.id).map(p => Association.findOne({ where: { id: p.id } }).then(q => q ? q.update(p) : null))];
	//add new ones
	ops = [...ops, ...values.filter(p => !p.id).map(p => {
        p[Association.associations[instance.constructor.name].foreignKey] = instance.id;
		return Association.create(p);
	})];
	return Promise.all(ops);
};