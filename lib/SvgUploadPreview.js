"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _patchEvent = require("part:@sanity/form-builder/patch-event");

var _default2 = _interopRequireDefault(require("part:@sanity/components/formfields/default"));

var _sanitizedSvg = _interopRequireDefault(require("./sanitizedSvg"));

var _SvgUploadPreview = _interopRequireDefault(require("./SvgUploadPreview.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SvgStringInput extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "inputRef", _react.default.createRef());

    _defineProperty(this, "handleChange", event => {
      const file = event.target.files[0];

      if (file.type !== 'image/svg+xml') {
        // eslint-disable-next-line no-alert
        window.alert(`The type of the selected file is not svg: ${file.type}`);
        return;
      }

      const reader = new FileReader();

      reader.onload = readerEvent => {
        this.props.onChange(_patchEvent.PatchEvent.from((0, _patchEvent.set)(readerEvent.target.result)));
      };

      reader.readAsText(file);
    });
  }

  generateId() {
    const title = this.props.type.title.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index == 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
    return `svg-upload--${this.props.parent._key}--${title}`;
  }

  focus() {
    this.inputRef.current.focus();
  }

  clickedRemoveSvg() {
    if (confirm('Are you sure you want to remove the SVG?')) {
      this.props.onChange(_patchEvent.PatchEvent.from((0, _patchEvent.unset)()));
    }

    return false;
  }

  render() {
    const _this$props = this.props,
          value = _this$props.value,
          type = _this$props.type,
          level = _this$props.level;
    const id = this.generateId();
    return _react.default.createElement(_default2.default, {
      label: type.title,
      level: level,
      description: type.description
    }, _react.default.createElement("div", {
      className: `${_SvgUploadPreview.default.svgPreviewBackground} ${value && _SvgUploadPreview.default.hasValue}`
    }, _react.default.createElement("input", {
      accept: ".svg",
      id: id,
      ref: this.inputRef,
      type: "file",
      placeholder: type.placeholder,
      onChange: this.handleChange,
      name: "svg_upload",
      onSubmit: this.onSubmit
    }), _react.default.createElement("label", {
      htmlFor: id
    }, "Upload SVG"), value && _react.default.createElement("div", {
      className: _SvgUploadPreview.default.svgWrapper
    }, _react.default.createElement(_sanitizedSvg.default, {
      html: value
    }), _react.default.createElement("button", {
      className: _SvgUploadPreview.default.updateSvg,
      type: "button",
      onClick: () => this.clickedRemoveSvg()
    }, "Remove SVG"))));
  }

}

_defineProperty(SvgStringInput, "propTypes", {
  value: _propTypes.default.string,
  type: _propTypes.default.object,
  level: _propTypes.default.number,
  onChange: _propTypes.default.func
});

var _default = SvgStringInput;
exports.default = _default;