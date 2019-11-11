FACULDADE PROJEÇÃO

TECNOLOGIA E ANÁLISE EM DESENVOLVIMENTO DE

SISTEMAS

GUSTAVO PIMENTEL RINALDI

CICLO DE PAGAMENTO PARA CONTROLE FINANCEIRO

Brasília, novembro de 2018

FACULDADE PROJEÇÃO

TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS

TEMA

Trabalho de Conclusão de Curso apresentado ao Curso de Análise e
Desenvolvimento de Sistemas da Faculdade Projeção, como requisito
complementar e obrigatório à obtenção do título de Tecnólogo em
Análise de Sistemas.

Brasília, 19 de novembro de 2018.

Banca Examinadora:

Professor(a) :
Orientador(a)

Professor(a) : Joseneuza Julita Pimenta de Aguiar

Professor(a) :

Professor Joseneuza Julita Pimenta de Aguiar, Especialista
Professora do curso de Tecnologia e Analise em Desenvolvimento de Sistemas

SUMÁRIO

LISTA DE ABREVIATURAS E SIGLAS ............................................................................5
LISTA DE FIGURAS.....................................................................................................6
LISTA DE TABELAS.....................................................................................................7
RESUMO ..................................................................................................................8
ABSTRACT ................................................................................................................9
CAPÍTULO I............................................................................................................. 10
VISÃO INICIAL......................................................................................................... 10
1. INTRODUÇÃO.............................................................................................................10
2. Contextualização........................................................................................................10
3. Problemática..............................................................................................................10
4. Solução Proposta .......................................................................................................10
5. O que se esperar ........................................................................................................11
6. Objetivo Geral............................................................................................................11
6.1 Objetivos Específicos..................................................................................................... 11
7. Estrutura do Projeto...................................................................................................11
CAPÍTULO II............................................................................................................ 13
METODOLOGIA APLICADA...................................................................................... 13
1. Metodologia e Modelo de Desenvolvimento...............................................................13
2 Técnicas de Levantamento de Requisitos.....................................................................13
2.1 Entrevista....................................................................................................................... 13
3. Tecnologias em Geral .................................................................................................14
3.1. Linguagem de Programação......................................................................................... 14
3.2 Banco de Dados............................................................................................................. 14
4. Componentes de Hardware e Software utilizados no projetoErro! Indicador não definido.
5. Motivação pelo uso da tecnologia escolhida ...............................................................14
8. Cronograma de Desenvolvimento...............................................................................15
CAPÍTULO III........................................................................................................... 16
VISÃO DO SISTEMA ................................................................................................ 16
1. Escopo .......................................................................................................................16
2. Problemas..................................................................................................................16
3. Necessidades dos Interessados...................................................................................16
4. Perspectiva do Produto ..............................................................................................16
5. Resumo das Capacidades do Produto..........................................................................16
6. Características do Sistema ..........................................................................................17
7. Riscos do Projeto........................................................................................................17
8. Restrições do Projeto .................................................................................................17
9. Regras do Negócio......................................................................................................17
10. Requisitos Funcionais...............................................................................................19
11. Requisitos Não Funcionais........................................................................................19

12. Mensagens do Sistema .............................................................................................20
13. Lista de Casos de Uso................................................................................................20
14. Lista de Atores .........................................................................................................21
15. Diagrama Geral de Caso de Uso ................................................................................21
16. Diagrama de Classe ..................................................................................................21
17. Diagrama de Processo ..............................................................................................22
CAPÍTULO IV........................................................................................................... 23
ESPECIFICAÇÃO DE CASO DE USO............................................................................ 23
UC001 – MANTER PAGAMENTOS....................................................................................23
UC002 – MANTER CRÉDITOS...........................................................................................23
UC003 – MANTER DÉBITOS.............................................................................................24
UC004 – MANTER USUÁRIOS..........................................................................................24
CAPÍTULO V............................................................................................................ 25
MODELAGEM DE DADOS ........................................................................................ 25
1. Diagrama de Entidade Relacional................................................................................25
2. Diagrama de Entidade Relacional.........................................Erro! Indicador não definido.
3.1 Dicionário de Dados .................................................................................................25
3.1.1 Tabela [Pagamentos].................................................................................................. 25
3.1.1 Tabela [Créditos]........................................................................................................ 25
3.1.1 Tabela [Débitos] ......................................................................................................... 25
3.1.1 Tabela [Usuário]......................................................................................................... 25
CAPÍTULO VI........................................................................................................... 27
PROTOTIPAÇÃO DO SISTEMA ................................................................................. 27
1 Manter Pagamentos <Identificação de Tela>................................................................27
1.1 Campos da Tela ............................................................................................................. 29
1.2 Comandos da Tela ......................................................................................................... 29
CONCLUSÃO........................................................................................................... 30
REFERÊNCIAS.......................................................................................................... 31

