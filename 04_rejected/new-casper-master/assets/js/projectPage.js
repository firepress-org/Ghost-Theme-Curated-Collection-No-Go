$(document).ready(function() {

    var html = document.getElementById("projectData");
    var text = html.textContent;    // Don't or with innerText - then you have no consistency among browsers.

    var projectData = text.split('\n');

    // Initialize data objects
    var data = {projects:[]};
    var dataPoint = {};

    // Run through the data and store it properly into the data object
    // It's projectData.length - 1 because there seems to be an implicit newline at end.
    for(var i = 0; i < projectData.length; i++) {
        var splitLine = projectData[i].split(': ');
        splitLine[0] = splitLine[0].replace(/\s+/g,''); 
        splitLine[0] = splitLine[0].replace(/(\r\n|\n|\r)/gm,""); 
        if(splitLine[0] == '' && !$.isEmptyObject(dataPoint)) {
            data["projects"].push(dataPoint);
            dataPoint = {};
            continue;
        }
        else {                 
            switch(splitLine[0]) {
                case "name":
                    dataPoint["name"] = splitLine[1];
                    break;
                case "description":
                    dataPoint["description"] = splitLine[1];
                    break;
                case "blog":
                    dataPoint["blogLink"] = splitLine[1];
                    break;
                case "github":
                    dataPoint["githubLink"] = splitLine[1];
                    break;
                case "download":
                    dataPoint["downloadLink"] = splitLine[1];
                    break;                                                
                default:
                    break;
            }
        }
    }

    var uselessData = document.getElementById("projectData");
    uselessData.parentNode.removeChild(uselessData);

    // Load the html template into the actual page, in the projectList section
    $(".projectList").load("/project-template.html", function() {
        var templateScript = $(".projectList").html();
        $(".projectList").html("");   // Clear the template after it's been loaded
        var template = Handlebars.compile(templateScript);
        $(".projectList").append(template(data));
    });

});