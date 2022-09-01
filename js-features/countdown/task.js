const timer = function () {
	const output = document.getElementById('timer')
	output.textContent -= 1
}
setInterval(timer, 1000);
alert('Вы победили в конкурсе!')