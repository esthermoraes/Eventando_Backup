# TRABALHO DE PI:  Eventando
 Trabalho desenvolvido durante a disciplina de Projeto Integrador do Técnico de Informática para Internet Integrado ao Ensino Médio

## Sumário

### 1. COMPONENTES<br>
Integrantes do grupo:<br>
Esther Moraes Nascimento - esther.ifes2021@gmail.com<br>
Lorena Toraes dos Santos - lorenatoraesdossantos@gmail.com<br>
Sofia Andrade Nascimento - andradesoso17@gmail.com

### 2. MINIMUNDO<br>
Descrever o mini-mundo! (Não deve ser maior do que 30 linhas, se necessário resumir para justar)
Entrevista com o usuário e identificação dos requisitos.(quando for o caso de sistemas com cliente real)
Descrição textual das regras de negócio definidas como um subconjunto do mundo real cujos elementos são propriedades que desejamos incluir, processar, armazenar, gerenciar, atualizar, e que descrevem a proposta/solução a ser desenvolvida.
<br>

> O sistema proposto para a "Devcom Projetos conterá as informacões aqui detalhadas. Dos Projetos serão armazenados o número, nome e cidade. Dos Departamentos serão armazenados o número e nome. O cliente destacou que cada projeto pode ter vários departamentos auxiliando no seu desenvolvimento, e cada departamento pode estar envolvido em vários projetos. Os dados relativos aos empregados que serão armazenados são: rg, nome, cpf, salário, data inicial do salario e supervisor de cada empregado. É importante destacar que cada empregado pode ser supervisionado por outro empregado, e obrigatoriamente deve estar alocado a um único departamento, mas pode gerenciar vários departamentos ou não gerenciar nenhum. Um empregado também pode participar de vários projetos, caso seja necessário, mas não precisa obrigatoriamente estar alocado em algum projeto. Com relação aos dependentes serão armazenadas as informações de nome do dependente, data de nascimento, sexo e grau de parentesco. Cada empregado pode ter vários dependentes, mas um dependente esta associado apenas a um único empregado. Com relação ao histórico de salário devemos armazenar as informações de valor do salário, data de início do salário no período e data final do salário no período. É importante lembrar que cada funcionario pode ter diversos eventos de histórico de salário associados a ele visto que este dado pode ser alterado várias vezes..
 
### 3. PMC<br>
![PMC](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_PMC.png?raw=true "PMC")

#### 3.1. EAP - ESTRUTURA ANALÍTICA DO PROJETO<br>
a) ![EAP](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_EAP.png?raw=true "Estrutura Analítica do Projeto")
b.1) ![Dicionário EAP](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_dicionarioEAP1.png?raw=true "Dicionário EAP 1")
b.2) ![Dicionário EAP](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_dicionarioEAP2.png?raw=true "Dicionário EAP 2") 

#### 3.2. REQUISITOS FUNCIONAIS E NÃO FUNCIONAIS<br>
a) ![RF](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_requisitosFuncionais.png?raw=true "Requisitos Funcionais")
b) ![RNF](https://github.com/esthermoraes/EVENTANDO/blob/main/Desenvolvimento%20do%20sistema/img_requisitosNaoFuncionais.png?raw=true "Requisitos Não Funcionais")

#### 3.3. VALIDAÇÃO DA IDEIA<br>
a) *Link do formulário desenvolvido:* <br> https://forms.gle/N2CqQ6gud3GgbyrM7 <br>
b) *Link para a apresentação dos resultados obtidos:* <br> https://docs.google.com/presentation/d/1XUWC29nwCR0yTu5YozbTAOvrGHfRM9QFxhOgyI0ivOI/edit?usp=sharing

### 4. PERSONAS E HISTÓRIAS DO USUÁRIO<br>
<img src="https://neilpatel.com/wp-content/uploads/2019/07/exemplo-carlos.png" Personas src="https://neilpatel.com/wp-content/uploads/2019/07/exemplo-carlos.png" width="500" height="500" /> <br>
a) inclusão dos Persons desenvolvidos pelo grupo<br>
<br>
<img src="https://miro.medium.com/max/1400/1*r5GVnOvqpMdxnGUYNRXqbg.png" UserStory src="https://miro.medium.com/max/1400/1*r5GVnOvqpMdxnGUYNRXqbg.png" width="500" height="300" /> <br>
b) inclusão das Histórias de usuário desenvolvidas pelo grupo

### 5. PROTÓTIPOS DO SISTEMA<br>
Neste ponto a codificação não e necessária, somente as ideias de telas devem ser desenvolvidas. O princípio aqui é pensar na criação da interface para identificar possíveis informações a serem armazenadas e/ou descartadas <br>

Sugestão: https://balsamiq.com/products/mockups/<br>

![Alt text](https://github.com/discproint/template_projeto_integrador/blob/main/arquivos/balsamiq.png?raw=true "Title")
![Arquivo PDF do Protótipo Balsamiq feito para Empresa Devcom](https://github.com/discproint/template_projeto_integrador/blob/main/arquivos/EmpresaDevcom.pdf?raw=true "Empresa Devcom")

#### 5.1. PROTÓTIPO DO SISTEMA MOBILE<br>

#### 5.2. PROTÓTIPO DO SISTEMA WEB<br>

#### 5.3. QUAIS PERGUNTAS PODEM SER RESPONDIDAS COM OS SISTEMA WEB/MOBILE PROPOSTOS?<br>
    a) O sistema proposto poderá fornecer quais tipos de relatórios e informaçes? 
    b) Crie uma lista com os 5 principais relatórios que poderão ser obtidos por meio do sistema proposto!
    
