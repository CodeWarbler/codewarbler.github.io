(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: 'COMMENT'\r\n        // blockComment: ['COMMENT', '.'],\r\n    },\r\n    brackets: [['(', ')']],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: ':', close: '.' }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '`', close: '`' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: ':', close: '.' }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*(::\\\\s*|COMMENT\\\\s+)#region'),\r\n            end: new RegExp('^\\\\s*(::\\\\s*|COMMENT\\\\s+)#endregion')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    // Set defaultToken to invalid to see what you do not tokenize yet\r\n    // defaultToken: 'invalid',\r\n    tokenPostfix: '.lexon',\r\n    ignoreCase: true,\r\n    keywords: [\r\n        'lexon',\r\n        'lex',\r\n        'clause',\r\n        'terms',\r\n        'contracts',\r\n        'may',\r\n        'pay',\r\n        'pays',\r\n        'appoints',\r\n        'into',\r\n        'to'\r\n    ],\r\n    typeKeywords: ['amount', 'person', 'key', 'time', 'date', 'asset', 'text'],\r\n    operators: [\r\n        'less',\r\n        'greater',\r\n        'equal',\r\n        'le',\r\n        'gt',\r\n        'or',\r\n        'and',\r\n        'add',\r\n        'added',\r\n        'subtract',\r\n        'subtracted',\r\n        'multiply',\r\n        'multiplied',\r\n        'times',\r\n        'divide',\r\n        'divided',\r\n        'is',\r\n        'be',\r\n        'certified'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // comment\r\n            [/^(\\s*)(comment:?(?:\\s.*|))$/, ['', 'comment']],\r\n            // special identifier cases\r\n            [\r\n                /\"/,\r\n                {\r\n                    token: 'identifier.quote',\r\n                    bracket: '@open',\r\n                    next: '@quoted_identifier'\r\n                }\r\n            ],\r\n            [\r\n                'LEX$',\r\n                {\r\n                    token: 'keyword',\r\n                    bracket: '@open',\r\n                    next: '@identifier_until_period'\r\n                }\r\n            ],\r\n            ['LEXON', { token: 'keyword', bracket: '@open', next: '@semver' }],\r\n            [\r\n                ':',\r\n                {\r\n                    token: 'delimiter',\r\n                    bracket: '@open',\r\n                    next: '@identifier_until_period'\r\n                }\r\n            ],\r\n            // identifiers and keywords\r\n            [\r\n                /[a-z_$][\\w$]*/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'operator',\r\n                        '@typeKeywords': 'keyword.type',\r\n                        '@keywords': 'keyword',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [/@symbols/, 'delimiter'],\r\n            // numbers\r\n            [/\\d*\\.\\d*\\.\\d*/, 'number.semver'],\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter']\r\n        ],\r\n        quoted_identifier: [\r\n            [/[^\\\\\"]+/, 'identifier'],\r\n            [/\"/, { token: 'identifier.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        space_identifier_until_period: [\r\n            [':', 'delimiter'],\r\n            [' ', { token: 'white', next: '@identifier_rest' }]\r\n        ],\r\n        identifier_until_period: [\r\n            { include: '@whitespace' },\r\n            [':', { token: 'delimiter', next: '@identifier_rest' }],\r\n            [/[^\\\\.]+/, 'identifier'],\r\n            [/\\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        identifier_rest: [\r\n            [/[^\\\\.]+/, 'identifier'],\r\n            [/\\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        semver: [\r\n            { include: '@whitespace' },\r\n            [':', 'delimiter'],\r\n            [/\\d*\\.\\d*\\.\\d*/, { token: 'number.semver', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        whitespace: [[/[ \\t\\r\\n]+/, 'white']]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js?");

/***/ })

}]);