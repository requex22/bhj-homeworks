// Task 1.1

const output = document.getElementById('timer');
const timer = setInterval(function () {
	output.textContent -= 1;
	if (output.textContent == 0) {
		clearInterval(timer);
		alert('Вы победили в конкурсе!');
	}
}, 1000);

// Task 1.2


// Task 1.3
const updateTimer = setInterval(function () {
	output.textContent -= 1;
	if (output.textContent == 0) {
		clearInterval()
		window.location.href = 'https://www.google.ru/'
	}

}, 1000)