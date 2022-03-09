(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')'],\r\n        ['<', '>']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\r\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\r\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\r\n        { open: '(', close: ')', notIn: ['string', 'comment'] }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.sol',\r\n    brackets: [\r\n        { token: 'delimiter.curly', open: '{', close: '}' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\r\n        { token: 'delimiter.square', open: '[', close: ']' },\r\n        { token: 'delimiter.angle', open: '<', close: '>' }\r\n    ],\r\n    keywords: [\r\n        // Main keywords\r\n        'pragma',\r\n        'solidity',\r\n        'contract',\r\n        'library',\r\n        'using',\r\n        'struct',\r\n        'function',\r\n        'modifier',\r\n        'constructor',\r\n        //Built-in types\r\n        'address',\r\n        'string',\r\n        'bool',\r\n        //Other types\r\n        'Int',\r\n        'Uint',\r\n        'Byte',\r\n        'Fixed',\r\n        'Ufixed',\r\n        //All int\r\n        'int',\r\n        'int8',\r\n        'int16',\r\n        'int24',\r\n        'int32',\r\n        'int40',\r\n        'int48',\r\n        'int56',\r\n        'int64',\r\n        'int72',\r\n        'int80',\r\n        'int88',\r\n        'int96',\r\n        'int104',\r\n        'int112',\r\n        'int120',\r\n        'int128',\r\n        'int136',\r\n        'int144',\r\n        'int152',\r\n        'int160',\r\n        'int168',\r\n        'int176',\r\n        'int184',\r\n        'int192',\r\n        'int200',\r\n        'int208',\r\n        'int216',\r\n        'int224',\r\n        'int232',\r\n        'int240',\r\n        'int248',\r\n        'int256',\r\n        //All uint\r\n        'uint',\r\n        'uint8',\r\n        'uint16',\r\n        'uint24',\r\n        'uint32',\r\n        'uint40',\r\n        'uint48',\r\n        'uint56',\r\n        'uint64',\r\n        'uint72',\r\n        'uint80',\r\n        'uint88',\r\n        'uint96',\r\n        'uint104',\r\n        'uint112',\r\n        'uint120',\r\n        'uint128',\r\n        'uint136',\r\n        'uint144',\r\n        'uint152',\r\n        'uint160',\r\n        'uint168',\r\n        'uint176',\r\n        'uint184',\r\n        'uint192',\r\n        'uint200',\r\n        'uint208',\r\n        'uint216',\r\n        'uint224',\r\n        'uint232',\r\n        'uint240',\r\n        'uint248',\r\n        'uint256',\r\n        //All Byte\r\n        'byte',\r\n        'bytes',\r\n        'bytes1',\r\n        'bytes2',\r\n        'bytes3',\r\n        'bytes4',\r\n        'bytes5',\r\n        'bytes6',\r\n        'bytes7',\r\n        'bytes8',\r\n        'bytes9',\r\n        'bytes10',\r\n        'bytes11',\r\n        'bytes12',\r\n        'bytes13',\r\n        'bytes14',\r\n        'bytes15',\r\n        'bytes16',\r\n        'bytes17',\r\n        'bytes18',\r\n        'bytes19',\r\n        'bytes20',\r\n        'bytes21',\r\n        'bytes22',\r\n        'bytes23',\r\n        'bytes24',\r\n        'bytes25',\r\n        'bytes26',\r\n        'bytes27',\r\n        'bytes28',\r\n        'bytes29',\r\n        'bytes30',\r\n        'bytes31',\r\n        'bytes32',\r\n        //All fixed\r\n        'fixed',\r\n        'fixed0x8',\r\n        'fixed0x16',\r\n        'fixed0x24',\r\n        'fixed0x32',\r\n        'fixed0x40',\r\n        'fixed0x48',\r\n        'fixed0x56',\r\n        'fixed0x64',\r\n        'fixed0x72',\r\n        'fixed0x80',\r\n        'fixed0x88',\r\n        'fixed0x96',\r\n        'fixed0x104',\r\n        'fixed0x112',\r\n        'fixed0x120',\r\n        'fixed0x128',\r\n        'fixed0x136',\r\n        'fixed0x144',\r\n        'fixed0x152',\r\n        'fixed0x160',\r\n        'fixed0x168',\r\n        'fixed0x176',\r\n        'fixed0x184',\r\n        'fixed0x192',\r\n        'fixed0x200',\r\n        'fixed0x208',\r\n        'fixed0x216',\r\n        'fixed0x224',\r\n        'fixed0x232',\r\n        'fixed0x240',\r\n        'fixed0x248',\r\n        'fixed0x256',\r\n        'fixed8x8',\r\n        'fixed8x16',\r\n        'fixed8x24',\r\n        'fixed8x32',\r\n        'fixed8x40',\r\n        'fixed8x48',\r\n        'fixed8x56',\r\n        'fixed8x64',\r\n        'fixed8x72',\r\n        'fixed8x80',\r\n        'fixed8x88',\r\n        'fixed8x96',\r\n        'fixed8x104',\r\n        'fixed8x112',\r\n        'fixed8x120',\r\n        'fixed8x128',\r\n        'fixed8x136',\r\n        'fixed8x144',\r\n        'fixed8x152',\r\n        'fixed8x160',\r\n        'fixed8x168',\r\n        'fixed8x176',\r\n        'fixed8x184',\r\n        'fixed8x192',\r\n        'fixed8x200',\r\n        'fixed8x208',\r\n        'fixed8x216',\r\n        'fixed8x224',\r\n        'fixed8x232',\r\n        'fixed8x240',\r\n        'fixed8x248',\r\n        'fixed16x8',\r\n        'fixed16x16',\r\n        'fixed16x24',\r\n        'fixed16x32',\r\n        'fixed16x40',\r\n        'fixed16x48',\r\n        'fixed16x56',\r\n        'fixed16x64',\r\n        'fixed16x72',\r\n        'fixed16x80',\r\n        'fixed16x88',\r\n        'fixed16x96',\r\n        'fixed16x104',\r\n        'fixed16x112',\r\n        'fixed16x120',\r\n        'fixed16x128',\r\n        'fixed16x136',\r\n        'fixed16x144',\r\n        'fixed16x152',\r\n        'fixed16x160',\r\n        'fixed16x168',\r\n        'fixed16x176',\r\n        'fixed16x184',\r\n        'fixed16x192',\r\n        'fixed16x200',\r\n        'fixed16x208',\r\n        'fixed16x216',\r\n        'fixed16x224',\r\n        'fixed16x232',\r\n        'fixed16x240',\r\n        'fixed24x8',\r\n        'fixed24x16',\r\n        'fixed24x24',\r\n        'fixed24x32',\r\n        'fixed24x40',\r\n        'fixed24x48',\r\n        'fixed24x56',\r\n        'fixed24x64',\r\n        'fixed24x72',\r\n        'fixed24x80',\r\n        'fixed24x88',\r\n        'fixed24x96',\r\n        'fixed24x104',\r\n        'fixed24x112',\r\n        'fixed24x120',\r\n        'fixed24x128',\r\n        'fixed24x136',\r\n        'fixed24x144',\r\n        'fixed24x152',\r\n        'fixed24x160',\r\n        'fixed24x168',\r\n        'fixed24x176',\r\n        'fixed24x184',\r\n        'fixed24x192',\r\n        'fixed24x200',\r\n        'fixed24x208',\r\n        'fixed24x216',\r\n        'fixed24x224',\r\n        'fixed24x232',\r\n        'fixed32x8',\r\n        'fixed32x16',\r\n        'fixed32x24',\r\n        'fixed32x32',\r\n        'fixed32x40',\r\n        'fixed32x48',\r\n        'fixed32x56',\r\n        'fixed32x64',\r\n        'fixed32x72',\r\n        'fixed32x80',\r\n        'fixed32x88',\r\n        'fixed32x96',\r\n        'fixed32x104',\r\n        'fixed32x112',\r\n        'fixed32x120',\r\n        'fixed32x128',\r\n        'fixed32x136',\r\n        'fixed32x144',\r\n        'fixed32x152',\r\n        'fixed32x160',\r\n        'fixed32x168',\r\n        'fixed32x176',\r\n        'fixed32x184',\r\n        'fixed32x192',\r\n        'fixed32x200',\r\n        'fixed32x208',\r\n        'fixed32x216',\r\n        'fixed32x224',\r\n        'fixed40x8',\r\n        'fixed40x16',\r\n        'fixed40x24',\r\n        'fixed40x32',\r\n        'fixed40x40',\r\n        'fixed40x48',\r\n        'fixed40x56',\r\n        'fixed40x64',\r\n        'fixed40x72',\r\n        'fixed40x80',\r\n        'fixed40x88',\r\n        'fixed40x96',\r\n        'fixed40x104',\r\n        'fixed40x112',\r\n        'fixed40x120',\r\n        'fixed40x128',\r\n        'fixed40x136',\r\n        'fixed40x144',\r\n        'fixed40x152',\r\n        'fixed40x160',\r\n        'fixed40x168',\r\n        'fixed40x176',\r\n        'fixed40x184',\r\n        'fixed40x192',\r\n        'fixed40x200',\r\n        'fixed40x208',\r\n        'fixed40x216',\r\n        'fixed48x8',\r\n        'fixed48x16',\r\n        'fixed48x24',\r\n        'fixed48x32',\r\n        'fixed48x40',\r\n        'fixed48x48',\r\n        'fixed48x56',\r\n        'fixed48x64',\r\n        'fixed48x72',\r\n        'fixed48x80',\r\n        'fixed48x88',\r\n        'fixed48x96',\r\n        'fixed48x104',\r\n        'fixed48x112',\r\n        'fixed48x120',\r\n        'fixed48x128',\r\n        'fixed48x136',\r\n        'fixed48x144',\r\n        'fixed48x152',\r\n        'fixed48x160',\r\n        'fixed48x168',\r\n        'fixed48x176',\r\n        'fixed48x184',\r\n        'fixed48x192',\r\n        'fixed48x200',\r\n        'fixed48x208',\r\n        'fixed56x8',\r\n        'fixed56x16',\r\n        'fixed56x24',\r\n        'fixed56x32',\r\n        'fixed56x40',\r\n        'fixed56x48',\r\n        'fixed56x56',\r\n        'fixed56x64',\r\n        'fixed56x72',\r\n        'fixed56x80',\r\n        'fixed56x88',\r\n        'fixed56x96',\r\n        'fixed56x104',\r\n        'fixed56x112',\r\n        'fixed56x120',\r\n        'fixed56x128',\r\n        'fixed56x136',\r\n        'fixed56x144',\r\n        'fixed56x152',\r\n        'fixed56x160',\r\n        'fixed56x168',\r\n        'fixed56x176',\r\n        'fixed56x184',\r\n        'fixed56x192',\r\n        'fixed56x200',\r\n        'fixed64x8',\r\n        'fixed64x16',\r\n        'fixed64x24',\r\n        'fixed64x32',\r\n        'fixed64x40',\r\n        'fixed64x48',\r\n        'fixed64x56',\r\n        'fixed64x64',\r\n        'fixed64x72',\r\n        'fixed64x80',\r\n        'fixed64x88',\r\n        'fixed64x96',\r\n        'fixed64x104',\r\n        'fixed64x112',\r\n        'fixed64x120',\r\n        'fixed64x128',\r\n        'fixed64x136',\r\n        'fixed64x144',\r\n        'fixed64x152',\r\n        'fixed64x160',\r\n        'fixed64x168',\r\n        'fixed64x176',\r\n        'fixed64x184',\r\n        'fixed64x192',\r\n        'fixed72x8',\r\n        'fixed72x16',\r\n        'fixed72x24',\r\n        'fixed72x32',\r\n        'fixed72x40',\r\n        'fixed72x48',\r\n        'fixed72x56',\r\n        'fixed72x64',\r\n        'fixed72x72',\r\n        'fixed72x80',\r\n        'fixed72x88',\r\n        'fixed72x96',\r\n        'fixed72x104',\r\n        'fixed72x112',\r\n        'fixed72x120',\r\n        'fixed72x128',\r\n        'fixed72x136',\r\n        'fixed72x144',\r\n        'fixed72x152',\r\n        'fixed72x160',\r\n        'fixed72x168',\r\n        'fixed72x176',\r\n        'fixed72x184',\r\n        'fixed80x8',\r\n        'fixed80x16',\r\n        'fixed80x24',\r\n        'fixed80x32',\r\n        'fixed80x40',\r\n        'fixed80x48',\r\n        'fixed80x56',\r\n        'fixed80x64',\r\n        'fixed80x72',\r\n        'fixed80x80',\r\n        'fixed80x88',\r\n        'fixed80x96',\r\n        'fixed80x104',\r\n        'fixed80x112',\r\n        'fixed80x120',\r\n        'fixed80x128',\r\n        'fixed80x136',\r\n        'fixed80x144',\r\n        'fixed80x152',\r\n        'fixed80x160',\r\n        'fixed80x168',\r\n        'fixed80x176',\r\n        'fixed88x8',\r\n        'fixed88x16',\r\n        'fixed88x24',\r\n        'fixed88x32',\r\n        'fixed88x40',\r\n        'fixed88x48',\r\n        'fixed88x56',\r\n        'fixed88x64',\r\n        'fixed88x72',\r\n        'fixed88x80',\r\n        'fixed88x88',\r\n        'fixed88x96',\r\n        'fixed88x104',\r\n        'fixed88x112',\r\n        'fixed88x120',\r\n        'fixed88x128',\r\n        'fixed88x136',\r\n        'fixed88x144',\r\n        'fixed88x152',\r\n        'fixed88x160',\r\n        'fixed88x168',\r\n        'fixed96x8',\r\n        'fixed96x16',\r\n        'fixed96x24',\r\n        'fixed96x32',\r\n        'fixed96x40',\r\n        'fixed96x48',\r\n        'fixed96x56',\r\n        'fixed96x64',\r\n        'fixed96x72',\r\n        'fixed96x80',\r\n        'fixed96x88',\r\n        'fixed96x96',\r\n        'fixed96x104',\r\n        'fixed96x112',\r\n        'fixed96x120',\r\n        'fixed96x128',\r\n        'fixed96x136',\r\n        'fixed96x144',\r\n        'fixed96x152',\r\n        'fixed96x160',\r\n        'fixed104x8',\r\n        'fixed104x16',\r\n        'fixed104x24',\r\n        'fixed104x32',\r\n        'fixed104x40',\r\n        'fixed104x48',\r\n        'fixed104x56',\r\n        'fixed104x64',\r\n        'fixed104x72',\r\n        'fixed104x80',\r\n        'fixed104x88',\r\n        'fixed104x96',\r\n        'fixed104x104',\r\n        'fixed104x112',\r\n        'fixed104x120',\r\n        'fixed104x128',\r\n        'fixed104x136',\r\n        'fixed104x144',\r\n        'fixed104x152',\r\n        'fixed112x8',\r\n        'fixed112x16',\r\n        'fixed112x24',\r\n        'fixed112x32',\r\n        'fixed112x40',\r\n        'fixed112x48',\r\n        'fixed112x56',\r\n        'fixed112x64',\r\n        'fixed112x72',\r\n        'fixed112x80',\r\n        'fixed112x88',\r\n        'fixed112x96',\r\n        'fixed112x104',\r\n        'fixed112x112',\r\n        'fixed112x120',\r\n        'fixed112x128',\r\n        'fixed112x136',\r\n        'fixed112x144',\r\n        'fixed120x8',\r\n        'fixed120x16',\r\n        'fixed120x24',\r\n        'fixed120x32',\r\n        'fixed120x40',\r\n        'fixed120x48',\r\n        'fixed120x56',\r\n        'fixed120x64',\r\n        'fixed120x72',\r\n        'fixed120x80',\r\n        'fixed120x88',\r\n        'fixed120x96',\r\n        'fixed120x104',\r\n        'fixed120x112',\r\n        'fixed120x120',\r\n        'fixed120x128',\r\n        'fixed120x136',\r\n        'fixed128x8',\r\n        'fixed128x16',\r\n        'fixed128x24',\r\n        'fixed128x32',\r\n        'fixed128x40',\r\n        'fixed128x48',\r\n        'fixed128x56',\r\n        'fixed128x64',\r\n        'fixed128x72',\r\n        'fixed128x80',\r\n        'fixed128x88',\r\n        'fixed128x96',\r\n        'fixed128x104',\r\n        'fixed128x112',\r\n        'fixed128x120',\r\n        'fixed128x128',\r\n        'fixed136x8',\r\n        'fixed136x16',\r\n        'fixed136x24',\r\n        'fixed136x32',\r\n        'fixed136x40',\r\n        'fixed136x48',\r\n        'fixed136x56',\r\n        'fixed136x64',\r\n        'fixed136x72',\r\n        'fixed136x80',\r\n        'fixed136x88',\r\n        'fixed136x96',\r\n        'fixed136x104',\r\n        'fixed136x112',\r\n        'fixed136x120',\r\n        'fixed144x8',\r\n        'fixed144x16',\r\n        'fixed144x24',\r\n        'fixed144x32',\r\n        'fixed144x40',\r\n        'fixed144x48',\r\n        'fixed144x56',\r\n        'fixed144x64',\r\n        'fixed144x72',\r\n        'fixed144x80',\r\n        'fixed144x88',\r\n        'fixed144x96',\r\n        'fixed144x104',\r\n        'fixed144x112',\r\n        'fixed152x8',\r\n        'fixed152x16',\r\n        'fixed152x24',\r\n        'fixed152x32',\r\n        'fixed152x40',\r\n        'fixed152x48',\r\n        'fixed152x56',\r\n        'fixed152x64',\r\n        'fixed152x72',\r\n        'fixed152x80',\r\n        'fixed152x88',\r\n        'fixed152x96',\r\n        'fixed152x104',\r\n        'fixed160x8',\r\n        'fixed160x16',\r\n        'fixed160x24',\r\n        'fixed160x32',\r\n        'fixed160x40',\r\n        'fixed160x48',\r\n        'fixed160x56',\r\n        'fixed160x64',\r\n        'fixed160x72',\r\n        'fixed160x80',\r\n        'fixed160x88',\r\n        'fixed160x96',\r\n        'fixed168x8',\r\n        'fixed168x16',\r\n        'fixed168x24',\r\n        'fixed168x32',\r\n        'fixed168x40',\r\n        'fixed168x48',\r\n        'fixed168x56',\r\n        'fixed168x64',\r\n        'fixed168x72',\r\n        'fixed168x80',\r\n        'fixed168x88',\r\n        'fixed176x8',\r\n        'fixed176x16',\r\n        'fixed176x24',\r\n        'fixed176x32',\r\n        'fixed176x40',\r\n        'fixed176x48',\r\n        'fixed176x56',\r\n        'fixed176x64',\r\n        'fixed176x72',\r\n        'fixed176x80',\r\n        'fixed184x8',\r\n        'fixed184x16',\r\n        'fixed184x24',\r\n        'fixed184x32',\r\n        'fixed184x40',\r\n        'fixed184x48',\r\n        'fixed184x56',\r\n        'fixed184x64',\r\n        'fixed184x72',\r\n        'fixed192x8',\r\n        'fixed192x16',\r\n        'fixed192x24',\r\n        'fixed192x32',\r\n        'fixed192x40',\r\n        'fixed192x48',\r\n        'fixed192x56',\r\n        'fixed192x64',\r\n        'fixed200x8',\r\n        'fixed200x16',\r\n        'fixed200x24',\r\n        'fixed200x32',\r\n        'fixed200x40',\r\n        'fixed200x48',\r\n        'fixed200x56',\r\n        'fixed208x8',\r\n        'fixed208x16',\r\n        'fixed208x24',\r\n        'fixed208x32',\r\n        'fixed208x40',\r\n        'fixed208x48',\r\n        'fixed216x8',\r\n        'fixed216x16',\r\n        'fixed216x24',\r\n        'fixed216x32',\r\n        'fixed216x40',\r\n        'fixed224x8',\r\n        'fixed224x16',\r\n        'fixed224x24',\r\n        'fixed224x32',\r\n        'fixed232x8',\r\n        'fixed232x16',\r\n        'fixed232x24',\r\n        'fixed240x8',\r\n        'fixed240x16',\r\n        'fixed248x8',\r\n        //All ufixed\r\n        'ufixed',\r\n        'ufixed0x8',\r\n        'ufixed0x16',\r\n        'ufixed0x24',\r\n        'ufixed0x32',\r\n        'ufixed0x40',\r\n        'ufixed0x48',\r\n        'ufixed0x56',\r\n        'ufixed0x64',\r\n        'ufixed0x72',\r\n        'ufixed0x80',\r\n        'ufixed0x88',\r\n        'ufixed0x96',\r\n        'ufixed0x104',\r\n        'ufixed0x112',\r\n        'ufixed0x120',\r\n        'ufixed0x128',\r\n        'ufixed0x136',\r\n        'ufixed0x144',\r\n        'ufixed0x152',\r\n        'ufixed0x160',\r\n        'ufixed0x168',\r\n        'ufixed0x176',\r\n        'ufixed0x184',\r\n        'ufixed0x192',\r\n        'ufixed0x200',\r\n        'ufixed0x208',\r\n        'ufixed0x216',\r\n        'ufixed0x224',\r\n        'ufixed0x232',\r\n        'ufixed0x240',\r\n        'ufixed0x248',\r\n        'ufixed0x256',\r\n        'ufixed8x8',\r\n        'ufixed8x16',\r\n        'ufixed8x24',\r\n        'ufixed8x32',\r\n        'ufixed8x40',\r\n        'ufixed8x48',\r\n        'ufixed8x56',\r\n        'ufixed8x64',\r\n        'ufixed8x72',\r\n        'ufixed8x80',\r\n        'ufixed8x88',\r\n        'ufixed8x96',\r\n        'ufixed8x104',\r\n        'ufixed8x112',\r\n        'ufixed8x120',\r\n        'ufixed8x128',\r\n        'ufixed8x136',\r\n        'ufixed8x144',\r\n        'ufixed8x152',\r\n        'ufixed8x160',\r\n        'ufixed8x168',\r\n        'ufixed8x176',\r\n        'ufixed8x184',\r\n        'ufixed8x192',\r\n        'ufixed8x200',\r\n        'ufixed8x208',\r\n        'ufixed8x216',\r\n        'ufixed8x224',\r\n        'ufixed8x232',\r\n        'ufixed8x240',\r\n        'ufixed8x248',\r\n        'ufixed16x8',\r\n        'ufixed16x16',\r\n        'ufixed16x24',\r\n        'ufixed16x32',\r\n        'ufixed16x40',\r\n        'ufixed16x48',\r\n        'ufixed16x56',\r\n        'ufixed16x64',\r\n        'ufixed16x72',\r\n        'ufixed16x80',\r\n        'ufixed16x88',\r\n        'ufixed16x96',\r\n        'ufixed16x104',\r\n        'ufixed16x112',\r\n        'ufixed16x120',\r\n        'ufixed16x128',\r\n        'ufixed16x136',\r\n        'ufixed16x144',\r\n        'ufixed16x152',\r\n        'ufixed16x160',\r\n        'ufixed16x168',\r\n        'ufixed16x176',\r\n        'ufixed16x184',\r\n        'ufixed16x192',\r\n        'ufixed16x200',\r\n        'ufixed16x208',\r\n        'ufixed16x216',\r\n        'ufixed16x224',\r\n        'ufixed16x232',\r\n        'ufixed16x240',\r\n        'ufixed24x8',\r\n        'ufixed24x16',\r\n        'ufixed24x24',\r\n        'ufixed24x32',\r\n        'ufixed24x40',\r\n        'ufixed24x48',\r\n        'ufixed24x56',\r\n        'ufixed24x64',\r\n        'ufixed24x72',\r\n        'ufixed24x80',\r\n        'ufixed24x88',\r\n        'ufixed24x96',\r\n        'ufixed24x104',\r\n        'ufixed24x112',\r\n        'ufixed24x120',\r\n        'ufixed24x128',\r\n        'ufixed24x136',\r\n        'ufixed24x144',\r\n        'ufixed24x152',\r\n        'ufixed24x160',\r\n        'ufixed24x168',\r\n        'ufixed24x176',\r\n        'ufixed24x184',\r\n        'ufixed24x192',\r\n        'ufixed24x200',\r\n        'ufixed24x208',\r\n        'ufixed24x216',\r\n        'ufixed24x224',\r\n        'ufixed24x232',\r\n        'ufixed32x8',\r\n        'ufixed32x16',\r\n        'ufixed32x24',\r\n        'ufixed32x32',\r\n        'ufixed32x40',\r\n        'ufixed32x48',\r\n        'ufixed32x56',\r\n        'ufixed32x64',\r\n        'ufixed32x72',\r\n        'ufixed32x80',\r\n        'ufixed32x88',\r\n        'ufixed32x96',\r\n        'ufixed32x104',\r\n        'ufixed32x112',\r\n        'ufixed32x120',\r\n        'ufixed32x128',\r\n        'ufixed32x136',\r\n        'ufixed32x144',\r\n        'ufixed32x152',\r\n        'ufixed32x160',\r\n        'ufixed32x168',\r\n        'ufixed32x176',\r\n        'ufixed32x184',\r\n        'ufixed32x192',\r\n        'ufixed32x200',\r\n        'ufixed32x208',\r\n        'ufixed32x216',\r\n        'ufixed32x224',\r\n        'ufixed40x8',\r\n        'ufixed40x16',\r\n        'ufixed40x24',\r\n        'ufixed40x32',\r\n        'ufixed40x40',\r\n        'ufixed40x48',\r\n        'ufixed40x56',\r\n        'ufixed40x64',\r\n        'ufixed40x72',\r\n        'ufixed40x80',\r\n        'ufixed40x88',\r\n        'ufixed40x96',\r\n        'ufixed40x104',\r\n        'ufixed40x112',\r\n        'ufixed40x120',\r\n        'ufixed40x128',\r\n        'ufixed40x136',\r\n        'ufixed40x144',\r\n        'ufixed40x152',\r\n        'ufixed40x160',\r\n        'ufixed40x168',\r\n        'ufixed40x176',\r\n        'ufixed40x184',\r\n        'ufixed40x192',\r\n        'ufixed40x200',\r\n        'ufixed40x208',\r\n        'ufixed40x216',\r\n        'ufixed48x8',\r\n        'ufixed48x16',\r\n        'ufixed48x24',\r\n        'ufixed48x32',\r\n        'ufixed48x40',\r\n        'ufixed48x48',\r\n        'ufixed48x56',\r\n        'ufixed48x64',\r\n        'ufixed48x72',\r\n        'ufixed48x80',\r\n        'ufixed48x88',\r\n        'ufixed48x96',\r\n        'ufixed48x104',\r\n        'ufixed48x112',\r\n        'ufixed48x120',\r\n        'ufixed48x128',\r\n        'ufixed48x136',\r\n        'ufixed48x144',\r\n        'ufixed48x152',\r\n        'ufixed48x160',\r\n        'ufixed48x168',\r\n        'ufixed48x176',\r\n        'ufixed48x184',\r\n        'ufixed48x192',\r\n        'ufixed48x200',\r\n        'ufixed48x208',\r\n        'ufixed56x8',\r\n        'ufixed56x16',\r\n        'ufixed56x24',\r\n        'ufixed56x32',\r\n        'ufixed56x40',\r\n        'ufixed56x48',\r\n        'ufixed56x56',\r\n        'ufixed56x64',\r\n        'ufixed56x72',\r\n        'ufixed56x80',\r\n        'ufixed56x88',\r\n        'ufixed56x96',\r\n        'ufixed56x104',\r\n        'ufixed56x112',\r\n        'ufixed56x120',\r\n        'ufixed56x128',\r\n        'ufixed56x136',\r\n        'ufixed56x144',\r\n        'ufixed56x152',\r\n        'ufixed56x160',\r\n        'ufixed56x168',\r\n        'ufixed56x176',\r\n        'ufixed56x184',\r\n        'ufixed56x192',\r\n        'ufixed56x200',\r\n        'ufixed64x8',\r\n        'ufixed64x16',\r\n        'ufixed64x24',\r\n        'ufixed64x32',\r\n        'ufixed64x40',\r\n        'ufixed64x48',\r\n        'ufixed64x56',\r\n        'ufixed64x64',\r\n        'ufixed64x72',\r\n        'ufixed64x80',\r\n        'ufixed64x88',\r\n        'ufixed64x96',\r\n        'ufixed64x104',\r\n        'ufixed64x112',\r\n        'ufixed64x120',\r\n        'ufixed64x128',\r\n        'ufixed64x136',\r\n        'ufixed64x144',\r\n        'ufixed64x152',\r\n        'ufixed64x160',\r\n        'ufixed64x168',\r\n        'ufixed64x176',\r\n        'ufixed64x184',\r\n        'ufixed64x192',\r\n        'ufixed72x8',\r\n        'ufixed72x16',\r\n        'ufixed72x24',\r\n        'ufixed72x32',\r\n        'ufixed72x40',\r\n        'ufixed72x48',\r\n        'ufixed72x56',\r\n        'ufixed72x64',\r\n        'ufixed72x72',\r\n        'ufixed72x80',\r\n        'ufixed72x88',\r\n        'ufixed72x96',\r\n        'ufixed72x104',\r\n        'ufixed72x112',\r\n        'ufixed72x120',\r\n        'ufixed72x128',\r\n        'ufixed72x136',\r\n        'ufixed72x144',\r\n        'ufixed72x152',\r\n        'ufixed72x160',\r\n        'ufixed72x168',\r\n        'ufixed72x176',\r\n        'ufixed72x184',\r\n        'ufixed80x8',\r\n        'ufixed80x16',\r\n        'ufixed80x24',\r\n        'ufixed80x32',\r\n        'ufixed80x40',\r\n        'ufixed80x48',\r\n        'ufixed80x56',\r\n        'ufixed80x64',\r\n        'ufixed80x72',\r\n        'ufixed80x80',\r\n        'ufixed80x88',\r\n        'ufixed80x96',\r\n        'ufixed80x104',\r\n        'ufixed80x112',\r\n        'ufixed80x120',\r\n        'ufixed80x128',\r\n        'ufixed80x136',\r\n        'ufixed80x144',\r\n        'ufixed80x152',\r\n        'ufixed80x160',\r\n        'ufixed80x168',\r\n        'ufixed80x176',\r\n        'ufixed88x8',\r\n        'ufixed88x16',\r\n        'ufixed88x24',\r\n        'ufixed88x32',\r\n        'ufixed88x40',\r\n        'ufixed88x48',\r\n        'ufixed88x56',\r\n        'ufixed88x64',\r\n        'ufixed88x72',\r\n        'ufixed88x80',\r\n        'ufixed88x88',\r\n        'ufixed88x96',\r\n        'ufixed88x104',\r\n        'ufixed88x112',\r\n        'ufixed88x120',\r\n        'ufixed88x128',\r\n        'ufixed88x136',\r\n        'ufixed88x144',\r\n        'ufixed88x152',\r\n        'ufixed88x160',\r\n        'ufixed88x168',\r\n        'ufixed96x8',\r\n        'ufixed96x16',\r\n        'ufixed96x24',\r\n        'ufixed96x32',\r\n        'ufixed96x40',\r\n        'ufixed96x48',\r\n        'ufixed96x56',\r\n        'ufixed96x64',\r\n        'ufixed96x72',\r\n        'ufixed96x80',\r\n        'ufixed96x88',\r\n        'ufixed96x96',\r\n        'ufixed96x104',\r\n        'ufixed96x112',\r\n        'ufixed96x120',\r\n        'ufixed96x128',\r\n        'ufixed96x136',\r\n        'ufixed96x144',\r\n        'ufixed96x152',\r\n        'ufixed96x160',\r\n        'ufixed104x8',\r\n        'ufixed104x16',\r\n        'ufixed104x24',\r\n        'ufixed104x32',\r\n        'ufixed104x40',\r\n        'ufixed104x48',\r\n        'ufixed104x56',\r\n        'ufixed104x64',\r\n        'ufixed104x72',\r\n        'ufixed104x80',\r\n        'ufixed104x88',\r\n        'ufixed104x96',\r\n        'ufixed104x104',\r\n        'ufixed104x112',\r\n        'ufixed104x120',\r\n        'ufixed104x128',\r\n        'ufixed104x136',\r\n        'ufixed104x144',\r\n        'ufixed104x152',\r\n        'ufixed112x8',\r\n        'ufixed112x16',\r\n        'ufixed112x24',\r\n        'ufixed112x32',\r\n        'ufixed112x40',\r\n        'ufixed112x48',\r\n        'ufixed112x56',\r\n        'ufixed112x64',\r\n        'ufixed112x72',\r\n        'ufixed112x80',\r\n        'ufixed112x88',\r\n        'ufixed112x96',\r\n        'ufixed112x104',\r\n        'ufixed112x112',\r\n        'ufixed112x120',\r\n        'ufixed112x128',\r\n        'ufixed112x136',\r\n        'ufixed112x144',\r\n        'ufixed120x8',\r\n        'ufixed120x16',\r\n        'ufixed120x24',\r\n        'ufixed120x32',\r\n        'ufixed120x40',\r\n        'ufixed120x48',\r\n        'ufixed120x56',\r\n        'ufixed120x64',\r\n        'ufixed120x72',\r\n        'ufixed120x80',\r\n        'ufixed120x88',\r\n        'ufixed120x96',\r\n        'ufixed120x104',\r\n        'ufixed120x112',\r\n        'ufixed120x120',\r\n        'ufixed120x128',\r\n        'ufixed120x136',\r\n        'ufixed128x8',\r\n        'ufixed128x16',\r\n        'ufixed128x24',\r\n        'ufixed128x32',\r\n        'ufixed128x40',\r\n        'ufixed128x48',\r\n        'ufixed128x56',\r\n        'ufixed128x64',\r\n        'ufixed128x72',\r\n        'ufixed128x80',\r\n        'ufixed128x88',\r\n        'ufixed128x96',\r\n        'ufixed128x104',\r\n        'ufixed128x112',\r\n        'ufixed128x120',\r\n        'ufixed128x128',\r\n        'ufixed136x8',\r\n        'ufixed136x16',\r\n        'ufixed136x24',\r\n        'ufixed136x32',\r\n        'ufixed136x40',\r\n        'ufixed136x48',\r\n        'ufixed136x56',\r\n        'ufixed136x64',\r\n        'ufixed136x72',\r\n        'ufixed136x80',\r\n        'ufixed136x88',\r\n        'ufixed136x96',\r\n        'ufixed136x104',\r\n        'ufixed136x112',\r\n        'ufixed136x120',\r\n        'ufixed144x8',\r\n        'ufixed144x16',\r\n        'ufixed144x24',\r\n        'ufixed144x32',\r\n        'ufixed144x40',\r\n        'ufixed144x48',\r\n        'ufixed144x56',\r\n        'ufixed144x64',\r\n        'ufixed144x72',\r\n        'ufixed144x80',\r\n        'ufixed144x88',\r\n        'ufixed144x96',\r\n        'ufixed144x104',\r\n        'ufixed144x112',\r\n        'ufixed152x8',\r\n        'ufixed152x16',\r\n        'ufixed152x24',\r\n        'ufixed152x32',\r\n        'ufixed152x40',\r\n        'ufixed152x48',\r\n        'ufixed152x56',\r\n        'ufixed152x64',\r\n        'ufixed152x72',\r\n        'ufixed152x80',\r\n        'ufixed152x88',\r\n        'ufixed152x96',\r\n        'ufixed152x104',\r\n        'ufixed160x8',\r\n        'ufixed160x16',\r\n        'ufixed160x24',\r\n        'ufixed160x32',\r\n        'ufixed160x40',\r\n        'ufixed160x48',\r\n        'ufixed160x56',\r\n        'ufixed160x64',\r\n        'ufixed160x72',\r\n        'ufixed160x80',\r\n        'ufixed160x88',\r\n        'ufixed160x96',\r\n        'ufixed168x8',\r\n        'ufixed168x16',\r\n        'ufixed168x24',\r\n        'ufixed168x32',\r\n        'ufixed168x40',\r\n        'ufixed168x48',\r\n        'ufixed168x56',\r\n        'ufixed168x64',\r\n        'ufixed168x72',\r\n        'ufixed168x80',\r\n        'ufixed168x88',\r\n        'ufixed176x8',\r\n        'ufixed176x16',\r\n        'ufixed176x24',\r\n        'ufixed176x32',\r\n        'ufixed176x40',\r\n        'ufixed176x48',\r\n        'ufixed176x56',\r\n        'ufixed176x64',\r\n        'ufixed176x72',\r\n        'ufixed176x80',\r\n        'ufixed184x8',\r\n        'ufixed184x16',\r\n        'ufixed184x24',\r\n        'ufixed184x32',\r\n        'ufixed184x40',\r\n        'ufixed184x48',\r\n        'ufixed184x56',\r\n        'ufixed184x64',\r\n        'ufixed184x72',\r\n        'ufixed192x8',\r\n        'ufixed192x16',\r\n        'ufixed192x24',\r\n        'ufixed192x32',\r\n        'ufixed192x40',\r\n        'ufixed192x48',\r\n        'ufixed192x56',\r\n        'ufixed192x64',\r\n        'ufixed200x8',\r\n        'ufixed200x16',\r\n        'ufixed200x24',\r\n        'ufixed200x32',\r\n        'ufixed200x40',\r\n        'ufixed200x48',\r\n        'ufixed200x56',\r\n        'ufixed208x8',\r\n        'ufixed208x16',\r\n        'ufixed208x24',\r\n        'ufixed208x32',\r\n        'ufixed208x40',\r\n        'ufixed208x48',\r\n        'ufixed216x8',\r\n        'ufixed216x16',\r\n        'ufixed216x24',\r\n        'ufixed216x32',\r\n        'ufixed216x40',\r\n        'ufixed224x8',\r\n        'ufixed224x16',\r\n        'ufixed224x24',\r\n        'ufixed224x32',\r\n        'ufixed232x8',\r\n        'ufixed232x16',\r\n        'ufixed232x24',\r\n        'ufixed240x8',\r\n        'ufixed240x16',\r\n        'ufixed248x8',\r\n        'event',\r\n        'enum',\r\n        'let',\r\n        'mapping',\r\n        'private',\r\n        'public',\r\n        'external',\r\n        'inherited',\r\n        'payable',\r\n        'true',\r\n        'false',\r\n        'var',\r\n        'import',\r\n        'constant',\r\n        'if',\r\n        'else',\r\n        'for',\r\n        'else',\r\n        'for',\r\n        'while',\r\n        'do',\r\n        'break',\r\n        'continue',\r\n        'throw',\r\n        'returns',\r\n        'return',\r\n        'suicide',\r\n        'new',\r\n        'is',\r\n        'this',\r\n        'super'\r\n    ],\r\n    operators: [\r\n        '=',\r\n        '>',\r\n        '<',\r\n        '!',\r\n        '~',\r\n        '?',\r\n        ':',\r\n        '==',\r\n        '<=',\r\n        '>=',\r\n        '!=',\r\n        '&&',\r\n        '||',\r\n        '++',\r\n        '--',\r\n        '+',\r\n        '-',\r\n        '*',\r\n        '/',\r\n        '&',\r\n        '|',\r\n        '^',\r\n        '%',\r\n        '<<',\r\n        '>>',\r\n        '>>>',\r\n        '+=',\r\n        '-=',\r\n        '*=',\r\n        '/=',\r\n        '&=',\r\n        '|=',\r\n        '^=',\r\n        '%=',\r\n        '<<=',\r\n        '>>=',\r\n        '>>>='\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,\r\n    floatsuffix: /[fFlL]?/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-zA-Z_]\\w*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // [[ attributes ]].\r\n            [/\\[\\[.*\\]\\]/, 'annotation'],\r\n            // Preprocessor directive\r\n            [/^\\s*#\\w+/, 'keyword'],\r\n            //DataTypes\r\n            [/int\\d*/, 'keyword'],\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [\r\n                /@symbols/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // numbers\r\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],\r\n            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],\r\n            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],\r\n            [/\\d[\\d']*\\d(@integersuffix)/, 'number'],\r\n            [/\\d(@integersuffix)/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, 'string', '@string'],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\r\n            [/'/, 'string.invalid']\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@doccomment'],\r\n            [/\\/\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ],\r\n        comment: [\r\n            [/[^\\/*]+/, 'comment'],\r\n            [/\\*\\//, 'comment', '@pop'],\r\n            [/[\\/*]/, 'comment']\r\n        ],\r\n        //Identical copy of comment above, except for the addition of .doc\r\n        doccomment: [\r\n            [/[^\\/*]+/, 'comment.doc'],\r\n            [/\\*\\//, 'comment.doc', '@pop'],\r\n            [/[\\/*]/, 'comment.doc']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/\"/, 'string', '@pop']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js?");

/***/ })

}]);