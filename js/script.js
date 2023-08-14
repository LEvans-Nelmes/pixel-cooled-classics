
// CARS
const scaleFactor = 2;

const carBeetle = {
    fileName:"Beetle",
    CarPositionOver:11,
    CarPositionDown:59,
    ArchPositionOver:16,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:55,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAjCAIAAAARyBMdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASmSURBVGhDzZo9aBRBFMcvh4X5qBQrwdYmoKCiwiWiIMbCSiRNChtJYRkbo0UEYxBMKRJsbC1FIVELNXegFoJCQOyCIAiCVY7Y6f/2Pz5eZr9mdvYjf5b1zezMm5nfvJmb3Ti0NvGqtfu0sX7WWEm68fSPsZQeTO81VqTxyTfGqkW7hWMiuERe7gJZelh7+J451al5jkIQY5aRu4th6FILJasL0oY5EqKmcObJN2O1Wu+uHtZJLTzCnRBP9j5EebYmfhw11n+xfBU0m+cIiIB199Z2f37b5OZpaXQf7kAJLoCYUXH03vDtxWFCF1URmE1yFIg3+78xYHeOkKB02fukMJNQ6YHZNv/WLkB8fvELIZosH3nVQmGrPOYPl2zN4WqMY/1C5FrBC5RT10+XQrMZjtL1YsEYIqDsHvxsEpFKCcwGOLLTWNRMQr6bY6DQFlBqmuEom4lH9Pvt6jH8Rpt0IVm/wl6KT1sgymo5YvfhhS7KhXz8vPR6vU6nw2IhQiwby1/oBn+4qRCU5Zx7QMpYecJqwoEOBoIRHF9OvoZdYF2jysfOKYwcDovtCfDAnlxaPQI/zKQKHDCD4lHCzaQdxFMxlyRCkpm+0jGIlxYkeZmsTElh/bYDcBKYMAoEZpF4zAaHxWKsSBm7mF5TIis00sTRoq0Cu6TVQ4hO4BO/fuIQSfeo9OCYhi/eLawUY8WEwSfi85KwRtMZbVlynCE9N+4onTgiyKUTIRSs2aZBZQwysUWWF47ZjHL7rKszLHxR5nDkNuEIMXcwmqOvdNQLO3LMbtdRGl8cJe5sJe11PoujhCEd6ZMz5EskkKMl6VJZDvU8wWcaShiJ4ZnKUUMkQTilO5FXIKCuV/lcsWO+HIVXfDiUDhc6txpKDMlkjoT4d3oMRxOcVPRensGC3RLoUZ4RHzXOkRAzhqPJinM2BGPr1yzuiyNLg8c7lcBRQ0QSx13c3REITT1CZJYLkQIXd44aYm5nhJ34Z/U0lDZHDTFO0JouYyVFn9UJ5riP2UW+PgHCgugyHJkqb45zrT2EGCeYdgKwPjizsEZZBUdIBumr3OFot5yAuYVx2MdfjOEe52i/FyYGPFpFkxnHqPjXZtwdd9UaBBAYAtlBLsNh9IkQBMsLG/fvbF359NNk7ZTNkfV1MLJV2hmy2o6jbEqMJhgyogLDQXhK9bEDKzS0BhwvrJ9ngsKiljrw5dIqlYhS51SkjCbwyJrLtIN0XLLIZI2vTj2joV+RSa/NzySz36/hjseoIx9C0Anx5Sjf8mUpd7Y4qe4QKV2eTQAlEMEGMV4IO6Bsdzodnm+QpXuT27M06batkCzsM1uMl4qcwy09oxVpaPPr5eihEQC2CXEzEnMh1iwluKxBihEuuuJdBqlltVWsaQsCWyEuil/1h7rdblRgIH4fpkIgWl/YSmRXQNgfZVkUG1T8vxHov5FxQZvzI3fJmZmZ6NFAK4ceG8tf8fOXsWqX1Y3CwUGUWvqPdP35bXPugYUrhJ0ldFrwxVdc/Qqcy/gEkBgvJO33mbJkTSBQnlg+ZxJ1aWT/I9zRNCGG7FS5qokjFPjX6mKSHb9SiK1W6x/6jEwfee8XAgAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAOCAIAAACwxuV7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC5SURBVFhH7ZaNCYAgEEa1QXKSxolmihaJxmmSBMX0VPw5oVN6BF2gct/LSH4uF4uz3auuXPb50FVX1MWJOootZ+hLEybOpO8uyRUlOWOIgIwTcJQfvgtN+DjQUWls4pqaxAl/a0UQ14THcTR82hx8Ca+jX1AMLoTQJQKy54DqF28ngo6K0poO6DvK6RAINVMS5+wklDVV9AY0KbD/tTF2kAEMlo/ywu4jie/+K3FNOlGL2BMbOBocxh45DFe1h+5b2gAAAABJRU5ErkJggg=='
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
    RoofRefDown:57,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAgCAIAAACXXGGzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7Zm9axRBGIf3rAzpbP0DRBAMaKFwFz9A4hViaWsvdmlMLKM2WsnV2lpbJFHwIwaCoKAgiH+A2InNEQvh/MXf8N6b2fncvd3bwofl8u7ezOzMs/O1l97W4EXRAb7sXDJRDqvPfpuoNg9vHDVRUZxafm2iZObsUfTN0Eh96DTL5tw8Lt5feN8/h6Bs8MLTbyY6zNubJ0zkITdjOD1sPh9+vjP+yYth5uMREsdr+1dvnWdLAnVFShMVxd17C2Lk3fFPDFAOAx8oITcjbzr4vhStnjAHj5SIAB63RntyGgUp0YXRf+EiMQsRlVkZkYsqUzweMX/bQkvklXSy3GmqZUQueIf9B4vHzCU/rXq0JKIz/rucTQUvHNfoXzxNRG4UVdmeR0uizFPtUPmZIaPMrQHa8AiDIpHIPGVd7zLhLtm4R5oSWbJGVwBFWUE6dfJyljQnHpr1aL2lUOLG+lRrm3B3jSkyVyVqy1ko0CUb9Ahr2KNgw4F64+C0SHjFnMRgYhyySkiZOHglQDkZNk8p2SUNk7FL+lT2au4fxY5+PxXkXcUay9c2T5vIBXM5h7+Mr/K31tAL1yf8LdFpdJWc28mIx5StkyZlaes4zuenQRvLq7/tUWY0vFri0+kleicNSkhPj8TsBVbXAJyh+v3+7u4uBrizQwnl7CSr5hprAKH8ydez268em3PtkQZ9NegCtBDo8mG5AtqIoviA5RPXoxetZwyV+KRN43Fl58qj4g/6IDP/JwrMDreuI1gaPMHn1CPGC9ZBxD6VyGkiF282z5ioKFAUA+s9DGMTA9OcxJBCNFkFOksAViHViHgUiZyP0vFVjiPCnHSDctM47UrMQHB2C7dHbJHCnbEyM/eISaoLkzhHJ1Qe8gi4xQm0GTmtZSuwpgtNeKwzj+u1KKX+PugRcDtpewTlcsWg818W4QfQEY+ir9yEaAdyYnmcvhf6fvWlRNze938fZMSBZFJ014BE1t/ZBKm/OU+gnNh4XLl8GwdjnYixz6CGj6EFlbmTIyWaEz/pXcGZxnjEZrJ38oP0bZbIDBSUgqh03mkuoCacBFNI6Qq+b6fjGu+M5UTpEomkb0ilXiWisA5ZTdBdQQ5+BXRMpPCDdQabR55wC8mY5HoE+qcNdHDce1brDCRyUEfL1A2u2QQnG+vm91NuNreXX/Ymkwkiaxd6cfgRnxVqQPTSP0OPQqBMbRBUa0LYo0jUHPRH/k4pjEajH79WEVT2CCyVjOsg4rTEaMn1u4IPbXO8tj/dP2pYSqc8VmAm9XdSLtntsT6oh7P/twYm+joec2nKI4gOjUZpU2JRFH8BSmCT1otiw74AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAANCAIAAACitD4nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVEhL5ZbRDYAgDAXBQWQSxzHOZFzEOI6TiKaJCERKS6Tq/cgHwdeDJtVzt6iAYe1h5TC2E6zeQFjCfX5fRFSBi3Ad5PwNfA+Sp1gwe2rByX+KwFco2QWGaH4QkVubQBdZkcLNl9b4FZ6LXQTtekU9Cn4Y1osQ5YKAm/8LrVHkPrQxBpYkJIwVZUTYgYp5UF0XpcLHR2wX/J8eM5JVPDIVV0T11khKQSVUagNLAUgZR14g5gAAAABJRU5ErkJggg=='
};

