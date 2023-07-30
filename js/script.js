function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

function draw() {
    const canvas = document.getElementById("tutorial").getContext("2d");
    const img = new Image(); // Create new img element
    
    img.onload = () => {
        // execute drawImage statements here
        canvas.drawImage(img,0,0);
    
    };
    img.src = "ImageLibrary\\Car\\Bert\\Bert.body.png"; // Set source path
    
    
}

draw();