LISTA DE ABREVIATURAS E SIGLAS

SQL Structure Query Language
JS JavaScript
DB Database
NoSQL No Structure Query Language
MVC Model-View-Controller
HTML HyperText Markup Language
UI User Interface
UX User Experience

LISTA DE FIGURAS

Figura 01 – Imagem que representa a visão geral no documento ............................................ 15
Figura 02 – Representação de um cenário para implantação .................................................. 16
Figura 03 – Diagrama Geral de Caso de Uso ........................................................................... 19
Figura 04 – Diagrama de Caso de Uso de Consultar Parecer Técnico .................................... 21
Figura 05 – Diagrama de Classe ............................................................................................... 24

LISTA DE TABELAS

Tabela 01 – Comparação de Funcionalidades ......................................................................... 13
Tabela 02 – Comparação de Tecnologias ................................................................................ 13
Tabela 03 – Cronograma de Desenvolvimento do Projeto ....................................................... 14
Tabela 04 – Exemplo de Mecanismos Arquiteturais ................................................................. 15
Tabela 05 – Componentes de Hardware .................................................................................. 16
Tabela 06 – Especificação do Problema ................................................................................... 17
Tabela 07 – Necessidades dos Interessados ........................................................................... 17
Tabela 08 – Resumo das Capacidades do Produto .................................................................. 18
Tabela 09 – Regras de Negócio ................................................................................................ 18
Tabela 10 – Requisitos Funcionais ........................................................................................... 19
Tabela 11 – Requisitos Não Funcionais .................................................................................... 19
Tabela 12 – Mensagens do Sistema ......................................................................................... 19
Tabela 13 – Lista de Casos de Uso .......................................................................................... 20
Tabela 14 – Lista de Atores ....................................................................................................... 20
Tabela 15 – Clientes .................................................................................................................. 20

8

RESUMO

Este trabalho foi motivado na procura de resolver problemas de gestão na área
de controle financeiro. O objetivo principal é propor um sistema de controle
simples, a fim de que o usuário consiga consultar as finanças da empresa,
além de conseguir cadastrar novos créditos, débitos e pagamentos. O sistema
também irá liquidar o valor final calculando os créditos menos os débitos.
Algumas empresas demonstram não possuir sistema de controle financeiro
versátil capaz de controlar o fluxo de finanças. Portanto, essa controle de fluxo
proporciona uma maior produtividade por parte da empresa.

Palavras-Chave: Finanças, créditos, débitos, pagamentos, controle financeiro.

9

ABSTRACT

This work was motivated in the search to solve problems of management of an
area of financial control. The main one is the simple control system, so that the
user can consult the company accounts, in addition to obtaining new credits,
debits and payments. The system will also settle the final amount by calculating
the credits minus the habits. Some companies demonstrate that they do not
have a financial control system capable of controlling the flow of finances. For,
greater control of most of the company.

Keywords: finances, credits, debits, payments, financial control.

10

CAPÍTULO I

VISÃO INICIAL
1. INTRODUÇÃO
Atualmente a falta de controle financeiro afeta o mercado de trabalho
como um todo, considerando que o país é relativamente instável e que a
economia é muito sujeita a crises.
46% das pessoas acham que a falta de dinheiro é o grande fator de
stress no dia a dia. A falta de controle financeiro afeta a vida das pessoas e
inclusive das empresas, interferindo também em seu desempenho no trabalho.
2. Contextualização
É por meio do controle financeiro que uma empresa se mantém ativa e
operando no mercado de forma sustentável; afinal de contas, fica difícil
executar qualquer tipo de operação com o caixa zerado ou mesmo sem um
bom capital.
O controle financeiro e o planejamento são ferramentas indissociáveis,
ou seja, é preciso planejar as finanças e controlar cada passo da sua
execução, poder analisar a saúde financeira real do negócio. Não basta apenas
registrar cada movimentação financeira da empresa, é preciso monitorar e
acompanhar cada ação. Em geral, as empresas procuram implementar
processos simples de controle financeiro antes mesmo de terem boas
estruturas de planejamento e orçamento, funcionado basicamente como um
período de teste.
3. Problemática
A falta de controle financeiro é o principal motivo de muitas empresas
fecharem as portas antes mesmo de alcançarem os primeiros anos de
funcionamento.

