var nofsq=6;

var colors=generatecolors(nofsq);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor(); 
var colordisplay=document.getElementById("colordisplay");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function()
{
	hard.classList.remove("selected");
 	easy.classList.add("selected");
 	nofsq=3;


colors=generatecolors(nofsq);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
    if(colors[i])
    	squares[i].style.background=colors[i];
    else
    	squares[i].style.display="none";

});

hard.addEventListener("click",function()
{
	 easy.classList.remove("selected");
	 hard.classList.add("selected");
	 nofsq=6;

colors=generatecolors(nofsq);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
       {
       	squares[i].style.background=colors[i];
       	squares[i].style.display="block";
       }
   
});


colordisplay.textContent=pickedcolor;    

for(var i=0;i<squares.length;i++)
{

	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
      
      var clickedcolor=this.style.background;
     if(clickedcolor===pickedcolor)
     {
      	msg.textContent="correct!!!";
      	reset.textContent="Play Again??";
        changecolors(clickedcolor);
        h1.style.background=clickedcolor;
    }
      else{
         this.style.background="#232323";
          msg.textContent="try again:("
      }
	});
}

reset.addEventListener("click",function(){
colors=generatecolors(nofsq);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
msg.textContent=""; 
this.textContent="New Colors";  
for(var i=0;i<squares.length;i++)
  squares[i].style.background=colors[i];

h1.style.background="steelblue";
});


function changecolors(color) {
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background=color;
	}
}

function pickcolor() {
		var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatecolors(num) {

	var arr=[];
	for(var i=0;i<num;i++){		
		arr.push(randomcolor());
	}
    return arr;
}

function randomcolor()
{
	    var r=Math.floor(Math.random() * 256);
	    var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		return "rgb(" + r +", " + g + ", " + b +")";
}