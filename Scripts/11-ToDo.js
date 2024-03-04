const myArray = [{
    name: 'make dinner',
    dueDate: '02-28-2024'
},

{
    name: 'wash dishes',
    dueDate: '02-28-2024'
} 
];
displayTodoList();

function displayTodoList() {
    let todoListhtml = '';
    for (let i = 0; i < myArray.length; i++) {
        const todoObject = myArray[i];

        const { name, dueDate } = todoObject; //destructuring
        //const dueDate = todoObject.dueDate;

        //generate html using Java script
        const html =
            `<div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            myArray.splice(${i}, 1);
            displayTodoList();" class="delete-todo-btn">Delete</button> 
        `;
        //.splice takes 2 values, the value to be 
        //removed and how many values to remove
        todoListhtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListhtml;
}
function Enterbtn(event) {
    if (event.key === 'Enter') {
        addTodo();
    }

}
function addTodo() {
    const inputElement = document.querySelector('.name-input');
       let inputele = inputElement.value;
   // console.log(inputele);

    const dateInputElement = document.querySelector('.date-input');
    const dueDate= dateInputElement.value;

    myArray.push(
        {name:inputele,
        //dueDate: dueDate;  
        dueDate   //short hand property       
        });
    //console.log(myArray);

    inputElement.value = '';

    displayTodoList();
}