11
Dados do IBGE apontam que 6 em cada 10 negócios fecham as portas
antes de completarem 5 anos, e o motivo, para muitos especialistas, está
ligado às finanças.
A inexistência ou mesmo a insuficiência de um plano financeiro faz com
que muitas organizações não possam controlar ações de forma eficiente para a
execução dos seus objetivos.
4. Solução Proposta
Existem várias iniciativas que as empresas podem adotar, desde simples
conversas informais no dia a dia até eventos mais estruturados, como uma
palestra sobre gestão de finanças pessoais.
A partir daí a empresa poderá mapear a situação, identificar problemas e
pensar em soluções adequadas.
A solução para facilitar todos esses processos é um sistema que
controla os créditos e os débitos, calcula, mostra o saldo e os pagamentos a
serem feitos.
5. O que se esperar
Espera-se obter conhecimento do mercado, além do planejamento e
desenvolvimento da empresa. A expectativa é que o negócio tenha êxito.
6. Objetivo Geral
O objetivo deste projeto é criar o sistema de controle financeiro para
melhorar a produtividade da empresa e aperfeiçoar o software diante de suas
necessidades futuras.

6.1 Objetivos Específicos
Visando atender ao objetivo geral têm-se os seguintes objetivos
específicos:
• Criar o pagamento;
• Controlar o pagamento;

12

7. Estrutura do Projeto
Este projeto foi dividido em oito capítulos, onde se tentou apresentar de
forma objetiva a proposta do sistema de gestão.
• O Capítulo I está definindo o projeto;
• O Capítulo II especifica a metodologia aplicada;
• O Capítulo III detalha o Documento de Visão;
• O Capítulo IV discorre sobre a especificação do caso de uso;
• O Capítulo V possui uma análise da modelagem de dados;
• O Capítulo VI discorre sobre a prototipação do sistema;
• Ao final há a Conclusão, Referências Bibliográficas, Glossário Anexos e
Apêndices.

13

CAPÍTULO II

METODOLOGIA APLICADA
1. Metodologia e Modelo de Desenvolvimento
O projeto emprega a metodologia SCRUM. Scrum é uma metodologia
ágil para gestão e planejamento de projetos de software.
"Não há o que não gostar no Scrum, porque é o que todos fazemos
quando trabalhamos sob pressão". (Comunidade de Desenvolvimento Ágil do
Brasil, Ken Schwaber, Kim Koplan, [200-?] década provável).
2 Técnicas de Levantamento de Requisitos
O projeto emprega a técnica Entrevista.
2.1 Entrevista
O que é?
A entrevista é uma das técnicas tradicionais de levantamento de
requisito.
Como funciona?
Convém que o entrevistador dê margem ao entrevistado para expor as
suas ideias. É necessário ter um plano de entrevista para que não haja
dispersão do assunto principal e a entrevista fique longa, deixando o
entrevistado cansado e não produzindo bons resultados.
“A atitude do analista em relação à entrevista é determinar seu fracasso
ou sucesso. Uma entrevista não é uma competição, deve-se evitar o uso
excessivo de termos técnicos e não conduzir a entrevista em uma tentativa de
persuasão.” (Moraes, 2009).
Entrevista: PÁGINA DE ANEXO NO FINAL DO DOCUMENTO.

Por que foi escolhida para este projeto?
Porque é simples de utilizar e produz bons resultados.

14

3. Tecnologias em Geral
Neste trabalho foram selecionados a linguagem de programação
JavaScript e o banco de dados MongoDB devido a produtividade e facilidade
que a linguagem e o banco de dados fornecem.
Essas tecnologias são descritas detalhadamente nas seções a seguir.

