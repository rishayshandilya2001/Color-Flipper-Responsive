document.querySelector(".btnn").addEventListener("click",changecolor)
const colors = [
    "#6e5d6e", "#c8f7c5", "#a87e7e", "#eda8a8", "#a3b4d7", 
    "#f8c7dd", "#ba9ed5", "#ea6c6c", "#b4d7a3", "#d4c5f9", 
    "#d9b1b1", "#a8a8ed", "#c5f9d4", "#eab2b2", "#a9d9a9", 
    "#f0e8e8", "#e2a2a2", "#d9a9a9", "#f9d4c5", "#c8f7e0", 
    "#d7b4b4", "#c7c8f7", "#d7d4f9", "#c7f7c8", "#c5d9f9", 
    "#d7c5f9", "#b2eaeb", "#c8c7f7", "#c5f9d9", "#e8e8f0", 
    "#b1d9d9", "#f7c8c8", "#b4d7d4", "#b4d4d7", "#f7c8f4", 
    "#f9d4e4", "#a8eda8", "#d4b4b4", "#f7c8c7", "#a8edcf", 
    "#f9c5d4", "#b4d4b4", "#d4b4d4", "#a8eda9", "#d9b1d9", 
    "#c5f9e5", "#f7c8c5", "#d7b4d7", "#c5d9f7", "#c8f7d9", 
    "#f7c8e7", "#b4d7b4", "#f9c5e4", "#d4d4b4", "#c8c7f7", 
    "#f9d4d4", "#c8f7c7", "#d4d4d4", "#c8f7f4", "#d4b4c5", 
    "#f7c8d9", "#b4d7c5", "#a8edea", "#b1d9b1", "#c8c7f9", 
    "#b4d7c8", "#f7c8f7", "#c5d9c5", "#a8edcf", "#d9b1c5", 
    "#c8f7e5", "#a8eda8", "#d7b4c5", "#d9b1f9", "#c8c7d9", 
    "#d9b1a8", "#c8f7d4", "#c5f9c8", "#d7b4f9", "#b4d7d4", 
    "#f7c8e4", "#d4b4c8", "#c8c7e8", "#d4d4f9", "#c8f7c5", 
    "#d9b1d4", "#c5f9d9", "#a8edc8", "#f9c5d4", "#c8f7f4", 
    "#b1d9c5"]
  
function changecolor()
{
  let index=Math.floor(Math.random()*70)
  let color=colors[index]
  document.querySelector("body").style.backgroundColor=color
  document.querySelector(".top").style.color=color
  document.querySelector(".sh").style.color=color
  document.querySelector(".para").innerHTML=color
  document.querySelector(".bgc").style.color=color
  document.querySelector(".para").style.color=color
  document.querySelector(".btnn").style.color=color


}