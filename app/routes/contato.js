module.exports = function (app) {
	var controller = app.controllers.contato;

	app.get('/', function (req, res) {
		res.redirect('#/contatos');
	});



	app.route('/contatos')
		.get(controller.listaContatos);

	app.post('/contatos', controller.salvaContato);
	//	.post(Controller.salvaContato);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);

	//

	// app.get('/contatos', controller.listaContatos);
	// app.get('/contatos/:id', controller.obtemContato);

	// app.delete('/contatos/:id', controller.removeContato);
};
