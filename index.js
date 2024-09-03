

const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output");

const inputValue = inputBox.value



function add() {




   if (inputBox.value === "") {
      alert('You must write something!!!');
   } else {

      let i = document.createElement("li");
      i.innerHTML = inputBox.value;
      outputBox.appendChild(i);
      i.classList.add('tasks');



      done = document.createElement("button");
      done.innerHTML = 'completed';
      i.appendChild(done);
      done.classList.add('completed');



      removeTask = document.createElement("button");
      removeTask.innerHTML = "remove-task";
      i.appendChild(removeTask);
      removeTask.classList.add('delete');



      removeTask.addEventListener('click', function () {
         outputBox.removeChild(i);
      });





      done.addEventListener('click', function () {
         if (i.style.textDecoration === 'line-through') {
            i.style.textDecoration = 'none';
         }
         else {
            i.style.textDecoration = 'line-through';

         }
      });



   }

   inputBox.value = ("");
   saveData();


}


function saveData() {
   localStorage.setItem("todos", output.innerHTML);
}

function loadData() {
   output.innerHTML = localStorage.getItem("todos");
}
loadData();




















