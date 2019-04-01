/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";
import * as async from "@polymer/polymer/lib/utils/async.js";
import "./haxcms-site-editor-ui.js";

window.cmsSiteEditor = window.cmsSiteEditor || {};
// store reference to the instance as a global
window.cmsSiteEditor.instance = null;
/**
 * `haxcms-editor-builder`
 * Figure out what our context is and setup based on that
 *
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 * - something called us asking to provide an authoring solution
 * - we need to decide based on environment if this supports php, beaker or none
 */
class HAXCMSEditorBuilder extends PolymerElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxcms-editor-builder";
  }
  /**
   * ready life cycle
   */
  ready() {
    super.ready();
    this.applyContext();
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hax-store-ready", this.storeReady.bind(this));
  }
  disconnectedCallback() {
    window.removeEventListener("hax-store-ready", this.storeReady.bind(this));
    super.disconnectedCallback();
  }
  storeReady(e) {
    // append UI element to body to avoid stack order issues
    if (!window.cmsSiteEditor.haxCmsSiteEditorUIElement) {
      window.cmsSiteEditor.haxCmsSiteEditorUIElement = document.createElement(
        "haxcms-site-editor-ui"
      );
      document.body.appendChild(window.cmsSiteEditor.haxCmsSiteEditorUIElement);
      // forces a nice fade in transition
      setTimeout(() => {
        window.cmsSiteEditor.haxCmsSiteEditorUIElement.painting = false;
      }, 5);
    }
  }
  /**
   * Try to get context of what backend is powering this
   */
  getContext() {
    let context = "";
    // figure out the context we need to apply for where the editing creds
    // and API might come from
    if (typeof DatArchive !== typeof undefined) {
      context = "beaker";
    } else if (window.__haxCMSContextPublished === true) {
      context = "published";
    } else if (window.__haxCMSContextNode === true) {
      // @todo add support for node js based back end
      context = "nodejs";
    } else if (window.__haxCMSContextDemo === true) {
      context = "demo";
    } else {
      context = "php";
    }
    return context;
  }
  applyContext() {
    let context = this.getContext();
    if (context === "php") {
      // append the php for global scope to show up via window
      // this is a unique case since it's server side generated in HAXCMS/PHP
      let script = document.createElement("script");
      script.src = `/haxcms-jwt.php`;
      document.documentElement.appendChild(script);
    }
    // dynamic import if this isn't published
    if (context !== "published") {
      const basePath = pathFromUrl(decodeURIComponent(import.meta.url));
      // import and set the tag based on the context
      window.cmsSiteEditor.tag = `haxcms-backend-${context}`;
      // delay import slightly to ensure global scope is there
      async.microTask.run(() => {
        setTimeout(() => {
          import(`${basePath}backends/${window.cmsSiteEditor.tag}.js`);
        }, 50);
      });
    }
  }
}
window.customElements.define(HAXCMSEditorBuilder.tag, HAXCMSEditorBuilder);
export { HAXCMSEditorBuilder };
// self append if anyone calls us into action
window.cmsSiteEditor.requestAvailability = function(
  element = this,
  location = document.body
) {
  if (!window.cmsSiteEditor.instance) {
    window.cmsSiteEditor.instance = document.createElement(
      window.cmsSiteEditor.tag
    );
    window.cmsSiteEditor.instance.appElement = element;
    window.cmsSiteEditor.instance.appendTarget = location;
    // self append the reference to.. well.. us.
    document.body.appendChild(window.cmsSiteEditor.instance);
  } else {
    if (element) {
      // already exists, just alter some references
      window.cmsSiteEditor.instance.appElement = element;
      window.cmsSiteEditor.instance.appendTarget = location;
      if (
        typeof window.cmsSiteEditor.instance.haxCmsSiteEditorElement !==
        typeof undefined
      ) {
        window.cmsSiteEditor.instance.appendTarget.appendChild(
          window.cmsSiteEditor.instance.haxCmsSiteEditorElement
        );
      }
    }
  }
  return window.cmsSiteEditor.instance;
};
