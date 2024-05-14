describe ('IFrame', () => {
    it ('Working with iframe', async () => {

        //open url 
        await browser.url('/iframe-sample/');

        //Access IFrame
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);

        // Verify logo exist
        await expect($('.hfe-site-logo')).toExist();

        //Switch back to page
        await browser.switchToParentFrame();

        //Verify page title
        await expect ($('h1.zak-page-title')).toHaveText('IFrame Sample');


    });
});