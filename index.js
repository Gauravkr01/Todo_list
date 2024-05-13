
const addtodo = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text'] ");
const todolist = document.querySelector(".todo-list");





addtodo.addEventListener("submit"  , (e)=>{
   e.preventDefault();
 const todoText = todoInput.value ;

  const newLi = document.createElement("li");
  
  const newliinnerHTML = `
  
  <span class="text"> ${todoText}</span>
  <div class="todo-buttons">

      <button class="todo-btn done">Done</button>

      <button class="todo-btn remove"> Remove</button>
 </div> 
` ;

newLi.innerHTML = newliinnerHTML;

todolist.append(newLi);


  todoInput.value ="";

}); 

//event delegation ------------
todolist.addEventListener("click" , (e)=>{

    //showing classList 
   //console.log(e.target.classList);

if(e.target.classList.contains("done")){
 // console.log(" List added !!!! ");
  const lispan = e.target.parentNode.previousElementSibling;//selecting span by paretnNode
 // console.log(lispan);
  lispan.style.textDecoration = "line-through";




}

if(e.target.classList.contains("remove")){
   // console.log("you want remove ") ; 
   const lispan1 = e.target.parentNode.parentNode;//selcting by querySelctor
  //console.log(lispan1)
lispan1.remove();

}

})   





const select = document.querySelector(".form-todo"); 
console.log(select);

function randomGenerator(){
    
    const red = Math.floor(Math.random()* 256)   ;

    const green = Math.floor(Math.random()* 256) ;

    const blue = Math.floor(Math.random()* 256)  ;

    const random = `rgb(${red}, ${green} , ${blue})` ;

    return random ;  

}


select.addEventListener("click" , ()=>{

    const randomColor = randomGenerator();
    document.body.style.background = randomColor;



})