3.1. JavaScript
JavaScript é uma linguagem de programação interpretada, orientada a
objetos, multiplataforma. É uma linguagem pequena e leve. Pode ser aplicada
em um documento HTML e usada para criar interações dinâmicas em sites. Ela
foi inventada por Brendan Eich, co-fundador do projeto Mozilla, da Fundação
Mozilla e da Corporação Mozilla.
3.2 MongoDB
MongoDB é um banco de dados não relacional sendo disparado o mais
famoso NoSQL no mercado. O mesmo é open-source e escrito em C ++. Traz

um conceito de banco de dados orientado a documentos, ou seja, é auto-
descritivo, já se define como deve ser apresentado.

3.3 ReactJS
React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a
criação de interfaces de usuário (UI)”. Uma coleção de funcionalidades
relacionadas que podem ser chamadas pelo desenvolvedor para resolver
problemas específicos — a criação de interfaces de usuário reaproveitáveis, no
caso do React.
4. Motivação pelo uso da tecnologia escolhida
Produtividade e facilidade para o desenvolvimento das regras de
negócio, e por integrar um framework que tem um bom suporte e que é
baseado no padrão MVC.

15

5. Cronograma de Desenvolvimento
As fases do projeto devem estar de acordo com o modelo de
desenvolvimento selecionado na Seção 1.1 do Capítulo II.
Tabela 03 – Cronograma de Desenvolvimento do Projeto.
2017

FASES DO PROJETO Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez
Levantamento de
Requisitos X
Entrevista X
Modelagem
Banco de dados X
6. Justificativa
A criação desse projeto é necessária pois muitas empresas ainda não
possuem sistema de controle financeiro.
O fator motivador é a falta de produtividade e desorganização de
algumas empresas.

16

CAPÍTULO III

VISÃO DO SISTEMA
1. ESCOPO
O módulo ao qual este documento se refere tem como objetivo
automatizar o trabalho no setor gerencial de pontos comerciais e logísticos
onde ele estiver sendo utilizado. Dentre suas principais funcionalidades estão
incluídas a de geração de pedidos para o setor gerencial, manter/alterar peças
da loja e fornecer informações dos pontos de venda integrados a ele.
2. Problemas

Tabela 06 – Especificação do Problema.
O problema de Dificuldade em manter o controle financeiro da empresa
Afeta A empresa
Impacto Falência
Solução Um sistema que controla os débitos e os créditos da empresa
3. Necessidades dos Interessados

Tabela 07 – Necessidades dos Interessados.
Necessidade Prioridade Preocupações Solução
Atual
Soluções
Propostas

Permitir o acesso e
o gerenciamento
das informações.

Crítico

Manter as
informações
atualizadas.

N/A.

Ferramenta para
cadastramento e
gerenciamento
das informações.

4. Perspectiva do Produto
O sistema disponibiliza leitura dos pagamentos e descrição dos
mesmos, realiza cadastro, alteração e exclusão dos pagamentos.
5. Resumo das Capacidades do Produto

Tabela 08 – Resumo das Capacidades do Produto.
Benefícios para o Cliente Recursos do Sistema

17

Acesso simplificado às informações.
Maior agilidade nos processos operacionais;

Consultar, alterar e controlar os pagamentos.

6. Características do Sistema

Tabela 09 – Características do Projeto

No Característica
1 Controlar as finanças da empresa facilitando o processo de tomada de decisão.
2
3
7. Riscos do Projeto

Tabela 10 – Riscos do Projeto

No Descrição do Risco Classificação
1 Tempo
2 Cronograma
3 Perda do código fonte
8. Restrições do Projeto

Tabela 11 – Restrições do Projeto

No Descrição da Restrição Tipo
1 Apenas sistema Web Tecnológico
2 Compatibilidade Tecnológico

9. Regras do Negócio

Tabela 12 – Regras de Negócio.

Código Nome Descrição
RN001 Cadastro do usuário O usuário deve preencher os campos: nome, email e

senha.

RN002 Cadastro do usuário O campo nome deverá conter no máximo 30

caracteres.

RN003 Cadastro do usuário O campo nome deverá conter letras maiúsculas e

minúsculas.

18

RN004 Cadastro do usuário O campo nome deverá ser obrigatório.
RN005 Cadastro do usuário O campo email deverá conter letras e símbolos.
RN006 Cadastro do usuário O campo email deverá conter o símbolo @ como

