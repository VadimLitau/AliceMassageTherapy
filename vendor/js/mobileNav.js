const mobileNavButton = document.querySelector('.header__mobile-nav-button');
const closeNavButton = document.querySelector('.popup-mobile-nav__closeIcon');
closeNavButton.addEventListener('click', () => {
    document.querySelector('.popup-mobile-nav').classList.add('popup-mobile-nav_show');
})
mobileNavButton.addEventListener('click', () => {
    document.querySelector('.popup-mobile-nav').classList.remove('popup-mobile-nav_show');
})
// 

const mobileButton = document.getElementById('#mobileMenuServices');

let itemContains =  document.querySelector('.popup-mobile-nav__listDropped').classList.contains('popup-mobile-nav__listDropped_show') 

function openServices () {
        document.querySelector('.popup-mobile-nav__listDropped').classList.add('popup-mobile-nav__listDropped_show');
        mobileButton.removeEventListener('click', openServices)        
        mobileButton.addEventListener('click', closeServices);
}

function closeServices () {
        document.querySelector('.popup-mobile-nav__listDropped').classList.remove('popup-mobile-nav__listDropped_show');
        mobileButton.removeEventListener('click', closeServices)       
        mobileButton.addEventListener('click', openServices);
}

if(!itemContains){
    mobileButton.addEventListener('click', openServices);
}

const popupMenuItems = document.querySelectorAll('.closePopup');
popupMenuItems.forEach( item => {
    item.addEventListener('click', () => {
        document.querySelector('.popup-mobile-nav').classList.add('popup-mobile-nav_show');
    })
})