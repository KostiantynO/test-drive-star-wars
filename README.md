```shell
npx create-react-app test-drive-star-wars
npm i -D prettier eslint prop-types styled-components nanoid
npx mrm@2 lint-staged

npm i react-query
```

## `package.json`

```json
  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```
