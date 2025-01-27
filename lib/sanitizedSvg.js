"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSanitizedHtml = _interopRequireDefault(require("react-sanitized-html"));
var data = _interopRequireWildcard(require("./allowedData"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SanitizedSVG = _ref => {
  let html = _ref.html;
  return /*#__PURE__*/_react.default.createElement(_reactSanitizedHtml.default, {
    allowedTags: data.AllowedTags,
    allowedSchemes: ['http', 'https', 'data'],
    allowedAttributes: {
      '*': ['style', 'class'],
      td: ['width'],
      rect: data.AllowedSvgAttrs,
      img: ['src', 'srcset', 'alt'],
      mask: ['id', 'fill'],
      svg: data.AllowedSvgAttrs,
      filter: data.AllowedSvgFilters,
      line: data.AllowedSvgAttrs,
      g: data.AllowedSvgAttrs,
      path: data.AllowedPathAttrs,
      clipPath: ['id'],
      use: ['transform', 'xlink:href']
    },
    parser: {
      lowerCaseAttrributeNames: true
    },
    nonTextTags: ['desc', 'title', 'a', 'this'],
    html: html
  });
};
var _default = exports.default = SanitizedSVG;