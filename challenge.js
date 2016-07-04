
function createTable() {
// grab the hard-coded table
var table = document.getElementById("main");

var elements = [3,
		5,
		7, 
		8
		];

var interval;

fnction start(){
	interval = setInterval(function()
		{pushNextGen();
		}, 100);
} 
function stop(){
	clearInterval(interval);
}
function reset() {
	var main = document.getElementById("main");
	document.getElementById("tableHolder").removeChild(main);
	var newTable = document.createElement('table');
	newTable.id = "main";
	document.getElementById("tableHolder").appendChild(newTable);
	createTable();
	comeToLife();


}
