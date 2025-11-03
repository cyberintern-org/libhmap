import esJS from '@eslint/js';
import esPrettier from 'eslint-config-prettier/flat';
import esImport from 'eslint-plugin-import';
import esConfig from 'eslint/config';

export default esConfig.defineConfig([
  esJS.configs.recommended,
  esImport.flatConfigs.recommended,
  esPrettier,
  {
    files: ['lib/**/*.js', 'src/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  },
]);
