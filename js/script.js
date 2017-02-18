var body = document.querySelector('body');
var wrapper = document.createElement('div');

wrapper.classList.add('container-fluid');
body.appendChild(wrapper);

var title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Тест по программированию';
document.querySelector('wrapper');
wrapper.appendChild(title);

var form = document.createElement('form');
form.classList.add('form-group');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');
document.querySelector('wrapper');
wrapper.appendChild(form);

var list = document.createElement('ul');
list.classList.add('list-group');
document.querySelector('form');
form.appendChild(list);

var btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
btn.setAttribute('type', 'submit');
btn.innerHTML = 'Проверить мои результаты';
document.querySelector('form');
form.appendChild(btn);
