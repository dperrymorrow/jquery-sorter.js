
$(document).ready(function(){

  test("sorting asc and desc table on numerics", 2, function() {
    $('#table tr').sorter( 'num_key' )
    equal( $('#table tr').first().data('num_key'), 5)
    $('#table tr').sorter( 'num_key', 'DESC')
    equal( $('#table tr').first().data('num_key'), 1)
  })
  
  test("sorting asc and desc on strings", 2, function() {
    $('#table tr').sorter( 'str_key' )
    equal( $('#table tr').first().data('str_key'), 'Foo')
    $('#table tr').sorter( 'str_key', 'DESC')
    equal( $('#table tr').first().data('str_key'), 'arg')
  })
  
  test("sorting asc and desc with custom method", 2, function() {
    
    function compareDates(a,b){
      var dateA = new Date( Date.parse(a) );
      var dateB = new Date( Date.parse(b) );
      
      if( dateA > dateB){ return -1; }
      if( dateA < dateB ){ return 1; }
      return 0
    }
    
    $('#table tr').sorter( 'date_key', 'DESC', compareDates )
    equal( $('#table tr').first().data('date_key'), 'Jun 20, 2012')
    
    $('#table tr').sorter( 'date_key', 'ASC', compareDates )
    equal( $('#table tr').first().data('date_key'), 'Apr 10, 2000')
  })
})

