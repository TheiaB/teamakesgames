(function () { // closure = vars not accessible outside
    
    // if you hover over the <span class="highlighter">,
    // it highlights links with the hash hrefs of its href attribute
    
    // gets <span class="highlighter"> list
    var allSelectors = document.querySelectorAll(".highlighter");
    
    // for each of them
    for (i = 0; i < allSelectors.length; i++) {
        var selector = allSelectors[i];
        
        // when hovered
        selector.onmouseover = function() {
            var selectedElem = [];
            
            // collect its target IDs highlight="one,two,three"
            var selectedIds = this.getAttribute("href").split(",");
            // for each ID
            selectedIds.forEach((element) => {
                // find the dedicated grid item and add it to a list
                selectedElem.push(document.querySelector('#projects a[href="'+element+'"]'));
            });
            
            // for each in that list
            selectedElem.forEach((element) => {
                // highlight it
                element.classList.add("highlighted");
            });
            // let grid know its has highlighted status
            document.querySelector("#projects .project-grid").classList.add("has-highlighted");
        };
        
        // when stop hovered
        selector.onmouseout = function() {
            // remove all "highlighted" classes
            document.querySelectorAll(".highlighted").forEach((element) => {
                element.classList.remove("highlighted");
            });
            // remove parent grid highlighted status
            document.querySelector("#projects .project-grid").classList.remove("has-highlighted");
        };
    }
})(); // end closure