

var posts=document.querySelector("#posts")
var nav=document.querySelector("#header")
var navtop=document.querySelector("#topnav")
var cards =document.querySelector(".cards")
window.addEventListener('scroll',function(){
    if(window.scrollY> 80){
        navtop.style.width="100%"
        nav.style.position="fixed"
        nav.style.top="0px"


        
    }else{
        navtop.style.width="80%"
        nav.style.position="fixed"
        nav.style.top="20px"
        

    }

})
window.addEventListener('scroll',function(){
    
    if(window.scrollY>110){
        console.log(window.scrollY)
        var header=`<h2>RECENT POSTS</h2>`
        var headerRight=`<h2>POPULAR POSTS</h2>`

        var card=``;
        var rightCard=``;
        for(var i=0;i<7;i++){
            card+=`<div class="card">
            <section class="author">
                <img src="imgs/01.webp" alt="">
                <span class="tag">PROGRAMMING</span>
            </section>
            <section class="content">
                <h4>What is Language Translator and its Types? </h4>
                <div class="line-1">
                    <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                    <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="" class="btn1">READ MORE</a>
            </section>
        </div>`
    
        }
        cards.innerHTML=header+card
        for(var i=0;i<4;i++){

            rightCard+=`<div class="card">
            <section class="author">
                <img src="imgs/01.webp" alt="">
            </section>
            <section class="content">
                <a href="#">What is Language Translator and its Types? Differences between Compiler and
                            Interpreter</a>
                <div class="line-1">
                    <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                </div>
            </section>
        </div>`
        }
        document.querySelector(".right_card").innerHTML=headerRight+rightCard
        document.querySelector(".clients_cards").style.display="flex"

    
    }else{
        document.querySelector(".clients_cards").style.display="none"
    }
})



