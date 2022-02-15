// Get the disclosure buttons
var disclosures = Array.prototype.slice.call(document.querySelectorAll('[data-disclosure]'));

// Loop through them with Array.forEach()
disclosures.forEach(function (disclosure) {

	// Get the content associated with the button
	var content = document.querySelector('#' + disclosure.getAttribute('aria-controls'));

	// If there's no content, don't show the button
	if (!content) return;

	// Show the button and hide the content
	disclosure.removeAttribute('hidden');
	content.setAttribute('hidden', '');

});

// Toggle content on click
document.addEventListener('click', function (event) {

	// Only run on elements that have the [data-disclosure] attribute
	// If the event.target doesn't have the attribute, return ends the callback function
	if (!event.target.hasAttribute('data-disclosure')) return;

	// Get the content to toggle
	// If no matching content is found, end the function with return
	var content = document.querySelector('#' + event.target.getAttribute('aria-controls'));
	if (!content) return;

	// If the content is visible, hide it
	// Otherwise, show it
	if (event.target.getAttribute('aria-expanded') === 'true') {
		event.target.setAttribute('aria-expanded', false);
		content.setAttribute('hidden', '');
	} else {
		event.target.setAttribute('aria-expanded', true);
		content.removeAttribute('hidden');
	}

});