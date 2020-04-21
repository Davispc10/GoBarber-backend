<h1 align="center">
<img src="https://i.imgur.com/HXcHj30.png" alt="GoBarber" width="700">
</h1>

<h3 align="center"> 🚀 GoBarber: Sistema de agendamento de serviços de barbearia.</h3>

<blockquote align="center">Aplicação base desenvolvida durante o Bootcamp GoStack</blockquote>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas
Foram utilizadas a stack Javascript para o desenvolvimento do projeto:

- ⚛️ **React Js** — Biblioteca JavaScript para construção do frontend da aplicação web:
  - Uso do react hooks;
  - Requisições com o axios;
  - Redux / Redux Saga;
  - Styled Components.
- ⚛️ **React Native** — Biblioteca que provê uma maneira eficiente de criar aplicações nativas para Android e iOS:
  - Uso do expo;
  - Redux / Redux Saga.
- 💹 **Node Js** — Plataforma que permite utilizar javascript para criar aplicações do lado do servidor(backend):
  - Axios;
  - Framework express;
  - Banco de dados mongodb, postgres.

## Sobre:
<p>A aplicação trata-se de um sistema de gerenciamento de horários para barbearias, onde o provedor de serviços faz o seu cadastro 
na plataforma web e pode consultar a sua agenda para qualquer dia. Nessa consulta são mostrados todos os horários que estão disponíveis
para novos agendamentos ou horários que já estão ocupados.</p>
<p>No aplicativo mobile, o usuário realiza o seu cadastro e pode agendar um horário com o provedor de serviços de sua escolha, além de consultar e cancelar seus agendamentos existentes.</p>

<p>⚙ FrontEnd: <a href="https://github.com/Davispc10/gobarber-web">GoBarber - FrontEnd</a></p>
<p>📱 Mobile: <a href="https://github.com/Davispc10/gobarber-mobile">GoBarber - Mobile</a></p>

### Configuração - Backend
Configure o MongoDB e o PostgreSQL no projeto colocando os dados de acesso no arquivo .env onde ficam as variáveis ambiente:
```bash
# Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

# Mongo
MONGO_URL=
```
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), execute:
```bash
yarn install
yarn dev
```
Você terá acesso a api pelo url: `http://localhost:3334`.
### Configuração - Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` com a aplicação funcionando.

### Configuração - Mobile

Para ver a aplicação mobile com o React Native primeiro é necessário colocar o IP do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois executar os comandos:
```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado
yarn global add install expo-cli
yarn install
expo start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo **Expo** da Play Store ou App Store e em seguida escaneie o código QR.

## Projeto

Voce pode conferir o projeto web rodando no link:
https://vigorous-elion-c24ee3.netlify.app

E o app na loja GooglePlay com o nome **DaveBarber**:
https://play.google.com/store/apps/details?id=com.wymaze.gobarber&hl=en

## Imagens - Web
![web-home](https://i.imgur.com/87dZwHo.png)

![web-perfil](https://i.imgur.com/XQQTjIJ.png)

## GIF - Mobile
![mobile-gif](https://i.imgur.com/sOne4WM.gif)

## Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes
