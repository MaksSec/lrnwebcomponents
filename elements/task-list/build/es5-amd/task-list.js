define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_985fe990e70711e88bf3bf38005714b7() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h3><span property="oer:name">[[name]]</span></h3>\n    <ol>\n      <template is="dom-repeat" items="[[tasks]]" as="task">\n        <li><span property="oer:task">[[task.name]]</span></li>\n      </template>\n    </ol>\n'
    ]);
    _templateObject_985fe990e70711e88bf3bf38005714b7 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_985fe990e70711e88bf3bf38005714b7()
    ),
    is: "task-list",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema
    ],
    hostAttributes: { typeof: "oer:SupportingMaterial" },
    observers: ["_valueChanged(tasks.*)"],
    properties: {
      name: { type: String, value: "Steps to completion" },
      relatedResource: { type: String },
      tasks: { type: Array, value: [], notify: !0 },
      _resourceLink: {
        type: Object,
        computed: "_generateResourceLink(relatedResource)"
      }
    },
    _generateResourceLink: function _generateResourceLink(relatedResource) {
      if (this._resourceLink) {
        document.head.removeChild(this._resourceLink);
      }
      var link = document.createElement("link");
      link.setAttribute("property", "oer:forComponent");
      link.setAttribute("content", relatedResource);
      document.head.appendChild(link);
      return link;
    },
    _valueChanged: function _valueChanged(e) {
      for (var i in e.base) {
        for (var j in e.base[i]) {
          this.notifyPath("tasks." + i + "." + j);
        }
      }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Task list",
          description: "A list of tasks which is an ordered list",
          icon: "icons:list",
          color: "orange",
          groups: ["Content", "Instructional"],
          handles: [],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "name",
              title: "Name",
              description: "Name of the list",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "relatedResource",
              title: "Related resource",
              description: "A reference to the related Schema resource",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "name",
              title: "Name",
              description: "Name of the list",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "relatedResource",
              title: "Related resource",
              description: "A reference to the related Schema resource",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "tasks",
              title: "Tasks",
              description: "The tasks to be completed",
              inputMethod: "array",
              properties: [
                {
                  property: "name",
                  title: "Name",
                  description: "Name of the task",
                  inputMethod: "textfield",
                  required: !0
                },
                {
                  property: "link",
                  title: "Link",
                  description: "Optional link",
                  inputMethod: "textfield"
                }
              ]
            }
          ],
          advanced: []
        }
      });
    }
  });
});
