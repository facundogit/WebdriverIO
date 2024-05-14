class BlogPage{
    
    open(){
        return browser.url('/blog');

    }

    get recentPostList() {
        return $$('#recent-posts-3 a');
    }

}

export default new BlogPage(); 