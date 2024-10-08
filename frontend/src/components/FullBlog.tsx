import { Appbar } from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on {formattedDate}
                        </div>
                        <div className="pt-2">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-900 text-lg">
                            Author
                        </div>

                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "Anonymous"} />
                            </div>

                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "John Doe"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Pessimism leads to weakness, optimism to power.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};