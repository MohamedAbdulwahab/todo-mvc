const deleteBtn = document.querySelectorAll('.del');
const todoComplete = document.querySelectorAll('span.not');
const todoIncomplete = document.querySelectorAll('span.completed');


Array.from(deleteBtn).forEach((el)=> {
    el.addEventListener('click', deleteTodo)
});

Array.from(todoComplete).forEach((el) => {
	el.addEventListener('click', markComplete);
});

Array.from(todoIncomplete).forEach((el) => {
	el.addEventListener('click', markIncomplete);
});

async function deleteTodo() {
    const todoId = this.parentNode.dataset.id;
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        });
		const data = await response.json()
		console.log(data);
		location.reload();
	} catch(error) {
		console.log(error);
	}
}

async function markComplete() {
	const todoId = this.parentNode.dataset.id;
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();
	} catch(error) {
		console.log(error);	
	}
}

async function markIncomplete() {
	const todoId = this.parentNode.dataset.id;
	try {
		const response = await fetch('todos/markIncomplete', {
			method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
		});
		const data = await response.json();
		console.log('Marked Incomplete');
		location.reload();
	} catch(error) {
		console.log(error);
	}
}