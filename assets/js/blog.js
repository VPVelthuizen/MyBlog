const toggleBtn = document.getElementById('toggle');

// Here is the function that renders the blog list
function render() {
    let listPost = document.querySelector('#listPost');
    blogList.forEach(post => {
        const postHTML = `<li class= 'title'>${post.title}</li>
        <li class= 'username'>Made by ${post.username}</li>
        <li class= 'content'>${post.content}</li>`;
        listPost.appendChild(postHTML);
    });
};

// Here is the event listener for light/dark mode
toggleBtn.addEventListener('click', function () {
    let toggle = JSON.parse(localStorage.getItem('toggle'))
    if (toggle == "1") {
        localStorage.setItem('toggle', "0");
        body.classList.add('body-dark');
        header.classList.add('footer')
        footer.classList.remove('footer')
    }
    else {
        localStorage.setItem('toggle', "1");
        body.classList.remove('body-dark');
        header.classList.remove('footer');
        footer.classList.add('footer')
    };
})

document.addEventListener('DOMContentLoaded', function() {
    render();
})