// Need local storage to hold onto each users post object with author username title and post content
const blogList= JSON.parse(localStorage.getItem('blogList')) || [];
const body = document.getElementById('body');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


document.addEventListener('DOMContentLoaded', function() {
    let toggle = JSON.parse(localStorage.getItem('toggle'))
    console.log(toggle);
    if (!toggle) {
        localStorage.setItem('toggle', '1')
    }
    if (toggle == '0') {
        console.log(body);
        console.log(`${body}`);
        body.classList.add('body-dark');
        header.classList.add('footer');
        footer.classList.remove('footer');
    }
})
