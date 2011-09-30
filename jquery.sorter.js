(function() {
  var $, i, item, val, vals;
  $ = jQuery;
  $.fn.sorter = function(dataKey, direction) {
    var container, group, vals;
    if (typeof direction === "undefined") {
      direction = "ASC";
    }
    group = this;
    container = group.first().parent();
    vals = [];
    return group.each(function() {
      return vals.push($(this).data(dataKey));
    });
  };
  vals = vals.sort();
  if (direction === "DESC") {
    vals = vals.reverse();
  }
  i = 0;
  while (i < vals.length) {
    val = vals[i];
    item = container.find("*[data-" + dataKey + "=\"" + val + "\"]");
    console.log(item);
    console.log("*[data-" + dataKey + "=\"" + val + "\"]");
    container.prepend(item);
    i++;
  }
  return group;
}).call(this);
