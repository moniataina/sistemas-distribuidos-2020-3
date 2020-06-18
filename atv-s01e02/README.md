## Classificação de hardware com várias CPU's
> Monia Tainá Tavares - Ciência da Computação/ UFMA

A Necessidade de computadores mais rápidos em processamento tornava-se algo cada vez mais recorrente desde o primórdio das arquiteturas paralelas, chegando ate os campo de SD's. Conforme visto, um SD caracteriza-se por diversas CPU's conectadas, diferenciando na forma de organização desse mesmo hardware. 
Ao analisar computadores em um SD, percebe-se diversos padrões utilizados (seja memória compartilhada ou em estrutura de barramento). esses tipos de estruturas são consideradas conforme o número e fluxo de dados utilizados.

#### Fluxo de dados / MIMD - Multiple Instruction Multiple Data

Fluxo de dados/ instruções em grande escala demandam a utilização de varios processadores interconectados. Nesse contexto, o sistemas de classificação de Máquinas *MIMD (Multiple Instruction Multiple Data*) torna-se a arquitetura essencial. Estas arquiteturas são caracterizadas pela execução simultânea de múltiplos fluxos de instruções, possuindo construção a partir de diversos processadores realizando trabalho cooperativo (ou concorrente).

Nesse cenário surgem as seguintens subclassificações (conforme Tanenbaum):

- multiprocessadores: são as chamadas máquinas com memória compartilhada. podem ser baseados em:
  - barramentos: Sistema com vários processadores interconectados por um barramento e uma memória única( utilizando caches, que reduzem o trafego de barramento e tambem o tempo de acesso a dados). Conforme **BERTINI¹**, processadores devem ter acesso exclusivo à memória no caso de escrita e devem ter em suas caches a cópia mais recente de um dado. (pode-se analisar a este contexto a questão de problemas de inconsistência gerados pela cache).
  - chaveamento: a arquitetura por chaveamento consiste em uma estrutura mais robusta onde não existe mais um único barramento   (dispositivos de malha/ponto cruzado), utilizando a "interseção" de pontos para interligar processadores e memórias. Nesse tipo de arquitetura é proposta a comunicação simultânea entre diversas unidades( evitando o "gargalo", consequência do barramento comum). As estruturas *Cross-bar* e *ômega* são exemplo de chaveamentos, onde a primeira necessita de mais computadores nas interseções (estrutura matricial) e a segunda utiliza menos dispositivos para interligação de malha, reduzindo por exemplo o custo de implantação.
  
  
 
 
 
 ###### Referências
 
 ¹BERTINI, Luciano. **Multiprocessadores de Clusters**. Disponível em : http://www.professores.uff.br/lbertini/wp-content/uploads/sites/108/2017/08/Cap-6-Multiplrocessadores.pdf.
 
 OLIVEIRA, Fábio Borges de. **Sistemas com múltiplos processadores**. Disponivel em: https://www.lncc.br/~borges/ist/SO2/cap08.pdf.
 



