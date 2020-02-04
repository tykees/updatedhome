const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content Item
function selectItems(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //Grab Content Items from the DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //Show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectItems));