const tabs = document.querySelectorAll('.tab-link');

function openContent(event, id) {
	const tabContent = document.querySelectorAll('.tab-content');
	id = event.target.id || event.target.textContent ;

	tabContent.forEach(content => {
		content.style.display = 'none';
	});

	tabs.forEach(tab => {
		tab.className = tab.className.replace(' active', '');
	});

	document.getElementById(id).style.display = 'block';
	this.classList.add('active');
}

tabs.forEach(tab => tab.addEventListener('click', openContent));