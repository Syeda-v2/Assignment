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
    
    const t = document.querySelector("#todoTemplate");
    todolist.innerHTML = '';
    const fragment = new DocumentFragment();
    
    todos.forEach((todo,index)=>{

        const clone = t.content.cloneNode(true);
        
        clone.querySelector(".todo-name").textContent = todo.name;
        clone.querySelector(".todo-disc").textContent = todo.disc;
        clone.querySelector(".edit-btn").onclick = () => editTodo(index);
        clone.querySelector(".delete-btn").onclick = () => deleteTodo(index);

        fragment.append(clone);
        todolist.appendChild(fragment);
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







