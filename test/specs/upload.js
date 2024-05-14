import path from 'path';
import { fileURLToPath } from 'url';
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Upload Tests', () =>{
    it('Simple upload test', async () => {

        //Open url
        await  browser.url('https://the-internet.herokuapp.com/upload');

        //await $('.example').waitForDisplayed();

        //Store test file path
        const filePath = path.join(__dirname,'../data/logotitle.png');

        //Upload test file
        const remoteFilePath =  await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        //Assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it('Upload on a hidden input field', async () => {

        //Open url
        await  browser.url('/cart/');

        //Store test file path
        const filePath = path.join(__dirname,'../data/logotitle.png');

        //Upload test file
        const remoteFilePath =  await browser.uploadFile(filePath);

        //remoce hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        //set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        //Assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');

    });
});