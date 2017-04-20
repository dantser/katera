# Текстовое поле

#### Модификаторы блока
```css
.text-field_has_error
```
Добавляет ошибку блоку, меняет цвет рамки и добавляет иконку

#### Параметры блока
Объект data
```javascript
{
    type: 'text',
    name: 'input name',
    value: 'value',
    placeholder: 'placeholder'
}
```

#### Особенности
placeholder - отдельный элемент, если атрибут value у input (.text-field__control) пустой,
то placeholder виден, иначе, placeholder скрывается.
аттрибут value меняется с помощью JS

#### Использование блока
Подключаем блок
```jade
include ../blocks/text-field/text-field
```
Используем в шаблоне
```jade
+text-field({ type: 'text', name: 'input name', value: 'value', placeholder: 'placeholder' });
```
Подключаем JS файл, важно, идентификатор текстового поля `'.js-my-text-field'` должен быть уникальным
иначе будет ошибку (см. консоль в браузере), идентификатор может быть ID
```javascript
import TextField from '../blocks/text-field/text-field';

const myTextField = new TextField('.js-my-text-field');
```
Управление текстовым полем
```javascript
myTextField.value; // возвращает текущее значение
myTextField.value = 'hello' // устанавливает значение hello
myTextField.error; // возвращает тексто оишбки (по умолчанию false)
myTextField.error = 'invalid email address'; // устанавляет ошибку invalid email address
// вешаем событие клик на текстовое поле (событие вешается на .text-field__control, т.е. на input
myTextField.on('click', function() {
  $(this).val(); // что-то делаем 
});
```

Пример использования JS в форме
```javascript
$('.js-my-form').on('submit', function(e) {
    e.preventDefault();
    
    const myTextField = new TextField('.js-my-text-field');
    if (myTextField.value === '') {
        myTextField.error = true; // или текст, если он нужен
    }
    
    // Если есть ошибка в поле, то, ничего не делаем
    if (myTextField.error) {
        return false;
    }
    
    // отправляем форму
    $(this).submit();
});
```
