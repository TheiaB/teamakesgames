
// hash loader
// (when page loads with a #project, it already activates said project)
!function(){
    if(window.location.hash) {
        var accElem = document.querySelector(window.location.hash);
        if(accElem) {
            var initElem = document.querySelector(".initial");
            if(initElem) {
                initElem.style.height = '0';
                initElem.classList.remove("active");
            }
            if(accElem.classList.contains("unloaded")) {
                fetcher(accElem.id);
            }
            accElem.classList.add('active');
            accElem.style.height = 'inherit';
        }
    }
}();
function share(elem) {
    try {
        navigator.clipboard.writeText(window.location.href.split('#')[0]+'#'+elem.parentElement.parentElement.id);
        toast('copied to clipboard!');
    }
    catch (err) {
        consone.log(err);
    }
}

async function fetcher(id) {
    var domPosition = document.getElementById(id);
    var file = '/rsrc/ajax/section-'+id+'.txt';
    let x = await fetch(file);
    let y = await x.text();
    domPosition.innerHTML = y;
}
//var shareElem = document.querySelectorAll(".share span");
//if(shareElem) {
//    Array.from(shareElem).forEach(function(element) {
//        element.addEventListener('click', share(element));
//    });
//}