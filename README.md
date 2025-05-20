# 🎬 Movie Catalog React CRUD

Um aplicativo web responsivo e dinâmico para catálogo de filmes desenvolvido com React. Este projeto permite aos usuários realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em um banco de dados de filmes através de uma interface limpa e moderna.

## 🔍 Sobre
Este projeto demonstra boas práticas de desenvolvimento em React, incluindo gerenciamento de estado, componentização, consumo de APIs e implementação de interfaces responsivas. Foi desenvolvido com foco em performance e experiência do usuário.

## 📦 Funcionalidades
- 📥 **Cadastro de filmes**: Interface intuitiva com validação de formulários
- 📋 **Listagem paginada**: Visualização com filtros e ordenação
- 🔍 **Busca avançada**: Pesquisa por título, gênero, ano e diretor
- ✏️ **Edição de informações**: Atualização de detalhes dos filmes
- 🗑️ **Exclusão com confirmação**: Remoção segura de itens do catálogo
- 🌓 **Modo escuro/claro**: Interface adaptável às preferências do usuário
- 📱 **Design responsivo**: Experiência otimizada em qualquer dispositivo

## 🛠️ Tecnologias Utilizadas

### Frontend
- ⚛️ **React 18**: Biblioteca principal para construção da interface
- 🔄 **React Query**: Gerenciamento de estado e cache para dados da API
- 🧭 **React Router 6**: Navegação entre páginas
- 🎨 **Styled Components**: Estilização com CSS-in-JS
- 📊 **React Hook Form**: Gerenciamento de formulários com validação

### Ferramentas de Desenvolvimento
- ⚡ **Vite**: Build tool para desenvolvimento rápido
- 📏 **ESLint**: Garantia de qualidade e consistência de código
- 🧪 **Jest & React Testing Library**: Testes automatizados

### Backend (Integração)
- 🌐 **Axios**: Cliente HTTP para requisições à API
- 🧩 **JSON Server**: Simulação de API RESTful para desenvolvimento local

## 🏗️ Arquitetura
O projeto segue uma arquitetura modular baseada em componentes, com separação clara de responsabilidades e fluxo de dados unidirecional.

```
src/
├── components/      # Componentes reutilizáveis
├── context/         # Contextos React e providers
├── hooks/           # Custom hooks
├── pages/           # Componentes de página
├── services/        # Serviços de API e integrações
└── App.jsx          # Componente raiz
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/fereziniNi/movie-catalog-react-crud.git
   cd movie-catalog-react-crud
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Inicie o servidor mock da API (opcional)**
   ```bash
   npm run api
   ```

## 🧠 Desafios e Soluções

### Performance com Grandes Listas
**Solução**: Implementação de virtualização com `react-window` e paginação para otimizar o carregamento de dados.

### UX em Dispositivos Móveis
**Solução**: Design mobile-first e adaptação inteligente de layouts.

## 🧪 Testes
O projeto utiliza Jest e React Testing Library para testes unitários e de integração, com cobertura de 85% dos componentes principais.

## 📬 Contato

Nicolas Ferezini - [LinkedIn](https://www.linkedin.com/in/nicolas-ferezini) - [GitHub](https://github.com/fereziniNi)

Link do Projeto: [https://github.com/fereziniNi/movie-catalog-react-crud](https://github.com/fereziniNi/movie-catalog-react-crud)
