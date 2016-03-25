# Pokemon jQuery Battle Game!



```javascript
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
```

### Game Rules/Workflow:

-You have 100 health. 

-Enemy is picked ranomly at the start. 

-You can attack or heal by clicking the buttons. 

-When you attack, there is a 10% chance to miss. 

-If you attack successfully, you will do between 5-30 damage. 

-When the enemy attacks, there is a 10% chance to miss. 

-If they attack successfully, you will take between 5-30 damage. 

-If you heal, you are healed for 25-50 health points. 

-After your heal or attack, it waits 3 seconds, then the enemey will auto attack. **During this time the buttons should be hidden.**

-If at any time you health drops to 0 or below, display a game over message. **Buttons should not reappear.**

-If at any time the enemy heath drops to 0, display a you win message. 

-You do not have to have the game restart automatically. 



-Explore adding a 'damage multiplier' to the Pokemon objects. Use this to have stronger/weaker pokemon do more/less damage. 
