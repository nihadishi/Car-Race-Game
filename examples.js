// DOM (Document Object Model)

// getElement...
// const tasksBlock = document.getElementById('tasks');
// console.log(tasksBlock);
// const allNavButtons = document.getElementsByClassName('main-navigation__button-item');
// console.log(allNavButtons);
// const allButtons = document.getElementsByTagName('button');

// allButtons.forEach((button, index) => {
// 	console.log(index, button);
// });
// console.log(allButtons);

// querySelector

// const tasksBlock = document.querySelector('#tasks');
// const navButton = document.querySelector('.main-navigation__button-item');
// const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
// console.log(allNavButtons);
// console.log(tasksBlock);

// allNavButtons.forEach((button, index) => {
// 	console.log(index, button);
// });

// html elements propertis
// const taskWrapper = document.querySelector('.tasks_wrapper');
// console.log(taskWrapper.className);
// console.log(taskWrapper.id);
// taskWrapper.className = 'tasks_wrapper2';

// innerText
// const submitButton = document.querySelector('.create-task-block__button');
// console.log(submitButton);
// submitButton.innerText = 'new';

// innerHTML
// taskWrapper.innerHTML = `<div class="main-navigation">
// <a class="main-navigation__button-item" href="#tasks_today" data-button-id="1"> Tasks for today </a>
// <a class="main-navigation__button-item" href="#tasks_week" data-button-id="2"> Tasks for this week </a>
// <a class="main-navigation__button-item" href="#tasks_later" data-button-id="3"> Tasks for Later </a>
// </div>`;

// Children
// const createTaskForm = document.querySelector('.create-task-block');
// console.log(createTaskForm.children);

// data atributs
// const firstNavButton = document.querySelector('.main-navigation__button-item');
// console.log(firstNavButton.dataset.buttonId);
// firstNavButton.dataset.buttonId = '10';

// style
// firstNavButton.style.color = '#000';
// firstNavButton.style.fontWeight = 700;

// html element methods
// createElement
// const newNavButton = document.createElement('a');
// newNavButton.className = 'main-navigation__button-item';
// newNavButton.href = '#tasks_expiret';
// console.log(newNavButton);
// newNavButton.textContent = 'tasks expiret';

// append, remove
// const mainNavigation = document.querySelector('.main-navigation');
// mainNavigation.append(newNavButton);
// newNavButton.remove();

// insertAdjacentElement(position, element)
// mainNavigation.insertAdjacentElement('beforebegin', newNavButton);

// classList : add, remove,toggle

// const firstNavigationButton = document.querySelector('.main-navigation__button-item');
// firstNavigationButton.classList.add('main-navigation__button-item_selected');
// firstNavigationButton.classList.remove('main-navigation__button-item_selected');
// firstNavigationButton.classList.toggle('main-navigation__button-item_selected');
// firstNavigationButton.classList.toggle('main-navigation__button-item_selected');

// atributlarin goturmesi
// const createTaskInput = document.querySelector('.create-task-block__input');
// console.log(createTaskInput.hasAttribute('type'));
// createTaskInput.removeAttribute('placeholder');
// createTaskInput.setAttribute('placeholder', 'create new task');

// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
// 	console.log(event.target);
// 	let target = event.target;
// 	target.classList.add('main-navigation__button-item_selected');
// });

// const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
// allNavButtons.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		const target = event.target;
// 		allNavButtons.forEach((button) => {
// 			button.classList.remove('main-navigation__button-item_selected');
// 		});
// 		target.classList.add('main-navigation__button-item_selected');
// 	});
// });

// submit
// const createTaskForm = document.querySelector('.create-task-block');
// createTaskForm.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const target = event.target;
// 	console.log(target.taskName);
// 	const taskNameInput = target.taskName;
// 	alert(taskNameInput.value);
// });

// keydown,keyup
// document.addEventListener('keyup', (event) => {
// 	const key = event.key;
// 	console.log(key);
// });

// mouseover
// const createTooltip = (text) => {
// 	const tooltip = document.createElement('span');
// 	tooltip.textContent = text;
// 	tooltip.className = 'tooltip';
// 	return tooltip;
// };

// document.addEventListener('mouseover', (event) => {
// 	// console.log(event);
// 	// console.log(event.target);
// 	const target = event.target;

// 	const isOverDeleteButton = target.className.includes('task-item__delete-button');
// 	if (isOverDeleteButton) {
// 		console.log('okey');
// 		const taskItemHTML = target.closest('.task-item');
// 		const taskId = taskItemHTML?.dataset.taskId;
// 		if (taskId) {
// 			console.log('taskId');
// 			const tooltipHTML = createTooltip(`delete task number ${taskId}`);
// 			target.append(tooltipHTML);
// 		}
// 	}
// });

// mousemove
// document.addEventListener('mousemove', (event) => {
// 	console.log(event);
// });

// change , input

// const taskNameInput = document.querySelector('.create-task-block__input');
// taskNameInput.addEventListener('input', (event) => {
// 	const target = event.target.value;
// 	console.log(target);
// });