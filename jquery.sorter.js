var $;
$ = jQuery;
$.fn.sorter = function(dataKey, direction, customMethod) {
  var container, item, val, vals, _i, _len;
  this.sortCI = function(a, b) {
    if (a.toString().toLowerCase() > b.toString().toLowerCase()) {
      return 1;
    }
    if (a.toString().toLowerCase() < b.toString().toLowerCase()) {
      return -1;
    }
    return 0;
  };
  direction || (direction = "ASC");
  container = this.first().parent();
  vals = [];
  this.each(function() {
    if ($(this).data(dataKey)) {
      return vals.push($(this).data(dataKey));
    }
  });
  if (customMethod) {
    vals = vals.sort(customMethod);
  } else {
    vals = vals.sort(this.sortCI);
  }
  if (direction === "DESC") {
    vals = vals.reverse();
  }
  for (_i = 0, _len = vals.length; _i < _len; _i++) {
    val = vals[_i];
    item = container.find("*[data-" + dataKey + "=\"" + val + "\"]");
    container.prepend(item);
  }
  return this;
};