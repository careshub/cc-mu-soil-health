function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getMLRAname(mlra) {

    var MLRAname = ""
    var LRRname = ""
    var MLRAdescpage = ""
    switch (mlra) {
        case "107B":
            MLRAname = "Iowa and Missouri Deep Loess Hills";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "342"
            break;
        case "108D":
            MLRAname = "Illinois and Iowa Deep Loess and Drift, Western Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "350"
            break;
        case "109":
            MLRAname = "Iowa and Missouri Heavy Till Plain";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "352"
            break;
        case "112":
            MLRAname = "Cherokee Prairies";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "365"
            break;
        case "113":
            MLRAname = "Central Claypan Areas";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "367"
            break;
        case "115B":
            MLRAname = "Central Mississippi Valley Wooded Slopes, Western Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "375"
            break;
        case "115C":
            MLRAname = "Central Mississippi Valley Wooded Slopes, Northern Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "378"
            break;
        case "116A":
            MLRAname = "Ozark Highland";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "383"
            break;
        case "116B":
            MLRAname = "Springfield Plain";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "385"
            break;
        case "116C":
            MLRAname = "St. Francois Knobs and Basins";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "387"
            break;
        case "131A":
            MLRAname = "Southern Mississippi River Alluvium";
            LRRname = "Mississippi Delta Cotton and Feed Grains Region";
            MLRAdescpage = "427"
            break;
        case "134":
            MLRAname = "Southern Mississippi Valley Loess";
            LRRname = "South Atlantic and Gulf Slope Cash Crops, Forest, and Livestock Region";
            MLRAdescpage = "443"
            break;
        default:
            MLRAname = "Error";
            break;
    }

    return [MLRAname,LRRname,MLRAdescpage];
}

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
			svgMLRAName.nodeValue = "Illinois and Iowa Deep Loess and Drift,";
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
			svgLRRName2.nodeValue = "Forest, and Livestock Region";
			break;
		default:
			svgMLRAName.nodeValue = "Error";
			break;
	}
}

function mlra_showtable(mlra,county)
{
    // clear things out if selecting a new MLRA
    if (county == 'all') {
        makevis('none|none')
    }    
    var tabStr = ""
    var post = ""
    //Set up query - always get all counties in an MLRA, then deal with subsetting below.
    //if (county == 'all') {
        post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' order by County, Year, SiteID" }
    //} else {
    //    post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' order by Year, SiteID" }
    //}
	jQuery.ajax({
	    type: "POST",
	    url: "http://services.communitycommons.org/api-report/v1/select",
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    crossDomain: true,
	    data: JSON.stringify(post),
	    success: function (data) {
	        // got data from sql select, now do something with it

	        if (data == null) {
	            tabStr = "No records found for MLRA " + mlra + "  (" + getMLRAname(mlra)[0] + ")"
	        } else {
	            // first set the counties in the select list - should always have all counties in MLRA
	            selStr = "<select onchange='makevis(this.value)'><option value='" + mlra + "|none'>Select County</option>"
                ctyLast = "none"
                for (i = 0; i < data.length; i++) {
                    if (data[i][1].field_value != ctyLast) {
                        selStr += "<option value='" + mlra + "|" + data[i][1].field_value + "'>" + data[i][1].field_value + "</option>"
                        ctyLast = data[i][1].field_value
                    }	                
	            }
                selStr += "</select>"

                // then make the table - should only show all counties when selecting new MLRA, otherwise only show selected county but keep all in selStr.
	            //tabStr = data.length + " records found for MLRA " + mlra + "  (" + getMLRAname(mlra)[0] + ")&nbsp;&nbsp;&nbsp;&nbsp;" + selStr
                tabStr = "XX records found for MLRA " + mlra + "  (" + getMLRAname(mlra)[0] + ")&nbsp;&nbsp;&nbsp;&nbsp;" + selStr
	            tabStr += "<table>";
	            tabStr += "<tr><td>MLRA</td>";
	            tabStr += "<td>County</td>";
	            tabStr += "<td>Region</td>";
	            tabStr += "<td>Identifier</td>";
	            tabStr += "<td>Field Management</td>";
	            tabStr += "<td>Year</td>";
	            tabStr += "<td>Total PLFA</td>";
	            tabStr += "<td>Am Fungi</td>";
	            tabStr += "<td>Active Carbon</td>";
	            tabStr += "<td>Bulk Density</td>";
	            tabStr += "<td>Run Off</td></tr>";
	            var tabStrTemp = "";
	            var tempCounty = "";
	            var tempRecCount = 0;

	            for (i = 0; i < data.length; i++) {
	                tabStrTemp = "<tr>";
	                for (j = 0; j < data[i].length; j++) {
	                    if (isNumber(data[i][j].field_value) & (data[i][j].field_name != "MLRA")) {
	                        if ((data[i][j].field_name == "RunOff") & (data[i][j].field_value == 9999)) {
	                            tabStrTemp += "<td style='text-align:right'> > 30</td>";
	                        } else {
	                            tabStrTemp += "<td style='text-align:right'>" + Math.round(data[i][j].field_value * 100) / 100 + "</td>";
	                        }
	                    } else {
	                        if (data[i][j].field_value == "") {
	                            tabStrTemp += "<td style='text-align:right'> -&nbsp;&nbsp;</td>";
	                        } else if (data[i][j].field_name == "MLRA") {
	                            tabStrTemp += "<td><a href='http://www.communitycommons.org/wp-content/uploads/2016/09/nrcs142p2_050898.pdf#page=" + getMLRAname(mlra)[2] + "' target='_blank'>" + data[i][j].field_value + "</a></td>";
	                        } else {
	                            tabStrTemp += "<td>" + data[i][j].field_value + "</td>";
	                        }	                        
	                    }
	                    if (data[i][j].field_name == "County"){
	                        tempCounty = data[i][j].field_value
	                    }
	                }
	                tabStrTemp += "</tr>";
                    //OK, only add this record to table if new MLRA or if selected county.
	                //console.log(county + "," + tempCounty);
	                if (county != 'all') {
	                    if (county == tempCounty) {
	                        tabStr += tabStrTemp
	                        tempRecCount += 1;
	                    }
	                } else {
	                    tabStr += tabStrTemp
	                    tempRecCount += 1;
	                }
	            }
	            tabStr += "</table>";
                tabStr = tabStr.replace("XX records",tempRecCount + " records")
	        }
	        document.getElementById("theTable").innerHTML = tabStr;
	    },
	    error: function (err) {

	        console.log(err);
	    }
	});
}

