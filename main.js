const cards= document.querySelectorAll('.card');
let c=0;
let hasFlippedCard =false;
let firstCard, secondCard ;
result= prompt('Enter Your name');
document.getElementById("det").innerText = "Welcome, "+result+". To the Memory Game";

function flipCard(){
    this.classList.add("flip");

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard=this;
    } else{
        hasFlippedCard=false;
        secondCard=this;

        if (firstCard.dataset.framework===secondCard.dataset.framework){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            c++;

        }
        else{
            setTimeout( () =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 400);
        }
        
        if(c==8)
        alert("Congrats, "+result+ " You have completed the game");
    }
}

cards.forEach( card => card.addEventListener('click', flipCard))