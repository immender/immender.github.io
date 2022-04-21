function float_toc(){
	var toc_button = document.getElementById("toc-button");
	toc_button.addEventListener("click", function(){
		var custom_toc = document.getElementsByClassName("custom-toc")[0];
		if (custom_toc){
			custom_toc.remove();
		}
		else{
			var toc = document.getElementsByClassName("toc")[0];
			var custom_toc = document.createElement("div");
			custom_toc.innerHTML = toc.innerHTML;
			custom_toc.classList.add("custom-toc");
			custom_toc.classList.add("toc");
			document.getElementsByTagName("body")[0].appendChild(custom_toc);
		}
	})
}
window.onload = float_toc();
