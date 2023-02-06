var bodyString = "First of all, thank you so much for being with me all these years."+
" I am so lucky to have a girl like you who always helps me grow. "+
" You are the one who makes me happy. I love loving you, I love" +
" being your boyfriend and I would love even more to be called your husband."+
" I could not have found any better girl than you. I am so proud of you. "+
" We have stood up strong even after big fights and arguments. "+
" We know that it is going to be more difficult in coming days, but "+
" we will pass that test together with love, trust and understanding. "+
" Its just our 3rd anniversary and I will be "+
" waiting for our 80th anniversary. I am with you forever and ever."+
" I love you forever and ever 🖤🖤🖤";

const LETTER_DATA = [
    "2023/02/07",
    "Dear Love,",
    "",
    bodyString,
    "",
    "Yours,",
    "Biplove",
];


function loadLetter() {
    document.getElementById("paper").className = "paper";
    anime({
        targets: '#paper',
        top: '0px',
        scaleY: 1,
        easing: 'easeInOutQuad',
        duration: 1500,
    });
      
    var initialDelay = 4000

    // Date
    var typewriter = new Typewriter(document.getElementById("date"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(2000).typeString(LETTER_DATA[0]).start();

    // Greeting
    var typewriter = new Typewriter(document.getElementById("greeting"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[1]).start();

    var typewriter = new Typewriter(document.getElementById("upperspace"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[2]).start();

    // Body
    initialDelay += 2000
    var typewriter = new Typewriter(document.getElementById("body"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[3]).start();

    var typewriter = new Typewriter(document.getElementById("lowerspace"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[4]).start();

    initialDelay += 103000
    var typewriter = new Typewriter(document.getElementById("footerType"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[5]).start();

    initialDelay += 1500
    var typewriter = new Typewriter(document.getElementById("footerName"), {
        loop: false,
        cursor: "",
    });
    typewriter.pauseFor(initialDelay).typeString(LETTER_DATA[6])
        .pauseFor(1500)
        .deleteAll()
        .typeString("Bip")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Bestfriend")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Boyfriend")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Baby")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Babe")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Buda")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Pgl")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Everything")
        .start();

}


window.addEventListener("load", function(){
    var textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml14 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 1500
    }).add({
        targets: '.ml14 .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
    }).add({
            targets: '.ml14',
            top: 54,
            color: "#333",
            fontSize: '26px',
            duration: 2000,
            delay: 2000,
            complete: function(anim) {
                loadLetter();
            }
        });
});