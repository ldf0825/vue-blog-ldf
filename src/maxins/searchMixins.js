export default {
    computed: {
        filterBlogs() {
            return this.blogs.filter(blog => {
                return blog.body.match(this.search);
            });
        }
    }
}