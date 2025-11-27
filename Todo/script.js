let todos = [];
let indexValue = null;

const inputname = document.querySelector("input");
const inputdisc = document.querySelector("textarea");
const createbtn = document.querySelector("#create-btn");
const todolist = document.querySelector(".todo-list")

createbtn.addEventListener("click",()=>{
    const name = inputname.value.trim();
    const disc = inputdisc.value.trim();

if(!name || !disc){
    alert("please enter required fields");
}
if(typeof(name) !== 'string'){
    alert("name sholud not contain numbers");
}

if(indexValue != null){
    todos[indexValue] = {name,disc,updateAt:Date.now()};
    indexValue=null;
    createbtn.textContent= "create";
}else{
    todos.push({name,disc,updateAt:Date.now()});
}

inputname.value = '';
inputdisc.value = '';

renderTodo();
});

function renderTodo(){
    todos.sort((a,b) => b.updateAt - a.updateAt);

    todolist.innerHTML = '';
    todos.forEach((todo,index)=>{
        const div = document.createElement("div");
        div.className = "todo-item";

        div.innerHTML = `
        <div class="data">
        <strong>${todo.name}</strong>
        <p>${todo.disc}</p>
        </div>

        <div id="btns">
            <button class="edit-btn" onclick="editTodo(${index})">Edit</button><br><br>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        </div> `;

        todolist.appendChild(div);
    })
}
//edit function

function editTodo(index){
    const todo = todos[index];
    inputname.value = todo.name;
    inputdisc.value = todo.disc;
    indexValue=index;
    createbtn.textContent="Update";
}
//delete function

function deleteTodo(index){
    todos.splice(index,1);

    renderTodo();
}