validação.

RN007 Cadastro do usuário O campo email deverá conter no máximo 40

caracteres.

RN008 Cadastro do usuário O campo senha deverá conter letras maiúsculas e

minúsculas.

RN009 Cadastro do usuário O campo senha deverá conter pelo menos 1 caractere

especial.

RN010 Cadastro do usuário O campo senha deverá conter pelo menos 1 caractere

numérico.

RN011 Login do usuário O usuário deverá preencher o campo nome e senha

para logar no sistema.

RN012 Login do usuário O campo nome não deverá ter caracteres especiais.
RN013 Login do usuário O campo senha não deverá ter mais que 30

caracteres.

RN014 Mensagem de cadastro O sistema deverá mostrar a MSG03 ao cadastrar

usuário.

RN015 Mensagem de login O sistema deverá mostrar a MSG02 ao entrar no

sistema.

RN016 Mensagem de cadastro O sistema deverá mostrar a MSG01 ao cadastrar

errado um usuário.

RN017 Cadastro do pagamento O campo nome deverá ser obrigatório.
RN018 Cadastro do pagamento O campo nome deverá conter letras e opcionalmente

números.

RN019 Cadastro do pagamento O campo valor deve conter apenas números.
RN020 Cadastro do pagamento O campo valor deve ser obrigatório.
RN021 Cadastro do pagamento O campo mês deve conter apenas números.
RN022 Cadastro do pagamento O campo ano deve conter apenas números.
RN023 Cadastro do pagamento O campo ano deve ser obrigatório.
RN024 Cadastro do pagamento O campo mês deve conter apenas 2 caracteres.
RN025 Cadastro do pagamento O sistema deverá mostrar a MSG05 ao cadastrar

pagamento.

RN026 Cadastro do pagamento O sistema deverá mostrar a MSG08 ao cadastrar

19

errado um pagamento.

RN027 Cadastro de crédito O campo nome deve ser obrigatório.
RN028 Cadastro de crédito O campo ano deve ser obrigatório.
RN029 Cadastro de crédito O campo mês deve ser obrigatório.
RN030 Cadastro de crédito O campo valor deve ser obrigatório.
RN031 Cadastro de crédito O campo nome deve conter no máximo 30 caracteres.
RN032 Cadastro de crédito O campo ano deve conter apenas números.
RN033 Cadastro de crédito O campo mês deve conter apenas números.
RN034 Cadastro de crédito O campo mês deve conter apenas 2 caracteres.
RN035 Cadastro de débito O campo nome deve ser obrigatório.
RN036 Cadastro de débito O campo ano deve conter apenas números.
RN037 Cadastro de débito O campo mês deve conter apenas 2 caracteres.
RN038 Cadastro de débito O campo nome deve conter no máximo 30 caracteres.
RN039 Cadastro de débito O campo valor deve conter apenas números.
RN040 Cadastro de usuário O campo senha deve ser do tipo senha.
10. Requisitos Funcionais

Tabela 13 – Requisitos Funcionais.

Código Nome Descrição
RF001 Manter pagamento O caso de uso Manter pagamentos deverá

controlar os pagamentos feitos.

RF002 Manter crédito O caso de uso Manter crédito deverá controlar os

créditos.

RF003 Manter débito O caso de uso Manter débito deverá controlar os

débitos.

RF004 Manter usuário O caso de uso Manter usuário deverá manter o

usuário logado no sistema.

11. Requisitos Não Funcionais

Tabela 14 – Requisitos Não Funcionais.

Código Nome Descrição
RNF001 Usabilidade

O sistema deve apresentar uma interface de usuário
(UI) amigável, e uma experiência de usuário (UX)
intuitiva e de fácil utilização, garantindo uma boa

20

comunicação entre utilizador e sistema.

RNF002 Compatibilidade

O sistema deve apresentar navegadores e sistemas
operacionais compatíveis com o software, linguagem
de programação e banco de dados.

RNF003 Desempenho O sistema deve apresentar desempenho e tempo de

resposta.

12. Mensagens do Sistema

Tabela 15 – Mensagens do Sistema.

