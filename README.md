# React-Rails ToDo

Приложение представляет собой классический To-Do List.  
Выполненный в привлекательном внешнем виде.

Интерфейс исполнен на React и библиотеке Ant Design.  
В качестве API использован Ruby on Rails.

- Деплой фронтенда на GitHub Pages.  
- Деплой бэкенда осуществлен на Heroku.

Приложение распространяется свободно.

### Демонстрация работы  

[Live demo](https://ilyamur.github.io/react-rails-todo-app/)

![This is an image](https://i.imgur.com/YwLhqOC.png)

### Как установить

Приложение разбито на две части, которые устанавливаются отдельно.  
По пути `Services/todoService.js` необходимо настроить желаемый адрес API, по которому будет обращаться приложение.  

Сначала необходимо установить бэкенд:
```
$ git clone https://github.com/IlyaMur/rails_petproject-api
$ cd rails_petproject-api
$ bundle install
$ rails s
```

Для установки фронтенда:

```
$ git clone https://github.com/IlyaMur/react-rails-todo-app/
$ cd react-rails-todo-app
$ npm install
```

### Как запустить

Для приложения необходим node.js 16 и новее.   
Запуск осуществляется командой:

```
$ npm start
```

Приложение будет доступно по адресу `http://localhost:3000/`


##### Free License
