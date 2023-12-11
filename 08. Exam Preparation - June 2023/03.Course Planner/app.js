tasksUrl = 'http://localhost:3030/jsonstore/tasks/';
const courseTypes = ['Long', 'Medium', 'Short'];

const loadButtonElement = document.getElementById('load-course');
const addSubmitButtonElement = document.getElementById('add-course');
const editSubmitButtonElement = document.getElementById('edit-course');

//below 4 rows are used for adding a course:
const courseTitleElement = document.getElementById('course-name');
const courseTypeElement = document.getElementById('course-type');
const courseDescriptionElement = document.getElementById('description');
const courseTeacherElement = document.getElementById('teacher-name');

const courseListElement = document.getElementById('list');

loadButtonElement.addEventListener('click', loadCourses);
addSubmitButtonElement.addEventListener('click', addCourse);
editSubmitButtonElement.addEventListener('click', editCourse);

let currentCourseId = '';

async function editCourse(e){
    e.preventDefault();

    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)){
        return;
    }

    const course = {
        title,
        type,
        description,
        teacher,
    }

    await fetch(`${tasksUrl}/${currentCourseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
    });

    courseTitleElement.value = '';
    courseTypeElement.value = '';
    courseDescriptionElement.value = '';
    courseTeacherElement.value = '';

    addSubmitButtonElement.disabled = false;
    editSubmitButtonElement.disabled = true;

    await loadCourses();
}

async function addCourse(e){
    e.preventDefault(); // in order not to reload the page
    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)){
        return;
    }
    const course = {
        title,
        type,
        description,
        teacher,
    }

    await fetch(tasksUrl, {
        method: 'POST',
        body: JSON.stringify(course),
    })

    courseTitleElement.value = '';
    courseTypeElement.value = '';
    courseDescriptionElement.value = '';
    courseTeacherElement.value = '';
    
    await loadCourses();
}

async function loadCourses() {
    const response = await fetch(tasksUrl);
    const data = await response.json();

    courseListElement.innerHTML = ''; // зачиства данните преди да ги апенд-не

    const courses = Object.values(data); //const courses = Object.keys(data).map(key =>({_id:key, ...data[key]})); -> optional
    //console.log(data); we do this in order to check the fields for the data coming from the server


    for (const course of courses) {
        const courseElement = renderCourse(course);
        courseElement.setAttribute('data-course-id', course._id);
        courseListElement.appendChild(courseElement);
    }
}

function renderCourse(course) {
    const headingElement = document.createElement('h2');
    headingElement.textContent = course.title;
    const teacherElement = document.createElement('h3');
    teacherElement.textContent = course.teacher;
    const typeElement = document.createElement('h3');
    typeElement.textContent = course.type;
    const descriptionElement = document.createElement('h4');
    descriptionElement.textContent = course.description;

    const editButtonElement = document.createElement('button');
    editButtonElement.className = 'edit-btn';
    editButtonElement.textContent = 'Edit Course';
    // editButtonElement.setAttribute('disabled', true);

    const finishButtonElement = document.createElement('button');
    finishButtonElement.className = 'finish-btn';
    finishButtonElement.textContent = 'Finish Course';

    const courseContainer = document.createElement('div');
    courseContainer.className = 'container';
    courseContainer.appendChild(headingElement);
    courseContainer.appendChild(teacherElement);
    courseContainer.appendChild(typeElement);
    courseContainer.appendChild(descriptionElement);
    courseContainer.appendChild(editButtonElement);
    courseContainer.appendChild(finishButtonElement);

    //editCourse below
    editButtonElement.addEventListener('click', (e) =>{
        courseTitleElement.value = course.title;
        courseTypeElement.value = course.type;
        courseDescriptionElement.value = course.description;
        courseTeacherElement.value = course.teacher;

        currentCourseId = courseContainer.getAttribute('data-course-id');
        courseContainer.remove();

        addSubmitButtonElement.disabled = true;
        editSubmitButtonElement.disabled = false;

    });

    finishButtonElement.addEventListener('click',async (e) =>{
        await fetch(`${tasksUrl}/${course._id}`, {
            method: 'DELETE',
        });
        await loadCourses();
    });

    return courseContainer;
    // <div class="container">
    //     <h2>JS Back-End</h2>
    //     <h3>John Brown</h3>
    //     <h3>Long</h3>
    //     <h4>JS Back-end responsible for managing the interchange of data between the server
    //         and the users</h4>
    //     <button class="edit-btn">Edit Course</button>
    //     <button class="finish-btn">Finish Course</button>
    // </div>
}

