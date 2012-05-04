$ = jQuery

$.fn.sorter = (dataKey, direction, customMethod) ->
  direction ||= "ASC"
  container = this.first().parent()
  vals = []
  this.each -> vals.push $(this).data dataKey if $(this).data dataKey
    
  if customMethod then vals = vals.sort customMethod else vals = vals.sort()
  vals = vals.reverse()  if direction == "DESC"
  
  for val in vals
    item = container.find "*[data-#{dataKey}=\"#{val}\"]"
    container.prepend item
  this
