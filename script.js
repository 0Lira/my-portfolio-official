
document.getElementById("toggleSidebar").onclick = function() {toggleSidebar()};

function toggleSidebar() {
    var display = document.getElementById("navbar").style.visibility;
        if(display == "hidden")
            document.getElementById("navbar").style.visibility = 'visible';
        else
            document.getElementById("navbar").style.visibility = 'hidden';
}