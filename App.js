let GameSeq = [];
let UserSeq = [];

let btns = ["yellow", "red", "green", "purple"]

let Started = false;
let Level = 0;


let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if (Started == false) {
        console.log("game started")
        Started = true

        LevelUp();

    }
});


function btnFlash(btn) {
    btn.classList.add("white")
    setTimeout(function() {
        btn.classList.remove("white")
    }, 250)
};


function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function() {
        btn.classList.remove("userFlash")
    }, 250)
};


function LevelUp() {
    UserSeq = []
    Level++;
    h2.innerText = `Level ${Level}`;

    let randidx = Math.floor(Math.random() * 4);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`);

    GameSeq.push(randColor);
    console.log(GameSeq);
    btnFlash(randbtn);

};

function checkAns(idx) {

    if (UserSeq[idx] === GameSeq[idx]) {
        if (UserSeq.length == GameSeq.length) {
            setTimeout(LevelUp, 1000)
        }
    } else {
        h2.innerHTML = `Over Game! Your soce was <b>${Level}</b> <br> Pess any key to start.`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"

        }, 150)
        reset()
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn)
    userFlash(btn)

    UserColor = btn.getAttribute("id");
    UserSeq.push(UserColor);

    checkAns(UserSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (all of allbtns) {
    all.addEventListener("click", btnPress)
};

function reset() {
    UserColor = [];
    GameSeq = [];
    Started = false;
    Level = 0;
}