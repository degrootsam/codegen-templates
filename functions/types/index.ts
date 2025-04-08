import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "{{ graphqlURL }}": {
        headers: {
          Authorization: "Bearer {{ accessToken }}",
        },
      },
    },
  ],
  generates: {
    "generated/graphql.ts": {
      plugins: ["typescript", "typescript-document-nodes"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
