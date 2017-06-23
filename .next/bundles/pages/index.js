
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(539);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(67)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(574);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _ScrollLink = __webpack_require__(540);

var _ScrollLink2 = _interopRequireDefault(_ScrollLink);

var _HeaderLink = __webpack_require__(575);

var _HeaderLink2 = _interopRequireDefault(_HeaderLink);

var _styles = __webpack_require__(573);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/Header.js';


var Header = function Header() {
  return _react2.default.createElement('header', { className: 'Header', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h4', { className: 'Header__Logo', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', { href: '/', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('img', { src: '/static/logo120_white.png', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }))), _react2.default.createElement('nav', { className: 'Header__Navigation', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('ul', { className: 'links', 'data-jsx': 1207589533,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_HeaderLink2.default, { link: '#slack', img: '/static/slack.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Slack'), _react2.default.createElement(_HeaderLink2.default, { link: '#meetup', img: '/static/meetup.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Meetup'), _react2.default.createElement(_HeaderLink2.default, { link: '#blog', img: '/static/blog.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Blog'))), _react2.default.createElement(_style2.default, {
    styleId: 1207589533,
    css: '.Header[data-jsx="1207589533"]{background:' + _styles.color.sumi + ';position:fixed;top:0;left:0;width:100%;height:44px;z-index:9999;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.links[data-jsx="1207589533"]{display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;height:100%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFHa0QsQUFHbkIsdUJBQXFDLG1CQUhTLG1CQUF1QixlQUF1QixlQUEwQixrQkFBMEIsYUFHeEUsS0FIa0csa0JBQzFLLHVCQUE4Qix5REFFc0Usb0JBQTRCLENBRjFELG1CQUV5Rix1QkFBTywyRkFGekYiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FtYWdpdGFrYXlvc2kvc3JjL2dpdGh1Yi5jb20va3lvdG9qcy9qYXZhc2NyaXB0Lmt5b3RvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbExpbmsgZnJvbSAnLi9TY3JvbGxMaW5rJ1xuaW1wb3J0IEhlYWRlckxpbmsgZnJvbSAnLi9IZWFkZXJMaW5rJ1xuaW1wb3J0IHsgY29sb3IsIHNpemUsIGJyZWFrcG9pbnQgfSBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cIkhlYWRlclwiPlxuICAgIDxoNCBjbGFzc05hbWU9XCJIZWFkZXJfX0xvZ29cIj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvMTIwX3doaXRlLnBuZ1wiLz5cbiAgICAgIDwvYT5cbiAgICA8L2g0PlxuXG4gICAgPG5hdiBjbGFzc05hbWU9XCJIZWFkZXJfX05hdmlnYXRpb25cIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICA8SGVhZGVyTGluayBsaW5rPVwiI3NsYWNrXCIgaW1nPVwiL3N0YXRpYy9zbGFjay5wbmdcIj5cbiAgICAgICAgICBTbGFja1xuICAgICAgICA8L0hlYWRlckxpbms+XG4gICAgICAgIDxIZWFkZXJMaW5rIGxpbms9XCIjbWVldHVwXCIgaW1nPVwiL3N0YXRpYy9tZWV0dXAucG5nXCI+XG4gICAgICAgICAgTWVldHVwXG4gICAgICAgIDwvSGVhZGVyTGluaz5cbiAgICAgICAgPEhlYWRlckxpbmsgbGluaz1cIiNibG9nXCIgaW1nPVwiL3N0YXRpYy9ibG9nLnBuZ1wiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9IZWFkZXJMaW5rPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5IZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kIDogJHtjb2xvci5zdW1pfTtcbiAgICAgICAgcG9zaXRpb24gICA6IGZpeGVkO1xuICAgICAgICB0b3AgICAgICAgIDogMDtcbiAgICAgICAgbGVmdCAgICAgICA6IDA7XG4gICAgICAgIHdpZHRoICAgICAgOiAxMDAlO1xuICAgICAgICBoZWlnaHQgICAgIDogNDRweDtcbiAgICAgICAgei1pbmRleCAgICA6IDk5OTk7XG5cbiAgICAgICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb24gIDogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAubGlua3Mge1xuICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3cgICAgICAgOiByb3cgbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZyAgICAgICAgIDogMDtcbiAgICAgICAgbWFyZ2luICAgICAgICAgIDogMDtcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/Header.js"); } } })();

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _smoothscroll = __webpack_require__(541);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/ScrollLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/ScrollLink.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var color = exports.color = {
  white: '#FFFFFF',
  sumi: '#2D333A',
  black: '#2E2E2C',
  yellow: '#FFE733',
  orange: '#FFB762',
  green: '#3EF6C0',
  cyan: '#58EFF7',
  blue: '#6DCEFF'
};

// Break points for media queries
var breakpoint = exports.breakpoint = {
  pc: 1024,
  tablet: 768,
  mobile: 480
};

var size = exports.size = {
  h1: 144,
  h2: 72,
  h3: 36,
  h4: 24,
  h5: 20,
  h6: 18,
  header: 44
};

var font = exports.font = {
  regular: '\'Hiragino Kaku Gothic Pro\', \'Meiryo\', sans-serif',
  bold: '\'Hiragino Kaku Gothic Std\', \'Meiryo\', sans-serif'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/styles.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(574);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _ScrollLink = __webpack_require__(540);

var _ScrollLink2 = _interopRequireDefault(_ScrollLink);

var _styles = __webpack_require__(573);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/HeaderLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amagitakayosi/src/github.com/kyotojs/javascript.kyoto/components/HeaderLink.js"); } } })();

/***/ })

},[537]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2JmZjhjMTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/YmZmOGMxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njcm9sbExpbmsuanM/YmZmOGMxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy5qcz9iZmY4YzE2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyTGluay5qcz9iZmY4YzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyLz5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBTY3JvbGxMaW5rIGZyb20gJy4vU2Nyb2xsTGluaydcbmltcG9ydCBIZWFkZXJMaW5rIGZyb20gJy4vSGVhZGVyTGluaydcbmltcG9ydCB7IGNvbG9yLCBzaXplLCBicmVha3BvaW50IH0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICA8aDQgY2xhc3NOYW1lPVwiSGVhZGVyX19Mb2dvXCI+XG4gICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nbzEyMF93aGl0ZS5wbmdcIi8+XG4gICAgICA8L2E+XG4gICAgPC9oND5cblxuICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyX19OYXZpZ2F0aW9uXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgPEhlYWRlckxpbmsgbGluaz1cIiNzbGFja1wiIGltZz1cIi9zdGF0aWMvc2xhY2sucG5nXCI+XG4gICAgICAgICAgU2xhY2tcbiAgICAgICAgPC9IZWFkZXJMaW5rPlxuICAgICAgICA8SGVhZGVyTGluayBsaW5rPVwiI21lZXR1cFwiIGltZz1cIi9zdGF0aWMvbWVldHVwLnBuZ1wiPlxuICAgICAgICAgIE1lZXR1cFxuICAgICAgICA8L0hlYWRlckxpbms+XG4gICAgICAgIDxIZWFkZXJMaW5rIGxpbms9XCIjYmxvZ1wiIGltZz1cIi9zdGF0aWMvYmxvZy5wbmdcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvSGVhZGVyTGluaz5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuSGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZCA6ICR7Y29sb3Iuc3VtaX07XG4gICAgICAgIHBvc2l0aW9uICAgOiBmaXhlZDtcbiAgICAgICAgdG9wICAgICAgICA6IDA7XG4gICAgICAgIGxlZnQgICAgICAgOiAwO1xuICAgICAgICB3aWR0aCAgICAgIDogMTAwJTtcbiAgICAgICAgaGVpZ2h0ICAgICA6IDQ0cHg7XG4gICAgICAgIHotaW5kZXggICAgOiA5OTk5O1xuXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uICA6IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLmxpbmtzIHtcbiAgICAgICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcbiAgICAgICAgZmxleC1mbG93ICAgICAgIDogcm93IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmcgICAgICAgICA6IDA7XG4gICAgICAgIG1hcmdpbiAgICAgICAgICA6IDA7XG4gICAgICAgIGhlaWdodCAgICAgICAgICA6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IHNtb290aFNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwnXG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGRzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAoIWRzdCkgeyByZXR1cm47IH1cblxuICBzbW9vdGhTY3JvbGwoZHN0KTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgU2Nyb2xsTGluayA9ICh7IGhyZWYsIGNoaWxkcmVuIH0pID0+IChcbiAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGhyZWYpfT57Y2hpbGRyZW59PC9hPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2Nyb2xsTGluay5qcyIsImV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgc3VtaTogJyMyRDMzM0EnLFxuICBibGFjazogJyMyRTJFMkMnLFxuICB5ZWxsb3c6ICcjRkZFNzMzJyxcbiAgb3JhbmdlOiAnI0ZGQjc2MicsXG4gIGdyZWVuOiAnIzNFRjZDMCcsXG4gIGN5YW46ICcjNThFRkY3JyxcbiAgYmx1ZTogJyM2RENFRkYnLFxufTtcblxuLy8gQnJlYWsgcG9pbnRzIGZvciBtZWRpYSBxdWVyaWVzXG5leHBvcnQgY29uc3QgYnJlYWtwb2ludCA9IHtcbiAgcGM6IDEwMjQsXG4gIHRhYmxldDogNzY4LFxuICBtb2JpbGU6IDQ4MCxcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0ge1xuICBoMTogMTQ0LFxuICBoMjogNzIsXG4gIGgzOiAzNixcbiAgaDQ6IDI0LFxuICBoNTogMjAsXG4gIGg2OiAxOCxcbiAgaGVhZGVyOiA0NCxcbn07XG5cbmV4cG9ydCBjb25zdCBmb250ID0ge1xuICByZWd1bGFyOiBgJ0hpcmFnaW5vIEtha3UgR290aGljIFBybycsICdNZWlyeW8nLCBzYW5zLXNlcmlmYCxcbiAgYm9sZDogYCdIaXJhZ2lubyBLYWt1IEdvdGhpYyBTdGQnLCAnTWVpcnlvJywgc2Fucy1zZXJpZmAsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdHlsZXMuanMiLCJpbXBvcnQgU2Nyb2xsTGluayBmcm9tICcuL1Njcm9sbExpbmsnXG5pbXBvcnQgeyBjb2xvciwgc2l6ZSwgYnJlYWtwb2ludCB9IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBIZWFkZXJMaW5rID0gKHsgbGluaywgaW1nLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAgPFNjcm9sbExpbmsgaHJlZj17bGlua30+XG4gICAgICA8aW1nIHNyYz17aW1nfS8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e1xuICAgICAgICB3aW5kb3cgJiYgd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludC5tb2JpbGV9KWApLm1hdGNoZXMgPyAnbW9iaWxlJyA6ICcnXG4gICAgICAgIH0+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L1Njcm9sbExpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGluayB7XG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBibG9jaztcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtjb2xvci53aGl0ZX07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0ICAgOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodCAgICA6ICR7c2l6ZS5oZWFkZXJ9O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbiA6IHRvcDtcbiAgICAgICAgZm9udC13ZWlnaHQgICAgOiBib2xkO1xuICAgICAgfVxuICAgICAgc3Bhbi5tb2JpbGUge1xuICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIGZpbHRlciAgOiBpbnZlcnQoMSk7XG4gICAgICAgIHdpZHRoICAgOiAzMnB4O1xuICAgICAgICBoZWlnaHQgIDogMzJweDtcbiAgICAgICAgcGFkZGluZyA6IDZweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXJMaW5rLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFMQTtBQUtBO0FBZ0RBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFUQTtBQUNBO0FBUUE7QUFFQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSEE7QUFKQTtBQUlBO0FBcUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        