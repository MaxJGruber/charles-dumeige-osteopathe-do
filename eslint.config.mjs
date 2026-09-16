import coreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...coreWebVitals,
  {
    rules: { "react/no-unescaped-entities": 0 },
  },
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
];

export default eslintConfig;
