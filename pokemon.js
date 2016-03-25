"use strict";

(function(){
	
	var pokemon = [
		['Voltorb','images/voltorb.png',100],
		['Charizard','images/charizard.png',200],
		['Gyarados','images/gyarados.png',125],
		['Mew','images/mew.png',75],
		['Geodude','images/geodude.png',90],
		['Snorlax','images/snorlax.png',110],
		['Kabutops','images/kabutops.png',95],
		['Eevee','images/eevee.png',60],
		['Beedrill','images/beedrill.png',70],
		['Magikarp','images/magikarp.gif',40],
		['Gastly','images/gastly.png',50]
	];

	var enemy_Health, player_health, enemy_Choice;
	player_health = 100;



	var chooseEnemy = function(){
	var max = pokemon.length -1; 
	var min = 0;
	enemy_Choice = Math.floor(Math.random() * max);
	//alert(enemy_Choice);
	alert(pokemon[enemy_Choice][0]);
	$("#enemy .name").text(pokemon[enemy_Choice][0]);
	$("#enemy_img").attr('src', pokemon[enemy_Choice][1]);
	$("#enemy .health").text(pokemon[enemy_Choice][2]);
	enemy_Health = pokemon[enemy_Choice][2];
	//picks random enemy from pokemon array. populates initial page with their data. 
	}
	var enemy = chooseEnemy();


	var doHeal = function(){
		var healAmt = makeRandomNumber(25, 50);
		//alert(healAmt);
		//alert("heal amount is" + healAmt);
		player_health += healAmt;
		printStatus('Healed for '+healAmt+', health is now ' + player_health);
		$("#pikachu .health").text("Health: "+ player_health);




	//heals your character with a random ammount from 25-50
	}
	//doHeal();
	

	function hit(percentage){
	var random = Math.floor(Math.random() * 100);
	if (random > percentage){
		return true
	}
	else {
		return false
	}
	}
	

	var enemyAttack = function(){
		//alert("entered attack function");
		    $('#attack_btn').fadeIn();
    $('#heal_btn').fadeIn();
	if (hit(10))
	{
		//alert("Enemy hit!")
		var enemy_Damage = makeRandomNumber(5,30);
		player_health-= enemy_Damage;
		$("#pikachu .health").text("Health: "+ player_health);
		if(player_health >= 0) {
					printStatus(pokemon[enemy_Choice][0]+' hits for '+ enemy_Damage+" Player health is now "+player_health);
		}
		else {
			printStatus("GAME OVER, Pikachu died =(<br> TRAIN HARDER");
				    $('#attack_btn').fadeOut();
    				$('#heal_btn').fadeOut();
		}

	}
	else {
	//alert("Enemy miss")
		printStatus('Enemy missed')
	}	
	//10% chance to miss.
	//90% chance to do between 5-30 damage. 
	//after completed, if you aren't dead... buttons reappear.
	//check if your health <= 0.
	}


	function youAttack(){
		if(hit(10)){
			// hit
			var player_Damage = makeRandomNumber(5,30);
			enemy_Health -= player_Damage;
			$("#enemy .health").text(enemy_Health);
			printStatus("You hit the enemy for "+player_Damage + "!");
			if (enemy_Health <= 0 ){
			printStatus ("YOU WIN!!!");
			    $('#attack_btn').fadeOut();
    			$('#heal_btn').fadeOut();

			}

		}
		else {
			printStatus("You missed");//miss

		}
	//10% chance to miss.
	//90% chance to do between 5-30 damage. 
	//after completed, says 'enemy will attack in 3 seconds' (buttons hidden during this time)
	//check if enemy health is <= 0.
	}
function makeRandomNumber(low, high) {
	return Math.floor(Math.random() * (high - low) + low);


}
function printStatus(message) {
	$("#status_text").text(message);
}

//enemyAttack();
	var addEventListeners = function(){
	
	//add the click events on the attak and heal buttons. 
	}

	$(document).ready(function(){
		//addEventListeners();
		$('#attack_btn').click(function(){
    //Some code
    youAttack();
    $('#attack_btn').fadeOut();
    $('#heal_btn').fadeOut();
	if (enemy_Health > 0) {
	    setTimeout(enemyAttack, 3000);
	};


});

		$('#heal_btn').click(function(){
    //Some code
    doHeal();
    setTimeout(enemyAttack, 3000);
    //$(this).delay(3000).enemyAttack();
    $('#attack_btn').fadeOut();
    $('#heal_btn').fadeOut();
});
	})

})();
