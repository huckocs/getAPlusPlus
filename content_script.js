// if($('frame[name="alpha"]').length === 0){
// 	$(function() {    
// 		var element = $('td.h1').text(),
// 	    parents = $("h3:contains('Parents')"),
// 	    children = $("h3:contains('Children')"),
// 	    description = $("h2:contains('Description')").nextAll('p:not(:empty)').text().trim(),
// 	    allParents = [],
// 	    allChildren = [],
// 	    everyThing = [];
// 	    parents.next().find("a").each(function(n){        
// 	        allParents[n] = $(this).text();        
// 	    });
// 	    children.next().find("a").each(function(n){        
// 	        allChildren[n] = $(this).text();        
// 	    });
// 	    allParentsString = allParents.toString();
// 	    allChildrenString = allChildren.toString();
// 	    everyThing.push(element,allParentsString,allChildrenString,description);
	    	   
// 		var existingEntries = JSON.parse(localStorage.getItem("A++"));
// 		if(existingEntries == null) existingEntries = [];
// 		var data = everyThing;
// 		localStorage.setItem("data", JSON.stringify(data));
// 		existingEntries.push(data);
// 	    localStorage.setItem("A++", JSON.stringify(existingEntries));

// 		var csvContent = "data:text/csv;charset=utf-8,";
// 		existingEntries.forEach(function(infoArray, index){
// 	   		dataString = infoArray.join("\+");
// 	   		csvContent += dataString+ "\n";
// 		}); 
// 		var encodedUri = encodeURI(csvContent);
// 		console.log(JSON.parse(localStorage.getItem("A++")));
// 		window.open(encodedUri);

// 	});
// }


if($('frame[name="alpha"]').length === 0){
	$(function() {    
		var Element = [],
		Description = [],
	    Parent = [],
	    Children = [],
	    theElement = $('td.h1').text(),
	    theParents = $("h3:contains('Parents')"),
	    theChildren = $("h3:contains('Children')"),
	    theDescription = $("h2:contains('Description')").nextAll('p:not(:empty)').text().trim(),	    
	    AllParents = [],
	    AllChildren = [],
	    EveryThing = [];

	    theParents.next().find("a").each(function(n){        
	        AllParents[n] = $(this).text();        
	    });
	    
	    theChildren.next().find("a").each(function(n){        
	        AllChildren[n] = $(this).text();        
	    });
	    allParentsString = AllParents.toString();
	    allChildrenString = AllChildren.toString();
	    EveryThing.push(theElement,allParentsString,allChildrenString,theDescription);


	    var TheUniverse = {
	    	Element: theElement,
	    	Description: theDescription,
	    	Parent: AllParents,
	    	Children: AllChildren
	    };	    
	    // var existingEntries = null;	   
		var existingEntries = JSON.parse(localStorage.getItem("A++"));
		if(existingEntries == null) existingEntries = [];
		var data = TheUniverse;
		localStorage.setItem("data", JSON.stringify(data));
		existingEntries.push(data);
		jsonEntries = JSON.stringify(existingEntries);
		// console.log(data);
		console.log(jsonEntries);
	    localStorage.setItem("A++", JSON.stringify(existingEntries));

		var csvContent = "data:text/csv;charset=utf-8,";



		// jsonEntries.forEach(function(infoArray, index){
		// 	console.log('infoarray: ',infoArray);
		// 	dataString = infoArray.join("\+");
	 //   		console.log('datastring: ',dataString);
	 //   		csvContent += dataString+ "\n";
		// }); 
		// JSONToCSVConvertor(jsonEntries, "Blood CSV", true);
		var encodedUri = encodeURI(csvContent);
		// console.log('encodedUri: ', encodedUri);
		// console.log(JSON.parse(localStorage.getItem("A++")));
		// window.open(encodedUri);

	});
}

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ';';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '"+';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}






