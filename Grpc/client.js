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
client.RegistrarPedido({cod: "12", nomesab: "ameixa", cobertura: "chocolate", preco: "2.50"}, function(err, response) {
    // verifica erro
    if (err != null) {
        console.log("Ocorreu um erro invocando o procedimento RegistrarPedido");
        return;
    }
console.log("o produto foi registrado");
	
	//relação com a lista em servidor
	
	client.ListarSabores({}, function(err, response) {
            const lista = response.lstsorvete;

            console.log(lista);
        });

    });

client.ListarSabores({}, function(err, response) {
    if (err != null) {
        console.log("erro ao chamar ListarSabores");
        return;
    }

    console.log("Sabores: " + JSON.stringify(response.lstsorvete) );
});
	
