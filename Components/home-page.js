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
        this.dataCard = this.card.querySelector(".card-body")
        card.addEventListener("click", () => { this.describe()})
        
        
        // card.addEventListener("dblclick", () => {this.deselect
    }

    describe() {
       //this.card.classList.toggle("group list");
       //console.log("DISPLAY PLEASE")
       const text = document.querySelectorAll(".card-body");
        Array.from(text).map(text => text.classList.remove("card-description"));
        this.dataCard.classList.add("card-description");
       
    //    this.card.classList.add("card-body-content");
    //    console.log("is this working?")
    }
    // deselect() {
    //   const reveal = document.querySelectorAll(".card-body");
    //   Array.from(text).map(text => text.classList.add("card-body"));
    //   console.log("hi");
    // }
}

let cards = document.querySelectorAll(".card")
cards.forEach(card => {new CardContent(card)});
console.log(cards);
let headBtn = document.querySelector(".navBtn");

headBtn.addEventListener("click", () => {
    console.log("hi");
})

const blank = () => {
    const about = document.querySelectorAll(".card-body");
        Array.from(about).map(text => text.classList.remove("card-description"));
}

let box = document.querySelector(".cards")

box.addEventListener("mouseout", () => blank())