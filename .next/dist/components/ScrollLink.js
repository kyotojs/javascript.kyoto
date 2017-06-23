'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _smoothscroll = require('smoothscroll');

var _smoothscroll2 = _interopRequireDefault(_smoothscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/ScrollLink.js';


var handleClick = function handleClick(e, selector) {
  var dst = document.querySelector(selector);
  if (!dst) {
    return;
  }

  (0, _smoothscroll2.default)(dst);
  e.preventDefault();
  e.stopPropagation();
};

var ScrollLink = function ScrollLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return _react2.default.createElement('a', { href: href, onClick: function onClick(e) {
      return handleClick(e, href);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children);
};

exports.default = ScrollLink;