class ContactPage{
    
    open(){
        return browser.url('/contact');

    }

    get inputName() {
        return $('#evf-277-field_ys0GeZISRs-1');
    }

    get inputEmail() {
        return $('#evf-277-field_LbH5NxasXM-2');
    }

    get inputPhone() {
        return $('#evf-277-field_66FR384cge-3');
    }

    get inputMessage() {
        return $('#evf-277-field_yhGx3FOwr2-4');
    }

    get btnSubmit() {
        return $('//button[@type="submit"]');
    }

    get successMessage(){
        return $('//div[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]');
    }

    async submitForm(name, email, phone, message){
        await this.inputName.setValue(name);
        await this.inputEmail.setValue (email);;
        await this.inputPhone.setValue(phone);
        await this.inputMessage.setValue(message);
        await this.btnSubmit.click();
    }


}

export default new ContactPage(); 