import Homepage from '../pages/home-page.js';

describe('Home', () => {
   
   // before(async () => {
   //    console.log('TEST SETUP');
   // })

   beforeEach(async () => {
      
      console.log('Before each test');

      //Open URL
      await Homepage.open();
   })

   // after(async () => {
   //    console.log('TEST CLEANUP');
   // })

   // afterEach(async () => {
   //    console.log('After each test');
   // })

    it('Open URL & assert title', async() => {

       //Assert title
       await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns'); 
    });

    it('Open about page & assert url', async() => {
        //Open about page
        await browser.url('https://practice.sdetunicorns.com/about/');
 
        //Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/'); 
     });

     it('Click get started button & assert url contains get-started text', async() => {
 
        //Click get started button
        await Homepage.btnGetStarted.click();

        // Assert url contains get-started text
        await expect(browser).toHaveUrl(expect.stringContaining('get-started')); 
     });

     it('Click logo button & assert url does not contains get-started text', async() => {
     
        //Click get logo button
        await Homepage.btnLogo.click(); 

        // Assert url does not contains get-started text
        await expect(browser).not.toHaveUrl(expect.stringContaining('get-started')); 
     });

     it('Find heading element & assert the text', async() => {
        
        //Find heading element
        const headingElement = await Homepage.headingElement; 

        // Assert text
        await expect(headingElement).toHaveText('Think different. Make different.'); 
     });

});