'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ScrollLink = require('./ScrollLink');

var _ScrollLink2 = _interopRequireDefault(_ScrollLink);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/HeaderLink.js';


var HeaderLink = function HeaderLink(_ref) {
  var link = _ref.link,
      img = _ref.img,
      children = _ref.children;
  return _react2.default.createElement('li', { className: 'link', 'data-jsx': 395952357,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_ScrollLink2.default, { href: link, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('img', { src: img, 'data-jsx': 395952357,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('span', { className: window && window.matchMedia('(max-width: ' + _styles.breakpoint.mobile + ')').matches ? 'mobile' : '', 'data-jsx': 395952357,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children)), _react2.default.createElement(_style2.default, {
    styleId: 395952357,
    css: '.link[data-jsx="395952357"]{display:block}a[data-jsx="395952357"]{display:block;height:100%;color:' + _styles.color.white + ';-webkit-text-decoration:none;text-decoration:none}span[data-jsx="395952357"]{margin-right:10px;line-height:' + _styles.size.header + ';vertical-align:top;font-weight:bold}span.mobile[data-jsx="395952357"]{display:none}img[data-jsx="395952357"]{filter:invert(1);width:32px;height:32px;padding:6px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHd0IsQUFDUSxBQUNGLEFBQ1AsQUFDSyxlQURFLENBSEMsSUFJb0IsRUFGaUMsRUFEckIsV0FHVyxZQUg0QyxHQUd0QixjQUFPLElBRlUscUJBQThCLEtBRE0saUJBQ0MscUNBRE0iLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXJMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbWFnaXRha2F5b3NpL3NyYy9naXRodWIuY29tL2t5b3RvanMvamF2YXNjcmlwdC5reW90byIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JvbGxMaW5rIGZyb20gJy4vU2Nyb2xsTGluaydcbmltcG9ydCB7IGNvbG9yLCBzaXplLCBicmVha3BvaW50IH0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IEhlYWRlckxpbmsgPSAoeyBsaW5rLCBpbWcsIGNoaWxkcmVuIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICA8U2Nyb2xsTGluayBocmVmPXtsaW5rfT5cbiAgICAgIDxpbWcgc3JjPXtpbWd9Lz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17XG4gICAgICAgIHdpbmRvdyAmJiB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHticmVha3BvaW50Lm1vYmlsZX0pYCkubWF0Y2hlcyA/ICdtb2JpbGUnIDogJydcbiAgICAgICAgfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgIDwvU2Nyb2xsTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saW5rIHtcbiAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGJsb2NrO1xuICAgICAgICBoZWlnaHQgICAgICAgICAgOiAxMDAlO1xuICAgICAgICBjb2xvciAgICAgICAgICAgOiAke2NvbG9yLndoaXRlfTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQgICA6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0ICAgIDogJHtzaXplLmhlYWRlcn07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduIDogdG9wO1xuICAgICAgICBmb250LXdlaWdodCAgICA6IGJvbGQ7XG4gICAgICB9XG4gICAgICBzcGFuLm1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXkgOiBub25lO1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgZmlsdGVyICA6IGludmVydCgxKTtcbiAgICAgICAgd2lkdGggICA6IDMycHg7XG4gICAgICAgIGhlaWdodCAgOiAzMnB4O1xuICAgICAgICBwYWRkaW5nIDogNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxpbms7XG4iXX0= */\n/*@ sourceURL=components/HeaderLink.js */'
  }));
};

exports.default = HeaderLink;