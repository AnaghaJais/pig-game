/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var gamePlaying,randomScore,activeplayer,scores,dicePrevious;
init();

//1.When roll dice button is clicked

 document.querySelector(".btn-roll").addEventListener('click',function() {

	 if(gamePlaying) {
		 var dice=Math.floor((Math.random()*6)+1);
		 
		 var x=document.querySelector(".dice");
		 x.style.display="block";
		 x.src="dice-"+dice+".png"; 
		 if((dice===6)&&(dicePrevious===6)){
         scores[activeplayer]=0;
          document.querySelector("#score-"+activeplayer).textContent=scores[activeplayer];
         nextPlayer();
		   }
        else if(dice!==1){
		 	 randomScore+=dice; 
		 	 document.querySelector("#current-"+activeplayer).textContent=randomScore;
        }
		 else{
		 	nextPlayer();
		 }
       dicePrevious=dice;
        console.log("dicecurrent"+activeplayer+"is:-"+dice);
       console.log("diceprevious"+activeplayer+"is:-"+dicePrevious);
	}
 });

 document.querySelector(".btn-hold").addEventListener("click",function(){
if(gamePlaying){
 scores[activeplayer]+=randomScore;
 randomScore=0;
 document.querySelector("#score-"+activeplayer).textContent=scores[activeplayer];

if(scores[activeplayer]>=100){

	gamePlaying=false;
	randomScore=0;
	document.querySelector(".dice").style.display="none";
	document.getElementById("name-"+activeplayer).textContent="Winner";
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector("#current-0").textContent="0";
	document.querySelector("#current-1").textContent="0";
}
else{
	nextPlayer();
}
}
 });


document.querySelector(".btn-new").addEventListener("click",init);



function init(){
randomScore=0;
activeplayer=0;
gamePlaying= true;
scores=[0,0];
dicePrevious=0;;
document.querySelector(".dice").style.display="none";
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector(".player-0-panel").classList.add("active");
document.getElementById("name-0").textContent="Player 1";
document.getElementById("name-1").textContent="Player 2";
}


 function nextPlayer()
 {

 			activeplayer===0 ?activeplayer=1 :activeplayer=0;
		 	document.querySelector(".player-0-panel").classList.toggle("active");
		 	document.querySelector(".player-1-panel").classList.toggle("active");
		 	randomScore=0;
		 	document.querySelector("#current-0").textContent="0";
		 	document.querySelector("#current-1").textContent="0";
		    document.querySelector(".dice").style.display="none";
 }