/*************************************************************************
* FWCSS-Talking-Head
* By Liath
* https://github.com/Liath666/FWCSS-Talking-Head
**************************************************************************/

var button = document.querySelector('.speak');

button.addEventListener('click', event => {
	document.querySelector('.bouche').classList.toggle("parle");
});
