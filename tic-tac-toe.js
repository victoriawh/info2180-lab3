document.addEventListener('DOMContentLoaded',function(){
	const gameBoardSquares = Array.from(document.querySelectorAll('div'));
	const statusDiv = document.getElementById('status');
	const newGameButton = document.getElementsByClassName('btn')[0];
	const selectedSquares = gameBoardSquares.slice(3,12);
	let isXTurn = true;
	const gameState = Array(9).fill(null);
	let gameActive = true;
	const winningCombinations = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	function checkForWinner(){
		for(let combination of winningCombinations){
			const [a,b,c] = combination;
			if(gameState[a]&&gameState[a] === gameState[b]&&gameState[a] === gameState[c]){
				return gameState[a];
			}
		}
		return null;
	}

	selectedSquares.forEach(function(square, index){
		square.classList.add('square');
		square.addEventListener('click', function(){
			if(!gameActive && gameState[index]){
				return;
			}
			const currentPlayer = isXTurn ? 'X' : 'O';
			square.textContent = currentPlayer;
			square.classList.add(currentPlayer);
			gameState[index] = currentPlayer;
			const winner = checkForWinner();
			if(winner){
				statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
				statusDiv.classList.add('you-won');
				gameActive = false;
				return;
			}
			isXTurn =!isXTurn;
			
		});
		
		
		square.addEventListener('mouseover', function(){
			if(gameActive && !gameState[index]){
				square.classList.add('hover');
			}
		});
		square.addEventListener('mouseout',function(){
			if(!gameState[index]){
				square.classList.remove('hover');
			}
		});
	});
	newGameButton.addEventListener('click', function(){
		gameState.fill(null);
		selectedSquares.forEach(function (square){
			square.textContent ='';
			square.classList.remove('X','O','hover');
		});
		statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
		statusDiv.classList.remove('you-won');
	});
});