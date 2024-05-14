import ContactPage from '../pages/contact-page.js';
import { faker } from '@faker-js/faker';

describe('Contact Page', () => {

    it('Fill the fields and assert the message', async () => {
    
        await ContactPage.open();

        await ContactPage.btnSubmit.click();

        await ContactPage.submitForm(faker.person.fullName(),faker.internet.email(),faker.phone.number(),faker.lorem.paragraphs(2));

        await ContactPage.successMessage.toBeDisplayed;

    
    
    });
});