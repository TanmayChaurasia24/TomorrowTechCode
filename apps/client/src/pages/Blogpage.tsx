"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FloatingDockDemo } from '../components/MenuBarHome';
import ReactMarkdown from 'react-markdown';

interface typeblog {
    id: string,
    title: string,
    content: string,
    authorId: string,
    published: boolean
}

const Blogpage = () => {
  const { id } = useParams(); 
  const [blogpost, setblogpost] = useState<typeblog>();
  const jwt = localStorage.getItem('token');

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const response = await axios.get(`https://backend.kuamrchaurasiatanmay.workers.dev/api/b/blogs/${id}`, {
          headers: {
            Authorization: jwt,
          },
        });
        console.log(response);
        if (response) {
          setblogpost(response.data.curr_blog);
        }
      } catch (error) {
        console.log('error in fetching the blog');
        return;
      }
    };
    fetchblog();
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-[100vh] overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4 p-7 mb-16">
        <div className="fixed top-1 text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{blogpost?.title}</h1>
        </div>
        <hr className="w-full mt-16" />
        <ReactMarkdown className="w-[90vw] sm:w-[80vw] md:w-[70vw] mt-4 h-[70vh] md:h-[80vh] overflow-auto">
          {blogpost?.content}
        </ReactMarkdown>
      </div>
      <div className="bottom-4 transform -translate-x-1/2 left-1/2 fixed">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default Blogpage;
