function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsButton.addEventListener('click', async ()=> {

        postsSelect.innerHTML = '';

        const response = await fetch(baseURL + 'posts'); // can also use placeholder for posts i.e. `.. ${posts}`
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)){
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObj.title;
            postsSelect.appendChild(option);
        }
    });

    viewButton.addEventListener('click', async ()=>{

        postBody.innerHTML = ''; // clears the previously rendered data
        postComments.innerHTML = '';

        const postId = postsSelect.value;
        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseURL + 'comments'); // fetch makes request to a file/DB and receives data from there
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);
        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);
        });
    });

}

attachEvents();