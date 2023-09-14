import "./styles.css";

// ============PRELOADER=============
const myPreloader = document.querySelector("#preloader")


window.addEventListener("load" , () =>{
  myPreloader.classList.add("jj__fade__out")
  setTimeout(() => {
  myPreloader.style.display = "none"
  },100)
})