require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const books = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    genero: "Romance",
    paginas: 256,
    sinopse: "Um homem relembra sua juventude e um amor marcado pelo ciúmes.",
    isbn: "9781234567897"
  },
  {
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    ano: 1890,
    genero: "Naturalismo",
    paginas: 310,
    sinopse: "Um retrato da vida num cortiço carioca e suas tensões sociais.",
    isbn: "9781234567898"
  },
  {
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    ano: 1937,
    genero: "Romance",
    paginas: 280,
    sinopse: "Grupo de crianças abandonadas vive nas ruas de Salvador.",
    isbn: "9781234567899"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    genero: "Ficção Científica",
    paginas: 328,
    sinopse: "Uma distopia sobre um regime totalitário e vigilância extrema.",
    isbn: "9780451524935"
  },
  {
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    ano: 1932,
    genero: "Ficção Científica",
    paginas: 311,
    sinopse: "Uma sociedade futurista controlada por tecnologia e drogas.",
    isbn: "9780060850524"
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    genero: "Fábula",
    paginas: 96,
    sinopse: "Um piloto encontra um pequeno príncipe de outro planeta.",
    isbn: "9780156012195"
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    ano: 1997,
    genero: "Fantasia",
    paginas: 223,
    sinopse: "O início da jornada mágica de Harry Potter.",
    isbn: "9788532511010"
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia",
    paginas: 423,
    sinopse: "Frodo parte em uma missão para destruir o Um Anel.",
    isbn: "9780345339706"
  },
  {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    genero: "Fantasia",
    paginas: 310,
    sinopse: "A aventura de Bilbo Bolseiro antes do Senhor dos Anéis.",
    isbn: "9780547928227"
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
    genero: "Sátira",
    paginas: 112,
    sinopse: "Uma fábula sobre a revolução russa usando animais.",
    isbn: "9780451526342"
  },
  {
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    ano: 1881,
    genero: "Romance",
    paginas: 208,
    sinopse: "Um defunto narra sua vida com ironia e crítica social.",
    isbn: "9788594318661"
  },
  {
    titulo: "Ensaio sobre a Cegueira",
    autor: "José Saramago",
    ano: 1995,
    genero: "Ficção",
    paginas: 320,
    sinopse: "Uma epidemia de cegueira branca revela o caos humano.",
    isbn: "9788535921274"
  },
  {
    titulo: "Grande Sertão: Veredas",
    autor: "João Guimarães Rosa",
    ano: 1956,
    genero: "Romance",
    paginas: 624,
    sinopse: "Um sertanejo narra suas aventuras e dilemas existenciais.",
    isbn: "9788572326673"
  },
  {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    ano: 1938,
    genero: "Romance",
    paginas: 175,
    sinopse: "A vida sofrida de uma família de retirantes no sertão.",
    isbn: "9788535920451"
  },
  {
    titulo: "A Cabana",
    autor: "William P. Young",
    ano: 2007,
    genero: "Drama",
    paginas: 256,
    sinopse: "Um homem encontra Deus após uma tragédia pessoal.",
    isbn: "9788599296360"
  },
  {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    ano: 1988,
    genero: "Fábula",
    paginas: 190,
    sinopse: "Um jovem pastor parte em busca de um tesouro pessoal.",
    isbn: "9788575420293"
  },
  {
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    ano: 2003,
    genero: "Suspense",
    paginas: 480,
    sinopse: "Um simbologista desvenda um grande mistério religioso.",
    isbn: "9780307474278"
  },
  {
    titulo: "O Silmarillion",
    autor: "J.R.R. Tolkien",
    ano: 1977,
    genero: "Fantasia",
    paginas: 365,
    sinopse: "A mitologia por trás da Terra Média.",
    isbn: "9780345325815"
  },
  {
    titulo: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    ano: 1956,
    genero: "Fantasia",
    paginas: 768,
    sinopse: "Sete histórias clássicas de um mundo mágico.",
    isbn: "9780064471190"
  },
  {
    titulo: "A Menina que Roubava Livros",
    autor: "Markus Zusak",
    ano: 2005,
    genero: "Drama",
    paginas: 480,
    sinopse: "Uma garota encontra consolo nos livros durante a guerra.",
    isbn: "9780375842207"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado ao MongoDB. Inserindo dados...');
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('Seeding concluído!');
    process.exit();
  })
  .catch((error) => {
    console.error('Erro ao conectar ou inserir:', error);
    process.exit(1);
  });
