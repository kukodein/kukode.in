function redirectSearch(search){
	if(search !== ''){
		let params = new URLSearchParams(search);
		redirectTo(params.get("to"), "Halaman tidak ditemukan"); 
	} else {
		// document.getElementById("message").innerHTML='<p class="alert alert-danger text-center my-4">Tidak ada redirect</p>';
	}	
}

function redirectTo(target, defaultVal) {
	try {
		var item = dataRedirect.find(item => item.id === target);
		window.location = item.link;
		document.title = "Please wait!";
	} catch (e) {
		document.getElementById("message").innerHTML = defaultVal;
	}
}