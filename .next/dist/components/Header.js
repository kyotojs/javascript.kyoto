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

var _HeaderLink = require('./HeaderLink');

var _HeaderLink2 = _interopRequireDefault(_HeaderLink);

var _styles = require('./styles');

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