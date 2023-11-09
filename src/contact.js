const createFormItem = (label, forID, type) => {
    return {
        label,
        forID,
        type
    }
}

function createForm(form, formItems) {
    for (let i = 0; i < formItems.length; i++) {
        const formSection = document.createElement('div');
        form.appendChild(formSection);

        const label = document.createElement('label');
        label.textContent =  formItems[i].label;
        label.setAttribute('for', formItems[i].forID);
        formSection.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', formItems[i].type);
        input.setAttribute('id', formItems[i].forID);
        input.required = true;
        formSection.appendChild(input);
    }
}

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('main');
    pageContent.classList.add('page-content');
    content.insertBefore(pageContent, content.firstChild.nextSibling);

    const contact = document.createElement('div');
    contact.classList.add('contact');
    pageContent.appendChild(contact);

    const contactHero = document.createElement('section');
    contactHero.classList.add('contact-hero');
    contact.appendChild(contactHero);
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us'
    contactHero.appendChild(contactHeader);
    const contactSubtext = document.createElement('p');
    contactSubtext.innerHTML = 'We\'re all ears and tails to hear from you! Whether you have questions, feedback , ' + 
                                'or just want to say woof, we\'re here for you.' +
                                '<br>Get in touch by calling us at <span>1-866-CHOW-TIME</span> or fill out the contact form below!';
    contactHero.appendChild(contactSubtext);

    const contactFormSection = document.createElement('section');
    contactFormSection.classList.add('form-section');
    contact.appendChild(contactFormSection);
    const formHeader = document.createElement('h2');
    formHeader.textContent = 'Send a Message';
    contactFormSection.appendChild(formHeader);
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactFormSection.appendChild(contactForm);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactForm.appendChild(contactInfo);

    const formItems = [
        createFormItem('Enter Name', 'name', 'text'),
        createFormItem('Enter Email', 'email', 'text')
    ];

    createForm(contactInfo, formItems);

    const messageSection = document.createElement('div');
    contactForm.appendChild(messageSection);
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Write Your Message';
    messageLabel.setAttribute('for', 'message');
    messageSection.appendChild(messageLabel);
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('rows', '10');
    messageInput.setAttribute('cols', '50');
    messageInput.required = true;
    messageSection.appendChild(messageInput);

    const submitMessage = document.createElement('input');
    submitMessage.setAttribute('id', 'submit');
    submitMessage.setAttribute('type', 'submit');
    submitMessage.setAttribute('value', 'Submit');
    contactForm.appendChild(submitMessage); 
}

export default createContactPage;