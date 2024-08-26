# Timestamp and Posts App

### Описание

Это приложение отображает временную метку, которая создается на сервере во время SSR (Server-Side Rendering). Временная метка отображается на веб-странице при первой загрузке. При дальнейшей гидратации на стороне клиента приложение обновляет отображаемое значение на странице. Кроме того, приложение обновляет временную метку каждые 10 секунд. На странице также отображается список постов, загружаемых с использованием API сервиса JSONPlaceholder.

### Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   
2. Установите зависимости:

bash
Копировать код
npm install

3. Запустите приложение в режиме разработки:

bash
Копировать код
npm run dev

 4.Структура проекта
plaintext
Копировать код
/src
  /app
    page.tsx            # Главная страница
    page.module.css     # Стили главной страницы
  /components
    /common
      TimestampDisplay.tsx        # Компонент отображения временной метки
      TimestampDisplay.module.css # Стили компонента TimestampDisplay
    /posts
      PostItem.tsx                # Компонент отображения одного поста
      PostItem.module.css         # Стили компонента PostItem
      PostsList.tsx               # Компонент отображения списка постов
      PostsList.module.css        # Стили компонента PostsList
  /hooks
    useTimestamp.ts     # Кастомный хук для работы с временной меткой
  /services

 5. Лицензия
Этот проект лицензирован под MIT License. Смотрите файл LICENSE для подробностей.

sql
Копировать код

### LICENSE файл

```plaintext
MIT License

Copyright (c) 2023-2024 [ваше имя или имя вашей организации]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    api.ts              # API сервис для получения временной метки и постов
