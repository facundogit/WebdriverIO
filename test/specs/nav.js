import Homepage from '../pages/home-page.js';

describe('Navigation Menu', () => {

    it('Get the text of all menu items & assert them', async () => {

        await Homepage.open();

        const expectedLinks = [
            "Home",
            "About", 
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        
        const actualLinks = [];

        //wait until the Home text is displyaed on the navigation menu

        await browser.waitUntil(async function() {
            const homeText = await Homepage.NavComponent.firstNavMenuList.getText();
            return homeText === "Home"; 
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verify the Home text linksNavMenu'
        });

        const navLinks = await Homepage.NavComponent.linksNavMenu;

        for (const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(actualLinks).toEqual(expectedLinks);

    });

});