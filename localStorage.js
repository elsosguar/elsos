if (localStorage.getItem("favArray") === null){localStorage.setItem("favArray","[]")}

const favBtn=document.querySelectorAll(".bs-favs"),lsArray=JSON.parse(localStorage.getItem("favArray"));let myList,buttonText;myList=null===lsArray?[]:lsArray,favBtn.forEach(t=>{t.addEventListener("click",t=>{const e=t.target.parentElement.parentElement.parentElement;var n={title:e.querySelector(".post-asdsa__info h1").innerText,img:e.querySelector(".poster-img").src,id:t.target.getAttribute("card-id"),postUrl:window.location.href},t=myList.some(t=>t.title===n.title);myList=t?[...myList]:[...myList,n],document.getElementById("add-btn").classList.add("none-btn"),document.getElementById("remove-btn").classList.remove("none-btn"),localStorage.setItem("favArray",JSON.stringify(myList))})});const deleteBtn=document.querySelectorAll(".delete-btn");deleteBtn.forEach(t=>{t.addEventListener("click",t=>{var e=t.target.getAttribute("card-id"),t=lsArray.filter(t=>e!==t.id);document.getElementById("add-btn").classList.remove("none-btn"),document.getElementById("remove-btn").classList.add("none-btn"),localStorage.setItem("favArray",JSON.stringify(t))})});const cheackCardId=document.getElementById("add-btn").getAttribute("card-id"),whatButtonOMG=lsArray.some(t=>t.id===cheackCardId);whatButtonOMG?(document.getElementById("add-btn").classList.add("none-btn"),document.getElementById("remove-btn").classList.remove("none-btn")):(document.getElementById("add-btn").classList.remove("none-btn"),document.getElementById("remove-btn").classList.add("none-btn"));
  
const selectorTempos = document.getElementById("select-season"),
  temps = document.getElementById("temps");
selectorTempos.addEventListener("change", () => {
  let b = `season-${selectorTempos.value}`,
    a = document.getElementById(`${b}`);
  temps.querySelectorAll("ul").forEach((a) => {
    a.classList.add("hide"), a.classList.remove("animation");
  }),
    a.classList.remove("hide"),
    a.classList.add("animation");
});
