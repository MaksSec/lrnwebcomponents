define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CitationElement = void 0;
  function _templateObject_b3176c10d6ed11e895221b22a68998b7() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_b3176c10d6ed11e895221b22a68998b7 = function() {
      return data;
    };
    return data;
  }
  var CitationElement = (function(_PolymerElement) {
    babelHelpers.inherits(CitationElement, _PolymerElement);
    function CitationElement() {
      babelHelpers.classCallCheck(this, CitationElement);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          CitationElement.__proto__ || Object.getPrototypeOf(CitationElement)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      CitationElement,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                CitationElement.prototype.__proto__ ||
                  Object.getPrototypeOf(CitationElement.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              CitationElement.haxProperties,
              CitationElement.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_b3176c10d6ed11e895221b22a68998b7()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Citation element",
                description: "Automated conversion of citation-element/",
                icon: "icons:android",
                color: "green",
                groups: ["Element"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "citation-element";
          }
        }
      ]
    );
    return CitationElement;
  })(_polymerElement.PolymerElement);
  _exports.CitationElement = CitationElement;
  window.customElements.define(CitationElement.tag, CitationElement);
});
