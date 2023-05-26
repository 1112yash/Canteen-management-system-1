const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (email.value === 'GEHU@gmail.com' && password.value === 'gehu@123') {
		alert('Login successful');
		window.location.href = "/Index1.html";
	} else {
		alert('Invalid email or password');
	}
});
