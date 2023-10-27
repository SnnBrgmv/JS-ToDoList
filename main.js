let tasks = document.getElementsByClassName("task")
let discussion = document.getElementById('discussion')
let progress = document.getElementById('progress')
let completed = document.getElementById('completed')
let icons = document.getElementsByClassName('icon')

for (let task of tasks) {

    for (const icon of icons) {
        icon.addEventListener('click',(e)=>{
            icon.parentElement.remove()
        })
    }
    let selectorTask
    task.addEventListener('dragstart',(e)=>{
       selectorTask = e.target;
    })

       discussion.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
       discussion.addEventListener('drop',(e)=>{
        discussion.appendChild(selectorTask);
        selectorTask = null;
       
    })

    progress.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
       progress.addEventListener('drop',(e)=>{
        progress.appendChild(selectorTask);
        selectorTask = null;
    })

    completed.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
       completed.addEventListener('drop',(e)=>{
        completed.appendChild(selectorTask);
        selectorTask = null;
    })
    
    
    
}





