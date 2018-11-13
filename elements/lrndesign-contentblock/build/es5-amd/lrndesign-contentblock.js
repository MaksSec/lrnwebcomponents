define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_12fb76d0e70611e88c7701b6fb424239() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n  <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n      }\n    </style>\n    <h3>[[title]]</h3>\n    <slot></slot>\n"
    ]);
    _templateObject_12fb76d0e70611e88c7701b6fb424239 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_12fb76d0e70611e88c7701b6fb424239()
    ),
    is: "lrndesign-contentblock",
    properties: { title: { type: String } }
  });
});
