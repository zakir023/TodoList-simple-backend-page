var submitBtn = document.getElementsByClassName('submit-btn')[0];
var inputTask = document.getElementById('task');
var taskList = document.getElementsByClassName('task-list')[0];
var totalTaskNode = document.getElementById('total-task');
var totalTask = 0;
submitBtn.addEventListener('click',(e)=>{
  handleSubmit(e);
});

function handleSubmit(e)
{

  e.preventDefault();
  
  var taskValue= inputTask.value.trim();
  
  if(taskValue.length <= 0){
    alert('empty task not allowed');
    return;
  }
  //all task Name

  var allTaskName=getAllTaskName();
  if(allTaskName.indexOf(taskValue)>=0){
    alert('task already present');
    return;
  }
  addToTaskList(taskValue);
  getTotalTask();
  inputTask.value= "";
}

function addToTaskList(taskName)
{
  var li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" name="task-li" class="task-li" value="${taskName}" />
  <span class="task-name">${taskName}</span>
  <button class="dlt-btn">Delete</button>
  `;
  li.getElementsByClassName('dlt-btn')[0].addEventListener('click',(e)=>{
    deleteElement(e);
  })
  taskList.append(li);
}


function getAllTaskName() 
{
  var resp = [];
  var taskName = document.getElementsByClassName('task-name');

  for(let i = 0;i<taskName.length;i++)
  {
    resp.push(String(taskName[i].innerText));
  }
  return resp;

}


function deleteElement(e)
{
  console.log('e',e.target);
  var liParent = e.target.closest('li');
  liParent.remove();
  getTotalTask();

}

function getTotalTask()
{
   totalTask = document.getElementsByClassName('task-name').length;
   totalTaskNode.innerText=totalTask;
}

