window.addEventListener("load", function () {
  anime({
    targets: "#title-wrapper div",
    top: 0,
    delay: anime.stagger(1000, { start: 1000 }),
    complete: function () {
      anime({
        targets: "svg g",
        strokeDashoffset: 0,
        easing: "linear",
        complete: animateBackwards,
      });

    },
  });

  showConfetti();
  roseClicked();
});

document.getElementById("rose").addEventListener("click", function() {
  roseClicked();
});


function showConfetti() {
  var duration = 20 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
  
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#cc9999', "#ffffff"],
      shapes: ['heart', 'star'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    });
  
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  }());
}

function animateBackwards() {
  anime({
    targets: "#title-wrapper div",
    top: -999,
    delay: anime.stagger(1000, { start: 1000 }),
    complete: function () {
      anime({
        targets: "svg g",
        strokeDashoffset: 1000,
        easing: "linear",
        complete: animateBackColors,
      });
    },
  });
}

function animateBackColors() {
  anime({
    targets: "body",
    background: "#cc9999",
    duration: 3000,
    color: '#8ce4cd',
    complete: function() {
      anime({
        targets: "#title-wrapper-2 div",
        left:  0,
        duration: 4000
      }),

      anime({
        targets: ".rose",
        right: 0,
        duration: 4000
      });
    }
  });
}

function roseClicked() {

}