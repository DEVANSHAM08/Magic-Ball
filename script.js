const options=[
"It is certain",
"It is decided so",
'Without a doubt',
'Yes definitely',
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you know",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful",


]

const magicBall=document.getElementById("mb-container")
const response= document.getElementById("response")

magicBall.addEventListener("click",function(){
const index= Math.floor(Math.random()*20)
const message = options[index]


setTimeout(() => {
    response.textContent =message;
    response.style.fontSize='20px';
    magicBall.className="magicball__outer animate";

    setTimeout(()=>{

        return magicBall.className="magicball__outer"
    },3000)

}, 3000);

})