Código Descrição
MSG001 Usuário incorreto.
MSG002 Bem-Vindo.
MSG003 Dados cadastrados com sucesso.
MSG004 Dados incorretos.
MSG005 Pagamento realizado com sucesso.
MSG006 Pagamento excluído com sucesso.
MSG007 Pagamento atualizado com sucesso.
MSG008 Pagamento inválido.
MSG009 Nome do pagamento incorreto.
MSG010 Crédito cadastrado com sucesso.
MSG011 Crédito excluído com sucesso.
MSG012 Crédito atualizado com sucesso.
MSG013 Crédito inválido.
MSG014 Nome do crédito incorreto.
MSG015 Débito cadastrado com sucesso.
MSG016 Débito excluído com sucesso.
MSG017 Débito atualizado com sucesso.
MSG018 Débito inválido.
MSG019 Nome do débito incorreto.
13. Lista de Casos de Uso

Tabela 16 – Lista de Caso de Uso.
Código Nome Descrição
UC001 Manter pagamentos Este caso de uso tem como finalidade controlar os

21

pagamentos feitos.

UC002 Manter créditos Este caso de uso tem como finalidade controlar os

créditos.

UC003 Manter débitos Este caso de uso tem como finalidade controlar os

débitos.

UC003 Manter usuário Este caso de uso tem como finalidade controlar os

usuários.

14. Lista de Atores

Tabela 17 – Lista de Atores.
Código Nome Descrição
001 <Usuário>

O Usuário realizará o controle financeiro da
empresa.
15. Diagrama Geral de Caso de Uso

Figura 03 – Diagrama geral de Caso de Uso.

22

16. Diagrama de Classe

Figura 04 – Diagrama de Classe.

17. Diagrama de Processo

Figura 05 – Diagrama de Processo

23

CAPÍTULO IV
ESPECIFICAÇÃO DE CASO DE USO
UC001 – MANTER PAGAMENTOS
1. Descrição
Este caso de uso tem como finalidade a realização dos cadastros dos
pagamentos feitos pelo contador da empresa.
2. Pré-condições
• O usuário deve ter acesso as informações.
3. Fluxos
3.1 Fluxo Principal – Cadastrar pagamentos
FP01. O caso de uso se inicia quando o ator seleciona a opção Cadastro
na tela principal.
FP02. O ator preenche o campo nome, mês, ano, valor e status do
pagamento.
FP03. O ator seleciona a opção Adicionar para cadastrar o pagamento.
FP04. O caso de uso se encerra.
3.2 Fluxos Alternativos
FA3.2.1. Cadastrar Pagamentos.
FA3.2.1.1. O ator sai da tela de cadastro ao clicar em Dashboard.
FA3.2.1.2. O ator sai da tela de cadastro ao clicar em Ciclos de
pagamentos.
FA3.2.1.3. O ator cadastra pagamento ao clicar no botão Adicionar.

UC002 – MANTER CRÉDITOS
1. Descrição
Este caso de uso tem como finalidade manter os créditos feitos pela
empresa.
2. Pré-condições
• O usuário deve ter acesso as informações.
3. Fluxos

24

3.1 Fluxo Principal – Editar créditos
FP01. O caso de uso se inicia quando o ator seleciona a opção Editar
créditos na tela de consulta.
FP02. O ator preenche o campo nome, mês, ano, valor e status do
crédito.
FP03. O sistema apresenta a tela de consulta ao clicar em Cadastrar
crédito mostrando a edição realizada.
FP04. O caso de uso se encerra.
3.2 Fluxos Alternativos
FA3.2.1. Visualizar Parecer Técnico.
FA3.2.1.1. O ator solicita a opção Editar pagamento.
FA3.2.1.2. O sistema traz à tela da edição de determinado pagamento.

UC003 – MANTER DÉBITOS
1. Descrição
Este caso de uso tem como finalidade manter os débitos feitos pela
empresa.
2. Pré-condições
• O usuário deve ter acesso as informações.
3. Fluxos
3.1 Fluxo Principal – Consultar débitos
FP01. O sistema apresenta a tela com os débitos já feitos ao clicar em
Dashboard.
FP02. O sistema apresenta a tela de edição ao clicar em determinado
débito.
FP04. O sistema apresenta na tela uma lista com todos os débitos da
empresa.
FP05. O ator seleciona a opção Cadastro para ir a tela de cadastro.
FP06. O ator seleciona a opção Ciclos de pagamento para ir a outra tela
de consulta.

