const form = document.querySelector('#date-form');
const results = document.querySelector('#results');
const editButton = document.querySelector('#edit-button');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const selectedDays = formData.getAll('days');

	document.querySelector('#result-days').textContent = selectedDays.length
		? selectedDays.join(', ')
		: 'I’ll check with you';
	document.querySelector('#result-cuisine').textContent = formData.get('cuisine');
	document.querySelector('#result-roses').textContent = formData.get('roses');
	document.querySelector('#result-activity').textContent = formData.get('activity');

	form.hidden = true;
	results.hidden = false;
	results.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

editButton.addEventListener('click', () => {
	results.hidden = true;
	form.hidden = false;
	form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
