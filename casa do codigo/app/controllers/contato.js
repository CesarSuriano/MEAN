var controller = {};
var contatos = [
{_id:1, nome: 'Contato Exemplo1',
email:'contato@empresa.com'
},
{_id:2, nome: 'Contato Exemplo2',
email:'contato@empresa.com'
},
{_id:3, nome: 'Contato Exemplo3',
email:'contato@empresa.com'
}
];

var ID_CONTATO_INC = 3;

controller.listaContatos = function(req, res){
	res.json(contatos);
};

controller.obtemContato = function(req, res){
	var idContato = req.params.id;
	var contato = contatos.filter(function(contato){
		return contato._id == idContato;
	})[0];
	contato ?
	res.json(contato):
	res.status(404).send('Contato não encontrado');

};

controller.removeContato = function(req, res){
	var idContato = req.params.id;
	contatos = contatos.filter(function(contato){
		return contato._id != idContato;
	});
	res.send(204).end();
	//console.log("API: remove contato"+  idContato);
}

controller.salvaContato= function(req, res){
	var contato = req.body;
	contato = contato._id ?
		atualiza(contato):
		adiciona(contato);
		res.json(contato);
};

function adiciona(contatoNovo){
	contatoNovo._id = ++ID_CONTATO_INC;
	contatos.push(contatoNovo);
	return contatoNovo;
}

function atualiza(contatoAlterar){
	contatos = contatos.map(function(contato){
		if(contato._id == contatoAlterar._id){
			contato = contatoAlterar;
		}
		return contato;
	});
	return contatoAlterar;
}

module.exports = controller;