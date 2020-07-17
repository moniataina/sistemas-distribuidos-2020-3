 
// definição do caminho do arquivo proto
const PROTO_PATH = "./lanchonete.proto";

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

// carregamento do arquivo proto e geração das definições
const packageDefinition = protoLoader.loadSync(
	PROTO_PATH,
	{keepCase: true,
	 longs: String,
	 enums: String,
	 defaults: true,
	 oneofs: true
	});

// carregamento do código do serviço
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).lanch;

const client = new protoDescriptor.ServicoLanchonete('127.0.0.1:50051',
									grpc.credentials.createInsecure());

/*editar aqui <!>*/

var readlineSync = require('readline-sync');

var call = null;

function carrinhodecompra()
{
  input = readlineSync.prompt();

	console.log('digite 1 para adicionar um produto e 2 caso queira sair');
	if (input === '1') {
    
};
