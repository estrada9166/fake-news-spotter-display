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

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Search Engine'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' })), _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' } }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2 }, _react2.default.createElement(_reactBootstrap.Jumbotron, { style: { borderRadius: '15px' } }, _react2.default.createElement('h1', { style: { textAlign: 'center' } }, 'Zuti'), _react2.default.createElement('h4', { style: { textAlign: 'center' } }, 'Fake news spotter'), _react2.default.createElement(_Search2.default, null))))));
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);