🃏 Yu-Gi-Oh! - FPR Soluções
📋 Sobre o Projeto
Aplicação front-end para e-commerce de cartas Yu-Gi-Oh!, desenvolvida como teste técnico para vaga de Front-end.

🚀 Tecnologias
React 18 + Vite - Framework e build tool

React Router DOM - Navegação entre páginas

Context API + useReducer - Gerenciamento de estado global

CSS Vanilla - Estilização customizada

LocalStorage - Persistência de dados

API REST - Integração com YGOPRODeck

🏗️ Arquitetura

src/
├── components/ # Componentes reutilizáveis
├── contexts/ # Gerenciamento de estado (carrinho)
├── pages/ # Páginas (Home, Carrinho)
├── services/ # Integração com API
├── styles/ # Estilos globais
└── utils/ # Funções auxiliares

⚡ Funcionalidades
✅ Listagem de cartas com paginação

✅ Carrinho com badge e persistência

✅ Filtros (atributo, tipo) e busca

✅ Modais de confirmação/aviso

✅ Banner rotativo automático

✅ Layout responsivo (mobile, tablet, desktop)

Layout: O mais fiel possível ao Figma fornecido

🚀 Como Executar
bash

# Instalar dependências

npm install

# Executar em desenvolvimento

npm run dev

# Build para produção

npm run build
📦 API Utilizada
YGOPRODeck API: https://db.ygoprodeck.com/api/v7/cardinfo.php

Recursos: Listagem, filtros, paginação, busca

🔧 Principais Hook's
useCart() - Gerenciamento do carrinho

useApi() - Requisições à API

useLocalStorage() - Persistência de dados
