import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    regexp: false,
    unocss: false,
    react: true,
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
  },
)
