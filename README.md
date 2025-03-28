# Музыкальный плеер. Учебный пет-проект.

## Описание:

Музыкальный плеер предоставляет полный функционал для работы с аудиотреками:
от проигрывания и остановки треков до изменения громкости и перемотки.
Приложение также поддерживает поиск треков и добавление их в избранное.

## Информация о приложении:

Приложение имеет серверную часть на node.js для обработки данных.  
Серверная часть развёртывается на хостинге glitch.com  
Сервер отдает данные в JSON формате.

GET /api/music - получение списка всех треков.  
GET /api/music?{search=""} - поиск трека по названию и исполнителю

### Имеется:

- проигрывание трека.
- пауза трека.
- остановка трека.
- следующий/предыдущий трек.
- перемотка трека.
- изменение громкости.
- добавление треков в избранное.
- поиск треков.

### Используемый стек:

    HTML
    SCSS
    JavaScript
    Vite
    БЭМ

### Dev зависимости:

    vite
    sass

### Запуск:

    Скачайте данный репозиторий на ваш компьютер и откройте его в среде разработке.

    Далее в терминале пропишите следующие команды:

     npm i
     npm run dev - для просмотра дев сборки

     npm run build - для билд сборки
     npm run preview - для просмотра билд сборки

### Серверная часть:

[api-gOST](https://github.com/one-ess/api-gOST)

### Результат:

[https://g-ost.vercel.app/](https://g-ost.vercel.app/)
