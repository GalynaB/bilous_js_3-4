var genTest = {
  title: 'Тест по программированию',
  questions: 'Вопрос №',
  answers: 'Вариант ответа №',
  btn: 'Проверить мои результаты',

  genTag: function(parentName, tagName, className) {
    var parent = document.querySelector(parentName);
    var tag = document.createElement(tagName);
    tag.classList.add(className);
    parent.appendChild(tag);
  }
}

genTest.genTag('body', 'div', 'container-fluid');

genTest.genTag('.container-fluid', 'h1', 'title');
var header = document.querySelector('.title');
header.innerHTML = genTest.title;

genTest.genTag('.container-fluid', 'form', 'form-group');
genTest.genTag('.form-group', 'ul', 'list-group');
var form = document.querySelector('.form-group');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');

var list = document.querySelector('.list-group');

for (i = 0; i < 3; i++){
  var liItem = document.createElement('li');
  document.querySelector('.list-group');
  list.appendChild(liItem);

  var quest = document.createElement('h3');
  document.querySelector('li');
  liItem.appendChild(quest);
  quest.innerHTML = (i + 1) + '. ' + genTest.questions + (i + 1);

  var checkWrap = document.createElement('div');
  checkWrap.classList.add('check-wrap');
  document.querySelector('li');
  liItem.appendChild(checkWrap);

  for (j = 0; j < 3; j++) {
    var check = document.createElement('input');
    document.querySelectorAll('.check-wrap');
    check.id = 'version-' + (i + 1) + '-' + (j + 1);
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', 'qw' + (j + 1) );
    checkWrap.appendChild(check);

    var answer = document.createElement('label');
    answer.setAttribute('for', 'version-' + (i + 1) + '-' + (j + 1));
    answer.innerHTML = genTest.answers + (j + 1);
    document.querySelectorAll('.check-wrap');
    checkWrap.appendChild(answer);
  }
}

genTest.genTag('form', 'button', 'btn');
var btn = document.querySelector('button');
btn.classList.add('btn-primary', 'btn-lg', 'btn-block');
btn.setAttribute('type', 'submit');
btn.innerHTML = genTest.btn;
