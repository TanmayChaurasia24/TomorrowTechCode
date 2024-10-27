"use client";
import { FloatingDockDemo } from "../components/MenuBarHome";
import { BackgroundGradientDemo } from "../components/BlogPost";
import { useEffect, useState } from "react";
import axios from "axios";

const Allpost = () => {
  const [post, allpost] = useState([]);
  const token = localStorage.getItem("token");

  if(!token) {
    console.log("token not present for client");
    return;   
  }

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await axios.get("https://backend.kuamrchaurasiatanmay.workers.dev/api/b/blogs",{
          headers: {
            Authorization: `${token}`
          }
        });
        allpost(response.data.all_post);
      } catch (error) {
        console.log("error while fetching the blogs: ", error);
        return;
      }
    };

    fetchblogs();
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen p-8 flex flex-col items-center">
      <div className="p-5 flex justify-center items-center w-full h-9 gap-x-4">
        <input type="text" className="w-[40%] rounded-md p-2 bg-neutral-200" />
        <button className="text-white">Search</button>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center overflow-auto h-full pb-20">
        {post.map((blog: any) => (
          <BackgroundGradientDemo
            title={blog.title}
            content={blog.content}
            Author="tanmay"
            blogid={blog.id}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default Allpost;
