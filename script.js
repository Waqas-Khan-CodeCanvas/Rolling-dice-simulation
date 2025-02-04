const rollBtn = document.querySelector("button");
const dicImages = document.querySelectorAll(".dice-image");

const randomNumber=(()=>{
    const number=Math.floor(Math.random()*6)
    console.log(number);
    return number;
})
const displayDiceImage=(()=>{
    dicImages.forEach((index)=>{
        if (index.classList.contains("d-block")) {
            index.classList.replace("d-block","d-none")
        }
    })
    dicImages[randomNumber()].classList.replace("d-none","d-block")
})
displayDiceImage()

rollBtn.addEventListener("click",()=>{
    displayDiceImage()
})