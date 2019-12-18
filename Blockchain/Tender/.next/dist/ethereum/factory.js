"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _tenderFactory = require("./build/tenderFactory.json");

var _tenderFactory2 = _interopRequireDefault(_tenderFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* The contract address generated in deploy.js is used here to create and
   export an instance of tenderFactory at the given address.
*/

var instance = new _web2.default.eth.Contract(JSON.parse(_tenderFactory2.default.interface), "0x9518985c1C199429C85e584fbDb53f085295Be4F");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJUZW5kZXJGYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBbUI7Ozs7OztBQUwxQjs7OztBQU9BLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sd0JBREksQUFDZixBQUF5QixZQUQzQixBQUFpQixBQUVmLEFBR0Y7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL3RlbmRlciJ9