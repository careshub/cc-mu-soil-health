function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function interactiveMap(mlra) {
    windowstring = "http://maps.communitycommons.org/viewer/?action=link_map&ids=14555%2Cve%2Cwtopo%2Ctopo%2C14554%2Cwater%2Cplacebnd%2Cplaces%2Ccounties%2CState%2Croads&vm=14554&vl=14554&vr=wtopo%2Ccounties%2CState&dt=&bbox=" + getMLRAinfo(mlra)[3]
    window.open(windowstring)
}

function getMLRAinfo(mlra) {

    var MLRAname = ""
    var LRRname = ""
    var MLRAdescpage = ""
    var MLRAbbox = ""
    switch (mlra) {
        case "107B":
            MLRAname = "Iowa and Missouri Deep Loess Hills";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "342"
            MLRAbbox = "-10700878%2C4689661%2C-10278772%2C4963812"
            break;
        case "108D":
            MLRAname = "Illinois and Iowa Deep Loess and Drift, Western Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "350"
            MLRAbbox = "-10629473%2C4849999%2C-10483726%2C4964660"
            break;
        case "109":
            MLRAname = "Iowa and Missouri Heavy Till Plain";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "352"
            MLRAbbox = "-10560566%2C4724634%2C-10158487%2C4985779"
            break;
        case "112":
            MLRAname = "Cherokee Prairies";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "365"
            MLRAbbox = "-10677463%2C4449999%2C-10210426%2C4753333"
            break;
        case "113":
            MLRAname = "Central Claypan Areas";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "367"
            MLRAbbox = "-10431167%2C4661807%2C-9999500%2C4942160"
            break;
        case "115B":
            MLRAname = "Central Mississippi Valley Wooded Slopes, Western Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "375"
            MLRAbbox = "-10444444%2C4429931%2C-9894735%2C4786969"
            break;
        case "115C":
            MLRAname = "Central Mississippi Valley Wooded Slopes, Northern Part";
            LRRname = "Central Feed Grains and Livestock Region";
            MLRAdescpage = "378"
            MLRAbbox = "-10384583%2C4660948%2C-9911636%2C4968120"
            break;
        case "116A":
            MLRAname = "Ozark Highland";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "383"
            MLRAbbox = "-10580431%2C4340551%2c-9933666%2C4734666"
            break;
        case "116B":
            MLRAname = "Springfield Plain";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "385"
            MLRAbbox = "-10618152%2C4357966%2C-10228715%2C4610899"
            break;
        case "116C":
            MLRAname = "St. Francois Knobs and Basins";
            LRRname = "East and Central Farming and Forest Region";
            MLRAdescpage = "387"
            MLRAbbox = "-10176500%2C4453161%2C-9978066%2C4582041"
            break;
        case "131A":
            MLRAname = "Southern Mississippi River Alluvium";
            LRRname = "Mississippi Delta Cotton and Feed Grains Region";
            MLRAdescpage = "427"
            MLRAbbox = "-10165572%2C4270842%2C-9854455%2C4512908"
            break;
        case "134":
            MLRAname = "Southern Mississippi Valley Loess";
            LRRname = "South Atlantic and Gulf Slope Cash Crops, Forest, and Livestock Region";
            MLRAdescpage = "443"
            MLRAbbox = "-10092788%2C4350555%2C-9946228%2C4465667"
            break;
        default:
            MLRAname = "Error";
            break;
    }

    return [MLRAname,LRRname,MLRAdescpage,MLRAbbox];
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
    //Set up query - always get all counties in an MLRA, then deal with subsetting below.  But only get averages for selected county.
    if (county == 'all') {
        post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, 0 as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, 0 as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
    } else {
        post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, 0 as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, 0 as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
    }
    //post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZ' as MLRA,'Average' as County,'N/A' as StateLocation,'N/A' as SiteID, 'N/A' as FieldManagemnt, 0 as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(RunOff) as RunOff from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "'order by MLRA, County, Year, SiteID" }
	jQuery.ajax({
	    type: "POST",
	    url: "http://services.communitycommons.org/api-report/v1/select",
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    crossDomain: true,
	    data: JSON.stringify(post),
	    success: function (data) {
	        // got data from sql select, now do something with it

	        if ((data == null) || (data.length < 3)) {
	            tabStr = "No records found for <a href='http://www.communitycommons.org/wp-content/uploads/2016/09/nrcs142p2_050898.pdf#page=" + getMLRAinfo(mlra)[2] + "' target='_blank'>MLRA " + mlra + "  (" + getMLRAinfo(mlra)[0] + ")</a>"
	            tabStr += "&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Map MLRA' onclick='interactiveMap(\"" + mlra + "\")'/>";
	        } else {
	            // first set the counties in the select list - should always have all counties in MLRA
	            selStr = "<select onchange='makevis(this.value)'><option value='" + mlra + "|none'>Select County</option>"
                ctyLast = "none"
                for (i = 0; i < data.length; i++) {
                    if ((data[i][1].field_value != ctyLast) && (data[i][1].field_value != "Average") && (data[i][1].field_value != "State Average")) {
                        selStr += "<option value='" + mlra + "|" + data[i][1].field_value + "'>" + data[i][1].field_value + "</option>"
                        ctyLast = data[i][1].field_value
                    }	                
	            }
                selStr += "</select>"

                // then make the table - should only show all counties when selecting new MLRA, otherwise only show selected county but keep all in selStr.
                tabStr = "XX records found for <a href='http://www.communitycommons.org/wp-content/uploads/2016/09/nrcs142p2_050898.pdf#page=" + getMLRAinfo(mlra)[2] + "' target='_blank'>MLRA " + mlra + "  (" + getMLRAinfo(mlra)[0] + ")</a>"
                if (county != 'all') {
                    tabStr += ", " + county + " County"
                }
                tabStr += "&nbsp;&nbsp;&nbsp;&nbsp;" + selStr  //the pulldown list
                tabStr += "&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Map MLRA' onclick='interactiveMap(\"" + mlra + "\")'/>";
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

                // loop through selected records
	            for (i = 0; i < data.length; i++) {
	                tabStrTemp = "<tr>";
	                for (j = 0; j < data[i].length; j++) {
	                    if (isNumber(data[i][j].field_value) & (data[i][j].field_name != "MLRA") & (data[i][j].field_name != "Year")) {
	                        if ((data[i][j].field_name == "RunOff") & (data[i][j].field_value >= 30)) {
	                            tabStrTemp += "<td style='text-align:right'> > 30</td>";
	                        } else {
	                            //tabStrTemp += "<td style='text-align:right'>" + Math.round(data[i][j].field_value * 100) / 100 + "</td>";
	                            tabStrTemp += "<td style='text-align:right'>" + (data[i][j].field_value * 1.0).toFixed(2) + "</td>";
	                        }
	                    } else {
	                        if (data[i][j].field_value == "") {
	                            tabStrTemp += "<td style='text-align:right'> -&nbsp;&nbsp;</td>";
	                        } else if (data[i][j].field_name == "MLRA") {
	                            if (data[i][j].field_value == "ZZZ") {  //this is the state average
	                                tabStrTemp += "<td> -&nbsp;&nbsp;</td>";
	                            } else {
	                                tabStrTemp += "<td>" + mlra + "</td>";
	                            }
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
	                    if ((county == tempCounty) || (tempCounty == 'Average') || (tempCounty == 'State Average')) {
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
