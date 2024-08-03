(function () { // closure = vars not accessible outside
        
    // look for all LINKS
    //var accToggles = document.querySelectorAll(".acc-nav>a");
    var accToggles = document.querySelectorAll('a[href^="#"]');

    // button shows all
    var showall = document.getElementById("showall");
    if(showall) {
        showall.addEventListener('click',function(e){
            showAllElements();
        });
    }
    
    function showAllElements() {
        document.body.classList.add('all-visible');
        var allelems = document.querySelectorAll(".acc-elem");
        allelems.forEach(function(elem,nr){
            elem.classList.add("active");
            elem.style.height = 'inherit';
        });
        // ajax loader
        /*
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("projects").innerHTML =
            this.responseText;
          }
        };
        xhttp.open("GET", "rsrc/ajax/section-projects.txt", true);
        xhttp.send();*/
        fetcher('projects');
        var unloaded = document.querySelectorAll('.unloaded');
        unloaded.forEach((section) =>{
            var id = section.id;
            if(id != null) {
                fetcher(id);
            }
        });
    }

    // e.g. the elision effect by default
    initElem = document.querySelector(".initial");
    if(initElem) {
        initElem.style.height = 'initial';
        initElem.classList.add("active");
    }
    document.body.classList.add("js-enabled");

    // if any accordion exists
    if(accToggles) {

        // go through all .acc-nav>a
        accToggles.forEach(function(elem,nr){

            // when clicked
            elem.addEventListener('click',function(e){
                
                // no # in browser URL, not automatic scroll
                event.preventDefault();
                
                // get the element with the id in LINK
                var accElem = document.getElementById(getAnchorHash(this));
                // some aren't loaded, fetch them in:
                if(accElem.classList.contains("unloaded")) {
                    fetcher(accElem.id);
                }
                
                // manually scroll down
                /*accElem.scrollIntoView({
                    behavior: 'smooth',
                    block: "start",
                    inline: "center"
                });*/

                setTimeout(function(){ // wait 100ms before scrolling to avoid glitch
                    // only do the scroll if necessary
                    if(!isInScreenHeight(accElem)) {
                        window.scroll({
                            top: (accElem.offsetTop + (accElem.scrollHeight/2) - window.innerHeight/2), 
                            left: 0, 
                            behavior: 'smooth' 
                        });
                    }
                }, 100);
                

                // add LINK active class
                this.classList.add('active');
                // toggle ELEMENT active class

                // add content active + height
                if(this.classList.contains('active')) {
                    
                    // set every other element to close
                    accToggles.forEach(function(elem_else,nr_else){
                        if(elem != elem_else) {
                            // remove active from link
                            elem_else.classList.remove('active');
                            // remove active from section
                            document.getElementById(getAnchorHash(elem_else)).classList.remove("active");
                            try {
                                document.getElementById(getAnchorHash(elem_else)).style.height = 0;
                                //document.getElementById("pack").style.height = 0;
                            }
                            catch { console.log(accElem.id + " doesn't exist.") }
                        }
                    });
                    
                    // reset other elments
                    try {
                        accElem.classList.add('active');
                        accElem.style.height = 'inherit';//accElem.scrollHeight + 'px';
                    } catch {
                        console.log(accElem.id+" doesn't exist")
                    }
                    
                    // if iframe exist, change source attribute to src attribute (= show it)
                    // REMOVED since I learned Lazyloading
                    /* var iframe =  accElem.querySelector(".slider-container iframe");
                    REMOVED FEATURE
                     * if(iframe && !(iframe.getAttribute("src"))) {
                        iframe.setAttribute("src",iframe.getAttribute("source"));
                    } else {
                        // if iframe doesn't exist, look for single image, change source attribute to src attribute (= show it)
                        var img =  accElem.querySelector(".slider-container img");
                        if(img) {
                            img.setAttribute("src",img.getAttribute("source"));
                        }
                    }*/
                }
                
                // if clicked again, remove active + height 
                /*else {
                    accElem.classList.remove('active');
                    accElem.style.maxHeight = '1px';
                }*/
                
            },{passive: true}); // end h2 listener
        }); // end each through h2
    } // end if exists at all
    
    // get <a href="#THIS">
    function getAnchorHash(elem) {
        return elem.href.substring(elem.href.indexOf('#')+1);
    }
    
    // true = it's onscreen
    // false = it's below
    // idk about above, not relevant here
    function isInScreenHeight(elem) {
        var rect = elem.getBoundingClientRect();
        // - 100 because that's the minimum for first h3 line to be included
        // the "or" is if you have to scroll up
        if((rect.y + 100) > window.innerHeight || rect.y<0) {
            return false;
        }
        else {
            return true;
        }
    }

})(); // end closure