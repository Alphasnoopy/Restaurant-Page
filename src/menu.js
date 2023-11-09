const createFoodItem = (title, description, price) => {
    return {
        title,
        description,
        price
    }
}

const createCourseItem = (header, foods) => {
    return {
        header,
        foods
    }
}

function createMenuItem(courseSection, foodList) {
    const itemList = document.createElement('ul');
    itemList.classList.add('item-list');
    courseSection.appendChild(itemList);

    for (let i = 0; i < foodList.length; i++) {
        const item = document.createElement('li');
        itemList.appendChild(item);

        const itemHeader = document.createElement('div');
        itemHeader.classList.add('item-header');
        item.appendChild(itemHeader);

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = foodList[i].title;
        itemHeader.appendChild(itemTitle);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = foodList[i].price;
        itemHeader.appendChild(itemPrice);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.innerHTML = foodList[i].description;
        item.appendChild(itemDescription);
        }
}

function createCourseSection(menu, courseList) {
    for (let i = 0; i < courseList.length; i++) {
        const courseSection = document.createElement('section');
        courseSection.classList.add('menu-section');
        menu.appendChild(courseSection);

        const courseHeader = document.createElement('h2');
        courseHeader.textContent = courseList[i].header;
        courseSection.appendChild(courseHeader);

        createMenuItem(courseSection, courseList[i].foods);
    }
}

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('main');
    pageContent.classList.add('page-content');
    content.insertBefore(pageContent, content.firstChild.nextSibling);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    pageContent.appendChild(menu);


    const menuHeader = document.createElement('h1');
    menuHeader.textContent = '~ MENU ~';
    menuHeader.classList.add('menu-header');
    menu.appendChild(menuHeader);

    const appSection = [
        createFoodItem('Chew Toy Sampler', 'A platter of various chew toys, perfect for sampling but not for consumption.', '$3.99'),
        createFoodItem('Squeaky Toy Surprise', 'A squeaky rubber ball served on a bed of plush stuffing.', '$2.49')
    ];

    const mainSection = [
        createFoodItem('Bark-B-Q Ribs', 'Delicious bone-shaped treats slathered in a mouthwatering BBQ sauce.', '$6.99'),
        createFoodItem('Shoe Leather Strips', 'Realistic shoe-shaped leather pieces, for chewing and savoring but not for eating!', '$6.49'),
        createFoodItem('Table Leg Treat',  'A wooden table leg with an edible, peanut butter-flavored outer coating. <br>(Note: for gnawing purposes only)', '$7.99')
    ];

    const sideSection = [
        createFoodItem('Dirt and Grass Salad', 'A medley of freshly dug dirt and handpicked grass, with a garnish of mud sauce', '$1.99')
    ];

    const dessertSection = [
        createFoodItem('Stuffed Toy Sundae', 'A stuffed animal cut open to reveal hidden squeakers and fluff, topped with a drizzle of gravy', '$5.99')
    ];

    const bevSection = [
        createFoodItem('Toilet Bowl Punch', 'Refreshing water served in a ceramic toilet-shaped bowl.', '$1.49')
    ];

    const courseList = [
        createCourseItem('APPETIZERS', appSection),
        createCourseItem('MAIN COURSES', mainSection),
        createCourseItem('SIDE DISHES', sideSection),
        createCourseItem('DESSERTS', dessertSection),
        createCourseItem('BEVERAGES', bevSection)
    ];

    createCourseSection(menu, courseList);
}

export default createMenuPage;