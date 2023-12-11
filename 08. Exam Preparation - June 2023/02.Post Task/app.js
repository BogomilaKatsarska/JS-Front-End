window.addEventListener("load", solve);

function solve() {
  const publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', (e)=>{
    //e.preventDefault() should be added in case the <button> is NOT with type='button' e.g we use it when the type='submit'
    const titleElement = document.getElementById('task-title');
    const categoryElement = document.getElementById('task-category');
    const contentElement = document.getElementById('task-content');
    // if the element is <input><option> we use value
    // else we use textContent
    const title = titleElement.value;
    const category = categoryElement.value;
    const content = contentElement.value;
    if (!title || !category || !content ){
        return;
    }
    const titleHeaderElement = document.createElement('h4');
    titleHeaderElement.textContent = title;
    
    const categoryParagraphElemet = document.createElement('p');
    categoryParagraphElemet.textContent = `Category: ${category}`;

    const contentParagraphElement = document.createElement('p');
    contentParagraphElement.textContent = `Content: ${content}`;

    const articleElemet = document.createElement('article');
    articleElemet.appendChild(titleHeaderElement);
    articleElemet.appendChild(categoryParagraphElemet);
    articleElemet.appendChild(contentParagraphElement);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('action-btn');

    const buttonEditElement = buttonElement.cloneNode();
    buttonEditElement.classList.add('edit');
    buttonEditElement.textContent = 'Edit';

    const buttonPostElement = buttonElement.cloneNode();
    buttonPostElement.classList.add('post');
    buttonPostElement.textContent= 'Post';

    const listItemElement = document.createElement('li');
    listItemElement.className = 'rpost';
    listItemElement.appendChild(articleElemet);
    listItemElement.appendChild(buttonEditElement);
    listItemElement.appendChild(buttonPostElement);

    //add it to DOM
    const reviewListElement = document.getElementById('review-list');
    const publishedListElement = document.getElementById('published-list');
    reviewListElement.appendChild(listItemElement);

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

    buttonEditElement.addEventListener('click',(e)=>{
        titleElement.value = title;
        categoryElement.value = category;
        contentElement.value = content;

        listItemElement.remove();
    });

    buttonPostElement.addEventListener('click', (e) => {
        buttonEditElement.remove();
        buttonPostElement.remove();
        publishedListElement.appendChild(listItemElement);
    })

  })
}