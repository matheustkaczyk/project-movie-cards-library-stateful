Projeto desenvolvido durante o curso de desenvolvimento de software na Trybe. O objetivo desse projeto foi exercitar os conhecimentos iniciais prévios obtidos sobre React e prática o uso do estado nas aplicações e a passagem dos mesmos por props.

Data de entrega: 06/07/2021

# Habilidades

  - Ler o estado de um componente e usá-lo para alterar o que exibimos no browser
  - Inicializar um componente, dando a ele um estado pré-definido
  - Atualizar o estado de um componente
  - Capturar eventos utilizando a sintaxe do React
  - Criar formulários utilizando sintaxe JSX com as tags : `input`, `textarea`, `select`, `form`
  - Transmitir informações de componentes filhos para componentes pais via callbacks

# Lista de requisitos

### 1 - Crie um componente chamado `<SearchBar />`

Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente `<MovieList />` dependerá dos filtros escolhidos. `<SearchBar />` deve receber como props:

  - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback

### 2 - Renderize um formulário dentro de `<SearchBar />`

Dentro desse formulário haverá campos usados na filtragem de cartões.

### 3 - Renderize um input do tipo texto dentro do formulário em `<SearchBar />`

### 4 - Renderize um input do tipo checkbox dentro do formulário em `<SearchBar />`

### 5 - Renderize um select dentro do formulário em `<SearchBar />`

### 6 - Crie um componente chamado `<AddMovie />`

Esse componente renderizará um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:

  - subtítulo
  - título
  - caminho da imagem
  - sinopse
  - avaliação
  - gênero

O componente `<AddMovie />` possui como estado as seguintes propriedades:

  - `subtitle`: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
  - `title`: guarda o título preenchido no formulário por quem usa a aplicação;
  - `imagePath`: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
  - `storyline`: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
  - `rating`: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
  - `genre`: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.


### 7 - Renderize um formulário dentro de `<AddMovie />`

Dentro desse formulário haverá campos usados para preencher informações do novo cartão a ser adicionado na biblioteca.

### 8 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme

### 9 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o subtítulo do novo filme

### 10 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o caminho da imagem do novo filme

### 11 - Renderize uma `textarea` dentro do formulário em `<AddMovie />` para obter a sinopse do novo filme

### 12 - Renderize um `input` do tipo `number` dentro do formulário em `<AddMovie />` para obter a avaliação do novo filme

### 13 - Renderize um `select` do formulário em `<AddMovie />` para selecionar o gênero do novo filme

### 14 - Renderize um botão do formulário em `<AddMovie />` para fazer uso dos dados do novo filme, contidos no estado de `<AddMovie />`

### 15 - Crie um componente chamado `<MovieLibrary />`

Esse componente renderizará a biblioteca de filmes que renderizará a `searchBar` e o `addMovies` para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

### 16 - Configure o estado inicial do componente `MovieLibray`

O componente `<MovieLibrary />` possui como estado as seguintes propriedades:

  - `searchText`: guarda o texto de busca por filmes;
  - `bookmarkedOnly`: um _boolean_ que guarda se é para filtrar por filmes favoritados ou não;
  - `selectedGenre`: guarda o gênero do filme selecionado para poder fazer a filtragem;
  - `movies`: guarda a lista de filmes.

### 17 - Renderize `<SearchBar />` dentro de `<MovieLibrary />`

### 18 - Renderize `<MovieList />` dentro de `<MovieLibrary />`

### 19 - Renderize `<AddMovie />` dentro de `<MovieLibrary />`

### 20 - Adicione proptypes a todos os componentes
Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas.
