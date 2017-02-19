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

for (i = 0; i < 3; i++){
  var liItem = document.createElement('li');
  document.querySelector('.list-group');
  list.appendChild(liItem);

  var quest = document.createElement('h3');
  document.querySelector('li');
  liItem.appendChild(quest);
  quest.innerHTML = (i + 1) + '. Вопрос №' + (i + 1);

  var checkWrap = document.createElement('div');
  checkWrap.classList.add('check-wrap');
  document.querySelector('li');
  liItem.appendChild(checkWrap);

  for (j = 0; j < 3; j++){
    var check = document.createElement('input');
    document.querySelectorAll('.check-wrap');
    check.id = 'version-' + (i + 1) + '-' + (j + 1);
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', 'qw' + (j + 1) );
    checkWrap.appendChild(check);

    var answer = document.createElement('label');
    answer.setAttribute('for', 'version-' + (i + 1) + '-' + (j + 1));
    answer.innerHTML = 'Вариант ответа №' + (j + 1);
    document.querySelectorAll('.check-wrap');
    checkWrap.appendChild(answer);
  }
}

var btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
btn.setAttribute('type', 'submit');
btn.innerHTML = 'Проверить мои результаты';
document.querySelector('form');
form.appendChild(btn);
