canvas = document.querySelector("canvas")
svg1 = document.querySelector("#svg1")
svg2 = document.querySelector("#svg2")

svg = document.querySelector("svg")

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getXCoor(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    return x;
}

function getYCoor(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let y = event.clientY - rect.top;
    return y;
}
var theme

$(".colorful-but").on("click", ()=> {
    theme = "colorful"
    console.log(theme)
})

$(".sea-theme-but").on("click", ()=> {
    theme = "sea"
    console.log(theme)
})


$("#svg1").on("click", (e)=>{
    $("#svg1").on("mousemove", (e)=>{
        genBubblesMouseMove(svg1, e)
    });
});


function genBubblesMouseMove(givenSvg, e) {
    var coorX = getXCoor(givenSvg, e); 
    var coorY = getYCoor(givenSvg, e);
    let bubbleCount = randomNum(1, 2) 
    for (i=0; i<bubbleCount;i++) {
        drawBubble(coorX+randomNum(-50, 50), coorY+randomNum(-50, 50))
    }
} 
 
var w = window.innerWidth;
var h = window.innerHeight; 
function addSand() {
    let waveImg = document.getElementById("waveImg")
    let waveHeight = 155
    waveImg.setAttribute("height", `${waveHeight}px`)
    console.log(waveHeight)
    waveImg.setAttribute("x", 0)
    waveImg.setAttribute("y", h-waveHeight-50)
}


console.log(w, h) 
// var sandWave = document.createElementNS("http://www.w3.org/2000/svg", "path");
// var arcPath = `M -20,${h} A 240,90 2 0,1 ${w},${h} `
// var arcPathAlt = `M0,0 L10,0C20,0,40,0,60,11.7C80,23,100,47,120,50C140,53,160,37,180,36.7C200,37,220,53,240,61.7C260,70,280,70,300,65C320,60,340,50,360,53.3C380,57,400,73,420,71.7C440,70,460,50,480,48.3C500,47,520,63,540,66.7C560,70,580,60,600,55C620,50,640,50,660,41.7C680,33,700,17,720,18.3C740,20,760,40,780,50C800,60,820,60,840,50C860,40,880,20,900,21.7C920,23,940,47,960,60C980,73,1000,77,1020,65C1040,53,1060,27,1080,13.3C1100,0,1120,0,1140,13.3C1160,27,1180,53,1200,60C1220,67,1240,53,1260,55C1280,57,1300,73,1320,80C1340,87,1360,83,1380,75C1400,67,1420,53,1430,46.7L1440,40L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z`
// sandWave.setAttribute("transform", "translate(0, 0px)");
// sandWave.setAttribute("d", arcPathAlt);
// sandWave.setAttribute("stroke", "antiquewhite");
// sandWave.setAttribute("fill", "antiquewhite");
// sandWave.setAttribute("stroke-width", "3");
// svg.appendChild(sandWave)

function drawBubble(x, y, theme) {
    var newBubble = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    let bubbleR = randomNum(5, 15)
    newBubble.setAttribute("r", bubbleR)
    newBubble.setAttribute("cx", x)
    newBubble.setAttribute("cy", y)
    
    
    // if(theme="sea") {
        newBubble.setAttribute("fill", "white");
        // newBubble.setAttribute("fill", `rgb(${randomNum(100,255)},${randomNum(100,255)},${randomNum(100,255)})`);
        //newBubble.setAttribute("stroke", "#70a6d5")
        // newBubble.setAttribute("stroke-width", "0.5")
        // newBubble.setAttribute("stroke-opacity", "0.5")

        newBubble.setAttribute("opacity", 0.5)
    // } else if (theme = "colorful") {
    //     newBubble.setAttribute("fill", `rgb(${randomNum(150,255)},${randomNum(150,255)},${randomNum(150,255)})`);
    //     newBubble.setAttribute("opacity", 1)
    // }
    

    // var bubArc = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // var arcPath = "M 110,30 A 70,70 0 0,1 170,100"
    // bubArc.setAttribute("d", arcPath);
    // bubArc.setAttribute("stroke-linecap", "round");
    // bubArc.setAttribute("stroke-linejoin", "round");
    // bubArc.setAttribute("stroke", "black");
    // bubArc.setAttribute("stroke-width", "3");
    // bubArc.setAttribute("fill", "none");
    // newBubble.appendChild(bubArc);
    svg.appendChild(newBubble)
    d3.select(newBubble) 
            .transition()
            .duration(600)
            .attr("cx", x + randomNum(-10, 10) * 5)
            .attr("cy", y + randomNum(-10, 10) * 5)
            .attr("opacity", 0)
            .attr("r", bubbleR - 5)
            .remove()
    
}

function clearSVG() {
    svg.innerHTML = "";
}
