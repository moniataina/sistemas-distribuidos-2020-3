//Monia Taina - ufma

// def do caminho do arquivo proto
const PROTO_PATH = "./sabor.proto";

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

//carregamento do caminho proto
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

//CODIGO DE SERVIÇO - CARREGAMENTO
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).sabor;

//chamada do banco de dados
const listasorvete = [];

function listarSabores(call, callback) {
	callback(null, {
		lstsorvete: listasorvete
	});
};

//EDITANDO AQUI
function registrarpedido(call, callback) {
	const sabor = {
		cod: call.request.cod,
		nomesab: call.request.nomesab,
		cobertura: call.request.cobertura,
		preco: call.request.preco,
	};

	
	// adiciona no BD
    listasorvete.push(sabor);
//retorno de resultado ao client
	callback(null, {});
};

//remover item específico
function apagarpedido(call, callback) {
    const sabor = call.request.sabor;
	const Sorv = listasorvete.findIndex(sorveteopcao => sorvetopcao.sabor ===sabor);
	if(!Sorv)
	{
		callback(null, "Erro ao apagar item, produto inexistente");
	}else
	{
		listasorvete.splice(Sorv, 1);
        callback(null)
    }
}

// apagar todo o carrinho
function deletarcarrinho(call, callback) {
	const sabor = call.request.sabor;
	
	listasorvete.length = 0;
	console.log(listasorvete) 
	callback(null)
}

//definições chamadas do servidor

const server = new grpc.Server();

server.addService(protoDescriptor.ServicoSorveteria.service,
    {
        ListarSabores : listarsabores,
        RegistrarPedido: registrarpedido,
	pedidofinalizado: pedidofinalizado,
	Deletarcarrinho: deletarcarrinho,
	Apagarpedido: apagarpedido, 
       
    });


server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());


server.start();

