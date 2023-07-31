
const carBert = {
    fileName:"Bert",
    CarPositionOver:11,
    CarPositionDown:59,
    ArchPositionOver:16,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:55
};

const car3cube = {
    fileName:"3cube",
    CarPositionOver:11,
    CarPositionDown:61,
    ArchPositionOver:19,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:94,
    RoofRefOver:67,
    RoofRefDown:57
};

const wheelBlackFechs = {
    filename:"BlackFechs",
    size:12
};


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
    if (event.target.matches('.BertButton')) {
        draw(carBert)
    }
    if (event.target.matches('._3cubeButton')) {
        draw(car3cube)
    }
}

function draw(carSelection = carBert) {
    const floorline = 100;
    const canvas = document.getElementById("tutorial").getContext("2d");
    const body = new Image(); 
    const frontWheel = new Image(); 
    const backWheel = new Image(); 

    const carChoice = carSelection
    const wheelChoice = wheelBlackFechs

    canvas.clearRect(0,0,128,128);

    body.onload = () => {
        canvas.drawImage(body,carChoice.CarPositionOver,carChoice.CarPositionDown);
    };

    frontWheel.onload = () => {
        canvas.drawImage(frontWheel,
            carChoice.FrontWheelOver - wheelChoice.size/2,
            floorline - wheelChoice.size - (16 - wheelChoice.size)/2);
    }
    backWheel.onload = () => {
        canvas.drawImage(backWheel,
            carChoice.BackWheelOver - wheelChoice.size/2 ,
            floorline - wheelChoice.size - (16 - wheelChoice.size)/2);
    }

    body.src = "ImageLibrary\\Car\\"+carChoice.fileName+"\\"+carChoice.fileName+".body.png"; // Set source path
    frontWheel.src = "ImageLibrary\\Wheels\\Wheel."+wheelChoice.size+"."+wheelChoice.filename+".png"
    backWheel.src = frontWheel.src
    
}
draw(carBert);


