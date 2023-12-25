module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    // Global
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "quote-props": ["error", "as-needed"],
    // Vue
    "vue/multi-word-component-names": 0,
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": 0,
    //turn of single quote and semi colon
  },
};
