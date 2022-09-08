const clicker = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const speed = document.getElementById('cookie__speed')

cookie.onclick = function () {
	cookie.width = ++clicker.textContent % 2 ? 250 : 200;
}