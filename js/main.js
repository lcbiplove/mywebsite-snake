/* When window is loaded completely */
window.onload=function(){
    /* Hide loader, after document is ready */
    document.querySelector(".pop-up").style.transform="scaleX(0)"; 
    document.querySelector("body").style="";

    /* Links of navbar for desktop and small devices  */
    var nav_links = document.querySelectorAll(".nav-links a");
    var nav_links_mbl = document.querySelectorAll("#menu-content a");

    window.onscroll= function(){
        var height_viewport = document.getElementById("intro").offsetHeight;   // Height of the viewport ie, 100vh
        var scroll_top=window.pageYOffset+Math.round(0.1*height_viewport);     // height of nav bar ie, 10vh + scroll from the top of the document
        /* Scroll from top to the start of contact div */
        var scroll_contact_start=Math.round(2*height_viewport+document.getElementById("work").offsetHeight);

        var mbl_active_topic=null;           // Small device active page

        /* Class name of navbar links to null */
        nav_links.forEach(function(element){
            element.className="";
        });
        /* Class name of navbar links to null for mobile */
        nav_links_mbl.forEach(function(element){
            element.className="";
        });
        /* If scroll is in about page */
        if(scroll_top>=height_viewport && scroll_top<2*height_viewport){
            nav_links[0].className="active_page";
            nav_links_mbl[0].className="active_page";
            mbl_active_topic="About";
        } 
        /* If scroll is in work page */
        else if(scroll_top>=2*height_viewport && scroll_top<scroll_contact_start){
            nav_links[1].className="active_page";
            nav_links_mbl[1].className="active_page";
            mbl_active_topic="Work";
        } 
        /* If scroll is in contact page */
        else if(scroll_top>=scroll_contact_start){
            nav_links[2].className="active_page";
            nav_links_mbl[2].className="active_page";
            mbl_active_topic="Contact";
        }
        /* If scroll is from (About, Contact, Work) for mobile devices */
        if(mbl_active_topic){
            document.querySelector(".topic-top").innerHTML=mbl_active_topic;
            document.querySelector(".topic-top").style.transform="scaleX(1)";                
        } else {
            document.querySelector(".topic-top").innerHTML="About";
            document.querySelector(".topic-top").style.transform="scaleX(0)";                
        }
    }

    nav_links.forEach(function(link, index){
        /* Navbar links is clicked */
        link.onclick=function(e){
            /* If index is not in "excercise", then scroll */
            if(index!==3){
                e.preventDefault();
                var page_id = e.target.getAttribute("href").substr(1);
                document.getElementById(page_id).scrollIntoView({behavior: 'smooth'});
            }
        }
    });

    nav_links_mbl.forEach(function(link, index){
        link.onclick=function(e){
            /* If index is not in "excercise", then scroll (small devices) */
            if(index!==3){
                e.preventDefault();
                closeMenuCont();
                var page_id = e.target.getAttribute("href").substr(1);
                document.getElementById(page_id).scrollIntoView({behavior: 'smooth'});
            }
        }
    });

    /* Menu bar onclick */
    document.getElementById("menu").onclick=function(){
        /* If menu content is showing, then close */
        if(this.classList.contains("opened")){
            closeMenuCont();
        } 
        /* Else, show content */
        else {
            this.className="opened";
            document.getElementById("menu-content").style.transform="scale(1)";
            document.body.style.overflow="hidden";
        }
    }

    /* Function to close the menu content, hide nav contents in small devices */
    function closeMenuCont(){
        document.getElementById("menu").className="";
        document.getElementById("menu-content").style="";
        document.body.style="";
    }
}