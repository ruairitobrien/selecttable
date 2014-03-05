var sampleTable1 = $('#sample1');
var sampleTable2 = $('#sample2');
var test1 = sampleTable1.tableSelect();
var test2 = sampleTable2.tableSelect({
	selectClass: 'select'
});


$('.datagrid td').attr('unselectable', 'on'); // Stop table cell highlighting on shift click in IE. See main.css for method in other browsers.

var buildTestOutput = function(outputElementId, columnCount, rowCount, selectedRows){
	$(outputElementId).html(
		'<p>'+
		'Columns: '+ columnCount +'</br>'+
		'Total Rows: '+ rowCount +'</br>'+
		'Selected Rows: '+ selectedRows +'</br>'+
		'</p>');
};

var displayCurrentTestOutput = function() {
	buildTestOutput('#sample1-output', test1.getColumnCount(), test1.getRowCount(), test1.getSelectedRows());
	buildTestOutput('#sample2-output', test2.getColumnCount(), test2.getRowCount(), test2.getSelectedRows());
} 

// Initialize
displayCurrentTestOutput();

sampleTable1.click(function () {
	buildTestOutput('#sample1-output', test1.getColumnCount(), test1.getRowCount(), test1.getSelectedRows());
});

sampleTable2.click(function() {
	buildTestOutput('#sample2-output', test2.getColumnCount(), test2.getRowCount(), test2.getSelectedRows());
});


