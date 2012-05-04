#jquery.sorter.js
sorts DOM elements based on a data field. Works on tables, lists, divs ect...

## Usage

- select elements to sort, and data item to sort by
- take ASC or DESC as second param

### Say you have the following

````html
<table id="table">
  <tr data-num_key="5" data-str_key="foo" data-date_key="Jan 01, 2011"></tr>
  <tr data-num_key="2" data-str_key="foo" data-date_key="Mar 05, 2001"></tr>
  <tr data-num_key="3" data-str_key="arg" data-date_key="Feb 20, 2005"></tr>
  <tr data-num_key="4" data-str_key="arg" data-date_key="Apr 10, 2000"></tr>
  <tr data-num_key="1" data-str_key="arg" data-date_key="Jun 20, 2012"></tr>
</table>
````
### And you run the following

````javascript
$('#table tr').sorter( 'num_key', 'DESC' );
````

### results in 

````html
<table id="table">
  <tr data-num_key="1" data-str_key="arg" data-date_key="Jun 20, 2012"></tr>
  <tr data-num_key="2" data-str_key="foo" data-date_key="Mar 05, 2001"></tr>
  <tr data-num_key="3" data-str_key="arg" data-date_key="Feb 20, 2005"></tr>
  <tr data-num_key="4" data-str_key="arg" data-date_key="Apr 10, 2000"></tr>
  <tr data-num_key="5" data-str_key="foo" data-date_key="Jan 01, 2011"></tr>
</table>
````

### You can also run custom sort functions as well such as sorting on a date string

````javascript
function compareDates(a,b){
  var dateA = new Date( Date.parse(a) );
  var dateB = new Date( Date.parse(b) );
  
  if( dateA > dateB){ return -1; }
  if( dateA < dateB ){ return 1; }
  return 0
}

$('#table tr').sorter( 'date_key', 'DESC', compareDates );
````

### results in 

````html
<table id="table">
  <tr data-num_key="1" data-str_key="arg" data-date_key="Jun 20, 2012"></tr>
  <tr data-num_key="5" data-str_key="foo" data-date_key="Jan 01, 2011"></tr>
  <tr data-num_key="3" data-str_key="arg" data-date_key="Feb 20, 2005"></tr>
  <tr data-num_key="2" data-str_key="foo" data-date_key="Mar 05, 2001"></tr>
  <tr data-num_key="4" data-str_key="arg" data-date_key="Apr 10, 2000"></tr>
</table>
````
