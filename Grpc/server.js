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
