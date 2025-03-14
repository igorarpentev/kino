let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup_photo');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
let closePopupButton2 = document.querySelector('.poster');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

closePopupButton2.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});


document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