// WHEELS

const wheelBlackFechs = {
    name:"BlackFechs",
    size:12,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACxSURBVChTbVGxDQMhDPRHaaK0rMAQFNmEDdggA6T+hg0YIkpLwRCsQBulzcERI0V/hTkfhw1me95e8sP1cZlM5H3/TCZy5sLtGCPTWuu+7yC09kpweO/HrhhjEFtrTFNK8J2YHMI5R7LlnLVLKYWVrLVU2LdXAgNA9CgVgH27CQygOjwdFMnXnSBpFxCtCqzXQdX6erMQwnod1L9eiKrMiXOYOi0AE0Jcwxxix/G3iHwB9KprWUzaXYAAAAAASUVORK5CYII='
}

// TYRES

const tyre14Normal = {
    size:14,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdSURBVChTY9xhu4sBBqq/VUJZMNDK1Q5lMTAwQWls6oAAWRCqFKs6CIBLgZTiUQcBEAWMxsbGED5BgHArQTCklCLHBx4AVAYylaBqiAKoA/Cohksh3IpVNUKQgQEAAEsZj9u24qUAAAAASUVORK5CYII='
}

const tyre16Normal = {
    size:16,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdSURBVDhPY9xhu4sBCVR/q4SyYKCVqx3KAgOEBkylyACujQlC4VcNBHAFIA0EVUMARBnUBuIBo7GxMZRJHCDZhmGhAS3m8QOgYrKcRKQlEGVQGwjqgSsgMXkzMAAA34Ec7yRy2h0AAAAASUVORK5CYII='
}

