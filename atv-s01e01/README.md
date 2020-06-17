# *Sistemas Distribuídos*
> monia tavares - Ciência da Computação - UFMA

**Conceitos iniciais**

Em convenção, idealizar de forma mais fácil um sistema distribuído é imaginar um conjunto de computadores onde exista o fornecimento de algum serviço.

*Tanenbaum* explorou a idéia de que por mais que o SD seja uma coleção de computadores, o usuário "visualiza" apenas um sistema, enfatizando assim a ideia de um sistema colaborativo com apresentação unica.

**Mas onde começou essa ideia?**

Nos anos 60 o modelo utilizado a par de processamento de informações era o modelo de sistema centralizado. Mainframes centralizavam a manipulação, armazenamento e tratamento dos dados através dos terminais "burros".
Os SC são sistemas que possuem pouco poder de tempo compartilhado, necessitando na época de  robustos mainframes para funcionar com qualidade. 
Logo, a necessidade de computadores serem interligados entre si com o objetivo de compartilhar recursos era crescente.
O advento tanto da ARPANET e mais a frente da internet induziram a grande escala de alicações e utilizações distribuídas.

**evolução histórica:**
1970s
- Estações de trabalho mono-usuário.
- SUN, XEROX e Apple.
- Primeiros sistemas distribuídos experimentais.

1980
- Microprocessadores com alto poder computacional.
- protocolo TCP/IP padronizado.
- Sistemas Distribuídos:Sun NFS, March, Sprite, etc.

dias atuais:
- Disponibilidade e facilidade de comunicação
- Internet/ nuvem
- Serviços Distribuídos em grande escala.

**Vantagens de SD**
- economia: mais recursos atraves do compartilhamento
- contribuição com informações/dados : acesso mais intuitivo a dados e outros serviços
- Flexibilização: Na distribuição de tarefas de acordo com as aplicações utilizadas.
- processamento / velocidade / acesso: Crescimento da capacidade de processamento.

**Desvantagens**
- Segurança: em sistemas distribuídos o acesso a informações reservadas pode ser prejudicial a segurança
- saturação da rede de comunicação.

### Motivações da utilização dos sistemas distribuidos
 Umas das grandes motivações que abrangiam a utilização dos SD's eram em relação ao compartilhamento de dados e informações, além da pespectiva econômica, visto que a ideia de compartlhamento tambem abrangeria serviços importantes sem a necessidade de adquirir muitos equipamentos( impressoras por exemplo)
Alem da atrativa fácilidade de acesso aos recursos, a Transparência e a Capacidade de ser expandido (Escalabilidade) eram recursos desejaveis em um SD.

**Interoperabilidade**
Em tecnologia entende-se por interoperabilidade a capacidade de um sistema de se comunicar de forma transparente com outro sistema (semelhante ou não). Reforça-se que para um sistema ser interoperavel este deve trabalhar com modelos (padrões) abertos.
até que ponto 2 implementações de fornecedores diferentes podem coexistir e trabalhar em conjunto com base na mera confiança mútua"

**Portabilidade**
A portabilidade também é uma característica importante, sendo uma maneira de garantir que um sistema funcione em um outro sistema sem a mesma interfaces e equipamentos do sistema de origem. Para essa característica ser aplicada é importante a padronização dos serviços.

**Extensibilidade**
pode ser necessário em alguma hora a adição de recursos ( seja Extensões de hardware ou de software) em um sistema distribuido sem que essa adição prejudique o funcionamento daqueles outros serviços que ja estavam em funcionamento antes. A essa necessidade chamamos de extensibilidade



### Escalabilidade em SD: necessidade atual e os problemas vigentes

Em determinadas situações é desejavel o aumento da capacidade de desempenho. Aumento de usuários e recursos, distância de usuários(geografia) ou a necessidade de administração facilitada( mesmo em varias organizações diferentes), são os motivos pelos quais deve-se analisar a medição de capacidade de desempenho em SD.

- crescimento de serviços e usuarios: servidores normalmente se transformam em "gargalo" à medida que o número de usuários e aplicações crescem.
- problemas geográficos: Comunicação em redes de longa distância não é confiável e quase sempre é ponto a ponto. 
- problemas administrativos:problemas de políticas conflitantes em relação a utilização/pagamento de recursos,expansão de dominio 
devem tambem ser avaliados.

### E como solucionar esses problemas?

**replicação:**
A replicação é uma técnica para melhorar serviços e desempenhos em SD, podendo ser realizada via software,( por exemplo quando num banco de dados, tabelas, etc), ou replicar via hardware(volume de disco, por exemplo).
A tecnica de replicação pode por exemplo ajudar muito nos problemas de latência( SDs de grande distancia). entretanto essa tecnica tambem causa um outro problema que é o de consistencia de dados.

**Distribuição**
Consiste em dividir componentes espalhando estes pelo sistema. Um exemplo é o da uma divisão do espaço de nomes DNS,  podendo assim vários clientes realizar a comunicação (paralela).

**ocultação de latência**
esse método é geralmente o meio utilizado para lidar com falhas de escabilidade causadas por distância ( geográfica). A ideia é apenas evitar por respostas a requisições( utilizando a comunicação assícrona)













