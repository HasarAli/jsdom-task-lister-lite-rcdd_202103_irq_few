document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector('ul');
  const todoForm = document.querySelector('form');
  
  todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const li = document.createElement('li');
    li.innerText = `${formData.get('task')}\n${formData.get('due')}`;
    ul.appendChild(li);
  });
});
