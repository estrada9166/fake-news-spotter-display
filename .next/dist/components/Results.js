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

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function (_Component) {
  (0, _inherits3.default)(Results, _Component);

  function Results() {
    (0, _classCallCheck3.default)(this, Results);

    return (0, _possibleConstructorReturn3.default)(this, (Results.__proto__ || (0, _getPrototypeOf2.default)(Results)).apply(this, arguments));
  }

  (0, _createClass3.default)(Results, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' })), _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' } }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2 }, state.links.map(function (link) {
        return _react2.default.createElement(_reactBootstrap.Panel, { key: link._id, header: _react2.default.createElement('a', { target: '_blank', href: link._source.url }, link._source.url) }, _react2.default.createElement('p', null, 'With a score of ', link._score), 'Panel content');
      }))), _react2.default.createElement(_reactBootstrap.Row, null, state.length > 0 ? _react2.default.createElement(_Paginator2.default, null) : null)));
    }
  }]);

  return Results;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Results);