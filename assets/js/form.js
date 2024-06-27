// Make a rendering blogs function

// Add event listener for page load to render blogs

// Button to submit form, must only press if all fields are filled
document.getElementById("myForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username");
    const title = document.getElementById("title");
    const content = document.getElementById("content");

    if (!username.value || !title.value || !content.value) {
        alert("Please fill in all fields before submitting.");
        event.preventDefault(); // Prevent form submission
    };
    event.preventDefault();
    const newBlog = {
        username: username.value,
        title: title.value,
        content: content.value,
    };
    blogList.unshift(newBlog);
    localStorage.setItem('blogList', JSON.stringify(blogList));
    username.value = "";
    title.value = "";
    content.value = "";
    window.location.href = "./blog.html";
});