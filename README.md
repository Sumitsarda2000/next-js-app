# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```

## 📦 NPM Commands Used

| Command            | Purpose                                                                 | Usage Context                                |
|--------------------|-------------------------------------------------------------------------|----------------------------------------------|
| `npm install`       | Installs all dependencies listed in `package.json`                      | Run once after cloning the project           |
| `npm run build`     | Compiles the Next.js app for production (`next build`)                  | Used to test the production build            |
| `npm run test`      | Runs unit tests using Jest (`jest`)                                     | Validates application functionality          |
| `npm run dev`       | Starts local development server (`next dev`) with hot reloading         | Use during active development (optional)     |
