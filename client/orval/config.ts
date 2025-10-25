const config = {
  schemas: {
    input: {
      target: '../api-spec/tsp-output/schema/openapi.yaml',
    },
    output: {
      mode: 'tags-split',
      client: 'react-query',
      httpClient: 'fetch',
      schemas: '../apis/model',
      clean: true,
      target: '../apis',
      override: {
        mutator: {
          path: './custom-fetch.ts',
          name: 'customFetch',
        },
        formData: {
          path: './custom-form-data.ts',
          name: 'customFormData',
        },
        useDates: true,
      },
    },
    hooks: {
      afterAllFilesWrite: "prettier --write './apis/**/*.{ts,tsx}'",
    },
  },
};

export default config;
