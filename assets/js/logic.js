// Need local storage to hold onto each users post object with author username title and post content
const blogList= JSON.parse(localStorage.getItem('blogList')) || [];
