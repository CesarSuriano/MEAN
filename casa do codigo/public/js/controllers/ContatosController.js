angular.module('contatooh').controller('ContatosController', function($scope, Contato){
	
	$scope.contatos = [];

	$scope.mensagem = {texto: ''};
	
	//$scope.total = 0;

	$scope.filtro = '';

	// $scope.incrementa = function(){
	// 	$scope.total ++;
	// };

	var Contato = Contato;
    //var Contatos = $resource('/contatos/:id');
	
	function buscaContatos() {
		Contato.query(
		function(contatos){
			$scope.contatos = contatos;
			$scope.mensagem ={};
		},
		function(erro){
			$scope.mensagem = {texto: "Não foi possivel obter a lista de contatos"};
			console.log(erro);
		}
		);	
	}
	buscaContatos();
	
	// $resource.get('/contatos')
	// .success(function(data){
	// 	$scope.contatos = data;
		
	// })
	// .error(function(statusText){
	// 	console.log("Não foi possivel obter a lista de contatos");
	// 	console.log(statusText);
	// });
	$scope.remove = function(contato){
		 Contato.delete({id: contato._id}
		,buscaContatos,
		 function(erro){
			$scope.mensagem = {texto:"Não foi possivel remover o contato"};
			console.log(erro);
		});

	}

});