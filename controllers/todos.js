const Todo = require('../models/Todo');

module.exports = {
	getTodos: async (request, response) => {
		try {
			const todoItems = await Todo.find();
			const itemsLeft = await Todo.countDocuments({ completed: false });
			response.render('todos.ejs', { todos: todoItems, left: itemsLeft });
		} catch(error) {
			console.log(error);
		}
	},
	createTodo: async (request, response) => {
		try {
			const createTodo = await Todo.create({ todo:request.body.todoItem, completed: false });
			console.log('todo has been added!');
			response.redirect('/todos');
		} catch(error) {
			console.log(error);	
		}
	}
}
