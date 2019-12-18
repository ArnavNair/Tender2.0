"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Tender = require("./build/Tender.json");

var _Tender2 = _interopRequireDefault(_Tender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This file is used to export a function which takes an address as
   an argument and returns an instance of the tender contract deployed 
   at that address
*/

exports.default = function (address) {
   return new _web2.default.eth.Contract(JSON.parse(_Tender2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx0ZW5kZXIuanMiXSwibmFtZXMiOlsid2ViMyIsIlRlbmRlciIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWSxBQUVuQjs7Ozs7O0FBUkE7Ozs7O2tCQVFlLG1CQUFXLEFBQ3hCO1VBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0saUJBQWpDLEFBQXNCLEFBQWtCLFlBQS9DLEFBQU8sQUFBb0QsQUFDNUQ7QUFGRCIsImZpbGUiOiJ0ZW5kZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC90ZW5kZXIifQ==