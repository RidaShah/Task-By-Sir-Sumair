function toggleBtn(argument) {
	var x= getElementById('popup')
	 if (x.style.display === "none") { 
        x.style.display = "block"; //If the div is not visible, then this will make it visible.
    } 
    else {
        x.style.display = "none"; //If the div is visible, then this will make it invisible.
    }
}