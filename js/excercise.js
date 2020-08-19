/* Document is fully loaded, then */
window.onload = function(){
    /* Hide the loader */
    document.querySelector(".pop-up").style.transform="scaleX(0)"; 
    document.querySelector("body").style="";

    /* Dimentions of aside tag */
    var width_of_article = document.querySelector("body").offsetWidth-document.querySelector("aside").offsetWidth+"px";
    var height_of_article = document.querySelector("body").offsetHeight-document.querySelector("header").offsetHeight+"px";
    var aside_links = document.querySelectorAll("aside a");

    /* Set dimention of article according to the viewport */
    document.querySelector("article").style.height=height_of_article;
    document.querySelector("article").style.width=width_of_article;

    /* On resize */
    window.addEventListener("resize", function(){
        /* Set the value of aside tag */
        width_of_article = document.querySelector("body").offsetWidth-document.querySelector("aside").offsetWidth+"px";
        height_of_article = document.querySelector("body").offsetHeight-document.querySelector("header").offsetHeight+"px";
        aside_links = document.querySelectorAll("aside a");

        /* Set the dimention of article, after resize */
        document.querySelector("article").style.height= height_of_article;
        document.querySelector("article").style.width= width_of_article;
    });

    /* Links in aside tag, (excercises titles) */
    aside_links.forEach(function(element){
        element.onclick=function(evt){
            /* Prevent default behaviour for anchor tag */
            evt.preventDefault();

            aside_links.forEach(function(elem){
                /* Set all the titles, border bottom none to show active title only */
                elem.style.borderBottom="0";
            });
            /* Set border for the clicked link */
            element.style.borderBottom="1px dashed #000";

            /* Inner html of title */
            var topic = element.innerHTML;
            /* Change the topic to the dashed form with small letters, like if (HTML5 form) => (html5-form) */
            topic = topic=="Silly Story game" ? "silly-story-game" : (topic.toLowerCase()).replace(" ", "-");
            /* Url to load the index file, from the directory according to the topic name */
            var url = topic+"/index.html";
            
            /* Code wrapper to enclose pre tag */
            var code_wrapper= document.createElement("div");
            code_wrapper.id="code-wrapper";

            /* Asynchronous object to send data to server */
            var request= new XMLHttpRequest;
            /* Set the request methods, and url */
            request.open("GET", url);

            /* While data is being sent */
            request.onreadystatechange=function(){
                /* If successfully completed with status code 200 */
                if(request.readyState==4&&request.status==200){
                    /* Collect response text from the url */
                    var page_content = request.responseText;

                    /* If active topic contains external css */
                    if(page_content.indexOf('<link href="style.css" type="text/css" rel="stylesheet">') != -1){
                        document.getElementById("view-style").style.display="inline-block";
                        document.getElementById("view-style").setAttribute("href", topic+"/style.css");
                    } else {
                        document.getElementById("view-style").style.display="none";
                    }

                    /* If active topic contains external js */
                    if(page_content.indexOf('<script src="main.js">') != -1){
                        document.getElementById("view-script").style.display="inline-block";
                        document.getElementById("view-script").setAttribute("href", topic+"/main.js");
                    } else {
                        document.getElementById("view-script").style.display="none";
                    }

                    /* pre tag to enclose response text */
                    var pre = document.createElement("pre");
                    /* Store response as text */
                    pre.innerText = page_content;
                    code_wrapper.append(pre);
                    /* Already present code_wrapper with the new one */
                    document.getElementById("code-wrapper").replaceWith(code_wrapper);
                    document.getElementById("check-page").style.display="inline-block";
                    /* Check page, link */
                    document.getElementById("check-page").setAttribute("href", topic+"/");
                }
            }
            /* Send request to the url */
            request.send();
        }
    });
}