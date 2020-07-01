
const net = require('net');

// criação do socket
const socket = net.Socket();



//a partir daqui a função de conexão
function handleConnection () {
    
    console.log("Sorveteria que delicia!\n");
    console.log("bem vindo!\n");

    // envio "MENSAGEM2" para o servidor

    socket.write("MENSAGEM2");

    
    socket.on("data", function (dados) {
        const resposta = dados.toString().trim();
        console.log(resposta);

        console.log("fim da conexão");
        socket.end();
    });
}

// conexão com o servidor
socket.connect(2000, "127.0.0.1", handleConnection);
