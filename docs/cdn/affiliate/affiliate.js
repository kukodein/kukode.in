affiliate.js// Display Randomly Affiliate by ID -----
function displayRandomImage(data) {
	// Get random ID -----
	var randomID = Math.floor((Math.random() * data.length) + 1);
	var item = data.find(item => item.id === randomID);
	// Set Attribute -----
	document.getElementById("ban-link").setAttribute("href", item.url);
	document.getElementById("ban-link").setAttribute("target", "_blank");
	document.getElementById("ban-img").src = item.image;
}

// Change Affiliate by Interval time -----
function startTimer(data) {
	document.getElementById("ban-link").setAttribute("href", dataAffiliate320[0].url);
	document.getElementById("ban-link").setAttribute("target", "_blank");
	document.getElementById("ban-img").src = dataAffiliate320[0].image;
	
	setInterval( function() { 
		displayRandomImage(data); 
	},5000);
}


/* 	Example run the Function -----

js -----
startTimer(dataAffiliate320);

html -----
<a id="ban-link"><img id="ban-img"></img></a>
<script type="text/javascript" src="affiliate.js"></script>
<script type="text/javascript">startTimer(dataAffiliate320);</script>
*/