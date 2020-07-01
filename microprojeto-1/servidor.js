/*MONIA TAINA TAVARES
Ciência da computação - UFMA
com base do código https://github.com/rafaelfl/sockets-sd-2020-3/blob/master/src/client.js
*/

const net = require('net');
var carrinho [];


// função que trata todos os eventos da conexão no servidor
function trataRequisicoes (socket) {
    // imprime mensagem ao conectar
    console.log("Conexão realizada!");

    // código que executa quando a conexão é encerrada
    socket.on("end", function () {
        console.log("Conexão finalizada!");
    });


    function cardap(){
        socket.write("Baunilha, coco, chocolate, flocos");

    }
    // dados sockets executados
    socket.on("data", function (dados) {
        const comando = dados.toString();
            var opc = data.toString().split(" ");
        // menu das opçoes
        switch (opc[0]) {
            case "1":
                socket.write("sabores\n");
                cardap();

                break;

            case "2":
                socket.write("cadastrando dados\n")
                console.log("cadastrado!\n")
                carrinho
;                break;
            
            default:
                const c = comando.split(" ");

              
                    
                } else {
                    socket.write("opção invalida");
                }
                
        }
    });
}

// cria servidor
const server = net.createServer(trataRequisicoes);

// escuta em porta de rede
server.listen(2000, "127.0.0.1");
