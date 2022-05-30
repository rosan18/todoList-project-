
//mvp
//Select everything from the DOM
//declare an array to store todo list items
//create todo object
//Add todo list items into array
//render todo items

let div1 = document.getElementsByClassName('container');
let div2 = document.getElementById('input-container');
let input = document.getElementById('inputTask');
let div3 = document.getElementById('lists-container');
let ul = document.getElementById('todo-list');
let btn = document.getElementById('addTask')
//console.log('btn');


let todoListArray = []; // array that will store todo list items

//this function will create a new todo object based on the
// text that was entered in the text input, and push it into
// the `todoItems` array
//takes text as parameter
function addTodo(text){
    let toDo = {
        text: text,
        checked:false,
        id:Date.now(),
    }

  todoListArray.push(toDo);
  console.log(todoListArray)

}
//Adding task
//select the btn element
//add an event to it 


 btn.addEventListener('click', addTodo);
    
function addTodo(){
    let text = input.value;
    console.log(text);
    //if text is not empty
    if(text &&  text.length > 0){

      let toDo = {
        text,
        checked:false,
        id:Date.now(),
      }

      todoListArray.push(toDo);
      console.log(todoListArray)
      // finally clear the input box value
      input.value = '';
      input.focus();
      renderTodoList();
//if text is empty
    }else{
      alert('Please add something');
    }
} ;  

//Render the todo items
function renderTodoList(){
  // clear all previous items
  
  while (ul.firstChild) {
    ul.firstChild.remove()
  }
//loop through each item in todo
  for(index in todoListArray){
    renderTodo(index, todoListArray[index])
  }

}

//create li element
function renderTodo(index, todo) {
 let li = document.createElement('li');
 //li takes task stored in the object and also
 //a class attribute to delete a task
 li.innerHTML = todo.text + ' <i class="delete">(delete)</i>';
 ul.append(li);

 li.getElementsByTagName('i')[0].addEventListener('click', () => {
    removeTodo(index);
 });

}

// Remove todo
function removeTodo(index){
  todoListArray.splice(index, 1);
  renderTodoList()
}

// Render TODO list
renderTodoList();
