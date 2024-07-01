const toggleBtn = document.getElementById('toggle');

// TO-DO Add button controls for light/dark mode
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