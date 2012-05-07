$ = jQuery

$.fn.sorter = (dataKey, direction, customMethod) ->
  
  @sortCI = (a,b)->
    return 1 if a.toString().toLowerCase() > b.toString().toLowerCase()
    return -1 if a.toString().toLowerCase() < b.toString().toLowerCase()
    0
  
  direction ||= "ASC"
  container = this.first().parent()
  vals = []
  this.each -> vals.push $(this).data dataKey if $(this).data dataKey
    
  if customMethod then vals = vals.sort customMethod else vals = vals.sort @sortCI
  vals = vals.reverse() if direction == "DESC"
  
  for val in vals
    item = container.find "*[data-#{dataKey}=\"#{val}\"]"
    container.prepend item
  
  this
