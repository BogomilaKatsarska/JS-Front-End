function loadRepos(){
    /*
    promise - objects which has asynchronous data

    const repos = fetch('https://api.github.com/users/testnakov/repos');
    console.log(repos);
    */

    fetch('https://api.github.com/users/testnakov/repos') //fetch counts the resonse as 'successful' and gets into then(not catch) even if status code !== 200(i.e.: 404, 500) 
    // by default FETCH works with GET requests
        .then((res) =>  res.json()) // we do this in order to turn the 'body' from readable stream to json
        .then((body) => {
            body.forEach((repo) => {
                const repoName = document.createElement("h2");
                repoName.textContent = repo.name;
            });
           document.querySelector("body").appendChild(repoName);
        });
};


function createPromise(){
    const simulatedResponse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(); // here can write 'resolve'/'reject'
        }, 500);
    });

    simulatedResponse
        .then(() => console.log('Success'))
        .catch(() => console.log('Error'));
}

// AJAX request - a request that has been made after the initial load of the page


function loadCommits2() {
    const username = document.querySelector('#username').value ;
    const repo = document.querySelector('#repo').value ;

    if (!username || !repo) {
        //print out error message
    }

    const list = document.querySelector('ul');
    list.innerHTML = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res => res.json())
        .then((commits) => {
            commits.forEach((commitObj) => {
                const item = document.createElement('li');
                item.textContent = commitObj.commit.message;

                list.appendChild(item);
            });
        });
}


async function loadCommits3AsyncAwait() {
    const username = document.querySelector('#username').value ;
    const repo = document.querySelector('#repo').value ;

    if (!username || !repo) {
        //print out error message
    }

    const list = document.querySelector('ul');
    list.innerHTML = '';

    const response =await( await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)).json()
    .catch();

    response.forEach((commitObj) => {
        const item = document.createElement('li');
        item.textContent = commitObj.commit.message;

        list.appendChild(item);
    });
}


async function loadCommits4AsyncAwait() {
    const username = document.querySelector('#username').value ;
    const repo = document.querySelector('#repo').value ;

    if (!username || !repo) {
        //print out error message
    }

    const list = document.querySelector('ul');
    list.innerHTML = '';

   const response = await getCommits(username, repo)

    response.forEach((commitObj) => {
        const item = document.createElement('li');
        item.textContent = commitObj.commit.message;

        list.appendChild(item);
    });
}

async function getCommits(username, repo) {
    const response =await( 
        await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        ).json()
        .catch();

    return response;
}