25

CAPÍTULO V

MODELAGEM DE DADOS
1. Diagrama de Entidade Relacional

Figura 06 – Diagrama de Entidade Relacional

3.1 Dicionário de Dados
3.1.1 Tabela [Pagamentos]

Campo Tipo/Tamanho Obrigatório Comentário
id INTEGER S Número de
identificação
valor INTEGER S Valor do
pagamento
status VARCHAR S PENDENTE/CONC

LUIDO
nome VARCHAR S Nome do
pagamento
mes INTEGER S Mês do pagamento
ano INTEGER S Ano do pagamento

RELACIONAMENTOS

26

Tabela Descrição

3.1.1 Tabela [Créditos]

Campo Tipo/Tamanho Obrigatório Comentário
id INTEGER S Número de
identificação
valor INTEGER S Valor do crédito
nome VARCHAR S Nome do crédito
mes INTEGER S Mês do crédito
ano INTEGER S Ano do crédito

RELACIONAMENTOS
Tabela Descrição

3.1.1 Tabela [Débitos]

Campo Tipo/Tamanho Obrigatório Comentário
id INTEGER S Número de
identificação
valor INTEGER S Valor do
pagamento
nome VARCHAR S Nome do débito
mes INTEGER S Mês do débito
ano INTEGER S Ano do débito

RELACIONAMENTOS
Tabela Descrição

27

CAPÍTULO VI

PROTOTIPAÇÃO DO SISTEMA
1 Consultar Pagamentos <Identificação de Tela>

Figura 07 – Tela do Sistema: Consultar pagamentos

2 Cadastrar pagamentos <Identificação de Tela>

28

Figura 08 – Tela do Sistema: Cadastrar pagamentos

3 Editar pagamentos <Identificação de Tela>

Figura 09 – Tela do Sistema: Editar pagamentos

29

1.1 Campos da Tela
Item Nome do Campo Tipo Tam Máscara Obrigatório Valor

Padrão Editável Domínio Visível
001 Nome Texto 30 S S nome S
002 Ano Numérico 4 S S ano S
003 Mes Numérico 2 S S mes S
004 Valor Numérico S S valor S
005 Status Texto 20 S S status S

1.2 Comandos da Tela
Item Comando Ação Restrições/Observações
01 Cadastrar Grava o pagamento no sistema Todos os campos obrigatórios devem ser preenchidos
02 Excluir Exclui o pagamento no sistema
03 Editar Edita o pagamento no sistema Todos os campos obrigatórios devem ser preenchidos

30

CONCLUSÃO

O Projeto foi feito para um possível sistema financeiro no mercado, esse
sistema adotou padrões de arquitetura e metodologia ágil, muitas empresas
hoje ainda não possuem um sistema capaz de controlar eficientemente as
finanças da empresa, e hoje em dia todos necessitam de um controle financeiro
mesmo que seja feito no papel. Esse sistema vem para facilitar a vida das
empresas e tem o propósito de melhorar a produtividade.

31

REFERÊNCIAS

Controle financeiro e planejamento: por que são importantes? (s.d.). Fonte: flua:

https://www.flua.com.br/blog/controle-financeiro-e-planejamento-por-que-sao-
importantes/

Controle financeiro: empresas auxiliam funcionários. (s.d.). Fonte: Educando seu bolso:

https://educandoseubolso.blog.br/2018/04/12/controle-financeiro-empresas-
auxiliam-funcionarios/

Introdução - JavaScript. (s.d.). Fonte: Developer Mozilla: https://developer.mozilla.org/pt-
BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico

Introdução ao MongoDB: Banco de Dados Orientado a Documentos. (s.d.). Fonte: DevMedia:
https://www.devmedia.com.br/introducao-ao-mongodb/30792

JavaScript básico - Aprendendo a Web. (s.d.). Fonte: https://developer.mozilla.org/pt-
BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico

O que é MongoDB e porque usá-lo? (s.d.). Fonte: Código Simples:
https://codigosimples.net/2016/03/01/o-que-e-mongodb-e-porque-usa-lo/

32
ANEXO ENTREVISTA <ANEXO DO DOCUMENTO DA TÉCNICA

DE LEVANTAMENTO DE REQUISITOS USADA>

Documento em anexo
