# LangChain with Node.js and Express API

Uma API REST construída com Node.js, Express e TypeScript que integra o LangChain para criar agentes de IA inteligentes com ferramentas customizadas.

## Sobre o LangChain

O [LangChain](https://langchain.com/) é um framework para desenvolvimento de aplicações com Large Language Models (LLMs). Ele fornece componentes modulares para construir aplicações de IA, incluindo:

- **Agentes Inteligentes**: Sistemas que podem usar ferramentas e tomar decisões
- **Ferramentas Customizáveis**: Integração com APIs externas e funcionalidades específicas
- **Gerenciamento de Memória**: Persistência de conversas e contexto
- **Integração com OpenAI**: Suporte nativo para modelos GPT

## 🚀 Tecnologias Utilizadas

### Core

- **Node.js** v22.14.0+
- **TypeScript** 5.8.2
- **Express** 4.21.2 - Framework web para Node.js

### LangChain Ecosystem

- **@langchain/core** 0.3.43 - Componentes fundamentais
- **@langchain/langgraph** 0.2.61 - Criação de agentes reativos
- **@langchain/openai** 0.5.2 - Integração com OpenAI
- **langchain** 0.3.19 - Framework principal

### Desenvolvimento

- **tsx** 4.19.3 - Executor TypeScript para desenvolvimento
- **pnpm** 10.7.0 - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
src/
├── index.ts      # Servidor Express e rotas da API
├── agent.ts      # Configuração do agente LangChain
└── tools.ts      # Ferramentas customizadas do agente
```

## 🛠️ Padrões de Projeto

- **Arquitetura Modular**: Separação clara entre servidor, agente e ferramentas
- **TypeScript Strict Mode**: Configuração rigorosa para type safety
- **ES Modules**: Uso de imports/exports modernos
- **Error Handling**: Tratamento de erros assíncrono com express-async-errors
- **Environment Variables**: Configuração via dotenv

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js v22.14.0 ou superior
- pnpm 10.7.0 ou superior

### Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd langchain-node-api
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Configure as seguintes variáveis no arquivo `.env`:

```env
OPENAI_API_KEY=sua_chave_api_openai
NEWS_API_KEY=sua_chave_api_news
PORT=3000
```

4. **Execute o projeto**

```bash
# Desenvolvimento
pnpm dev

# Produção
pnpm build
pnpm start
```

## 🔌 Endpoints da API

### GET `/`

- **Descrição**: Endpoint de teste
- **Resposta**: "Hello World!"

### POST `/api/chat`

- **Descrição**: Chat com o agente LangChain
- **Body**: `{ "message": "sua mensagem" }`
- **Resposta**: Resposta do agente com base nas ferramentas disponíveis

## 🛠️ Ferramentas do Agente

O agente possui as seguintes ferramentas integradas:

- **SearchNews**: Busca notícias recentes via NewsAPI
- **TellMeJokes**: Conta piadas via JokeAPI

## 🚀 Executando o Projeto

```bash
# Desenvolvimento com hot-reload
pnpm dev

# O servidor estará disponível em http://localhost:3000
```

## 📝 Scripts Disponíveis

- `pnpm dev` - Executa o projeto em modo desenvolvimento
- `pnpm build` - Compila o projeto TypeScript
- `pnpm start` - Executa o projeto compilado

## 🔧 Configurações TypeScript

- **Target**: ES2022
- **Module**: CommonJS
- **Strict Mode**: Habilitado
- **OutDir**: `./dist`
- **Module Resolution**: Node.js

## 📚 Recursos Adicionais

- [Documentação LangChain](https://js.langchain.com/)
- [OpenAI API](https://platform.openai.com/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
