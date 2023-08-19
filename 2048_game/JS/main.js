let container = document.getElementById('container')

//==================================
// functions for the animations
//==================================
toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)