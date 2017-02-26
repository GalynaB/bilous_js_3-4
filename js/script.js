var data = {
    pageTitle: 'Тест по программированию',
    question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    variant: [['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']],
    result: "Проверить мои результаты",

  genTitle: function(pageTitle) {

    var title = document.createElement('h1');
    title.innerHTML = this.pageTitle;
    title.classList.add('title');
    var wrapper = document.querySelector('.container-fluid');
    wrapper.appendChild(title);

  },

  genTag: function(parentName, tagName, className) {
    var parent = document.querySelector(parentName);
    var tag = document.createElement(tagName);
    tag.classList.add(className);
    parent.appendChild(tag);
  },

  genQuest: function() {

    for (i = 0; i < this.question.length; i++) {

      var li = document.createElement('li');
      var ul = document.querySelector('.list-group');
      ul.appendChild(li);

      document.querySelectorAll('.list-group');
      var h3 = document.createElement('h3');
      h3.innerHTML = (i + 1) + ". " + this.question[i];
      li.appendChild(h3);
    };
  },

  genBtn: function(result) {
    var btn = document.createElement('button');
    btn.innerHTML = this.result;
    btn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
    var form = document.querySelector('.form-group');
    form.appendChild(btn);
  }
}

data.genTag('body', 'div', 'container-fluid');

data.genTitle();

data.genTag('.container-fluid', 'form', 'form-group');
var form = document.querySelector('.form-group');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');

data.genTag('form', 'ul', 'list-group');

data.genQuest();

data.genBtn();
