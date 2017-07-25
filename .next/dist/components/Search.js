'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _store = require('../store');

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (e) {
      var text = e.target.value;
      _this.props.inputChange(text);
    }, _this.search = function (state) {
      var text = state.text,
          from = state.from,
          to = state.to;

      _this.props.search(text, from, to);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' })), _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '30px' } }, _react2.default.createElement('form', null, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2 }, _react2.default.createElement(_reactBootstrap.InputGroup, null, _react2.default.createElement(_reactBootstrap.FormControl, { onChange: function onChange(e) {
          return _this2.inputChange(e);
        }, type: 'text', placeholder: 'Search engine' }), _react2.default.createElement(_reactBootstrap.InputGroup.Button, null, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', onClick: function onClick() {
          return _this2.search(state);
        } }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' }), ' Search'))))))));
    }
  }]);

  return Search;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_store.inputChange, dispatch),
    search: (0, _redux.bindActionCreators)(_store.search, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);