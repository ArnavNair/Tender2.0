"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\tender\\pages\\index.js?entry";
/* This is the home page of the application - which contains all deployed tenders,
   with options to view extra details (View Tender)
*/

var TenderIndex = function (_Component) {
  (0, _inherits3.default)(TenderIndex, _Component);

  function TenderIndex() {
    (0, _classCallCheck3.default)(this, TenderIndex);

    return (0, _possibleConstructorReturn3.default)(this, (TenderIndex.__proto__ || (0, _getPrototypeOf2.default)(TenderIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(TenderIndex, [{
    key: "renderTenders",
    value: function renderTenders() {
      var items = this.props.tenders.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/tenders/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }, "View Tender")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_routes.Link, { route: "/tenders/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "Float a Tender",
        icon: "add circle",
        primary: true,
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))), this.renderTenders()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var tenders;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedTenders().call();

              case 2:
                tenders = _context.sent;
                return _context.abrupt("return", { tenders: tenders });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TenderIndex;
}(_react.Component);

exports.default = TenderIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTWVudSIsIkxpbmsiLCJMYXlvdXQiLCJUZW5kZXJJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJ0ZW5kZXJzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJUZW5kZXJzIiwibWV0aG9kcyIsImdldERlcGxveWVkVGVuZGVycyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7Ozs7OztBQVJuQjs7OztJLEFBV007Ozs7Ozs7Ozs7O29DQU1ZLEFBQ2Q7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxtQkFBVyxBQUM5Qzs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUsscUJBQU4sQUFBeUI7d0JBQXpCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzJDQVdQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtjQUZGLEFBRU8sQUFDTDtpQkFIRixBQUlFO2lCQUpGLEFBSVU7O29CQUpWO3NCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQU5aLEFBQ0UsQUFDRSxBQVdHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7O3VCQXBDdUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHFCQUFoQixBQUFxQyxBOzttQkFBckQ7QTtpREFDQyxFQUFFLFNBQUYsQUFBVyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSkksQSxBQTBDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC90ZW5kZXIifQ==