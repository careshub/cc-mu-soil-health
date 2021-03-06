// Check whether the current user is a member of this hub.
var is_mush_member = null;
function is_user_mush_member() {
	jQuery.ajax({
        type: 'GET',
		url: ajaxurl, // This uses the built-in WP global variable.
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: {
			'action': 'cc-mush-is-user-member', // Calls wp_ajax_cc-mush-is-user-member action.
		},
		success: function (response) {
		    //// Do something. response.data is whether the user is logged in and a hub member.
		    is_mush_member = (response.data) ? true : false;
		},
		error: function (err) {
			return false;
		}
	});
}
is_user_mush_member();

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function interactiveMap(mlra) {
	windowstring = "//maps.communitycommons.org/viewer/?action=link_map&projectid=35&ids=14554%2C14425%2Cve%2Cwtopo%2Ctopo%2Cwater%2Cplacebnd%2Cplaces%2Ccounties%2CState%2Croads&vm=14554%2C14425&vl=14554&vr=wtopo%2Ccounties%2CState&dt=&bbox=" + getMLRAinfo(mlra)[3]
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

function mlra_showtable(mlra,county,groupby)
{
    // clear things out if selecting a new MLRA
    if (county == 'all') {
        makevis('none|none|none')
    }
    var ismember = is_mush_member;
    var tabStr = ""
    var post = ""
    var scrolltoval = "#theTable"
    //Set up query - always get all counties in an MLRA.  Get averages for state and  selected mlra or county.  Lots of queries for group by!
    if (county == 'all') {
        if (groupby == 'none') {
            post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity, RunOff, 1 as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'county') {
            post = { "sql_query": "Select MLRA,County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' group by mlra,county union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'region') {
            post = { "sql_query": "Select MLRA,'&nbsp;&nbsp;-' as County,StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' group by mlra,statelocation union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'identifier') {
            post = { "sql_query": "Select MLRA,'&nbsp;&nbsp;-' as County,'&nbsp;&nbsp;-' as StateLocation,SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' group by mlra,siteid union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'fldmgt') {
            post = { "sql_query": "Select MLRA,'&nbsp;&nbsp;-' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' group by mlra,FieldManagemnt union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'year') {
            post = { "sql_query": "Select MLRA,'&nbsp;&nbsp;-' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' group by mlra,year union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        }
    } else {
        if (groupby == 'none') {
            post = { "sql_query": "Select MLRA,County,StateLocation,SiteID,FieldManagemnt,Year,TotalPLFA,AMFungi,ActiveCarbon,BulkDensity,RunOff, 1 as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'county') {
            post = { "sql_query": "Select MLRA,County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' group by mlra,county union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'region') {
            post = { "sql_query": "Select MLRA,County,StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' group by mlra,county,statelocation union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'identifier') {
            post = { "sql_query": "Select MLRA,County,'&nbsp;&nbsp;-' as StateLocation,SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' group by mlra,county,siteid union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'fldmgt') {
            post = { "sql_query": "Select MLRA,County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,FieldManagemnt,NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' group by mlra,county,FieldManagemnt union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        } else if (groupby == 'year') {
            post = { "sql_query": "Select MLRA,County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID,'&nbsp;&nbsp;-' as FieldManagemnt,Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' group by mlra,county,year union all select 'ZZ' as MLRA,'Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "' and County = '" + county + "' union all select 'ZZZ' as MLRA,'State Average' as County,'&nbsp;&nbsp;-' as StateLocation,'&nbsp;&nbsp;-' as SiteID, '&nbsp;&nbsp;-' as FieldManagemnt, NULL as Year,avg(TotalPLFA) as TotalPLFA,avg(AMFungi) as AMFungi,avg(ActiveCarbon) as ActiveCarbon,avg(BulkDensity) as BulkDensity,avg(case when RunOff = 9999 then 30 else RunOff end) as RunOff, count(*) as numrecs from CARES.CARES.SoilHealth_06_sep_2016 order by MLRA, County, Year, SiteID" }
        }
    }

	jQuery.ajax({
	    type: "POST",
	    url: "//services.communitycommons.org/api-report/v1/select",
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    crossDomain: true,
	    data: JSON.stringify(post),
	    success: function (data) {
	        // got data from sql select, now do something with it

	        if ((data == null) || (data.length < 3)) {
	            tabStr = "No records found for <a href='//www.communitycommons.org/wp-content/uploads/2016/09/nrcs142p2_050898.pdf#page=" + getMLRAinfo(mlra)[2] + "' target='_blank'>MLRA " + mlra + "  (" + getMLRAinfo(mlra)[0] + ")</a>"
	            tabStr += "&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Map MLRA' onclick='interactiveMap(\"" + mlra + "\")'/>";
	            scrolltoval = "#theTable"
	        } else {
	            scrolltoval = "#theTable"

                // then make the table - should only show all counties when selecting new MLRA, otherwise only show selected county but keep all in selStr.
                tabStr = "XX records found for <a href='//www.communitycommons.org/wp-content/uploads/2016/09/nrcs142p2_050898.pdf#page=" + getMLRAinfo(mlra)[2] + "' target='_blank'>MLRA " + mlra + "  (" + getMLRAinfo(mlra)[0] + ")</a>"
                if (county != 'all') {
                    tabStr += ", " + county + " County"
                    scrolltoval = "#mlramap"
                }
                tabStr += "&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='mlra_showtable(\"" + mlra + "\",\"" + county + "\",this.value)'><option value='none'>Group Results By</option>"
                tabStr += " <option value='county'>County</option>"
                tabStr += " <option value='region'>Region</option>"
                if (ismember) {
                    tabStr += " <option value='identifier'>Identifier</option>"
                }
                tabStr += " <option value='fldmgt'>Field Management</option>"
                tabStr += " <option value='year'>Year</option>"
                tabStr += " <option value='none'>Un-Group</option>"
                tabStr += "</select>"
                tabStr += "&nbsp;&nbsp;&nbsp;<input type='button' value='Map MLRA' onclick='interactiveMap(\"" + mlra + "\")'/>";
                tabStr += "<table>";
                tabStr += "<tr>"
                tabStr += "<td title='Major Land Resource Area Identifier'><a href='//www.communitycommons.org/groups/mu-soil-health-hub/information/mlra'>MLRA</a></td>";
	            tabStr += "<td title='County Name'>County</td>";
	            tabStr += "<td title='Missouri Region'>Region</td>";
	            if (ismember) {
	                tabStr += "<td title='Site Identifier'>Identifier</td>";
	            }
	            tabStr += "<td title='Field Management Type'>Field Management</td>";
	            tabStr += "<td title='Sample Year'>Year</td>";
	            tabStr += "<td style='text-align:center' title='Total Phospolipid Fatty Acids'><a href='/groups/mu-soil-health-hub/information/plfa'>Total PLFA</a></td>";
	            tabStr += "<td style='text-align:center' title='Arbuscular Mycorrhizae Fungi (AMF)'><a href='//www.communitycommons.org/groups/mu-soil-health-hub/information/amf'>AMF</a></td>";
	            tabStr += "<td style='text-align:center' title='Active Carbon'><a href='/groups/mu-soil-health-hub/information/active-carbon'>Active Carbon</a></td>";
	            tabStr += "<td style='text-align:center' title='Bulk Density'><a href='/groups/mu-soil-health-hub/information/bulk-density'>Bulk Density</a></td>";
	            tabStr += "<td style='text-align:center' title='Run Off'><a href='/groups/mu-soil-health-hub/information/run-off'>Run Off</a></td>";
	            if (groupby != 'none') {
	                tabStr += "<td style='text-align:center' title='Records'>Records</td>";
	            }
                tabStr += "</tr>"
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
	                        } else if ((data[i][j].field_name == "numrecs") & (groupby == 'none')) {
                                //do nothing
	                        } else {
	                            if (data[i][j].field_name == "numrecs") {
	                                tabStrTemp += "<td style='text-align:right'>" + data[i][j].field_value + "</td>";
	                            } else {
	                                tabStrTemp += "<td style='text-align:right'>" + (data[i][j].field_value * 1.0).toFixed(2) + "</td>";
	                            }
	                        }
	                    } else {
	                        if ((data[i][j].field_name == "SiteID") & (ismember == false)) {
	                            //do nothing - better way to do this?
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
                tabStr = tabStr.replace("XX records",(tempRecCount - 2) + " records")
	        }
	        document.getElementById("theTable").innerHTML = tabStr;
	        jQuery('html,body').animate({
	            scrollTop: jQuery(scrolltoval).offset().top
	        }, 1000);
	        //Get counties list as a separate ajax call.  This should always be all counties in the MLRA
	        post = { "sql_query": "Select distinct County from CARES.CARES.SoilHealth_06_sep_2016 where MLRA = '" + mlra + "'" }
	        jQuery.ajax({
	            type: "POST",
	            url: "//services.communitycommons.org/api-report/v1/select",
	            dataType: "json",
	            contentType: "application/json; charset=utf-8",
	            crossDomain: true,
	            data: JSON.stringify(post),
	            success: function (data) {
	                selStr = "<br/><select onchange='makevis(this.value)'><option value='" + mlra + "|none|none'>Select County</option>"
	                for (i = 0; i < data.length; i++) {
	                    selStr += "<option value='" + mlra + "|" + data[i][0].field_value + "|none'>" + data[i][0].field_value + "</option>"
	                }
	                selStr += "</select>"
                    jQuery(selStr).insertBefore(jQuery("#theTable").find("select"))
	            }
	        })
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
    var theGB = mlracountylist[2].toString();
    //var theCounty = acounty.value;

    //Tried to just make the parent hidden, then turn on a single child, but it doesn't work
    //var svgAllCounties = document.getElementById("Counties")
    //svgAllCounties.setAttributeNS(null, 'visibility', 'hidden')

    //So, loop through all children
    var svgCounty = "";
    var ctylist = [
        "Adair","Andrew","Atchison","Audrain",
        "Barry","Barton","Bates","Benton","Bollinger","Boone","Buchanan","Butler",
        "Caldwell","Callaway","Camden","Cape Girardeau","Carroll","Carter","Cass","Cedar","Chariton","Christian","Clark","Clay","Clinton","Cole","Cooper","Crawford",
        "Dade","Dallas","Daviess","DeKalb","Dent","Douglas","Dunklin",
        "Franklin",
        "Gasconade","Gentry","Greene","Grundy",
        "Harrison","Henry","Hickory","Holt","Howard","Howell",
        "Iron",
        "Jackson","Jasper","Jefferson","Johnson",
        "Knox",
        "Laclede","Lafayette","Lawrence","Lewis","Lincoln","Linn","Livingston",
        "Macon","Madison","Maries","Marion","McDonald","Mercer","Miller","Mississippi","Moniteau","Monroe","Montgomery","Morgan",
        "New Madrid","Newton","Nodaway",
        "Oregon","Osage","Ozark",
        "Pemiscot","Perry","Pettis","Phelps","Pike","Platte","Polk","Pulaski","Putnam",
        "Ralls","Randolph","Ray","Reynolds","Ripley",
        "Saline","Schuyler","Scotland","Scott","Shannon","Shelby","St. Charles","St. Clair","St. Francois","St. Louis","St. Louis City","Ste. Genevieve","Stoddard","Stone","Sullivan",
        "Taney","Texas",
        "Vernon",
        "Warren","Washington","Wayne","Webster","Worth","Wright"
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
        mlra_showtable(theMLRA, theCounty, theGB);
    }
}
