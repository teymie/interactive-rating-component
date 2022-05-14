const btn = document.querySelectorAll('.btns');
const subMit = document.querySelector(".submit")
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const number = document.getElementById('number')

btn.forEach(function(btns) {
    btns.addEventListener('click' , function (event) {
      let selectedBtn = event.currentTarget
      selectedBtn.style.backgroundColor = "hsl(25, 97%, 53%)"
      number.innerText = selectedBtn.innerText
     subMit.addEventListener("click" , function () {
        container.style.display ="none" 
        container2.style.display ="flex"
     }) 

      }
    )
});
// btns.style.backgroundColor = "orange"