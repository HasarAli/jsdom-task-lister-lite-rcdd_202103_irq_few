document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector('#tasks');
  const todoForm = document.querySelector('#create-task-form');
  
  todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const li = document.createElement('li');
    li.innerText = formData.get('new-task-description');
    ul.appendChild(li);
  });
});
