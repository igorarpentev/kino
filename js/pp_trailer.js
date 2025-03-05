let popupBgT = document.querySelector('.popup__bg2');
let popupT = document.querySelector('.popup_trailer');
let openPopupButtonsT = document.querySelectorAll('.open-popup-trailer');
let closePopupButtonT = document.querySelector('.close-popup-trailer');
 

openPopupButtonsT.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBgT.classList.add('active');
        popupT.classList.add('active');
    })
});

closePopupButtonT.addEventListener('click',() => {
    popupBgT.classList.remove('active');
    popupT.classList.remove('active');
});

 

document.addEventListener('click', (e) => {
    if(e.target === popupBgT) {
        popupBgT.classList.remove('active');
        popupT.classList.remove('active');
    }
});

