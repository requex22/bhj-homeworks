const clicker = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const speed = document.getElementById('cookie__speed')

cookie.onclick = function () {
	clicker.textContent++
	if (cookie.width == 200) {
		cookie.width += 50
	} else if (cookie.width == 250) {
		cookie.width -= 50
	}
}