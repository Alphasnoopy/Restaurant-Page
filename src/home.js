import restaurantMap from './images/map.png';
import dogFood from './images/pet-food.png';
import paw from './images/paw.png';

function createHeroSection(hero) {
    const textSection = document.createElement('div');
    hero.appendChild(textSection);

    const headerSection = document.createElement('div');
    headerSection.classList.add('hero-header-section');
    textSection.appendChild(headerSection);
    const header = document.createElement('h1');
    header.textContent = 'Doggy Delights - Where Tails Wag and Taste Buds Bark!';
    headerSection.appendChild(header);
    const welcome = document.createElement('p');
    welcome.textContent = 'Welcome to a Pawsitively Pawsome Dining Experience';
    headerSection.appendChild(welcome);

    const headlineSection = document.createElement('div')
    headlineSection.classList.add('headline-section');
    textSection.appendChild(headlineSection);
    const headline = document.createElement('h2');
    headline.innerHTML = 'Bark, Squeak, Chew: Induldge in the Fantasically Fun World of Doggy Delights!';
    headlineSection.appendChild(headline);
    const subheadline = document.createElement('p');
    subheadline.textContent = 'At Doggy Delights, we serve a tail-wagging adventure of the senses, ' +
                        'where your furry friend can chew, play, and paw-sitively relish the most imaginative \'meals\' ever. ' +
                        'Unleash the laughter and let the giggles roll as your pup enjoys these delightful canine confections.';
    headlineSection.appendChild(subheadline);

    const heroImg = new Image();
    heroImg.src = dogFood;
    hero.appendChild(heroImg);
}

const createReview = (quote, user) => {
    return {
        quote,
        user
    }
}

function createReviewSection(reviewsSection, reviewsList) {
    const reviewsHeader = document.createElement('h2');
    reviewsHeader.textContent = 'Tail-Wagging Testimonials!';
    reviewsSection.appendChild(reviewsHeader);

    const reviews = document.createElement('div');
    reviewsSection.appendChild(reviews);

    for (let i = 0; i < reviewsList.length; i++) {
        const review = document.createElement('blockquote');
        review.classList.add('review');
        reviews.appendChild(review);

        const quote = document.createElement('p');
        quote.textContent = reviewsList[i].quote;
        review.appendChild(quote);

        const user = document.createElement('cite');
        user.textContent = reviewsList[i].user;
        review.appendChild(user);

        const rating = document.createElement('div');
        rating.classList.add('rating');
        user.appendChild(rating);

        for (let i = 0; i < 5; i++) {
            const star = new Image();
            star.src = paw;
            rating.appendChild(star);
        }
    }
}

const createHours = (day, time) => {
    return {
        day,
        time
    }
}

function createSchedule(allHours, hourList) {
    const hourSection = document.createElement('section');
    allHours.appendChild(hourSection);

    const hours = document.createElement('ul');
    hourSection.appendChild(hours);

    for (let i = 0; i < hourList.length; i++) {
        const days = document.createElement('li');
        days.classList.add('day');
        days.innerHTML = `${hourList[i].day} : <span>${hourList[i].time}</span>`;
        hours.appendChild(days);
    }
}

function createHourSection(restaurantInfo, normalList, holidayList) {
    const operationhours = document.createElement('section');
    operationhours.classList.add('hours-section');
    restaurantInfo.appendChild(operationhours);

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Chow O\'Clock';
    operationhours.appendChild(hoursHeader);

    const allHours = document.createElement('div');
    operationhours.appendChild(allHours);

    createSchedule(allHours, normalList);
    createSchedule(allHours, holidayList);
}

function createLocationSection(restaurantInfo, addressList) {
    const location = document.createElement('section');
    location.classList.add('location-section');
    restaurantInfo.appendChild(location);

    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Sniff Out Our Spot!'
    location.appendChild(locationHeader);

    const locationAddress = document.createElement('div');
    location.appendChild(locationAddress);

    const address = document.createElement('p');
    locationAddress.appendChild(address);

    for (let i = 0; i < addressList.length; i++) {
        const line = document.createElement('span');
        line.textContent = addressList[i];
        address.appendChild(line);
    }

    const locationMap = new Image(100,100);
    locationMap.src = restaurantMap;
    locationAddress.appendChild(locationMap);
}

const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('main');
    pageContent.classList.add('page-content');
    content.insertBefore(pageContent, content.firstChild.nextSibling);

    const home = document.createElement('div');
    home.classList.add('home');
    pageContent.appendChild(home);

    // ------------------------------------------------------------> Hero Section
    const hero = document.createElement('section');
    hero.classList.add('hero-section');
    home.appendChild(hero);

    createHeroSection(hero);

    // ------------------------------------------------------------> Reviews Section
    const reviewsSection = document.createElement('section');
    reviewsSection.classList.add('reviews-section');
    home.appendChild(reviewsSection);

    const reviewsList = [
        createReview('"I brought my fury friend to Doggy Delights, and it was an absolute delight! The atmosphere is ' +
                        'pawsitively charming, and the dog-friendly menu is a hit. My pup couldn\'t get enough of the shoe ' +
                        'leather strips. We\'ll be back for moer tail-wagging fun!"', 
                        '- PuppyLover123'),
        createReview('"Doggy Delights is a hidden gem for dog owners like me. The \'Squeaky Ball Suprise\' and ' +
                        '\'Chew Toy Smapler\' had my dog in stitches with joy. It\'s a playful and imaginative place for us ' + 
                        'and our four-legged pals!"', 
                        '- HappyDogOwner3'),
        createReview('"My dog had the time of their life at Doggy Delights! The \'Invisible Bone\' was a mind-boggling ' +
                        'delight, and the \'Table Leg Treat\' brought back memories of puppyhood. It\'s a unique and enjoyable spot ' + 
                        'for pet owners and their furry friends."',
                        '- CanineCompanion07')
    ];

    createReviewSection(reviewsSection, reviewsList);
   

    // ------------------------------------------------------------> Restaurant Info
    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add('restaurant-info');
    home.appendChild(restaurantInfo);

    // ------------------------------------------------------------> Operating Hours Section
    const normalList = [
        createHours('Monday - Friday', '10am - 2pm'),
        createHours('Saturday - Sunday', '11am - 2pm')
    ];

    const holidayList = [
        createHours('Independence Day', 'Closed'),
        createHours('Labor Day', 'Closed'),
        createHours('New Years Eve', 'Closed'),
        createHours('New Years', 'Closed')
    ];

    createHourSection(restaurantInfo, normalList, holidayList);

    // ------------------------------------------------------------> Location Section
    const addressList = [
        'Doggy Delights', '123 Bark Street', 'Pawsville, Canineland 74936'
    ];
    
    createLocationSection(restaurantInfo, addressList);
}

export default createHomePage;