define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_fce83810e70511e8b246157055c872d2() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <h2 property="oer:name" hidden$="[[!title]]">[[title]]</h2>\n      <div property="oer:description">\n        <slot></slot>\n      </div>\n    </div>\n'
    ]);
    _templateObject_fce83810e70511e8b246157055c872d2 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_fce83810e70511e8b246157055c872d2()
    ),
    is: "lrn-content",
    properties: { title: { type: String, value: !1 } }
  });
});
