function toast(text) {
    // Get the toast DIV
    var toast = document.getElementById("toast");
    
    toast.innerHTML = text;

    // Add the "show" class to DIV
    toast.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}