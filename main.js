const btn = document.querySelectorAll('.btns');
const subMit = document.querySelector(".submit")
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const number = document.getElementById('number')
const activeBtn = document.querySelector('.active')

btn.forEach(function(btns) {
    btns.addEventListener('click' , function (event) {
      activeBtn.classList.remove('active')
      let selectedBtn = event.currentTarget
     
      number.innerText = selectedBtn.innerText
     subMit.addEventListener("click" , function () {
        container.style.display ="none" 
        container2.style.display ="flex"
     }) 

      }
    )
});
