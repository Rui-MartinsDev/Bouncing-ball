let ball = document.querySelector('div');
ball.addEventListener('mouseover', move);
let title =document.querySelector('#h1');
let timerId = null;
let ballWidth=ball.offsetWidth, ballHeight=ball.offsetHeight;
let hits=-1;
let windowWidth,windowHeight;



function generateRandomNumber() { //doesnt generate all colors (doenst includeA-F)
    const randomFraction = Math.random(); 
    const randomNumber = Math.floor(randomFraction * 999999) + 1;
    const formattedNumber = randomNumber.toString().padStart(6, '0');
    return formattedNumber;
  }
const speed = () => Math.random()*5+1; //returns a random number to make up for the speed

function move(){
    
    if (timerId) { //if the frame func was already going, stops it
        clearInterval(timerId);
    }
    let x=0; //starts here
    let y=60;
    let xD=speed();
    let yD=speed();

    timerId=setInterval(frame, 10); //starts the frame func every 10ms

    function frame(){
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        if (x>=windowWidth-ballWidth || x<0){ //touching the edges of the screen:
            xD *=-1;                    //inverts the movement
            ball.style.background ='#'+generateRandomNumber(); //changes the color
            hits--; //removes 1 point!
            title.textContent=`Ball hits: ${hits}`;
        } 
        if (y>=windowHeight - ballHeight || y<60) {
            yD*=-1;
            ball.style.background ='#'+generateRandomNumber();
            hits--;
            title.textContent=`Ball hits: ${hits}`;
        }
            x+=1 *xD; //updates the coords every reiteration
            y+=1 * yD;
            ball.style.left = x+'px'; //updates the ball position
            ball.style.top =  y+'px';
        
    }
    ballHits();
}
function ballHits(){
    hits++;
    title.textContent=`Ball hits: ${hits}`;
}
