type Todo = {
    name: string;
    disc: string;
    updateAt: number
}
let todos: Todo[] = [];
let indexValue: number | null = null;

const inputname = document.querySelector("input") as HTMLInputElement;
const inputdisc = document.querySelector("textarea") as HTMLTextAreaElement;
const createbtn = document.querySelector("#create-btn") as HTMLButtonElement;
const todolist = document.querySelector(".todo-list") as HTMLButtonElement;

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
    
    const t = document.querySelector("#todoTemplate") as HTMLTemplateElement;
    todolist.innerHTML = '';
    const fragment = new DocumentFragment();
    
    todos.forEach((todo,index)=>{

        const clone = t.content.cloneNode(true) as DocumentFragment;
        
        (clone.querySelector(".todo-name") as Element).textContent = todo.name;
        (clone.querySelector(".todo-disc") as Element).textContent = todo.disc;
        (clone.querySelector(".edit-btn") as HTMLButtonElement).onclick = () => editTodo(index);
        (clone.querySelector(".delete-btn") as HTMLButtonElement).onclick = () => deleteTodo(index);

        fragment.append(clone);
    })
    todolist.appendChild(fragment);
}
//edit function

function editTodo(index: number): void{
    const todo = todos[index];
    if(todo) inputname.value = todo.name;
    if(todo) inputdisc.value = todo.disc;
    indexValue=index;
    createbtn.textContent="Update";
}
//delete function

function deleteTodo(index: number): void{
    todos.splice(index,1);
    renderTodo();
}
