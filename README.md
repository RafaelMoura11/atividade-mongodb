# 📚 Atividade MongoDB

Este projeto fullstack utiliza **MongoDB**, **Node.js (Express)** e **React (Bootstrap)** para realizar operações CRUD em um banco de dados de livros.

---

## 🧱 Estrutura do Projeto

atividade-mongodb/
├── backend/         # API Express + MongoDB
│   ├── controllers/ # Lógica das rotas
│   ├── models/      # Modelos do Mongoose
│   ├── routes/      # Rotas da API
│   ├── seed.js      # Popula o banco com livros iniciais
│   ├── app.js       # Inicialização do servidor
│   ├── Dockerfile   # Container do backend
│   └── .env         # Variáveis de ambiente locais
├── frontend/        # Aplicação React com Bootstrap
│   ├── src/
│   ├── Dockerfile   # Container do frontend
├── docker-compose.yml # Orquestra MongoDB + Backend + Frontend

---

## ⚙️ Tecnologias Utilizadas

- MongoDB (banco NoSQL)
- Express.js (Node.js)
- React.js (frontend)
- Bootstrap (estilização)
- Docker + Docker Compose

---

## 🧪 Funcionalidades

### 📁 Backend (API RESTful)

- Inserir novo livro
- Atualizar livro existente
- Deletar livro
- Listar todos os livros
- Buscar por:
  - Autor (parcial e sem case sensitive)
  - Gênero (parcial e sem case sensitive)
  - Ano de publicação
  - ISBN
- Listar os 10 livros com mais páginas
- Listar os 10 livros com menos páginas
- Banco já populado com 20 livros via seed.js

### 🎨 Frontend (React)

- Listagem de livros
- Filtro por autor, gênero, ano, ISBN
- Ações: Editar e Deletar com ícones
- Formulário em página separada para Adicionar/Editar livro
- Botão "Limpar filtros" para restaurar a listagem original
- Estilizado com Bootstrap

---

## 🚀 Executando o Projeto (Modo Docker)

### Pré-requisitos

- Docker
- Docker Compose

### Comando único:

docker-compose up --build

### Serviços disponíveis:

| Serviço     | Porta | URL                             |
|-------------|-------|----------------------------------|
| MongoDB     | 27017 | mongodb://localhost:27017       |
| Backend API | 3001  | http://localhost:3001/api/books |
| Frontend    | 3000  | http://localhost:3000           |

> O backend executa seed.js automaticamente ao subir, populando o banco com livros.

---

## 💻 Executando em ambiente local (sem Docker)

### 1. Banco de Dados

docker run -d -p 27017:27017   -e MONGO_INITDB_ROOT_USERNAME=admin   -e MONGO_INITDB_ROOT_PASSWORD=admin   --name mongo mongo

### 2. Backend

cd backend
npm install
npm run dev

Crie um arquivo .env com:

MONGO_URI=mongodb://admin:admin@localhost:27017/?authSource=admin
PORT=3001

### 3. Frontend

cd frontend
npm install
npm start

---

## 🧾 Estrutura do documento MongoDB (books)

{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "genero": "Romance",
  "paginas": 256,
  "sinopse": "Um homem relembra sua juventude e um amor marcado pelo ciúmes.",
  "isbn": "9781234567897"
}

---

## 📬 Rotas da API

| Método | Rota                         | Descrição                          |
|--------|------------------------------|------------------------------------|
| GET    | /api/books                   | Lista todos os livros              |
| GET    | /api/books/autor/:autor      | Lista livros por autor             |
| GET    | /api/books/genero/:genero    | Lista livros por gênero            |
| GET    | /api/books/ano/:ano          | Lista livros por ano               |
| GET    | /api/books/isbn/:isbn        | Busca livro pelo ISBN              |
| GET    | /api/books/mais-paginas      | Top 10 livros com mais páginas     |
| GET    | /api/books/menos-paginas     | Top 10 livros com menos páginas    |
| GET    | /api/books/:id               | Busca livro por ID                 |
| POST   | /api/books                   | Cria novo livro                    |
| PUT    | /api/books/:id               | Atualiza um livro                  |
| DELETE | /api/books/:id               | Remove um livro                    |

---

## ✅ Autores e créditos

Projeto desenvolvido por [Seu Nome], como parte da atividade prática de MongoDB, com foco em estruturação fullstack, Docker e integração de dados.