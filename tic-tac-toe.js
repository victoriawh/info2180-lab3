document.addEventListener('DOMContentLoaded',function(){
	const gameBoardSquares = Array.from(document.querySelectorAll('div'));
	const selectedSquares = gameBoardSquares.slice(3,12);
	selectedSquares.forEach(function(square){
		square.classList.add('square');
	});
});