function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}
if(is_touch_device()){
  var mySnakeBoard = new SNAKE.Board({
      boardContainer: "game-area",
      fullScreen: false
  });
} else {
  var mySnakeBoard = new SNAKE.Board({
      boardContainer: "game-area",
      fullScreen: true
  });
}
function go_full_screen(){
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}
function hideToolbarLabel(){
    var screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screen_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(screen_width<=480){
        document.querySelectorAll(".snake-toolbar>div>span")[0].style.display="none";
        document.querySelectorAll(".snake-toolbar>div>span")[1].style.display="none";
    } 
    else {
        document.querySelectorAll(".snake-toolbar>div>span")[0].style.display="inline-block";
        document.querySelectorAll(".snake-toolbar>div>span")[1].style.display="inline-block";
    }
}
function gamePadWrapperHeight(){
    var screen_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var wrapper_height = screen_height - document.getElementById("game-area").offsetHeight - 20;
    document.getElementById("game-pad-wrapper").style.height=wrapper_height+"px";
}
gamePadWrapperHeight();
hideToolbarLabel();
