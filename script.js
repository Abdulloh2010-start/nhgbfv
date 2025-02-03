let body = document.querySelector('body');
let daynight = document.getElementById('daynight');
let send = document.getElementById('send');
let input = document.getElementById('input');
let tasklist = document.getElementById('tasklist');

daynight.addEventListener('click', () => {
  if (body.classList.toggle('dark-mode')) {
    daynight.textContent = '☀️';
  } else {
    daynight.textContent = '🌙';
  }
});

send.addEventListener('click', () => {
  if (!input.value) {
    alert('Вы ничего не написали!');
    return;
  }

  let li = document.createElement('li');
  li.className = 'li-element';
  li.style.borderBottom = '1px solid #6c63ff';
  tasklist.appendChild(li);

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  let span = document.createElement('span');
  span.textContent = input.value;

  let editDelete = document.createElement('div');
  editDelete.style.display = 'flex';
  editDelete.style.gap = '10px';

  let editBtn = document.createElement('button');
  editBtn.textContent = '🖋️';
  editBtn.style.backgroundColor = 'white';
  editBtn.style.border = 'none';

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.style.backgroundColor = 'white';
  deleteBtn.style.border = 'none';

  editDelete.appendChild(editBtn);
  editDelete.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editDelete);

  input.value = '';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  editBtn.addEventListener('click', () => {
    let a = prompt(`Изменить значение: ${span.textContent}`);
    if (a === null || a === '') {
      alert('Вы ничего не написали!');
    } else {
      span.textContent = a;
    }
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'gray';
    } else {
      span.style.textDecoration = 'none';
      span.style.color = 'black';
    }
  });
});
