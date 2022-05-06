const optionBtns = document.querySelectorAll('.btn-option')
const btnSubmit = document.getElementById('submit')
const starCount = document.getElementById('star-count')
let optionSelected = 0

//Update the selected option
optionBtns.forEach(element => {
    element.onclick = function() {
        optionSelected = element.innerHTML
    }
})

btnSubmit.addEventListener('click', () => {
    //Grab the scenes
    let starContainer = document.querySelector('.star-rating-container')
    let thanksContainer = document.querySelector('.thank-you-container')

    //Change the scenes
    starContainer.style.display = 'none'
    thanksContainer.style.display = 'flex'

    //Update the star count
    starCount.innerHTML = optionSelected 
})
