import restaurantLogo from './images/bone.png';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
import './style.css';

function clearContent() {
    const pageContetnt = document.querySelector('.page-content');
    pageContetnt.remove();
}

function navBtnEvent(btn) {
    btn.addEventListener("click", () => {
        clearContent();
        switch (btn.id) {
            case 'home-page':
                createHomePage();
                break;
            case 'menu-page':
                createMenuPage();
                break;
            case 'contact-page':
                createContactPage();
                break;
        }
    })
}

function createNav(tabSection, tabList) {
    for (let i = 0; i < tabList.length; i++) {
        const tab = document.createElement('button');
        tab.textContent = tabList[i].label;
        tab.setAttribute('id', tabList[i].id);
        tab.classList.add('nav-btn');
        tabSection.appendChild(tab);
        
        navBtnEvent(tab);
    }
}

const createTab = (label, id) => {
    return {
        label,
        id
    }
}

const createTabs = () => {
    const content = document.querySelector('#content');

    const headerSection = document.createElement('header');
    headerSection.classList.add('header-section');
    content.appendChild(headerSection);

    // ------------------------------------------------------------> Restaurant Brand
    const brand = document.createElement('div');
    brand.classList.add('brand');
    headerSection.appendChild(brand);

    const nameLeft = document.createElement('p');
    nameLeft.textContent = 'DOGGY';
    brand.appendChild(nameLeft);

    const logo = new Image();
    logo.src = restaurantLogo;
    brand.appendChild(logo);

    // ------------------------------------------------------------> Nav Section
    const nameRight = document.createElement('p');
    nameRight.textContent = 'DELIGHTS';
    brand.appendChild(nameRight);

    const tabSection = document.createElement('nav');
    headerSection.appendChild(tabSection);

    const tabList = [
        createTab('HOME', 'home-page'),
        createTab('MENU', 'menu-page'),
        createTab('CONTACT', 'contact-page')
    ];

    createNav(tabSection, tabList);
}

export default createTabs;