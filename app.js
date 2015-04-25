//Highlighter.init();

var $ = function(sel, el) {
  return (el || document).querySelector(sel);
};

var $$ = function(sel, el) {
  return (el || document).querySelectorAll(sel);
};

// Save references to canvas, because sometimes
// they get replaced by images to download.
var canvases = {};

function executeGraph(graphId) {
  var canvas = $("#" + graphId);
  if (!canvas) {
    var a = $("a[data-canvasid='" + graphId + "']");
    if (a && graphId in canvases) {
      a.parentNode.replaceChild(canvases[graphId], a);
      a = null;
    }
  } else if (!(graphId in canvases)) {
    canvases[graphId] = canvas;
  }
  var pre = $("pre[data-id='" + graphId + "']");
  eval(pre.innerHTML);
}

Array.prototype.forEach.call($$("pre"), function(pre) {
  executeGraph(pre.getAttribute("data-id"));
});