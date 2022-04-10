This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using GraphQL

To use GraphQL in this project, add the schema in `graphql` directory with the file `<filename>.graphql`.

Later run the following command
```shell
yarn gql
```
This command will generate all the types associated with the query and will output a react hook, which can be used to interact with the server. 