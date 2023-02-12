window.addEventListener("load", function () {
    anime({
        targets: '#title-wrapper div',
        top: 100,
        delay: anime.stagger(1000, {start: 500}) // delay starts at 500ms then increase by 100ms for each elements.
      });      
});