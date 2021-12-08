# Projeto dev do meu site

Projeto do meu portfólio desenvolvido usando Next.js e Typescript.

## Projeto do site

- [x] init
- [x] Commit inicial
- [x] Infos básicas do README
- [x] Limpar os arquivos iniciais
- [x] Testando um componente genérico
- [] Estou usando o Typescript certo?

## refs

- https://www.evanlovely.com
- How to Use TypeScript with React Components: https://dmitripavlutin.com/typescript-react-components/
- React with TypeScript Cheatsheet: https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe#6111
- React TypeScript Cheatsheets: https://react-typescript-cheatsheet.netlify.app


## Acompanhamento



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



### Resolver

```
 lib was set to dom,dom.iterable,esnext
        - skipLibCheck was set to true
        - strict was set to false
        - forceConsistentCasingInFileNames was set to true
        - noEmit was set to true
        - incremental was set to true
        - include was set to ['next-env.d.ts', '**/*.ts', '**/*.tsx']
        - exclude was set to ['node_modules']
  The following mandatory changes were made to your tsconfig.json:
        - esModuleInterop was set to true (requirement for SWC / babel)
        - module was set to esnext (for dynamic import() support)
        - resolveJsonModule was set to true (to match webpack resolution)
        - isolatedModules was set to true (requirement for SWC / Babel)
        - jsx was set to preserve (next.js implements its own optimized jsx transform)
```

### Vou precisar?

**_documents**

```javascript
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```