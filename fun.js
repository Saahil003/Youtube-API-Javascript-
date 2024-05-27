// let main = document.querySelector(".main")
// let leftside = document.querySelector("section")
// let rightside=document.querySelector("aside")
 let video_container=document.querySelector("#video-container")
 let title_container = document.querySelector("#title-container")
 let vd_title = document.querySelector("#vd-title")
 let vd_desc=document.querySelector("#vd-desc")


let fetchApi=async()=>{
    let response = await fetch (" https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")
    let data = await response.json()
    console.log(data);
    displayData(data);

}
fetchApi()

function displayData (data){

    data.map((obj)=>{
        console.log(obj);
let {id,title,videoUrl,description,thumbnailUrl}  = obj

let article =document.createElement("article")   


article.setAttribute("class","item-container") 


let titles=document.createElement("h3")
titles.innerText=title
let video = document.createElement("video")
video.setAttribute("src",videoUrl)
video.setAttribute("class", "video")

let video1 = document.createElement("video")
video1.setAttribute("src",videoUrl)
video1.setAttribute("class", "video1")
video1.setAttribute("controls", videoUrl)



let thumbnail = document.createElement("img")
thumbnail.setAttribute("src",thumbnailUrl)
thumbnail.setAttribute("class", "thumbnail")


article.addEventListener("click", ()=>{
    video_container.innerHTML= ' '
    vd_title.innerText=title
    vd_desc.innerText=description
    video_container.appendChild(video1)
    
    video1.play()
},0)





  rightside.append(article)
  article.append(thumbnail,titles)


});
}