function makevis(mlracounty) {

    var mlracountylist = mlracounty.split("|");
    var theMLRA = mlracountylist[0];
    var theCounty = mlracountylist[1].toString();
    //var theCounty = acounty.value;

    //Tried to just make the parent hidden, then turn on a single child, but it doesn't work
    //var svgAllCounties = document.getElementById("Counties")
    //svgAllCounties.setAttributeNS(null, 'visibility', 'hidden')

    //So, loop through all children
    var svgCounty = "";
    var ctylist = [
        "Adair",
        "Andrew",
        "Atchison",
        "Audrain",
        "Barry",
        "Barton",
        "Bates",
        "Benton",
        "Bollinger",
        "Boone",
        "Buchanan",
        "Butler",
        "Caldwell",
        "Callaway",
        "Camden",
        "Cape Girardeau",
        "Carroll",
        "Carter",
        "Cass",
        "Cedar",
        "Chariton",
        "Christian",
        "Clark",
        "Clay",
        "Clinton",
        "Cole",
        "Cooper",
        "Crawford",
        "Dade",
        "Dallas",
        "Daviess",
        "DeKalb",
        "Dent",
        "Douglas",
        "Dunklin",
        "Franklin",
        "Gasconade",
        "Gentry",
        "Greene",
        "Grundy",
        "Harrison",
        "Henry",
        "Hickory",
        "Holt",
        "Howard",
        "Howell",
        "Iron",
        "Jackson",
        "Jasper",
        "Jefferson",
        "Johnson",
        "Knox",
        "Laclede",
        "Lafayette",
        "Lawrence",
        "Lewis",
        "Lincoln",
        "Linn",
        "Livingston",
        "Macon",
        "Madison",
        "Maries",
        "Marion",
        "McDonald",
        "Mercer",
        "Miller",
        "Mississippi",
        "Moniteau",
        "Monroe",
        "Montgomery",
        "Morgan",
        "New Madrid",
        "Newton",
        "Nodaway",
        "Oregon",
        "Osage",
        "Ozark",
        "Pemiscot",
        "Perry",
        "Pettis",
        "Phelps",
        "Pike",
        "Platte",
        "Polk",
        "Pulaski",
        "Putnam",
        "Ralls",
        "Randolph",
        "Ray",
        "Reynolds",
        "Ripley",
        "Saline",
        "Schuyler",
        "Scotland",
        "Scott",
        "Shannon",
        "Shelby",
        "St. Charles",
        "St. Clair",
        "St. Francois",
        "St. Louis",
        "St. Louis City",
        "Ste. Genevieve",
        "Stoddard",
        "Stone",
        "Sullivan",
        "Taney",
        "Texas",
        "Vernon",
        "Warren",
        "Washington",
        "Wayne",
        "Webster",
        "Worth",
        "Wright"
    ];

    for (i = 0; i < ctylist.length; i++) {
        svgCounty = document.getElementById(ctylist[i]);
        if (svgCounty != null) {
            if (ctylist[i] == theCounty) {
                svgCounty.setAttributeNS(null, 'visibility', 'visible');
            } else {
                svgCounty.setAttributeNS(null, 'visibility', 'hidden');
            }
        }
        
    }
    if (theMLRA != 'none') {
        mlra_showtable(theMLRA, theCounty);
    }
    
}
