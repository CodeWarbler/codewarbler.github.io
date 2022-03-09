(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    // the default separators except `@$`\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: '<', close: '>' }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))'),\r\n            end: new RegExp('^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))')\r\n        }\r\n    }\r\n};\r\nvar keywords = [\r\n    'abstract',\r\n    'activate',\r\n    'and',\r\n    'any',\r\n    'array',\r\n    'as',\r\n    'asc',\r\n    'assert',\r\n    'autonomous',\r\n    'begin',\r\n    'bigdecimal',\r\n    'blob',\r\n    'boolean',\r\n    'break',\r\n    'bulk',\r\n    'by',\r\n    'case',\r\n    'cast',\r\n    'catch',\r\n    'char',\r\n    'class',\r\n    'collect',\r\n    'commit',\r\n    'const',\r\n    'continue',\r\n    'convertcurrency',\r\n    'decimal',\r\n    'default',\r\n    'delete',\r\n    'desc',\r\n    'do',\r\n    'double',\r\n    'else',\r\n    'end',\r\n    'enum',\r\n    'exception',\r\n    'exit',\r\n    'export',\r\n    'extends',\r\n    'false',\r\n    'final',\r\n    'finally',\r\n    'float',\r\n    'for',\r\n    'from',\r\n    'future',\r\n    'get',\r\n    'global',\r\n    'goto',\r\n    'group',\r\n    'having',\r\n    'hint',\r\n    'if',\r\n    'implements',\r\n    'import',\r\n    'in',\r\n    'inner',\r\n    'insert',\r\n    'instanceof',\r\n    'int',\r\n    'interface',\r\n    'into',\r\n    'join',\r\n    'last_90_days',\r\n    'last_month',\r\n    'last_n_days',\r\n    'last_week',\r\n    'like',\r\n    'limit',\r\n    'list',\r\n    'long',\r\n    'loop',\r\n    'map',\r\n    'merge',\r\n    'native',\r\n    'new',\r\n    'next_90_days',\r\n    'next_month',\r\n    'next_n_days',\r\n    'next_week',\r\n    'not',\r\n    'null',\r\n    'nulls',\r\n    'number',\r\n    'object',\r\n    'of',\r\n    'on',\r\n    'or',\r\n    'outer',\r\n    'override',\r\n    'package',\r\n    'parallel',\r\n    'pragma',\r\n    'private',\r\n    'protected',\r\n    'public',\r\n    'retrieve',\r\n    'return',\r\n    'returning',\r\n    'rollback',\r\n    'savepoint',\r\n    'search',\r\n    'select',\r\n    'set',\r\n    'short',\r\n    'sort',\r\n    'stat',\r\n    'static',\r\n    'strictfp',\r\n    'super',\r\n    'switch',\r\n    'synchronized',\r\n    'system',\r\n    'testmethod',\r\n    'then',\r\n    'this',\r\n    'this_month',\r\n    'this_week',\r\n    'throw',\r\n    'throws',\r\n    'today',\r\n    'tolabel',\r\n    'tomorrow',\r\n    'transaction',\r\n    'transient',\r\n    'trigger',\r\n    'true',\r\n    'try',\r\n    'type',\r\n    'undelete',\r\n    'update',\r\n    'upsert',\r\n    'using',\r\n    'virtual',\r\n    'void',\r\n    'volatile',\r\n    'webservice',\r\n    'when',\r\n    'where',\r\n    'while',\r\n    'yesterday'\r\n];\r\n// create case variations of the keywords - apex is case insensitive, but we can't make the highlighter case insensitive\r\n// because we use a heuristic to assume that identifiers starting with an upper case letter are types.\r\nvar uppercaseFirstLetter = function (lowercase) {\r\n    return lowercase.charAt(0).toUpperCase() + lowercase.substr(1);\r\n};\r\nvar keywordsWithCaseVariations = [];\r\nkeywords.forEach(function (lowercase) {\r\n    keywordsWithCaseVariations.push(lowercase);\r\n    keywordsWithCaseVariations.push(lowercase.toUpperCase());\r\n    keywordsWithCaseVariations.push(uppercaseFirstLetter(lowercase));\r\n});\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.apex',\r\n    keywords: keywordsWithCaseVariations,\r\n    operators: [\r\n        '=',\r\n        '>',\r\n        '<',\r\n        '!',\r\n        '~',\r\n        '?',\r\n        ':',\r\n        '==',\r\n        '<=',\r\n        '>=',\r\n        '!=',\r\n        '&&',\r\n        '||',\r\n        '++',\r\n        '--',\r\n        '+',\r\n        '-',\r\n        '*',\r\n        '/',\r\n        '&',\r\n        '|',\r\n        '^',\r\n        '%',\r\n        '<<',\r\n        '>>',\r\n        '>>>',\r\n        '+=',\r\n        '-=',\r\n        '*=',\r\n        '/=',\r\n        '&=',\r\n        '|=',\r\n        '^=',\r\n        '%=',\r\n        '<<=',\r\n        '>>=',\r\n        '>>>='\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    digits: /\\d+(_+\\d+)*/,\r\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\r\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\r\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-z_$][\\w$]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // assume that identifiers starting with an uppercase letter are types\r\n            [\r\n                /[A-Z][\\w\\$]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'type.identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [\r\n                /@symbols/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // @ annotations.\r\n            [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, 'annotation'],\r\n            // numbers\r\n            [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, 'number.float'],\r\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, 'number.float'],\r\n            [/(@digits)[fFdD]/, 'number.float'],\r\n            [/(@digits)[lL]?/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, 'string', '@string.\"'],\r\n            [/'/, 'string', \"@string.'\"],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\r\n            [/'/, 'string.invalid']\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@apexdoc'],\r\n            [/\\/\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ],\r\n        comment: [\r\n            [/[^\\/*]+/, 'comment'],\r\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\r\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\r\n            [/\\*\\//, 'comment', '@pop'],\r\n            [/[\\/*]/, 'comment']\r\n        ],\r\n        //Identical copy of comment above, except for the addition of .doc\r\n        apexdoc: [\r\n            [/[^\\/*]+/, 'comment.doc'],\r\n            [/\\*\\//, 'comment.doc', '@pop'],\r\n            [/[\\/*]/, 'comment.doc']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"']+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [\r\n                /[\"']/,\r\n                {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js?");

/***/ })

}]);