function mlra_showname(mlra)
{
	var svgMLRAText = document.getElementById("varMLRA").firstChild;
	svgMLRAText.nodeValue = "MLRA " + mlra;

	var svgMLRAName = document.getElementById("varMLRAname").firstChild;
	var svgMLRAName2 = document.getElementById("varMLRAname2").firstChild;
	var svgLRRName = document.getElementById("varLRRname").firstChild;
	var svgLRRName2 = document.getElementById("varLRRname2").firstChild;
	svgMLRAName2.nodeValue = " "
	svgLRRName2.nodeValue = " "

	switch(mlra) {
		case "107B":
			svgMLRAName.nodeValue = "Iowa and Missouri Deep Loess Hills";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "108D":
			svgMLRAName.nodeValue = "Illinois and Iowa Deep Loess and Drift";
			svgMLRAName2.nodeValue = "Western Part";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "109":
			svgMLRAName.nodeValue = "Iowa and Missouri Heavy Till Plain";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "112":
			svgMLRAName.nodeValue = "Cherokee Prairies";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "113":
			svgMLRAName.nodeValue = "Central Claypan Areas";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "115B":
			svgMLRAName.nodeValue = "Central Mississippi Valley Wooded Slopes,";
			svgMLRAName2.nodeValue = "Western Part";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "115C":
			svgMLRAName.nodeValue = "Central Mississippi Valley Wooded Slopes,";
			svgMLRAName2.nodeValue = "Northern Part";
			svgLRRName.nodeValue = "Central Feed Grains and Livestock Region";
			break;
		case "116A":
			svgMLRAName.nodeValue = "Ozark Highland";
			svgLRRName.nodeValue = "East and Central Farming and Forest Region";
			break;
		case "116B":
			svgMLRAName.nodeValue = "Springfield Plain";
			svgLRRName.nodeValue = "East and Central Farming and Forest Region";
			break;
		case "116C":
			svgMLRAName.nodeValue = "St. Francois Knobs and Basins";
			svgLRRName.nodeValue = "East and Central Farming and Forest Region";
			break;
		case "131A":
			svgMLRAName.nodeValue = "Southern Mississippi River Alluvium";
			svgLRRName.nodeValue = "Mississippi Delta Cotton and Feed Grains Region";
			break;
		case "134":
			svgMLRAName.nodeValue = "Southern Mississippi Valley Loess";
			svgLRRName.nodeValue = "South Atlantic and Gulf Slope Cash Crops,";
			svgLRRName2.nodeValue = "Forest, and Livestock Region"
			break;
		default:
			svgMLRAName.nodeValue = "Error";
			break;
	}
}

function mlra_showtable(mlra)
{
	var tabStr = "<table>"
	tabStr += "<tr><td>MLRA</td>"
	tabStr += "<td>County</td>"
	tabStr += "<td>Region</td>"
	tabStr += "<td>Identifier</td>"
	tabStr += "<td>Field Management</td>"
	tabStr += "<td>Year</td>"
	tabStr += "<td>Total PLFA</td>"
	tabStr += "<td>Am Fungi</td>"
	tabStr += "<td>Active Carbon</td>"
	tabStr += "<td>Bulk Density</td>"
	tabStr += "<td>Run Off</td></tr>"
	tabStr += "<tr><td>" + mlra + "</td></tr>"
	tabStr += "</table>"
	document.getElementById("theTable").innerHTML=tabStr;
}
