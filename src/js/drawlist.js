const btn = document.querySelector('.draw__button');
const list = document.querySelector('.draw__list');
let btn_pressed = false;
console.log(btn);
console.log(list);

const removeClassName = () => {
	btn.classList.remove('is-active');
	list.classList.remove('is-active');
};

const addClassName = () => {
	if (btn_pressed) {
		removeClassName();
	} else {
		btn.className += ' is-active';
		list.className += ' is-active';
	}
	btn_pressed = !btn_pressed;
};

btn.addEventListener('click', addClassName);
