const $ = require('jquery');
const removeButton = '<button id="remove-todo" class="remove-button">Remove</button>';
require('./app.scss');
$(() => {
		$(document).on('click', '#add-todo', () => {
			$('#warn').hide();
			let title = $('#title').val();
			if (title == '') {
				$('#warn').show();
				return;
			} 
			let todos = $('#todos');
			let firstRemoved = todos.find('li.line-through:first');
			if(firstRemoved.length > 0) {
				firstRemoved.before('<li><span>' + title + '</span>' + removeButton + '</li>');
			} else {
				todos.append('<li><span>' + title + '</span>' + removeButton + '</li>');
			}
			$('#title').val('');
		});
		
		$(document).on('click', '#remove-todo', (event) => {
			let last = $('#todos').find('li:last-child');
			let btn = $(event.target);
			let toMove = btn.parent('li');			
			toMove.addClass('line-through');
			toMove.insertAfter(last);
			btn.hide();
		});
	}
);