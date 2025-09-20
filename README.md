# Hello Recruto Web Service

Веб-сервис, который выводит персонализированное приветствие с возможностью настройки через GET параметры.

## Описание

Сервис отображает сообщение в формате: "Hello {name}! {message}!"

Где:
- `name` - имя (по умолчанию "Recruto")
- `message` - сообщение (по умолчанию "Давай дружить")

## Использование

### Примеры URL

- Базовое использование: `https://your-username.github.io/testovoe_rekruto/`
- С параметрами: `https://your-username.github.io/testovoe_rekruto/?name=Recruto&message=Давай дружить`
- Кастомные параметры: `https://your-username.github.io/testovoe_rekruto/?name=Иван&message=Привет!`

## Развертывание на GitHub Pages

### Шаг 1: Создание репозитория

1. Создайте новый репозиторий на GitHub с именем `testovoe_rekruto`
2. Склонируйте репозиторий локально:
   ```bash
   git clone https://github.com/your-username/testovoe_rekruto.git
   cd testovoe_rekruto
   ```

### Шаг 2: Загрузка файлов

1. Скопируйте файл `index.html` в корень репозитория
2. Добавьте файлы в git:
   ```bash
   git add index.html
   git commit -m "Add Hello Recruto web service"
   git push origin main
   ```

### Шаг 3: Настройка GitHub Pages

1. Перейдите в настройки репозитория (Settings)
2. Найдите раздел "Pages" в левом меню
3. В разделе "Source" выберите "Deploy from a branch"
4. Выберите ветку "main" и папку "/ (root)"
5. Нажмите "Save"

### Шаг 4: Получение ссылки

После настройки GitHub Pages (обычно занимает несколько минут), ваш сервис будет доступен по адресу:

```
https://your-username.github.io/testovoe_rekruto/
```

### Шаг 5: Тестирование

Протестируйте сервис с параметрами:
```
https://your-username.github.io/testovoe_rekruto/?name=Recruto&message=Давай дружить
```

## Технические детали

- Чистый HTML, CSS и JavaScript (без внешних зависимостей)
- Адаптивный дизайн
- Обработка URL параметров через JavaScript
- Красивый современный интерфейс

## Структура проекта

```
testovoe_rekruto/
├── index.html          # Основной файл веб-сервиса
└── README.md          # Документация
```

## Требования

- Современный веб-браузер с поддержкой JavaScript
- Для локального тестирования: Python 3.x или любой другой HTTP сервер
