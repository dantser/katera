# Структура проекта

```
├── app/                              # Исходники                    
│   ├── blocks/                       # Блоки (компоненты)         
│   │   └── blockName/                # Блок   
│   │       ├── blockName.pug         # Разметка блока    
│   │       ├── blockName.scss        # Стили блока
│   │       └── blockName.js          # Скрипты блока
│   ├── data/                         # Данные для шаблонов в формате JSON
│   ├── layouts/                      # Общая разметка
│   │   ├── default.pug               # Разметка документа
│   │   └── head.pug                  # Разметка head части документа
│   ├── pages/                        # Страницы
│   │   └── index.pug                 # Главная страница 
│   ├── scripts/                      # Скрипты
│   │   └── app.js                    # Главный скрипт
│   ├── styles/                       # Стили проекта
│   │   ├── helpers/                  # Вспомогательные стили
│   │   │   ├── fonts.scss            # Объявление шрифтов
│   │   │   ├── mixins.scss           # Миксины
│   │   │   └── variables.scss        # Переменные
│   │   └── app.scss                  # Главный файл
│   ├── static/                       # Вся статика проекта
│   │   ├── icons/                    # Из этих иконок генерируется icon.svg спрайт
│   │   ├── images/                   # Изоображения (.png, .svg. jpg) и.т.д
│   │   └── misc/                     # Файлы, которые будут копироваться в корень проекта (faviocn.ico) и.т.д
├── dist/                             # Сборка шаблона (автогенирация)
└── browserlist                       # Файл конфигурации версий браузеров для автопрефиксера https://github.com/ai/browserslist
```