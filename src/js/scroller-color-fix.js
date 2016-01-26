function toggleWhite(){
	document.styleSheets[0].addRule('.onepage-pagination li a:before','background: white');
	document.styleSheets[0].insertRule('.onepage-pagination li a:before { background: white; }', 0);

	document.styleSheets[0].addRule('.onepage-pagination li a.active:before','background: none; border: 1px solid white;');
	document.styleSheets[0].insertRule('.onepage-pagination li a.active:before { background: none; border: 1px solid white; }', 0);
}
function toggleBlack(){
    document.styleSheets[0].addRule('.onepage-pagination li a:before','background: black');
	document.styleSheets[0].insertRule('.onepage-pagination li a:before { background: black; }', 0);

	document.styleSheets[0].addRule('.onepage-pagination li a.active:before','background: none; border: 1px solid black;');
	document.styleSheets[0].insertRule('.onepage-pagination li a.active:before { background: none; border: 1px solid black; }', 0);
}