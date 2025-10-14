const {
    defineConfig,
    globalIgnores,
} = require('eslint/config');

const babelParser = require('@babel/eslint-parser');
const vue = require('eslint-plugin-vue');
const parser = require('vue-eslint-parser');
const js = require('@eslint/js');

const {
    FlatCompat,
} = require('@eslint/eslintrc');
const neostandard = require('neostandard');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    globalIgnores(['**/node_modules/']),
    ...neostandard(),
    {
        // extends: compat.extends("neostandard"),
        plugins: {},

        languageOptions: {
            parser: babelParser,
            ecmaVersion: 12,
            sourceType: 'module',

            parserOptions: {
                requireConfigFile: true,

                babelOptions: {
                    presets: ['@babel/preset-env'],
                },
            },
        },

        rules: {
            'comma-dangle': ['warn', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            }],
            'operator-linebreak': [1, 'before'],
            'eol-last': 1,
            'spaced-comment': 1,
            'no-new': 1,
            'no-multiple-empty-lines': [
                1,
                {
                    'max': 2,
                    'maxEOF': 0,
                    'maxBOF': 0
                }
            ],
            'space-before-function-paren': [1,
                {
                    'anonymous': 'always',
                    'named': 'never',
                    'asyncArrow': 'always'
                }
            ],
            'no-unneeded-ternary': 2,
            'indent': [1, 4, {'SwitchCase': 1}],
            'semi': [2, 'always', {'omitLastInOneLineBlock': true}],
            'quotes': [1, 'single', {'allowTemplateLiterals': true}],
            'object-curly-spacing': [1, 'never', {'objectsInObjects': true}],
            'quote-props': [1, 'consistent'],
            'dot-notation': 1,
            'lines-between-class-members': [1, 'always', {'exceptAfterSingleLine': true}],
            'prefer-const': [1, {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': false
            }],
        },
    }, {
        files: ['**/*.vue'],
        extends: compat.extends('plugin:vue/essential'),

        plugins: {
            vue,
        },

        languageOptions: {
            parser: parser,
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                babelOptions: {
                    presets: ['@babel/preset-env'],
                },
            },
        },

        rules: {
            'vue/no-reserved-component-names': 0,
            'vue/multi-word-component-names': 0,

            'vue/script-indent': ['warn', 4, {
                baseIndent: 0,
                switchCase: 1,
            }],

            'vue/html-indent': ['warn', 4, {
                attribute: 2,
            }],
        },
    }]);
