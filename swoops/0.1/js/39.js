(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    // the default separators except `@$`\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['{', '}']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')'],\r\n        ['<', '>']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*\\\\{\\\\$REGION(\\\\s\\\\'.*\\\\')?\\\\}\"),\r\n            end: new RegExp('^\\\\s*\\\\{\\\\$ENDREGION\\\\}')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.pascal',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '<', close: '>', token: 'delimiter.angle' }\r\n    ],\r\n    keywords: [\r\n        'absolute',\r\n        'abstract',\r\n        'all',\r\n        'and_then',\r\n        'array',\r\n        'as',\r\n        'asm',\r\n        'attribute',\r\n        'begin',\r\n        'bindable',\r\n        'case',\r\n        'class',\r\n        'const',\r\n        'contains',\r\n        'default',\r\n        'div',\r\n        'else',\r\n        'end',\r\n        'except',\r\n        'exports',\r\n        'external',\r\n        'far',\r\n        'file',\r\n        'finalization',\r\n        'finally',\r\n        'forward',\r\n        'generic',\r\n        'goto',\r\n        'if',\r\n        'implements',\r\n        'import',\r\n        'in',\r\n        'index',\r\n        'inherited',\r\n        'initialization',\r\n        'interrupt',\r\n        'is',\r\n        'label',\r\n        'library',\r\n        'mod',\r\n        'module',\r\n        'name',\r\n        'near',\r\n        'not',\r\n        'object',\r\n        'of',\r\n        'on',\r\n        'only',\r\n        'operator',\r\n        'or_else',\r\n        'otherwise',\r\n        'override',\r\n        'package',\r\n        'packed',\r\n        'pow',\r\n        'private',\r\n        'program',\r\n        'protected',\r\n        'public',\r\n        'published',\r\n        'interface',\r\n        'implementation',\r\n        'qualified',\r\n        'read',\r\n        'record',\r\n        'resident',\r\n        'requires',\r\n        'resourcestring',\r\n        'restricted',\r\n        'segment',\r\n        'set',\r\n        'shl',\r\n        'shr',\r\n        'specialize',\r\n        'stored',\r\n        'then',\r\n        'threadvar',\r\n        'to',\r\n        'try',\r\n        'type',\r\n        'unit',\r\n        'uses',\r\n        'var',\r\n        'view',\r\n        'virtual',\r\n        'dynamic',\r\n        'overload',\r\n        'reintroduce',\r\n        'with',\r\n        'write',\r\n        'xor',\r\n        'true',\r\n        'false',\r\n        'procedure',\r\n        'function',\r\n        'constructor',\r\n        'destructor',\r\n        'property',\r\n        'break',\r\n        'continue',\r\n        'exit',\r\n        'abort',\r\n        'while',\r\n        'do',\r\n        'for',\r\n        'raise',\r\n        'repeat',\r\n        'until'\r\n    ],\r\n    typeKeywords: [\r\n        'boolean',\r\n        'double',\r\n        'byte',\r\n        'integer',\r\n        'shortint',\r\n        'char',\r\n        'longint',\r\n        'float',\r\n        'string'\r\n    ],\r\n    operators: [\r\n        '=',\r\n        '>',\r\n        '<',\r\n        '<=',\r\n        '>=',\r\n        '<>',\r\n        ':',\r\n        ':=',\r\n        'and',\r\n        'or',\r\n        '+',\r\n        '-',\r\n        '*',\r\n        '/',\r\n        '@',\r\n        '&',\r\n        '^',\r\n        '%'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><:@\\^&|+\\-*\\/\\^%]+/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-zA-Z_][\\w]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [\r\n                /@symbols/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\$[0-9a-fA-F]{1,16}/, 'number.hex'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/'/, 'string', '@string'],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/'/, 'string.invalid'],\r\n            [/\\#\\d+/, 'string']\r\n        ],\r\n        comment: [\r\n            [/[^\\*\\}]+/, 'comment'],\r\n            //[/\\(\\*/,    'comment', '@push' ],    // nested comment  not allowed :-(\r\n            [/\\}/, 'comment', '@pop'],\r\n            [/[\\{]/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\']+/, 'string'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, 'white'],\r\n            [/\\{/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js?");

/***/ })

}]);