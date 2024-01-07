let ball = document.querySelector('#div');  //the ball
ball.addEventListener('mouseover', move);   //updates the ball
let title =document.querySelector('#h1');   //shows the score

let timerId = null;
let ballWidth=ball.offsetWidth, ballHeight=ball.offsetHeight;
let hits=-1;
let windowWidth,windowHeight;
let colors= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let x=0, y=0;
var slider = document.getElementById("slider");

function updateSliderValue() { //for the slider
    var sliderValueElement = document.getElementById("sliderValue");
    sliderValueElement.textContent = slider.value;
}

function generateRandomColor() { // generates all colors
    let randomColor='';
    for (let i=0;i<6;i++){
        randomColor+= colors[Math.floor(Math.random()*colors.length)]
    }
    return randomColor;
  }

const speed = () => Math.random()*slider.value+1; //set the ball speed by returning a random number

function generateRandomPosition(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    x=Math.floor(Math.random()*(windowWidth-ballWidth))
    y=Math.floor(Math.random()*(windowHeight-ballHeight-60))+60
}

function move(){
    
    if (timerId) { //if the frame func was already going, stops it
        clearInterval(timerId);
    }
    generateRandomPosition();
    let xD=speed();
    let yD=speed();

    timerId=setInterval(frame, 10); //starts the frame func every 10ms

    function frame(){
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        if (x>=windowWidth-ballWidth || x<0){ //touching the edges of the screen:
            xD *=-1;                    //inverts the movement
            ball.style.background ='#'+generateRandomColor(); //changes the color
            hits--; //removes 1 point!
            title.textContent=`Score: ${hits}`;
        } 
        if (y>=windowHeight - ballHeight || y<60) {
            yD*=-1;
            ball.style.background ='#'+generateRandomColor();
            hits--;
            title.textContent=`Score: ${hits}`;
        }
            x+=1 *xD; //updates the coords every reiteration
            y+=1 * yD;
            ball.style.left = x+'px'; //updates the ball position
            ball.style.top =  y+'px';
        
    }
    ballHits();
}

function ballHits(){ //updates the score on hit
    hits++;
    title.textContent=`Score: ${hits}`;
}
