
const carBeetle = {
    fileName:"Beetle",
    CarPositionOver:11,
    CarPositionDown:59,
    ArchPositionOver:16,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:55
};

const carT3_squareback = {
    fileName:"T3_squareback",
    CarPositionOver:11,
    CarPositionDown:61,
    ArchPositionOver:19,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:94,
    RoofRefOver:67,
    RoofRefDown:57
};

var currentDisplay = {
    id:01,
    body:carBeetle,
    baseColour:"#008000",
    secondColour:"",
    twoTone:0,
    darkColour:-0.25,
    lightColour:0.25,
    wheelName:"BlackFechs",
    wheelSize:12,
    frontTyreSize:18,
    backTyreSize:18,
    bodyDrop:1,
    rack:"BowRack",
    rackAccessory:"LongSurf",
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
    if (event.target.matches('.BeetleButton')) {
        currentDisplay.body = carBeetle
        draw()
    }
    if (event.target.matches('.T3_squarebackButton')) {
        currentDisplay.body = carT3_squareback
        draw()
    }
}

function loadImageToArray(imageIn) {
 
    const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");

    







}

function draw() {
    const floorline = 100;
    const visibleCanvas = document.getElementById("mainCanvas").getContext("2d");
    const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");
    const body = new Image(); 
    const frontWheel = new Image(); 
    const backWheel = new Image(); 
    const arches = new Image();

    var imagesToLoad = [];
    var imagesLoaded = [];
    var imageCount = 0;


    visibleCanvas.clearRect(0,0,128,128);
    visibleCanvas.offscreenCanvas = document.createElement("canvas");
    visibleCanvas.offscreenCanvas.height = visibleCanvas.height;
    visibleCanvas.offscreenCanvas.height = visibleCanvas.height;


    body.src = "ImageLibrary\\Car\\"+currentDisplay.body.fileName+"\\"+currentDisplay.body.fileName+".body.png"; // Set source path
    imagesToLoad.push(body);
    frontWheel.src = "ImageLibrary\\Wheels\\Wheel."+currentDisplay.wheelSize+"."+currentDisplay.wheelName+".png"
    imagesToLoad.push(frontWheel);
    backWheel.src = frontWheel.src
    imagesToLoad.push(backWheel);
    arches.src = "ImageLibrary\\Car\\"+currentDisplay.body.fileName+"\\"+currentDisplay.body.fileName+".arches.png";
    imagesToLoad.push(arches);








    imagesToLoad.forEach(image =>{
        image.onload = ()=>{ 
            imageCount +=1;
            if(imageCount == imagesToLoad.length){

                visibleCanvas.drawImage(arches,currentDisplay.body.ArchPositionOver,currentDisplay.body.ArchPositionDown+currentDisplay.bodyDrop);

                visibleCanvas.drawImage(body,currentDisplay.body.CarPositionOver,currentDisplay.body.CarPositionDown+currentDisplay.bodyDrop);

                visibleCanvas.drawImage(frontWheel,
                    currentDisplay.body.FrontWheelOver - currentDisplay.wheelSize/2,
                    floorline - currentDisplay.wheelSize - (currentDisplay.frontTyreSize - currentDisplay.wheelSize)/2);

                    visibleCanvas.drawImage(backWheel,
                    currentDisplay.body.BackWheelOver - currentDisplay.wheelSize/2 ,
                    floorline - currentDisplay.wheelSize - (currentDisplay.frontTyreSize - currentDisplay.wheelSize)/2);

            }
        }



    })

    
}
draw();


