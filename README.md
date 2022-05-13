# Boas vindas ao repositório Cashforce Code Challenge!
## Contexto

Este projeto foi um Teste Técnico recebido através de um convite por e-mail da empresa [Cashforce](https://cashforce.com.br/).

O desafio consiste em escrever uma <b>aplicação web Fullstack</b>, contendo uma API Node conectada a um [banco de dados relacional](https://gist.githubusercontent.com/Allan96/a3538e88600559587155a01b0330124e/raw/c7ad85e464dca320fbf54b5e84fb1dd79a888511/teste.sql) previamente disponibilizado pela empresa. Após concluída a estruturação do Back-End seria necessário consumir a API no Front-End com Vue.js e exibir os dados retornados pela mesma.

---

## Escolhas do projeto e bibliotecas utilizadas no desenvolvimento:

Para estruturação do Back-End fiz uso do Node.js com Express e cors para a API, utilizando http-status-codes para um retorno mais legível para as rotas criadas. Para criação do banco de dados e suas tabelas e relações, foi utilizado o Sequelize e MySQL como Imagem Docker. <br>
Já no Front-End, utilizei o framework Nuxt.js para criar um ambiente de desenvolvimento Vue.js mais amigável para este meu primeiro contato. Fiz uso de alguns módulos adicionais como o @nuxtjs/axios e @nuxtjs/tailwindcss, para consumo de API e estilização respectivamente. <br>
Para definição de variáveis de ambiente e maior versatilidade na instalação e execução do projeto, o módulo dotenv não pôde ficar de fora!

* [Node.js](https://nodejs.org/en/about/)<br>
* [Express](https://www.npmjs.com/package/express)<br>
* [cors](https://www.npmjs.com/package/cors)<br>
* [http-status-codes](https://www.npmjs.com/package/http-status-codes)<br>
* [sequelize](https://www.npmjs.com/package/sequelize)<br>
* [MySQL](https://www.npmjs.com/package/mysql2)<br>
* [Docker](https://docs.docker.com/get-docker/)<br>
* [Nuxt.js](https://nuxtjs.org/docs/get-started/installation)<br>
* [dotenv](https://www.npmjs.com/package/dotenv)<br>

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para executar o que está sendo orientado, caso enfrente qualquer dificuldade e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@hotmail.com_!

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
```javascript
  mkdir ptSouthier-code-challenge
```

<br>

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd ptSouthier-code-challenge
  git clone git@github.com:ptSouthier/Cashforce-Code-Challenge.git
```

<br>

3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app)_. 
```javascript
  cd Cashforce-Code-Challenge
  npm install
```

<br>

4. Agora, com as dependências do projeto já instaladas, atente-se aqui à alguns detalhes **IMPORTANTES**:
  * Caso você já possua em sua máquina uma [Imagem Docker MySQL](https://hub.docker.com/_/mysql) em execução, será necessário criar na raíz do projeto um arquivo _.env_ para configurarmos as variáveis de ambiente de acordo com seus dados de acesso. <br>
  * Caso **NÃO** possua a Imagem MySQL, não tem problema algum, apenas avance para a próxima etapa sem preocupação! <br>

Copie o conteúdo abaixo e cole no arquivo _.env_ criado, substituindo os _//comentários_ por suas credenciais de acesso ao MySQL.
```javascript
  API_PORT= //variável não relacionada ao MySQL, não lidaremos com ela agora.
  MYSQL_USERNAME= //insira logo após o sinal de igual(=) o USERNAME da sua Imagem MySQL(caso não saiba, ou o valor seja 'root', podemos deixar este valor em branco)!
  MYSQL_PASSWORD= //insira logo após o sinal de igual(=) o PASSWORD da sua Imagem MySQL!
  DATABASE_PORT= //insira logo após o sinal de igual(=) a PORT da sua Imagem MySQL(por padrão, a PORT é 3306)!
```

<br>

_Se você já possui uma Imagem Docker MySQL e configurou o arquivo _.env_ como orientado acima, pule a próxima etapa._ <br>

5. Para criarmos uma [Imagem Docker MySQL](https://hub.docker.com/_/mysql) e podermos estruturar um Banco de Dados do zero, existe um arquivo na raíz do projeto que nos auxiliará e fará isso por nós! O arquivo é o _docker-compose.yml_ e para executá-lo, rode o comando a seguir em seu terminal e aguarde até o fim da instalação!
```javascript
  docker-compose up -d //A flag -d fará com que o container criado para o projeto rode em background, sem manter seu terminal "preso" à execução.
```

<br>

6. Agora que estamos com o Banco de Dados MySQL configurado e em execução, vamos criar suas tabelas com os devidos relacionamentos e já populá-las para podermos consultar seu conteúdo em alguns instantes! Rode o comando a seguir e aguarde sua finalização.
```javascript
  npm run build:db
```

<br>

7. Nesta etapa subiremos nosso servidor Back-End com nossa API na rota _**localhost:3001**(é possível alterar a PORT 3001 caso enfrente algum problema, basta voltar ao passo 4 deste guia e alterar o valor da variável de ambiente API_PORT no arquivo _.env_ para alguma PORT que não esteja em uso)_! <br>
Após a execução do comando, o terminal utilizado ficará rodando nossa API, não interrompa sua execução, execute outro terminal para seguir para o próximo passo.
```javascript
  npm run server //Se aparecer em seu terminal a mensagem: "Server is running on PORT: 3001!" significa que nossa API está funcionando!
```

<br>

8. Enfim, vamos colocar a aplicação Nuxt.js para rodar para que possamos acessá-la e visualizar nossos dados recebidos da API! Após a execução do comando, aguarde o Nuxt te comunicar pelo terminal que está tudo funcionando e acesse em seu navegador a rota _localhost:3000_ ;)
```javascript
  npm run dev
```

<br>

9. Ao fim, para **REVERTER** os passos anteriores e **encerrar** todas as execuções que iniciamos, vamos começar interrompendo a execução da aplicação Nuxt e depois nosso servidor API, para desocuparmos ambos os terminais.
 * No terminal em que o Nuxt.js está em execução, aperte as teclas _CTRL + C_. Depois aperte as mesmas teclas no terminal do Servidor API.

<br>

10. Para desfazermos nossas tabelas do Banco de Dados, vamos rodar o seguinte comando:
```javascript
  npm run undo:db
```

<br>

11. Por fim, para que não tenhamos mais nenhuma execução relacionada ao projeto em nossa máquina, execute os seguintes comandos Docker em seu terminal, um por vez:
```javascript
  docker-compose rm -s -v //A flag -s irá parar a execução do nosso container para fazer a remoção, enquanto a flag -v irá remover junto qualquer volume criado em conjunto do nosso container!
  
  docker image ls //Este comando listará todas as imagens Docker em execução, identifique a Imagem MySQL que criamos e copie seu IMAGE ID!
  
  docker image rm ID //Substitua o ID pelo IMAGE ID copiado anteriormente e pronto!
```

<br>


---


## Futuras Melhorias / Problemas Conhecidos

* Estilização responsiva da aplicação.
* Correção do estilo da tabela que exibe os dados da API para maior fidelidade à referência do Figma.
* Adicionar nova página para exibir Dados do Cedente, redirecionando o usuário ao clicar no botão Dados do Cedente.
* Novas endpoints à API para possibilitar redirecionamentos através de botões na barra de navegação do componente SideBar.

---
