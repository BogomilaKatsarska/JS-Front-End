function solve(input){
    const ticketLines = Number(input.shift());
    const tickets = input.slice(0, ticketLines);
    const commands = input.slice(ticketLines);

    //we use 'reduce' to change the data type from Arr to..sth else needed
    const board = tickets.reduce((acc, curr) => {
        const[assignee, taskId, title, status, points] = curr.split(':')
        if  (!acc.hasOwnProperty(assignee)){
            acc[assignee] = [];
        }
        acc[assignee].push({taskId, title, status, points: Number(points)});
        return acc;
    }, {});

    const commandRunner = {
        'Add New': addNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': removeTask, 
    }

    //console.log(JSON.stringify(board, null, 2)) --> we use the second 2 params to make it readable in the terminal
    commands.forEach(command => {
        const [commandName, ...rest] = command.split(':');
        commandRunner[commandName](...rest) // if we use (rest) the data will be array, (...rest) will spread the data
    });

/*
    const todoTasksTotalPointss = Object.values(board)
    .flat()
    .filter((t) => t.status = "ToDo")
    .reduce((acc, curr) => {
        return acc + curr.points;
    }, 0);
*/
    
//total points:
    const toDoTasksTotalPoints = Object.values(board).reduce((acc, curr) =>{
        const boardTotal = curr
            .filter( (t) => t.status === 'ToDo')
            .reduce((tasksTotal, task) => tasksTotal + task.points, 0)

        return acc + boardTotal;
    }, 0);
    console.log(`"ToDo: ${toDoTasksTotalPoints}pts"`)

    const inProgressTaskTotalPoints = Object.values(board).reduce((acc, curr) =>{
        const boardTotal = curr
            .filter( (t) => t.status === 'In Progress')
            .reduce((tasksTotal, task) => tasksTotal + task.points, 0)

        return acc + boardTotal;
    }, 0);
    console.log(`"In Progress: ${inProgressTaskTotalPoints}pts"`)

    const codeReviewTasksTotalPoints = Object.values(board).reduce((acc, curr) =>{
        const boardTotal = curr
            .filter( (t) => t.status === 'Code Review')
            .reduce((tasksTotal, task) => tasksTotal + task.points, 0)

        return acc + boardTotal;
    }, 0);
    console.log(`"Code Review: ${codeReviewTasksTotalPoints}pts"`)

    const doneTasksTotalPoints = Object.values(board).reduce((acc, curr) =>{
        const boardTotal = curr
            .filter( (t) => t.status === 'Done')
            .reduce((tasksTotal, task) => tasksTotal + task.points, 0)

        return acc + boardTotal;
    }, 0);
    console.log(`"Done Points: ${doneTasksTotalPoints}pts"`)

    function addNewTask(assignee, taskId, title, status, points){
        if (!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!"`);
            return;
        }

        board[assignee].push({taskId, title, status, points: Number(points)});
    };

    function changeTaskStatus(assignee, taskId, status){
        if (!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!"`);
            return;
        }

        const task = board[assignee].find((t) => t.taskId === taskId);
        if (!task){
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            return;
        }
        task.status = status;
    };

    function removeTask(assignee, index){
        if (!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!"`);
            return;
        }
        if (index < 0 || index >= board[assignee].length){
            console.log('"Index is out of range!');
            return;
        }

        board[assignee].splice(index, 1); // на конкретния индекс 'index', махаме 1 ел
    };

    if (doneTasksTotalPoints >= (toDoTasksTotalPoints + inProgressTaskTotalPoints + codeReviewTasksTotalPoints)){
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

    //console.log(JSON.stringify(board, null, 2));
};

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
    ])