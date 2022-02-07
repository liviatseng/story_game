const bgmusic = new Audio ('rrh.mp3')

let musicPlaying = false

const startsong = () =>{
    if (musicPlaying == false){
        bgmusic.play()
        musicPlaying = true
    } else{
        bgmusic.pause()
        musicPlaying = false
    }
}
const startGame = () => {
    //change text
    document.querySelector(".story").innerHTML = 
    "<p>You're mother is asking you to take the basket to your grandma...</p>"

    //add new picture
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic1.jpeg">'

    //create new buttons
    document.querySelector(".buttons").innerHTML = 
    '<button class="accept" onclick="accept()">Accept</button>'+
    '<button class="reject" onclick="reject()">Reject her</button>'
}

const accept = () => {
    document.querySelector(".story").innerHTML = 
    "<p>You are on your way to your grandma's house."+ 
    " Once you entered the woods, the wolf comes out. Will you...?</p>"
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic2.jpeg">'
    document.querySelector(".buttons").innerHTML = 
    '<button class="shout" onclick="shout()">Shout loudly</button>'+
    '<button class="greet" onclick="greet()">Calmly greet him</button>'
}

//still need to change the story
const reject = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/angrymom.gif">'
    document.querySelector(".story").innerHTML = 
    "<p class='font-fail'>Your mom is angry!</p>"
    document.querySelector(".buttons").innerHTML= "<p class='font-fail'> Mission failed.</p>"
}

//still need to change the story
const shout = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic2-2.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p class='font-fail'>It's too late! The wolf caught you...</p>"
    document.querySelector(".buttons").innerHTML= "<p class='font-fail'>Mission failed.</p>"
}

const greet = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic3.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p>The wolf is asking you where are you going. Will you...?</p>"
    document.querySelector(".buttons").innerHTML =
    '<button class="answer" onclick="answer()">Answer him</button>'+
    '<button class="run" onclick="run()">Run without answering</button>'
}

const answer = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic4.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p>There is a garden full of flowers! Will you...?</p>"
    document.querySelector(".buttons").innerHTML =
    '<button class="stop" onclick="stop()">Stopped and pick some flowers</button>'+
    '<button class="pass" onclick="pass()">Passed the garden</button>'
}

const run = () => {    
    document.querySelector(".image").innerHTML = 
    '<img src="images/fall.gif">'
    document.querySelector(".story").innerHTML = 
    "<p class='font-fail'>YOU FALL DOWN THE HILL!</p>"
    document.querySelector(".buttons").innerHTML= "<p class='font-fail'>Mission failed.</p>"
}

//not done (all)要在到pic5-1
const stop = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/eat.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p class='font-fail'>The wolf swallowed your grandma!</p>"
    document.querySelector(".buttons").innerHTML= "<p class='font-fail'>Mission failed.</p>"
}

//not done (all)
const pass = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic6.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p>The hunter saved your grandma!</p>"
    document.querySelector(".buttons").innerHTML =
    '<button class="success" onclick="success()">Continue...</button>'
}

const success = () => {
    document.querySelector(".image").innerHTML = 
    '<img src="images/pic6-1.jpeg">'
    document.querySelector(".story").innerHTML = 
    "<p>It's time to enjoy the food with your grandma and the hunter!</p>"
    document.querySelector(".buttons").innerHTML =
    "<p>You successfully completed the mission from your mom!!</p>"
}
