const mainDiv = document.getElementById('mainDiv');
const pageDiv = document.getElementById('pageDiv');
const pages = [];
let currentPage = 0;
let posts = []

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(result => {
    for(let index=0;index<result.length/10;index++){
        pages.push(index+1)
    }
    posts = result
    renderPosts(posts.slice(currentPage*10, (currentPage+1)*10));
    renderPagination()
})

function renderPosts(posts){
    mainDiv.innerHTML=posts.map(({title})=>`<p>${title}</p>`).join('');
}

function renderPagination(){
    pageDiv.innerHTML+=pages.map((value, index)=>`<span onClick='updatePage(${index})' style="height: 30px; width: 30px; background-color: aqua; margin-right: 5px; border-radius: 5px "><p style="margin-top:7px; margin-left:7px;" >${value}</p></span>`).join('')
}

function updatePage(index){
    renderPosts(posts.slice(index*10, (index+1)*10));
}