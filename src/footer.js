const createfooter = () => {
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    content.appendChild(footer);

    const author = document.createElement('a');
    author.href = "https://www.flaticon.com/authors/freepik";
    author.textContent = 'Freepik';

    const website = document.createElement('a');
    website.href = "https://www.flaticon.com";
    website.textContent = 'www.flaticon.com';

    const attribution = document.createElement('p');
    attribution.innerHTML = 'Icons made by ' + author.outerHTML + ' from ' + website.outerHTML;
    footer.appendChild(attribution);

    const github = document.createElement('a');
    github.href = "https://github/Alphasnoopy";
    github.textContent = 'Alphasnoopy';

    const copyright = document.createElement('p');
    copyright.innerHTML = 'Copyright © 2023 ' + github.outerHTML;
    footer.appendChild(copyright);
}

export default createfooter;