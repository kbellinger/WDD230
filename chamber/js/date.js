const datefield = 
document.getElementById("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

/* Banner */
function displayBanner() {
	let dayOfWeek = new Date().getDay();
	if (dayOfWeek==1 || dayOfWeek==2 ) {
		document.getElementById('banner').style.display = "block"
	} 
	else {
		document.getElementById('banner').style.display = "none"
	}
}

displayBanner()