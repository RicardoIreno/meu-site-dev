# Projeto do site

- [x] init
- [x] Commit inicial
- [x] Infos básicas do README
- [x] Limpar os arquivos iniciais
- [x] Testando um componente genérico
- [] 

# Projeto dev do meu site

## Estou usando:
- Next.js
- Typescript

Adicionei como dependencia de desenvolvimento:
- typescript @types/react @types/node

*Segundo o Felipe, é bom adicionar o `@types/node` porque usamos coisas do node no Next.*

Adicionei o babel-plugin-styled-components (como -D), e um arquivo `.babelrc`:

  {
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
  }

Serve para melhorar a nomeação das classes e facilitar na hroa de depurar.


### Caminho absoluto nos imports

No `tsconfig.json` use o `baseUrl` no `compilerOptions`