> A Empresa DevCom precisa inicialmente dos seguintes relatórios:
* Relatório que informe quais são os gerentes de cada departamento incluindo as seguintes informações: número do departamento,  nome do departamento, e nome do gerente.
* Relatório de empregados por projeto incluindo as seguintes informações: número do projeto, nome do projeto, rg do empregado, nome do empregado e quantidade de horas de trabalho do empregado alocadas ao projeto.
* Relatório de empregados com dependentes incluindo as seguintes informações: rg do empregado, nome do empregado, nome do dependente, tipo de relação, data de nascimento do dependente e sexo do dependente.
* Relatório com a quantidade de empregados por cada departamento incluindo as seguintes informações: nome do departamento, supervisor e quantidade de empregados alocados no departamento.
* Relatório de supervisores e supervisionados incluindo as seguintes informações: nome do supervisor e nome do supervisionado.
 
 ### 6. MODELO CONCEITUAL<br>
![MC](https://github.com/esthermoraes/Eventando/blob/main/Modelagem%20de%20dados/img_modeloConceitual.png?raw=true "Modelo Conceitual")
      
### 7. DESCRIÇÃO DOS DADOS<br>
    [objeto]: [descrição do objeto]
    
    EXEMPLO:
    CLIENTE: Tabela que armazena as informações relativas ao cliente<br>
    CPF: campo que armazena o número de Cadastro de Pessoa Física para cada cliente da empresa.

### 8.	RASTREABILIDADE DOS ARTEFATOS<br>
        a) Historia de usuários vs protótipo (Histórias de Usuário e em qual tela do protótipo aquela HU está sendo realizada).
        b) Protótipo vs Modelo conceitual (Histórias de Usuário e em quais tabelas aquele dado está sendo registrado).
        (modelos devem obrigatoriamente estar em conformidade de rastreabilidade)

### 9.	MODELO LÓGICO<br>
![ML](https://github.com/esthermoraes/Eventando/blob/main/Modelagem%20de%20dados/img_modeloLogico.png?raw=true "Modelo Lógico")

### 10.	MODELO FÍSICO<br>
        a) inclusão das instruções de criacão das estruturas em SQL/DDL 
        (criação de tabelas, alterações, etc..) 
        
       
### 11.	INSERT APLICADO NAS TABELAS DO BANCO DE DADOS<br>
        a) inclusão das instruções de inserção dos dados nas tabelas criadas pelo script de modelo físico
        (Drop para exclusão de tabelas + create definição de para tabelas e estruturas de dados 
 <br> + insert para dados a serem inseridos)
        b) Criar um novo banco de dados para testar a restauracao 
        (em caso de falha na restauração o grupo não pontuará neste quesito)
        c) formato .SQL

#### 12. PRINCIPAIS CONSULTAS DO SISTEMA<br> 
 Inserir as principais consultas (relativas aos 5 principais relatórios) definidas previamente no iten 3.1 deste template.
 <br>
  a) Você deve apresentar as consultas em formato SQL para cad um dos relatórios.
 <br>
  b) Além da consulta deve ser apresentada uma imagem com o resultado obtido para cada consulta.

 ### 13. GRÁFICOS, RELATÓRIOS, INTEGRAÇÃO COM LINGUAGEM DE PROGRAMAÇÃO E OUTRAS SOLICITAÇÕES<br>
     OBS: Observe as instruções relacionadas a cada uma das atividades abaixo.<br>
 #### 13.1.	INTEGRAÇÃO COM LINGUAGEM DE PROGRAMAÇÃO<br>
 #### 13.2.	DESENVOLVIMENTO DE GRÁFICOS/RELATÓRIOS PERTINENTES, JUNTAMENTE COM DEMAIS<br>
 #### 13.3. OUTRAS SOLICITAÇÕES FEITAS PELO PROFESSOR
 
 ### 14. SLIDES E APRESENTAÇÃO EM VÍDEO<br>
     OBS: Observe as instruções relacionadas a cada uma das atividades abaixo.<br>
 #### 14.1. SLIDES<br>
 #### 14.2. APRESENTAÇÃO EM VÍDEO

<br>
<br>

##### About Formatting
    https://help.github.com/articles/about-writing-and-formatting-on-github/
    
##### Basic Formatting in Git
    
    https://help.github.com/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests
   
    
##### Working with advanced formatting
    https://help.github.com/articles/working-with-advanced-formatting/

#### Mastering Markdown
    https://guides.github.com/features/mastering-markdown/

### OBSERVAÇÕES IMPORTANTES

#### Todos os arquivos que fazem parte do projeto (Imagens, pdfs, arquivos fonte, etc..), devem estar presentes no GIT. Os arquivos do projeto vigente não devem ser armazenados em quaisquer outras plataformas.
1. Caso existam arquivos com conteúdos sigilosos, comunicar o professor que definirá em conjunto com o grupo a melhor forma de armazenamento do arquivo.

#### Todos os grupos deverão fazer Fork deste repositório e dar permissões administrativas ao usuário deste GIT, para acompanhamento do trabalho.

#### Os usuários criados no GIT devem possuir o nome de identificação do aluno (não serão aceitos nomes como Eu123, meuprojeto, pro456, etc). Em caso de dúvida comunicar o professor.


Link para BrModelo:<br>
http://sis4.com/brModelo/brModelo/download.html
<br>


Link para curso de GIT<br>
![https://www.youtube.com/curso_git](https://www.youtube.com/playlist?list=PLo7sFyCeiGUdIyEmHdfbuD2eR4XPDqnN2?raw=true "Title")
