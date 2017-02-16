const $ = require('jquery');
const removeButton = '<button id="remove-todo" class="remove-button">Remove</button>';
require('./app.scss');
$(() => {
    $(document).on('click', '#add-todo', () => {
        let title = $('#title');
        let warn = $('#warn');
        warn.hide();
        if (title.val() == '') {
            warn.show();
            return;
        }
        let todos = $('#todos');
        let firstRemoved = todos.find('li.line-through:first');
        let newTodo = '<li><span>' + title.val() + '</span>' + removeButton + '</li>';
        if (firstRemoved.length > 0) {
            firstRemoved.before(newTodo);
        } else {
            todos.append(newTodo);
        }
        title.val('');
    });

    $(document).on('click', '#remove-todo', (event) => {
        let last = $('#todos').find('li:last-child');
        let btn = $(event.target);
        let toMove = btn.parent('li');
        toMove.addClass('line-through');
        toMove.insertAfter(last);
        btn.hide();
    });
});