const btn = document.getElementsByClassName("header-btn")[0];
const modal = document.getElementById('modalMenu');

btn.onclick = function(){
	if(modal.style.display === 'block') modal.style.display = 'none';
		else modal.style.display = 'block';
}