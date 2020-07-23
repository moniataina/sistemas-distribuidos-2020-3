//MONIA TAINA TAVARES - UFMA
//editando aqui<!>

// definição do caminho do arquivo proto

const PROTO_PATH = "./sabor.proto";

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
//CODIGO DE SERVIÇO - CARREGAMENTO
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).sabor;

const client = new protoDescriptor.ServicoSorveteria('127.0.0.1:50051',
									grpc.credentials.createInsecure());

//EDITANDO AQUI
client.RegistrarPedido({cod: "12", nomesab: "ameixa", cobertura: "chocolate"}, function(err, response) {
    // verifica se ocorreu algum erro na comunicação
    if (err != null) {
        console.log("Ocorreu um erro invocando o procedimento RegistrarCarro");
        return;
    }
