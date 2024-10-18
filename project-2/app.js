const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function AddTask() {
     if (inputBox.value === '') {
        alert('Please enter a task');
     }
     else{
          let li = document.createElement('li');
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          inputBox.value = '';
          let span = document.createElement('span');
          span.innerHTML = '\u00d7';
          li.appendChild(span);
          
          

     }
     saveData();
}

listContainer.addEventListener('click', function(ev) {
     if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
          saveData();
     }else if (ev.target.tagName === 'SPAN') {
          ev.target.parentElement.remove();
          saveData();
          
     }
}, false);
document.addEventListener('DOMContentLoaded', () => {
     inputBox.addEventListener('keydown', (e) => {
         if (e.key === 'Enter') {
             AddTask();
         }
     });
 });
 function saveData(){
     localStorage.setItem('Data', listContainer.innerHTML);
 }
 function loadData(){
     listContainer.innerHTML = localStorage.getItem('Data');
 }
 loadData();