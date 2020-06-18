## Classificação de hardware com várias CPU's
> Monia Tainá Tavares - Ciência da Computação/ UFMA

A necessidade de computadores mais rápidos em processamento tornava-se algo cada vez mais recorrente desde o primórdio das arquiteturas paralelas, chegando ate os campo de SD's. Conforme visto, um SD caracteriza-se por diversas CPU's conectadas, diferenciando na forma de organização desse mesmo hardware. 
Ao analisar computadores em um SD, percebe-se diversos padrões utilizados (seja memória compartilhada ou em estrutura de barramento). esses tipos de estruturas são consideradas conforme o número e fluxo de dados utilizados.

#### Fluxo de dados / MIMD - Multiple Instruction Multiple Data

Fluxo de dados/ instruções em grande escala demandam a utilização de varios processadores interconectados. Nesse contexto, o sistemas de classificação de Máquinas *MIMD (Multiple Instruction Multiple Data*) torna-se a arquitetura essencial. Estas arquiteturas são caracterizadas pela execução simultânea de múltiplos fluxos de instruções, possuindo construção a partir de diversos processadores realizando trabalho cooperativo (ou concorrente).

Nesse cenário surgem as seguintens subclassificações (conforme Tanenbaum):

- **multiprocessadores**: são as chamadas máquinas com memória compartilhada. podem ser baseados em:
  - barramentos: Sistema com vários processadores interconectados por um barramento e uma memória única( utilizando caches, que reduzem o trafego de barramento e tambem o tempo de acesso a dados). Conforme **BERTINI¹**, processadores devem ter acesso exclusivo à memória no caso de escrita e devem ter em suas caches a cópia mais recente de um dado. (pode-se analisar a este contexto a questão de problemas de inconsistência gerados pela cache).
  - chaveamento: a arquitetura por chaveamento consiste em uma estrutura mais robusta onde não existe mais um único barramento   (dispositivos de malha/ponto cruzado), utilizando a "interseção" de pontos para interligar processadores e memórias. Nesse tipo de arquitetura é proposta a comunicação simultânea entre diversas unidades( evitando o "gargalo", consequência do barramento comum). As estruturas *Cross-bar* e *ômega* são exemplo de chaveamentos, onde a primeira necessita de mais computadores nas interseções (estrutura matricial) e a segunda utiliza menos dispositivos para interligação de malha, reduzindo por exemplo o custo de implantação.
  
 - **multicomputadores**: A ideia principal de um sistema de multicomputadores é a de CPUs fortemente acopladas que não compartilham memória(clusters). No cenário de multicomputadores existem:
    - multicomputadores homogêneos: conjunto de dispositivos análogos com o intuito de se realizar o processamento paralelo. Construções do tipo *MPPs* (*Massively Parallel Processors*), onde consiste de processamento coordenado de um programa por vários processadores que funcionam em diferentes partes do programa, com cada processador usando seu próprio sistema operacional e memória, e *COW*( *Cluster of Workstations*), estações de trabalhos interligadas, por muitas vezes com as chamadas estações de trabalho sem "cabeça" (headless Workstation).
    - multicomputadores heterogêneos: são os chamados sistemas de computadores e dispositivos não semelhantes( sistemas operacionais ou arquiteturas).
    
#### Taxonomia de Flynn
Com a grande variedade de arquitetura de computadores, existem diversas classificações( taxonomias) propostas, com o objetivo de padronizar caracteristicas dos sistemas computacionais. A classificação de arquitetura mais aceita é a de Michael J. Flynn.Essa classificação distingue arquiteturas de computadores de acordo a quantidade de instruções e dados processados em um determinado momento utilizando a classificação segundo duas dimensões independentes (fluxo de dados/ fluxo de instruções).
Conforme Flynn, as arquiteturas possuem 4 classes de classificações:

  - SISD (*Single Intruction Single Data*): Computadores com esta classificação são aqueles que executam uma instrução de um programa por vez ( processamento unico/ baixo poder de cálculo) em unico fluxo de dados.
  - SIMD (*Single Instruction Multiple Data*): Esse tipo de computador tambem realiza a execução de uma unica instrução, entretanto possui multiplo fluxo de dados.
  - MISD (*Multiple Instruction Single Data*): Multiplas unidades de processamento( fluxo multiplo de instruções) , onde cada uma opera de maneira independente via conjunto independentes de instruções, ou seja, um multiplo fluxo de instruções para unico fluxo de dados.
  - MIMD (*Multiple Instruction Multiple Data*): Neste caso, multiplas instruções para multiplo fluxo de dados, onde cada processador pode pode trabalhar com diferentes fluxos de dados, podendo ser sícronos e assícronos. Conforme visto, a classificação MIMD é a mais comum no processo paralelo.



 
 ###### Referências
 
 ¹BERTINI, Luciano. **Multiprocessadores de Clusters**. Disponível em : http://www.professores.uff.br/lbertini/wp-content/uploads/sites/108/2017/08/Cap-6-Multiplrocessadores.pdf.
 
 DANTAS, Mário. **Arquitetura de Computadores II**. Disponível em: http://www.inf.ufsc.br/~mario.dantas/tac.pdf.
 
 GATTO, Elaine Cecília. **Arquiteturas de Computadores Paralelos**. Disponível em: https://pt.slideshare.net/elainececiliagatto/arquiteturas-de-computadores-paralelos
 
 MACHADO, Francis Berenger.; MAIA, Luís Paulo. **Arquitetura de sistemas operacionais.** Disponível em: https://slideplayer.com.br/slide/290425/.
 
 ROMÃO, Oberlan. **Arquiteturas paralelas – Parte 1**. Disponível em: https://www.ime.usp.br/~oberlan/DCE11720/Aulas/Aula03.pdf.
 
 OLIVEIRA, Fábio Borges de. **Sistemas com múltiplos processadores**. Disponivel em: https://www.lncc.br/~borges/ist/SO2/cap08.pdf.
 



