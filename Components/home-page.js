// class LogInBtn {
//     constructor(btn) {
//         this.btn = btn;

//         btn.addEventListener("click", () => this.loggin());
//     }

//     loggin() {
//         console.log("hi");
//     }
// }

class CardContent {
    constructor(card) {
        this.card = card;
        card.addEventListener("click", () => { this.describe()})
    }

    describe() {
       //this.card.classList.toggle("group list");
       console.log("DISPLAY PLEASE")
    }
}

let cards = document.querySelectorAll(".card")
cards.forEach(card => {new CardContent(card)});
console.log(cards);
let headBtn = document.querySelector(".navBtn");

headBtn.addEventListener("click", () => {
    console.log("hi");
})



