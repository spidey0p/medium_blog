// import { Appbar } from "../components/Appbar"
// import { BlogCard } from "../components/BlogCard"
// import { useBlogs } from "../hooks"

// export const Blogs = () => {
//     const { loading, blogs } = useBlogs();

//     if (loading) {
//         return <div>
//             Loading...
//         </div>
//     }
//     return <div>
//         <Appbar />
//         <div className="flex justify-center">
//             <div className="max-w-xl">
//                 <BlogCard
//                     authorName={"John Doe"}
//                     title={"How an Ugly Single-page Application Can Outperform a Beautifully Crafted Multi-page Application"}
//                     content={"This is to read the blog, you need to click on the title. This is to read the blog, you need to click on the title. This is to read the blog, you need to click on the title. This is to read the blog, you need to click on the title."}
//                     publishedDate={"2021-09-01"}
//                 />
//             </div>
//         </div>
//     </div>
// }

import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            Loading...
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => <BlogCard
                    authorName={blog.author.name || "John Doe"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Fab 2024"}
                />)}
            </div>
        </div>
    </div>
}