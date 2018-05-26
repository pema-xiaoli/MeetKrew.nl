
$(function(){  
    $(window).on('load', function(){
      TweenMax.to( $('#welcome'), 0.5,{css:{opacity:1}, ease:Quad.easeInOut});
    }); 

    $("#typed").typed({
        //stringsElement: $('#typed-strings'),
        strings: ["barista", "receptioniste", "kledingkastconsultant", "shopmedewerker", "sfeerbeheerder", "barman"], //"receptioniste", "servicedeskmedewerker", "assistent shopmedewerker", "promotiemedewerker",
        typeSpeed: 50,
        backDelay: 1300,
        loop: 1,
        contentType: 'html', // or text 
        loopCount: 50, // defaults to false for infinite loop
        //callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

    //window.onscroll PLUS resize

    $windowEle = $(window); 
     
    var pt = 0;
    var firstEntry = 1; 

    var viewH, viewW, TopAbsolute, phoneL; 
    var poz_welcome, poz_Screen1, poz_Screen2, poz_Screen3, poz_users;
    var phoneH = 600; 
    var onScreen = 1; //current screen nr
    var resizeFlag = 1;
    var blackStoreFlag = 0;
    var bublesFlag = 0;
    setView();

    function setView(){

        viewH = $(window).height(); 
        viewW = $(window).width(); 
        TopAbsolute = (viewH - phoneH)/2 - 30;
        phoneL = $(".des").offset().left-360;

        poz_welcome = $("#welcome").offset().top;
        poz_Screen1 = $("#phone_screen1").offset().top;
        poz_Screen2 = $("#phone_screen2").offset().top; 
        poz_Screen3 = $("#phone_screen3").offset().top; 
        poz_users = $("#users").offset().top; 

        $("#phone").css({"left":phoneL});

        if(viewW<768){
            $("#phone").css({"position":"relative","transform":"none","top":"0","left":"0"});
            $("#screen-content").css("background-position","left 0px");  
        }else{
            $('#phone').css({"position":"absolute", "transform":"none", "top":(viewH-660)/2, "left":phoneL});
        } 

        if(viewW <= 1100){ 
            $(".poz").css("display","none"); 
        }else{
            if(!firstEntry){
                $(".poz").css("display","block");
            } 
        } 
    }  
     
    $(window).resize(function(){
        resizeFlag = 1; 
        reSetView();
    });   

    function reSetView(){
        if(resizeFlag<3){
            setView();
            if(resizeFlag == 2){
                updateEle();
            }
            resizeFlag += 1;  
        }  
    } 

    var updateEle = function(){
        
        var showPoz = function(){ 
            if(viewW > 1100){
                $(".poz").css("display","block");
                TweenMax.staggerFrom('.poz', 0.5, {opacity:0, y:-200, ease: Power2.easeInOut, delay:0.2}, 0.1); 
                firstEntry = 0;
            }  
        };
 
        var airPlane = function(){ 
            if(viewW > 1100){ 
                $(".airplane").css({"display":"block","top":"200px","right":"-20px"});

                TweenMax.to('.airplane', 2, {opacity:1, "top":"100px","right":"180px", ease: Power4.easeOut}); 
                TweenMax.to('.airplane', 1.5, {opacity:0, "top":"-50px","right":"450px", ease: Power4.easeOut,delay:1.5}); 
                // TweenMax.to('.airplane', 2.5, {opacity:1, x:-200, y:-100, ease: Power4.easeOut}); 
                // TweenMax.to('.airplane', 1.5, {opacity:0, x:-400, y:-200, ease: Power4.easeOut,delay:2.5}); 
            } 
        }; 

        var bubles = function(){
            $("#bubble1").css({"display":"block","bottom":viewH/2,"right":"20px"});
            $("#bubble2").css({"display":"block","bottom":viewH/2,"right":"80px"});
            $("#bubble3").css({"display":"block","bottom":viewH/2,"right":"40px"});
            if(viewW > 1100){
                TweenMax.to('#bubble1', 0.5, {opacity:1, "bottom":viewH/2+40, ease: Power0.easeNone}); 
                TweenMax.to('#bubble1', 2.5, {opacity:0, "bottom":viewH/2+200, ease: Power0.easeNone, delay:0.5}); 

                TweenMax.to('#bubble2', 0.5, {opacity:1, "bottom":viewH/2+40, ease: Power0.easeNone, delay:1.5}); 
                TweenMax.to('#bubble2', 2.5, {opacity:0, "bottom":viewH/2+200, ease: Power0.easeNone, delay:2}); 

                TweenMax.to('#bubble3', 0.5, {opacity:1, "bottom":viewH/2+40, ease: Power0.easeNone, delay:3}); 
                TweenMax.to('#bubble3', 2.5, {opacity:0, "bottom":viewH/2+200, ease: Power0.easeNone, delay:3.5}); 

            }

        };

        var showBlackStore = function(){
            $("#black_app_store").css("display","block");
            TweenMax.staggerTo('#black_app_store', 0.5, {opacity:1, delay:1}); 
            blackStoreFlag = 1;
        };

        var hideBlackStore = function(){ 
            //TweenMax.staggerTo('.app_fadeIn', 0.3, {opacity:0, delay:0.2});
            $("#black_app_store").css("opacity","0");
            blackStoreFlag = 0; 
        }; 
 
        if(pt < poz_Screen1){ 

            $('#phone').css({"position":"absolute", "transform":"none", "top":(viewH-660)/2, "left":phoneL});
            console.log('pt < poz_Screen1');
            
            if(blackStoreFlag){
                hideBlackStore();
            }

            if(firstEntry && (pt > (poz_Screen1-400) ) ){ 
                showPoz();  
            } 

        }else if( (pt>=poz_Screen1) && pt < (poz_Screen3) ){ 
            
            $('#phone').css({"position":"fixed", "transform":"none", "top": TopAbsolute, "left":phoneL});
            if( (pt >= (poz_Screen1 + 0.5*viewH)) && (pt < (poz_Screen2 + 0.5*viewH)) ){
                if(onScreen!=2){
                   TweenMax.to('#screen-content', 0.5, {backgroundPosition:'left -389px'});  
                    onScreen = 2;
                } 
                 
            }else if (pt >= (poz_Screen2 + 0.5*viewH)) {
                if(onScreen!=3){
                    TweenMax.to('#screen-content', 0.5, {backgroundPosition:'left -779px'});  
                    onScreen = 3;
                    if(!bublesFlag){bubles(); bublesFlag = 1;} 
                } 
                 
            }else{
                if(onScreen != 1){
                   TweenMax.to('#screen-content', 0.5, {backgroundPosition:'left 0px'}); 
                   onScreen = 1;
                }
                bublesFlag = 0;
            }
            if(firstEntry){
                showPoz();
            } 
            if(blackStoreFlag){
                hideBlackStore();
            }
            

        }else{ 
            $('#phone').css({"position":"absolute", "transform":"none", "top":(viewH-660)/2+2*viewH, "left":phoneL});
            if(!blackStoreFlag){
                showBlackStore();
            } 
        }
    }; 


    $(window).scroll(function(){
        setView();

        if(viewW<768){ 
            return;
        } 

        pt = $windowEle.scrollTop(); 
        updateEle(pt); 

    });
 
    $("#student_img").hover(function(){
            if(viewW<768){return;}
            TweenMax.to("#business_img", 0.3,{css:{opacity:0}, ease:Quad.easeInOut});
              
        },function(){ 
            if(viewW<768){return;} 
            TweenMax.to("#business_img", 0.3,{css:{opacity:1}, ease:Quad.easeInOut});
        }
    ); 

    $("#business_img").hover(function(){
            if(viewW<768){return;} 
            TweenMax.to("#student_img", 0.3,{css:{opacity:0}, ease:Quad.easeInOut});
        },function(){ 
            if(viewW<768){return;} 
            TweenMax.to("#student_img", 0.3,{css:{opacity:1}, ease:Quad.easeInOut});
        }
    ); 
});

function newTyped(){ /* A new typed object */ }


