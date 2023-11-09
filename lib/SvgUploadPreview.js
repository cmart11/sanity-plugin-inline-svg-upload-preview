"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _sanitizedSvg = _interopRequireDefault(require("./sanitizedSvg"));
var _SvgUploadPreview = _interopRequireDefault(require("./SvgUploadPreview.css"));
var _ui = require("@sanity/ui");
var _sanity = require("sanity");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SvgStringInput = props => {
  const onChange = props.onChange,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    type = props.type,
    level = props.level;
  const handleChange = (0, _react.useCallback)(event => {
    var _event$target$files;
    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if ((file === null || file === void 0 ? void 0 : file.type) !== 'image/svg+xml') {
      // eslint-disable-next-line no-alert
      window.alert(`The type of the selected file is not SVG: ${file === null || file === void 0 ? void 0 : file.type}`);
      return;
    }
    const reader = new FileReader();
    reader.onload = readerEvent => {
      onChange((0, _sanity.set)(readerEvent.target.result));
    };
    reader.readAsText(file);
  }, [onChange]);
  const clickedRemoveSvg = () => {
    if (window.confirm('Are you sure you want to remove the SVG?')) {
      onChange((0, _sanity.unset)());
    }
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    space: 3
  }, /*#__PURE__*/_react.default.createElement("input", {
    accept: ".svg",
    type: "file",
    onChange: handleChange,
    name: "svg_upload",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "uploadInput"
  }, "Upload SVG"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${_SvgUploadPreview.default.svgPreviewBackground} ${value && _SvgUploadPreview.default.hasValue}`
  }, value && /*#__PURE__*/_react.default.createElement("div", {
    className: _SvgUploadPreview.default.svgWrapper
  }, /*#__PURE__*/_react.default.createElement(_sanitizedSvg.default, {
    html: value
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: _SvgUploadPreview.default.updateSvg,
    type: "button",
    onClick: clickedRemoveSvg
  }, "Remove SVG"))));
};
var _default = exports.default = SvgStringInput;