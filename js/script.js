var btn=document.querySelector(".btn_modal"),modal=document.querySelector(".modal"),off=document.querySelector(".close");btn.addEventListener("click",function(){modal.classList.toggle("visible")}),off.addEventListener("click",function(){modal.classList.remove("visible")}),console.log("ligh modal is loaded, yes!");