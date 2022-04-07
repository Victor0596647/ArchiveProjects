    const slides=document.querySelector(".slide-items").children;
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    const totalSlides=slides.length;
		let index=0;
	const duration=6000;

prev.onclick=function(){
    slide("prev")
}
next.onclick=function(){
    slide("next");
}
    

function slide(direction){ 
    progress();
	
    if(direction=='next'){

        if(index==totalSlides-1){ 
            index=0;
        }
        else{
          index++;
        }
    }

    if(direction=='prev'){
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }
	
	// stopped auto slide when user click
	clearInterval(timer);
	
	// then started again auto slide
	timer=setInterval(autoSlide, duration);
	
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active")
    }
 
    slides[index].classList.add("active");
	slideInfo();
}  
	let width=100/totalSlides;
	
	    //slide info
		
	function slideInfo(){
		document.querySelector(".number").innerHTML=(index+1)+"/"+totalSlides;
		document.querySelector(".inner").style.width=(index+1)*width+"%";
    }
	
	// next slide progress meter
	
	function progress(){
		document.querySelector(".progress").innerHTML='';
		const div=document.createElement("div");
				div.style.height="5px";
				div.style.width="0px";
				div.style.position ="absolute";
				div.style.left="0";
				div.style.top="0";
				div.style.backgroundColor="#006185";
				div.id="progress";
				div.style.animation="progress "+duration/1000 + "s linear";
				document.querySelector(".progress").appendChild(div);		
	}
	
	//auto slide
	function autoSlide(){
		slide("next");			
	}
	
	let timer=setInterval(autoSlide, duration);
	
	slideInfo();
	progress();