import { posts } from "/data.js"

document.addEventListener("click", function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
})

function handleLikeClick(itemId) {
    const targetLike = posts.filter(function(findId){
        return itemId == findId.id
    })[0]
    if(targetLike.isLiked){
      targetLike.likes-- 
    } else {
      targetLike.likes++  
    }
    targetLike.isLiked = !targetLike.isLiked
    render()
}

function logData() {
    let renderPosts = ""
    posts.forEach(function(itemId){
       let likeIconClass = "" 
       
       if(itemId.isLiked){
           likeIconClass = "liked"
       }
        
       renderPosts += ` 
       <div class="container">
            <div class="above-picture">
                <img class="profile-image" src="${itemId.avatar}">   
                <div class="initials">
                     <p class="name">${itemId.name}</p>
                     <p class="location">${itemId.location}</p>
                </div>
            </div>
            <img class="main-image" src="${itemId.post}"> 
            <div class="icons">
                <img class="like-icon ${likeIconClass}" src="images/icon-heart.png" data-like="${itemId.id}"> 
                <img class="comment-icon" src="images/icon-comment.png" data-comment="${itemId.id}"> 
                <img class="dm-icon" src="images/icon-dm.png" data-dm="${itemId.id}"> 
            </div>
            <p class="likes">${itemId.likes} likes</p>
            <p class="comments"><span class="comment-name">${itemId.username}</span> ${itemId.comment}</p>
       </div>
       `     
    })
    return renderPosts
}

function render() {
document.getElementById("content").innerHTML = logData()
}

render()