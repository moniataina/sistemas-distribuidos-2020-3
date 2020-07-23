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
function RegistrarPedido(call, callback) {
	const sabor = {
		cod: call.request.cod,
		nomesab: call.request.nomesab,
		cobertura: call.request.cobertura,
		preco: call.request.preco,
	};

	pedido.push(lanche);

	callback(null, {});
};