const tyre18Normal = {
    size:18,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABsSURBVDhPY9xhu4sBFVR/q4SyYKCVqx3KggEUbZgakAGyZiYoTUgPECArgGojqAcC4MpA2ojUAwEQxQhHkgQYjY2NoUxSAJm2DWttmOmNIABqocCRJFkIUQy1jUidcGUIRxLUiayArGzKwAAA7j4i85xta+wAAAAASUVORK5CYII='
}

var currentDisplay = {
    id:1,
    body:carBeetle,
    baseColour:"#ff7563",
    secondColour:"",
    twoTone:0,
    darkColour:-0.25,
    lightColour:0.25,
    wheels:wheelBlackFechs,
    frontTyre:tyre16Normal,
    backTyre:tyre18Normal,
    bodyDrop:4,
    rack:"BowRack",
    rackAccessory:"LongSurf",
};

//-----------------------------------------------
// Functions for website setup
//-----------------------------------------------


Coloris({
    el: '.coloris',
    swatches: [
      '#264653',
      '#2a9d8f',
      '#e9c46a',
      '#f4a261',
      '#e76f51',
      '#d62828',
      '#023e8a',
      '#0077b6',
      '#0096c7',
      '#00b4d8',
      '#48cae4'
    ],
    onChange: (color) => {
        currentDisplay.baseColour = color
        console.log('New color', color)
        draw()
    } 
  });

  Coloris.setInstance('.instance3', {
    theme: 'polaroid',
    //swatchesOnly: true
  });

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function openCanvasURL() {
    const visibleCanvas = document.getElementById("mainCanvas")
    pngUrl = visibleCanvas.toDataURL();
    console.log(pngUrl)
    // window.open(pngUrl, '_blank');
    visibleCanvas.toBlob((blob) => window.open(URL.createObjectURL(blob), '_blank'));
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


//-----------------------------------------------
// Functions for building image
//-----------------------------------------------

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(rgbArray) {
    return "#" + (1 << 24 | rgbArray[0] << 16 | rgbArray[1] << 8 | rgbArray[2]).toString(16).slice(1);
}

function loadImageToArray(imageIn) {
 
    const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");

    hiddenCanvas.clearRect(0,0,128*scaleFactor,128*scaleFactor);

    width = imageIn.width;
    height = imageIn.height;

    hiddenCanvas.imageSmoothingEnabled = false;
    hiddenCanvas.drawImage(imageIn,0,0,scaleFactor*width,scaleFactor*height);
    var imageData = hiddenCanvas.getImageData(0,0,128*scaleFactor,128*scaleFactor);
    var pixel = imageData.data

    var r=0, g=1, b=2,a=3;
    for (var p = 0; p<pixel.length; p+=4)
    {
        if (
                pixel[p+r] == 184 &&
                pixel[p+g] == 61 &&
                pixel[p+b] == 186) // if goaway-pink then change alpha to 0
            {pixel[p+a] = 0;}
    }

    return imageData

}

function colourConvert(imageDataIn, oldRGB, newRGB) {

    var imageDataOut = imageDataIn;
    var pixel = imageDataOut.data

    var r=0, g=1, b=2,a=3;
    for (var p = 0; p<pixel.length; p+=4)
    {
        if ( pixel[p+r] == oldRGB[0] && pixel[p+g] == oldRGB[1] && pixel[p+b] == oldRGB[2])
            {
                pixel[p+r] = newRGB[0];
                pixel[p+g] = newRGB[1];
                pixel[p+b] = newRGB[2];
            }
    }

    return imageDataOut

}

function drawImageFromData(imageName,x,y,hiddenContext,visibleContext,colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank') {

    imageName.data = loadImageToArray(imageName);

    // if we have a colour to convert, we swap the shades:
    if ( colourConvertTo !='blank' ) {

        // base colour convert
        imageName.data = colourConvert(
            imageName.data,
            [0,168,243],
            [
                hexToRgb(colourConvertTo).r,
                hexToRgb(colourConvertTo).g,
                hexToRgb(colourConvertTo).b
            ]
        );
        
        // highlight colour convert
        if ( highlightRatio !='blank' ) {
            imageName.data = colourConvert(
                imageName.data,
                [140,255,251],
                [
                    hexToRgb(colourConvertTo).r*(1+highlightRatio),
                    hexToRgb(colourConvertTo).g*(1+highlightRatio),
                    hexToRgb(colourConvertTo).b*(1+highlightRatio)
                ]
            );
        };

        // lowlight colour convert
        if ( lowlightRatio !='blank' ) {
            imageName.data = colourConvert(
                imageName.data,
                [63,72,204],
                [
                    hexToRgb(colourConvertTo).r*(1+lowlightRatio),
                    hexToRgb(colourConvertTo).g*(1+lowlightRatio),
                    hexToRgb(colourConvertTo).b*(1+lowlightRatio)
                ]
            );
        };
    }


    hiddenContext.clearRect(0,0,128*scaleFactor,128*scaleFactor);
    hiddenContext.putImageData(imageName.data,0,0);
    visibleContext.imageSmoothingEnabled = false;
    visibleContext.drawImage(hiddenCanvas,x*scaleFactor,y*scaleFactor);

}

function draw() {
    const floorline = 100;
    const visibleCanvas = document.getElementById("mainCanvas")
    const visibleContext = visibleCanvas.getContext("2d");
    const hiddenCanvas = document.getElementById("hiddenCanvas");
    const hiddenContext = hiddenCanvas.getContext("2d")

    visibleContext.imageSmoothingEnabled = false;
    hiddenContext.imageSmoothingEnabled = false;

    const body = new Image(); 
    const frontWheel = new Image(); 
    const backWheel = new Image(); 
    const arches = new Image();
    const frontTyre = new Image(); 
    const backTyre = new Image(); 

    var imagesToLoad = [];
    var imageCount = 0;


    body.src = currentDisplay.body.imageBody
    imagesToLoad.push(body);
    frontWheel.src = currentDisplay.wheels.imageWheel
    imagesToLoad.push(frontWheel);
    backWheel.src = frontWheel.src
    imagesToLoad.push(backWheel);
    arches.src = currentDisplay.body.imageArches
    imagesToLoad.push(arches);
    frontTyre.src = currentDisplay.frontTyre.imageTyre
    imagesToLoad.push(frontTyre);
    backTyre.src = currentDisplay.backTyre.imageTyre
    imagesToLoad.push(backTyre);


    
    imagesToLoad.forEach(image =>{
        image.onload = ()=>{ 
            imageCount +=1;
            if(imageCount == imagesToLoad.length){

                visibleContext.clearRect(0,0,128*scaleFactor,128*scaleFactor);
                visibleContext.imageSmoothingEnabled = false;
                
                drawImageFromData(arches,
                    currentDisplay.body.ArchPositionOver,
                    currentDisplay.body.ArchPositionDown+currentDisplay.bodyDrop,
                    hiddenContext,
                    visibleContext
                );

                drawImageFromData(frontTyre,
                    currentDisplay.body.FrontWheelOver - currentDisplay.frontTyre.size/2,
                    floorline - currentDisplay.frontTyre.size,
                    hiddenContext,
                    visibleContext
                );

                drawImageFromData(backTyre,
                    currentDisplay.body.BackWheelOver - currentDisplay.backTyre.size/2 ,
                    floorline - currentDisplay.backTyre.size,
                    hiddenContext,
                    visibleContext
                );  

                drawImageFromData(frontWheel,
                    currentDisplay.body.FrontWheelOver - currentDisplay.wheels.size/2,
                    floorline - currentDisplay.wheels.size - (currentDisplay.frontTyre.size - currentDisplay.wheels.size)/2,
                    hiddenContext,
                    visibleContext
                );

                drawImageFromData(backWheel,
                    currentDisplay.body.BackWheelOver - currentDisplay.wheels.size/2 ,
                    floorline - currentDisplay.wheels.size - (currentDisplay.backTyre.size - currentDisplay.wheels.size)/2,
                    hiddenContext,
                    visibleContext
                );  

                drawImageFromData(body,
                    currentDisplay.body.CarPositionOver,
                    currentDisplay.body.CarPositionDown+currentDisplay.bodyDrop,
                    hiddenContext,
                    visibleContext,
                    currentDisplay.baseColour,
                    currentDisplay.lightColour,
                    currentDisplay.darkColour
                );
                 
                
            }
        }



    })

    
}
draw();


