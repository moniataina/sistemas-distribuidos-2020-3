# Tipos de Sistemas Distribuídos e Middleware   
> Monia Tainá Tavares - Ciência da Computação- UFMA

#### tipos de sistemas distribuídos

 -**Sistemas de computação distribuídos:** São utilizados para tarefas de computação que demandam grandes execuções. Utilizados para processamentos de grandes conjuntos de dados. os sistemas de computação distribuidos são divididos em duas subclassses: *computação em cluster*, onde os SO's são formados de estações de trabalho semelhantes, fortemente conectadas por uma rede de alta velocidade, e *computação em Grid*, onde cada SO está incluido em um dominio administrativo( logo, pode abranger diferenças em relação ao software, hardware ou tecnologia de redes.
 
**Sistemas de Informação Distribuídos:** arquitetura distribuida para compor base de dados/ possuindo como principal caracteristica a integração das aplicações existentes. Geralmente aplicações de banco de dados são realizadas sob a forma de transições. Nesse contexto, ao se abordar esses dados , podemos analisar os sistemas de informação distribuidas de acordo as suas subclasses, que são baseadas em processos de transações, onde possuem as seguintes caracteristicas:
 - atomicidade: (para o mundo externo) transação ocorre de forma indivisível. 
 - Consistência: transação não "fere" invariantes do sistema. 
 - Isolamento: transações concorrentes não interferem uma na outra. 
 - Durabilidade: ao se confirmar a transação(commit), as mudanças são permanentes.
 
 
 **Sistemas pervasivos**: com  a  introdução  de dispositivos de computação móveis e embutidos, esses  sistemas  denominados 
sistemas  distribuídos  pervasivos acabaram aparecendo no cenario atual. são caracetrizados por sistemas onde seus equipamentos costumam são representados por seu pequeno tamanho, mobilidade, pela alimentação  por  bateria, e  por  terem  somente uma conexão sem fio.
Uma caracteristica interessante a se analisar no sistema distribuido pervasivo é o seu cenário: dispositivos na melhor das hipóteses podem ser configurados por seus proprietários, entretanto é desejavel que o ambiente seja descoberto automaticamente, onde se "insere".(Dispositivo deve ser ciente de que seu ambiente pode mudar continuamente). 

### Middleware

 - O middleware é a camada (software) que se encontra entre o sistema operacional e os aplicativos nele que são executados.O middleware é praticamente a "conexão" que liga aplicativos para que os dados/ bancos de dados possam ser conduzidos.A utilização do middleware "permite que os usuários executem solicitações como enviar formulários em um navegador da Web ou permitir que o servidor Web apresente páginas dinâmicas da web com base no perfil de um usuário."¹
 
  ##### serviços oferecidos 
   - transações: faz gerenciamento de transações
   - comunicação: chamada de procedimento remoto, invocação de objeto
   - nomeação: aceita referenciar objetos pelo nome
   - segurança: oferece fucionalidades referentes a segurança
   
  ### exemplos gerais de middleware
- Servidores de Aplicação Java EE
- Business intelligence
- Monitoramento de IT

 ### exemplo de serviço com middleware
  - IBM websphere: família de softwares da IBM( WebSphere Application Server, WebSphere Portal Server, etc), para criação e execução de aplicações baseadas no padrão Java J2EE, fornecendo também infra-estrutura para integração de aplicações corporativas.
  - linguagem : Java

 
 ##### REFERÊNCIAS
 ¹**O que é middleware?** Disponível em: https://azure.microsoft.com/pt-br/overview/what-is-middleware/
 
 **Tipos de sistemas distribuídos.** Disponível em: https://slideplayer.com.br/slide/3438056/

FAINA, Luís fernando.**Sistemas de Computação Distribuídos.** Disponível em: http://www.facom.ufu.br/~faina/BCC_Crs/GSI028-2014-1S/DL/DS-Ch01.pdf

REIS, Gustavo.**Introdução aos Sistemas Distribuídos.** Disponível em: https://silo.tips/download/sistemas-distribuidos-19

FERRAZ, Carlos A. G.**Sistemas distribuídos**-visão geral extendida. Disponível em: https://www.cin.ufpe.br/~cagf/sdgrad/aulas/visaogeral-expandida.pdf
 
 
 
 
