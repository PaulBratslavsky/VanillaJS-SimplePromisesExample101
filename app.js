console.log('Promisses Intro');
/***********************************************
    USING CALL BACK
 **********************************************/
/*
const posts = [
    { title: 'Post One', body: 'This is the first post'},
    { title: 'Post Two', body: 'This is the second post'}
];

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}

function getPosts() {
    setTimeout(() => {
        let output = '';

        // LOOP THROUGH POSTS
        posts.forEach( (post) => {
            output += `<li>${post.title}</li>`
        });

        // PUT POST TO DOM
        document.body.innerHTML = output;
    },2000);
}

const data =     { title: 'Post Three', body: 'This is the third post'}


createPost(data, getPosts);
*/
/***********************************************
    USING PROMISSES
 **********************************************/

const posts = [
    { title: 'Post One', body: 'This is the first post'},
    { title: 'Post Two', body: 'This is the second post'}
];

function createPost(post) {
    // CREATE A PROMISSE
    const addPostPromisse =  new Promise( function(resolve, reject) {    
        setTimeout( function() { 
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error Happened. WTF :( ');
            }
             
        }, 1000);
    });

    return addPostPromisse;
}

function getPosts() {
    setTimeout(() => {
        let output = '';

        // LOOP THROUGH POSTS
        posts.forEach( (post) => {
            output += `<li>${post.title}</li>`
        });

        // PUT POST TO DOM
        document.body.innerHTML = output;
    },2000);
}

const data =     { title: 'Post Three', body: 'This is the third post'}

createPost(data)
    .then( () => {
        getPosts();
        console.log('Got It');
    }).catch( err => {
        console.log(err, 'FROM CATCH');
    });