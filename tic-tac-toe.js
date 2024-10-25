document.addEventListener('DOMContentLoaded',function(){
	const gameBoardSquares = Array.from(document.querySelectorAll('div'));
	const selectedSquares = gameBoardSquares.slice(3,12);
	let isXTurn = true;
	const gameState = Array(9).fill(null);

	selectedSquares.forEach(function(square, index){
		square.classList.add('square');
		square.addEventListener('click', function(){
			if(!gameState[index]){
				const currentPlayer = isXTurn ? 'X' : 'O';
				square.textContent = currentPlayer;
				square.classList.add(currentPlayer);
				gameState[index] = currentPlayer;
				isXTurn =!isXTurn;
			}
		});
	
		square.addEventListener('mouseover', function(){
			if(!gameState[index]){
				square.classList.add('hover');
			}
		});
		square.addEventListener('mouseout',function(){
			if(!gameState[index]){
				square.classList.remove('hover');
			}
		});
	});
});