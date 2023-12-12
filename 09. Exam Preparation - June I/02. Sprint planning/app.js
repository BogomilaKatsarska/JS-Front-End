window.addEventListener('load', solve);

function solve() {
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');

    let totalSprintPoints = 0;
    let taskID = 0;


    createTaskBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        taskID++;

        const titleElement = document.getElementById('title');
        const descriptionElement = document.getElementById('description');
        const labelElement = document.getElementById('label');
        const pointsElement = document.getElementById('points');
        const assgineeElement = document.getElementById('assignee');
        const taskIdElement = document.getElementById('task-id');
        const totalPointsElement = document.getElementById('total-sprint-points');
       
    
        const title = titleElement.value;
        const description = descriptionElement.value;
        const label = labelElement.value;
        const points = pointsElement.value;
        const assignee = assgineeElement.value;
        const totalPoints = totalPointsElement.value;
        
        if (!title || !description || !label || !points || ! assignee) {
            return;
        };
        totalSprintPoints += Number(points);
        

        const totalPointsParagraphElement = document.getElementById('total-sprint-points');
        totalPointsParagraphElement.innerText = `Total Points ${totalSprintPoints}pts`;

        const taskArticleElement = document.createElement('article');
        taskArticleElement.className ='task-card';
        taskArticleElement.setAttribute('id', `task-${taskID}`);

        const labelDivElemenet = document.createElement('div');
        labelDivElemenet.textContent = label;
        labelDivElemenet.classList.add('task-card-label');
        labelDivElemenet.classList.add(`${label}`.toLowerCase().split(' ').splice(0, 2).join('-'));

        const titleHeaderElement = document.createElement('h3');
        titleHeaderElement.textContent = title;
        titleHeaderElement.className = 'task-card-title';

        const descriptionParagraphElement =  document.createElement('p');
        descriptionParagraphElement.textContent = description;
        descriptionParagraphElement.className = 'task-card-description';

        const pointsDivElement = document.createElement('div');
        pointsDivElement.textContent = `Estimated at ${points} pts`;
        pointsDivElement.className = 'task-card-points'

        const assigneeDivElement = document.createElement('div');
        assigneeDivElement.textContent = `Assigned to: ${assignee}`;
        pointsDivElement.classList = 'task-card-assignee';

        const deleteBtnDivSurrounding = document.createElement('div');
        deleteBtnDivSurrounding.classList.add('task-card-actions');

        const deleteSubmittedTaskButton = document.createElement('button');
        deleteSubmittedTaskButton.textContent = 'Delete';

        deleteBtnDivSurrounding.appendChild(deleteSubmittedTaskButton);

        taskArticleElement.appendChild(labelDivElemenet);
        taskArticleElement.appendChild(titleHeaderElement);
        taskArticleElement.appendChild(descriptionParagraphElement);
        taskArticleElement.appendChild(pointsDivElement);
        taskArticleElement.appendChild(assigneeDivElement);
        taskArticleElement.appendChild(deleteBtnDivSurrounding);

        //Add to DOM
        const sectionTaskSection = document.getElementById('tasks-section');
        sectionTaskSection.appendChild(totalPointsParagraphElement);
        sectionTaskSection.appendChild(taskArticleElement);

        titleElement.value='';
        descriptionElement.value='';
        labelElement.value='';
        pointsElement.value='';
        assgineeElement.value='';

        deleteSubmittedTaskButton.addEventListener('click', (e) => {
            e.preventDefault();

            createTaskBtn.disabled = true;
            deleteTaskBtn.disabled = false;

            titleElement.value = title;
            descriptionElement.value = description;
            labelElement.value = label;
            pointsElement.value = points;
            assgineeElement.value = assignee;

            titleElement.disabled = true;
            descriptionElement.disabled = true;
            labelElement.disabled = true;
            pointsElement.disabled = true;
            assgineeElement.disabled = true;

            taskArticleElement.remove();
        });

        deleteTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();

            titleElement.disabled = false;
            descriptionElement.disabled = false;
            labelElement.disabled = false;
            pointsElement.disabled = false;
            assgineeElement.disabled = false;

            totalSprintPoints -= document.getElementById('points').value;
            document.getElementById('total-sprint-points').innerText = `Total Points ${totalSprintPoints}pts`;

            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('label').value = '';
            document.getElementById('points').value = '';
            document.getElementById('assignee').value = '';

            createTaskBtn.disabled = false;
            deleteTaskBtn.disabled = true;
        });
    })};
