/*-------------------------------- Constants --------------------------------*/

//const sound = null

/*---------------------------- Variables (state) ----------------------------*/
let time =0
let timeLeft= 10
let score= 0
let gameOver = false
let setOfColors = ['green', 'blue','red', 'black' ,'orange','yellow' ]
let randomColor1
let randomColor2
let randomColor3

/*------------------------ Cached Element References ------------------------*/
let scoreEl=document.querySelector('#score')
console.log(scoreEl)
let timerEl =document.querySelector('#time')

const circleClassEl = document.querySelectorAll('.circle')
//console.log(circleClassEl)
const starButton1 = document.querySelector('#startButton')
//console.log(starButton1)
const gameMessageEl1 = document.querySelector('#message1')
const gameMessageEl2 = document.querySelector('#message2')
const gameMessageEl3 = document.querySelector('#message3')
const restartButton = document.querySelector('#restartButton')

const c1Id = document.querySelector('#c1')
//console.log(c1Id)
const c2Id = document.querySelector('#c2')
//console.log(c2Id)
const c3Id = document.querySelector('#c3')
//console.log(c3Id)


/* 
document.getElementById('backGroundID').style.backgroundImage = 'url(' + 'C:/Users/Asus/code/ga/projects/projectone/assets/garden.png' + ')';
*/

/*-------------------------------- Functions --------------------------------*/


function initTheGame(){
    starButton1.classList.remove('hidden')
    restartButton.classList.add('hidden')
    gameOver = false
    timeLeft= 10
    timerEl.textContent= timeLeft
    time = setInterval( ()=> { timeCount() }, 1000)
    changecolor()
    checkGameOver();
    //render()


//timerEl = setInterval( ()=> {  runGame()  }, 1000) // to run the game for 10 seconds
//console.log('Timer', timer)

//scoreEl.textContent= score

//timerEl.display.textContent= timer
//console.log('score',score)

    

}

function changecolor()
{
    //  c1Id.style.backgroundColor=(Math.floor(Math.random() * setOfColors ))
    // c1Id.style.backgroundColor=(Math.floor(Math.random() * setOfColors[i] ))
     randomColor1 = Math.floor(Math.random() * 7)
     randomColor2 = Math.floor(Math.random() * 7)
     randomColor3 = Math.floor(Math.random() * 7)
    c1Id.style.backgroundColor=setOfColors[randomColor1]
    c2Id.style.backgroundColor=setOfColors[randomColor2]
    c3Id.style.backgroundColor=setOfColors[randomColor3]
    //console.log(setOfColors[randomColor1])
     gameMessageEl2.classList.add('hidden') 

}


function timeCount()
{

    if ( timeLeft === 0)
        { 
        clearInterval(time)
        
        }
    else if (gameOver == false)
        {
        timeLeft --
        timerEl.textContent= timeLeft
        changecolor()
        }
     
    checkGameOver()    
}



// initTheGame ()

// function runGame() {
//  // console.log('rungame func')
    
//     render();
//     changecolor()
//     checkGameOver();
    
    
// }



    


function render(){
     
        if (gameOver === true && score >= 30) { 
            console.log("SCORE IS > 30 you win")
            
            //restartButton.classList.remove('hidden')
            //console.log(restarButton)
            playWinningSound()
            gameMessageEl3.classList.remove('hidden')  // works
            starButton1.classList.add('hidden')
            //gameMessageEl3.innerHTML='you lost'
            
        } else{  
            
                console.log('SCORE LESS THAN 30 AND GAME IS OVER')
                 starButton1.classList.add('hidden')
                 playFailSound()
               return gameMessageEl1.classList.remove('hidden')
            
            }
        
            //restartButton.classList.remove('hidden')
            console.log(score)
            //gameMessageEl1.innerHTML='you lost'
            
        }       
     
    



function checkGameOver()

{     // What condition do i need to determine if the game is over? 

    if (timeLeft === 0 && gameOver == false){
      clearInterval(timeLeft)
       gameOver = true 
        console.log('gameover')
    
     render()
     restartButton.classList.remove('hidden')
    }
}


function circleClicked()
{   
   if ((c1Id.style.backgroundColor==='red' || c2Id.style.backgroundColor==='red' || c3Id.style.backgroundColor==='red' ) &&(timeLeft >0))
    { 
        score= score +10
        scoreEl.textContent=score
        playRedSound()
        gameMessageEl2.classList.remove('hidden')  //there is some thing wrong
        //gameMessageEl2.classList.add('hidden')
    }

}


function playRedSound(){
    const sound = new Audio("../assets/redSound.mp3 ")
    sound.play()
}

function playWinningSound(){
    const sound = new Audio("../assets/goodresult.mp3 ")
    sound.play()
}

function playFailSound(){
    const sound = new Audio("../assets/failsound.mp3 ")
    sound.play()
}




function playAgain(){
    time =0
    // timeLeft= 10
    
    score= 0
    scoreEl.textContent=score
    c1Id.style.backgroundColor= 'gray'
    c2Id.style.backgroundColor= 'gray'
    c3Id.style.backgroundColor= 'gray'
    gameMessageEl1.classList.add('hidden')
    gameMessageEl3.classList.add('hidden')
    starButton1.classList.remove('hidden')

    // initTheGame()
}

/*----------------------------- Event Listeners -----------------------------*/

//circleClassEl.addEventListener('click',circleClicked)

c1Id.addEventListener('click',circleClicked)
c2Id.addEventListener('click',circleClicked)
c3Id.addEventListener('click',circleClicked)

starButton1.addEventListener('click',initTheGame)
restartButton.addEventListener('click',playAgain)

//initTheGame()

