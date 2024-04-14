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

    if (loading) {
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


// import { useBlog } from "../hooks"
// import { useParams } from "react-router-dom"
// import { FullBlog } from "../components/FullBlog"

// export const Blog = () => {
//     const { id } = useParams();
//     const { loading, blog } = useBlog({
//         id: id || ""
//     });

//     if (loading) {
//         return <div>
//             loading...
//         </div>

//     }
//     return <div>
//         <FullBlog blog={blog} />
//     </div>
// }