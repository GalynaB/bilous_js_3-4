function genTag (parentName, tagName, className) {
    var parent = document.querySelector(parentName);
    var tag = document.createElement(tagName);
    tag.classList.add(className);
    parent.appendChild(tag);
  }

genTag('body', 'div', 'container-fluid');

var data = {
  pageTitle: 'Тест по программированию',

  categories: [

  {categoryName : "1. Вопрос №1",

    variant : [
      'Вариант ответа №1',
      'Вариант ответа №2',
      'Вариант ответа №3',
    ],

    inputName: ['11','12','13']

  },

  {
    categoryName : "2. Вопрос №2",

    variant : [
      'Вариант ответа №1',
      'Вариант ответа №2',
      'Вариант ответа №3',
    ],

    inputName: ['21','22','23']
  },
  {
    categoryName : "3. Вопрос №3",

    variant : [
      'Вариант ответа №1',
      'Вариант ответа №2',
      'Вариант ответа №3',
    ],

    inputName: ['31','32','33']
  }
  ],

  result: "Проверить мои результаты",

  genTitle: function(pageTitle) {

    var title = document.createElement('h1');
    title.innerHTML = this.pageTitle;
    title.classList.add('title');
    var wrapper = document.querySelector('.container-fluid');
    wrapper.appendChild(title);
  },

  genBtn: function(result) {
    var btn = document.createElement('button');
    btn.innerHTML = this.result;
    btn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
    var form = document.querySelector('.form-group');
    form.appendChild(btn);
  }
}

data.genTitle();

genTag('.container-fluid', 'form', 'form-group');
var form = document.querySelector('.form-group');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');

genTag('.form-group', 'ul', 'list-group');

data.genBtn();
