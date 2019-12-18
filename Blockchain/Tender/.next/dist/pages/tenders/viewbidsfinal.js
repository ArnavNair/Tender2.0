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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _tender = require("../../ethereum/tender");

var _tender2 = _interopRequireDefault(_tender);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\tender\\pages\\tenders\\viewbidsfinal.js?entry";
/* This file renders the webpage that is reponsible for displaying the FULL DETAILS
   of the bids, after the winning bid has been awarded. ANYONE can view these bids' details
   to ensure complete TRANSPARENCY in the process
*/

var BidDisplay = function (_Component) {
  (0, _inherits3.default)(BidDisplay, _Component);

  function BidDisplay() {
    (0, _classCallCheck3.default)(this, BidDisplay);

    return (0, _possibleConstructorReturn3.default)(this, (BidDisplay.__proto__ || (0, _getPrototypeOf2.default)(BidDisplay)).apply(this, arguments));
  }

  (0, _createClass3.default)(BidDisplay, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          bidAddress = _props.bidAddress,
          bidAmount = _props.bidAmount,
          description = _props.description;

      var items = [{
        header: bidAddress,
        meta: "Address of the bidder.",
        description: "The unique address of the bidder.",
        style: { overflowWrap: "break-word" }
      }, {
        header: bidAmount,
        meta: "Bid Amount",
        description: "The price of the bid made by the bidder."
      }, {
        header: description,
        meta: "Description",
        description: "Proposal of the bidder."
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var complete = this.props.complete;

      if (complete) {
        return _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Bid Show"), _react2.default.createElement(_semanticUiReact.Grid, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }))));
      } else {
        return _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, "Error.");
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var tender, index, complete, bid;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tender = (0, _tender2.default)(props.query.address);
                index = props.query.index;
                _context.next = 4;
                return tender.methods.complete().call();

              case 4:
                complete = _context.sent;

                console.log(complete);
                _context.next = 8;
                return tender.methods.getBidSummary(index).call();

              case 8:
                bid = _context.sent;
                return _context.abrupt("return", {
                  bidAddress: bid[0],
                  bidAmount: bid[1],
                  description: bid[2],
                  complete: complete
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BidDisplay;
}(_react.Component);

exports.default = BidDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZW5kZXJzXFx2aWV3Ymlkc2ZpbmFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiVGVuZGVyIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJCaWREaXNwbGF5IiwicHJvcHMiLCJiaWRBZGRyZXNzIiwiYmlkQW1vdW50IiwiZGVzY3JpcHRpb24iLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImNvbXBsZXRlIiwicmVuZGVyQ2FyZHMiLCJ0ZW5kZXIiLCJxdWVyeSIsImFkZHJlc3MiLCJpbmRleCIsIm1ldGhvZHMiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsImdldEJpZFN1bW1hcnkiLCJiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBTTs7Ozs7QUFSckI7Ozs7O0lBV00sQTs7Ozs7Ozs7Ozs7a0NBaUJVO21CQUNrQyxLQURsQyxBQUN1QztVQUR2QyxBQUNKLG9CQURJLEFBQ0o7VUFESSxBQUNRLG1CQURSLEFBQ1E7VUFEUixBQUNtQixxQkFEbkIsQUFDbUIsQUFDL0I7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FMQyxBQUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFmSixBQUFjLEFBWVosQUFHZSxBQUdqQjtBQU5FLEFBQ0U7MkNBS0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQTtVQUFBLEFBQ0MsV0FBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFDTjs7VUFBQSxBQUFHLFVBQVMsQUFDVjsrQkFBUSxBQUFDOztzQkFBRDt3QkFBQSxBQUNSO0FBRFE7QUFBQSxTQUFBLGtCQUNSLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURRLEFBQ1IsQUFDQSw2QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQXlCO0FBQXpCO2dCQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUM5Qiw4Q0FBQSxBQUFDLHNCQUFELEFBQU0sVUFBTyxPQUFiLEFBQW9CO3NCQUFwQjt3QkFMSixBQUFRLEFBRVIsQUFDRSxBQUVFLEFBS0g7QUFMRzs7QUFOTixhQWFFLEFBQ0U7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ1I7QUFDTjs7Ozs7MkdBdkQ0QixBOzs7OzttQkFDckI7QSx5QkFBUyxzQkFBTyxNQUFBLEFBQU0sTSxBQUFiLEFBQW1CLEFBQzVCO0Esd0JBQVEsTUFBQSxBQUFNLE1BQU0sQTs7dUJBQ0gsT0FBQSxBQUFPLFFBQVAsQUFBZSxXQUFmLEFBQTBCLEE7O21CQUEzQztBLG9DQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7dUJBQ00sT0FBQSxBQUFPLFFBQVAsQUFBZSxjQUFmLEFBQTZCLE9BQTdCLEFBQW9DLEE7O21CQUFoRDtBOzs4QkFFUSxJQURQLEFBQ08sQUFBSSxBQUNoQjs2QkFBVyxJQUZOLEFBRU0sQUFBSSxBQUNmOytCQUFhLElBSFIsQUFHUSxBQUFJLEFBQ2pCOzRCQUpLLEE7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVm1CLEEsQUE2RHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6InZpZXdiaWRzZmluYWwuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC90ZW5kZXIifQ==