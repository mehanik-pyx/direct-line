# direct-line
deployment: https://mehanik-pyx.github.io/direct-line/dist/
DONE:
1. получение данных
2. отображение списка
3. ui
4. фильтрация
5. отправка запроса
6. преселект
7. сброс всех опций
8. убирать выбранные
9. помечать выбранные
10. инпут с лимитом
11. кнопки переключения offset

Initial TODO:
Необходимо создать на vue 3 переиспользуемый виджет со списком элементов и возможностью отправки данных через форму.

1. Возможность загружать данные списка элементов через REST API. Для этого у виджета должно быть поле с url как входной параметр.
2. Виджет должен отправлять данные через форму нажатием submit самой формы или кнопки apply виджета. Для этого нужна возможность указать название поля для отправки (name) как входной параметр.
2. Возможность фильтрации списка опций через отдельное поле.
3. Возможность выбрать/сбросить все опции.
4. Возможность установить заранее выбранные элементы через входной параметр.
5. Необязательный пункт: подгрузка элементов через REST API частями (например по 50 шт.) в виджет

REST API
1. https://lobster.tools/api/v1/categories
   Authorization: Bearer BT3HK2NpCnyrKiDo
   Параметры запроса:
    - limit* - количество элементов в ответе (если 0 - выводятся все)
    - offset* - отступ от начала списка элементов в ответе
    - search - строка для поиска

2. https://lobster.tools/api/v1/projects
   аналогично 1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
