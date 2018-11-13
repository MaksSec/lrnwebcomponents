define(["../node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_7ff37890e70711e8a6ab7fdad96af61e() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: none;\n      }\n    </style>\n"
    ]);
    _templateObject_7ff37890e70711e8a6ab7fdad96af61e = function() {
      return data;
    };
    return data;
  }
  window.RelativeHeadingManager = {};
  window.RelativeHeadingManager.instance = null;
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_7ff37890e70711e8a6ab7fdad96af61e()
    ),
    is: "relative-heading-manager",
    properties: {},
    created: function created() {
      var root = this;
      if (!window.RelativeHeadingManager.instance) {
        window.RelativeHeadingManager.instance = root;
      }
      document.body.addEventListener("heading-created", function(e) {
        var el = e.detail,
          pid = el.getAttribute("subtopic-of"),
          parent = document.getElementById(pid);
        if (parent !== el.parentHeading) {
          el._setParent(parent);
        }
      });
    }
  });
  window.RelativeHeadingManager.requestAvailability = function() {
    if (!window.RelativeHeadingManager.instance) {
      window.RelativeHeadingManager.instance = document.createElement(
        "relative-heading-manager"
      );
    }
    document.body.appendChild(window.RelativeHeadingManager.instance);
  };
});
