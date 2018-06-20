window.onload=function(){
	let headRightR=document.getElementsByClassName("headRightR")[0];
	let shopcard=document.getElementsByClassName("shopcard")[0];
	let aside=document.getElementsByClassName("aside")[0];
	let lis=aside.getElementsByTagName("li");
	let asidebox=document.getElementsByClassName("asidebox");
	headRightR.onmouseenter=function(){
		shopcard.style.boxShadow="0 10px 10px rgba(0,0,0,0.15)";
		shopcard.style.height="98px";
	}
	headRightR.onmouseleave=function(){
		shopcard.style.height="0";
	}
	
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
			asidebox[j].style.display="none";
			}
			asidebox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			asidebox[i].style.display="none";
		}
	}
	let jdtopr1=document.getElementsByClassName("jdtopr")[0];
	let jdtopznr=document.getElementsByClassName("jdtopznr")[0];
	let jdtopr2=document.getElementsByClassName("jdtopr")[1];
	let jdtopr3=document.getElementsByClassName("jdtopr")[2];
	let jdtopr4=document.getElementsByClassName("jdtopr")[3];
	let jdtopr5=document.getElementsByClassName("jdtopr")[4];
	let a=jdtopr1.getElementsByTagName("a");
	let b=jdtopznr.getElementsByTagName("a");
	let c=jdtopr2.getElementsByTagName("a");
	let d=jdtopr3.getElementsByTagName("a");
	let e=jdtopr4.getElementsByTagName("a");
	let f=jdtopr5.getElementsByTagName("a");


	let jiadianrbox1=document.getElementsByClassName("jiadianrbox")[0];
	let jiadianrbox2=document.getElementsByClassName("jiadianrbox")[1];
	let jiadianrbox3=document.getElementsByClassName("jiadianrbox")[2];
	let jiadianrbox4=document.getElementsByClassName("jiadianrbox")[3];
	let jiadianrbox5=document.getElementsByClassName("jiadianrbox")[4];
	let jiadianrbox6=document.getElementsByClassName("jiadianrbox")[5];
	let jiadianr1=jiadianrbox1.getElementsByClassName("jiadianr");
	let jiadianr2=jiadianrbox2.getElementsByClassName("jiadianr");
	let jiadianr3=jiadianrbox3.getElementsByClassName("jiadianr");
	let jiadianr4=jiadianrbox4.getElementsByClassName("jiadianr");
	let jiadianr5=jiadianrbox5.getElementsByClassName("jiadianr");
	let jiadianr6=jiadianrbox6.getElementsByClassName("jiadianr");

	jiadianr1[0].style.zIndex="2";
	jiadianr2[0].style.zIndex="2";
	jiadianr3[0].style.zIndex="2";
	jiadianr4[0].style.zIndex="2";
	jiadianr5[0].style.zIndex="2";
	function xy(a,jiadianr){
		for (let i=0;i<a.length;i++){
			a[i].onmouseenter=function(){
				for(let j=0;j<a.length;j++){
					jiadianr[j].style.display="none";
					a[j].classList.remove("www");
				}
			jiadianr[i].style.display="block";
			a[i].classList.add("www");
				
			}
		}
	}
	xy(a,jiadianr1);
	xy(b,jiadianr2);
	xy(c,jiadianr3);
	xy(d,jiadianr4);
	xy(e,jiadianr5);
	xy(f,jiadianr6);
	let daohangzhong=document.getElementsByClassName("daohangzhong")[0];
	let hhh=daohangzhong.getElementsByTagName("span");
	let dhbox=document.getElementsByClassName("dhbox");
	// console.log(hhh,dhbox);
	for (let i=0;i<8;i++){
		hhh[i].onmouseenter=function(){
			for(let j=0;j<8;j++){
					dhbox[j].style.height="0";
				}
				dhbox[i].style.height="230px";
		}
		hhh[i].onmouseleave=function(){
			dhbox[i].style.height="0";
		}
	}
	let imgboxs=document.querySelectorAll(".imgbox li");
	let circles=document.querySelectorAll(".btn li");
	let banner=document.querySelector(".banner");
	let leftjt=document.querySelector(".leftjt");
	let rightjt=document.querySelector(".rightjt");
	// console.log(imgboxs,circles,banner,leftjt,rightjt);
	let currenindex=0;
	imgboxs[0].style.zIndex=10;
	circles[0].className="hot";
	let t=setInterval(move,2000);
	function move(){
		currenindex++;
		if(currenindex==imgboxs.length){
			currenindex=0;
		}
		imgboxs.forEach(function(element){
			element.style.zIndex=5;
		})
		circles.forEach(function(element){
			element.className="";
		})
		imgboxs[currenindex].style.zIndex=10;
		circles[currenindex].className="hot";
	}
	function moveL(){
		currenindex--;
		if(currenindex<0){
			currenindex=imgboxs.length-1;
		}
		imgboxs.forEach(function(element){
			element.style.zIndex=5;
		})
		circles.forEach(function(element){
			element.className="";
		})
		imgboxs[currenindex].style.zIndex=10;
		circles[currenindex].className="hot";
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	leftjt.onclick=function(){
		moveL();
	}
	rightjt.onclick=function(){
		move();
	}
	for(let i=0;i<imgboxs.length;i++){
		circles[i].onclick=function(){
			imgboxs.forEach(function(element){
				element.style.zIndex=5;
			})
			circles.forEach(function(element){
				element.className="";
			})
			imgboxs[i].style.zIndex=10;
			circles[i].className="hot";
			currenindex=i;
		}
	}
	function nr(sum){
		let quan=document.querySelectorAll(".tushu")[sum];
		let imgbox=quan.querySelectorAll(".lunbo");
		let btns=quan.querySelectorAll(".yuan");
		let btnL=document.querySelectorAll(".left")[sum];
		let btnR=document.querySelectorAll(".right")[sum];
		let qwidth=parseInt(getComputedStyle(quan,null).width);
		// console.log(imgbox,btns,quan,btnL,btnR);
		let current=0,next=0;
		let flag=true;
	
		btnR.onclick=function mover(){
			if(!flag){
				return;
			}
			if(next==imgbox.length-1){
				next=imgbox.length-1;
				return;
			}
			flag=false;
			next++;
			btns[current].classList.remove("run");
			btns[next].classList.add("run");
			imgbox[next].style.left=qwidth+"px";
			animate(imgbox[current],{left:-qwidth});
			animate(imgbox[next],{left:0},function(){
				flag=true;
			})
			current=next;
		}
		btnL.onclick=function movel(){
			
			if(!flag){
				return;
			}
			if(next==0){
				next=0;
				return;
			}
			next--;
			flag=false;
			
			btns[current].classList.remove("run");
			btns[next].classList.add("run");
			imgbox[next].style.left=-qwidth+"px";
			animate(imgbox[current],{left:qwidth});
			animate(imgbox[next],{left:0},function(){
				flag=true;
			})
			current=next;
		}
	
		// 小圆点
		btns.forEach(function(element,index,obj){
			element.onclick=function(){
				btns[current].classList.remove("run");
				btns[index].classList.add("run");
				if(current>index){
					imgbox[index].style.left=-qwidth+"px";
					animate(imgbox[current],{left:qwidth})
					animate(imgbox[index],{left:0})
				}
				if(current<index){
					imgbox[index].style.left=qwidth+"px";
					animate(imgbox[current],{left:-qwidth})
					animate(imgbox[index],{left:0})
				}
				next=current=index;
			}
			
		})
	}	
	nr(0)
	nr(1);
	nr(2);
	nr(3);
	let butL=document.querySelector(".zuo");
	let butR=document.querySelector(".you");
	let milist=document.querySelector(".danpindi");
	let nwidth=parseInt(getComputedStyle(milist,null).width)/3;
	// console.log(butL,butR,milist,nwidth);
	let times=0;
	butR.onclick=function(){
		times++;
		if(times==3){
			times=2;
		}
		milist.style.transform=`translateX(${-nwidth*times}px)`;
	}
	butL.onclick=function(){
		times--;
		if(times<0){
			times=0;
		}
		milist.style.transform=`translateX(${-nwidth*times}px)`;
	}
}
