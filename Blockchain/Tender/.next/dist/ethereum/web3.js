"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/* This file is used to create an instance of web3 attached to a provider
   to be used in other files
*/

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/f15c170790644d87be404f2e35c6993e");
  web3 = new _web2.default(provider);
}
var getProvider = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.web3.currentProvider.enable();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getProvider() {
    return _ref.apply(this, arguments);
  };
}();

getProvider();

/* window.web3.currentProvider assumes that MetaMask has
  automatically injected web3 into the page
*/
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJnZXRQcm92aWRlciIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQSxBQUFPOzs7Ozs7OztBQUpQOzs7O0FBS0EsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBQ3ZFO0FBQ0E7U0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzdCO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7O0FBQ0QsSUFBTSwwQkFBQTtzRkFBYyxtQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNaLE9BQUEsQUFBTyxLQUFQLEFBQVksZ0JBREEsQUFDWixBQUE0Qjs7ZUFEaEI7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFkOztnQ0FBQTs0QkFBQTtBQUFBO0FBQU47O0FBSUE7O0FBRUEsQUFHQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL3RlbmRlciJ9