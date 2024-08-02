# Projeto de Heróis

Este é um projeto de visualização e comparação de heróis desenvolvido utilizando Next.js, React e Tailwind CSS. O projeto permite aos usuários pesquisar heróis, visualizar suas estatísticas e comparar dois heróis para determinar o vencedor com base em suas habilidades.

## Índice

- [Instalação](#instalação)
- [Dependências](#dependências)
- [Funcionalidades](#funcionalidades)


## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   git clone https://github.com/vinefps/desafio-frontend-vinicius.git
   
2. Navegue até o diretório do projeto
   cd desafio-frontend-vinicius

3. Instale as dependências:
   npm install
4. Rode o projeto em modo de desenvolvimento:
   npm run dev

# Dependências
# Dependências de Produção
react: ^18
react-dom: ^18
next: 14.2.5

# Dependências de Desenvolvimento
typescript: ^5
@types/node: ^20
@types/react: ^18
@types/react-dom: ^18
postcss: ^8
tailwindcss: ^3.4.1
eslint: ^8
eslint-config-next: 14.2.5

# ESTRUTURA:

Components:
HeroList: Exibe a lista de heróis filtrados com base no termo de pesquisa.
HeroModal: Mostra os detalhes do herói vencedor em um modal.
HeroSearch: Campo de busca para filtrar heróis.

Types:
HeroType: Define a estrutura do objeto herói.

Utilidades:
fetchHeroes: Função para buscar heróis da API.

Páginas
Home: Página principal que integra os componentes e gerencia o estado.

# Funcionalidades
Pesquisar Heróis: Digite no campo de busca para filtrar heróis pelo nome.
Visualizar Heróis: Clique em um herói na lista para visualizá-lo.
Comparar Heróis: Selecione dois heróis para compará-los e determinar o vencedor.
