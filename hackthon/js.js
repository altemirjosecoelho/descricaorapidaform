	function myFunction() {
		var x = document.getElementById('myDIV');
		if (x.style.display == "none") {
			x.style.display = "block";
		}else{
			x.style.display = "none";
	}
}

	function fastText(elmnt,title) {
		title = elmnt.title
		var form = document.getElementById('descricaoRapida');
		form.value += title+", " ;
		
}

	function my(elmnt,clr) {
  		elmnt.style.color = clr;
}
	function my(elmnt,clr) {
  		elmnt.style.color = clr;
}

	function fastDebug(elmnt,title) {
		title = elmnt.title
		var form = document.getElementById('descricaoRapida');
		form.value += title ;
		console.log(form.value);
		alert(form);
	

}		