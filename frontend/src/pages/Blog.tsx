// import { useBlog } from "../hooks";
// import { useParams } from "react-router-dom";
// import { FullBlog } from "../components/FullBlog";
// import { Spinner } from "../components/Spinner";
// import { Appbar } from "../components/Appbar";

// export const Blog = () => {
//     const { id } = useParams();
//     const { loading, blog, error } = useBlog({
//         id: id || ""
//     });

//     if (loading) {
//         return (
//             <div>
//                 <Appbar />
//                 <div className="h-screen flex flex-col justify-center">
//                     <div className="flex justify-center">
//                         <Spinner />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }
//     if (!blog) {
//         return <div>Blog not found</div>;
//     }

//     // Check if blog is not undefined
//     if (!blog) {
//         return <div>Blog not found</div>;
//     }

//     const singleBlog = blog[0];

//     return (
//         <div>
//             <Appbar />
//             <FullBlog blog={singleBlog} />
//         </div>
//     );
// };


import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog, error } = useBlog({
        id: id || ""
    });

    if (!blog || loading) {
        return <div>
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }

    if (error) {
        return <div>
            Error: {error}
        </div>;
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
};

