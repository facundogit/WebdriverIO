import BlogPage from '../pages/blog-page.js';

describe('Blog Page', () => {

    it('Get recent post and assert them', async () => {
    
        await BlogPage.open();
    
        const recentPosts = await BlogPage.recentPostList;
    
        for (const post of recentPosts){
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
    
        await expect(recentPosts).toHaveLength(5);
    
    });
    
});