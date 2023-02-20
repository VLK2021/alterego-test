export const urls = {
    users: '/users',
    posts: (page?:number) => `/posts?_page=${page}&_limit=12`
}