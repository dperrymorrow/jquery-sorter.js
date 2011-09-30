$ = jQuery

$.fn.sorter = (dataKey, direction) ->
 	direction = "ASC"  if typeof direction == "undefined"
 	group = this
 	container = group.first().parent()
 	vals = []
 	group.each ->
 		vals.push $(this).data(dataKey)
  
	vals = vals.sort()
	vals = vals.reverse()  if direction == "DESC"
	i = 0
  
	while i < vals.length
		val = vals[i]
		item = container.find("*[data-#{dataKey}=\"#{val}\"]")
		console.log item
		console.log "*[data-#{dataKey}=\"#{val}\"]"
		container.prepend item
		i++
	return group
