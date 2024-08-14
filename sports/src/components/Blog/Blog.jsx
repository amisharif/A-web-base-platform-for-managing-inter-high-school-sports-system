import React from 'react';
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const BlogSection = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKj0jZAARXBTB4ecmV5LsoTQt5J7qxfTweUA&usqp=CAU"
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        Sher-e-Bangla Boy's played the match like barca's
                        TikiTaka!Some good playmakers..
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 10:59</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveW8X850uyR0RXBkUfLyv6i1yrW0TfmAN1Q&usqp=CAU"
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        Sad news for Barishal Zilla school team - 'Captain in
                        Hamstring Injury'
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 07:58</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src={blog3}
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        How Dhaka Residential Have Transformed Into Inter-School
                        Football Favourites!
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 10:36</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1q_wGkJjzCK6eSAVAtUDjK5NxpTU8yNnQA&usqp=CAU"
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        How Dhaka Residential Have Transformed Into Inter-School
                        Football Favourites!
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 10:36</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src={blog2}
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        How Dhaka Residential Have Transformed Into Inter-School
                        Football Favourites!
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 10:36</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
                <div className="p-4 bg-gray-100 shadow-md rounded-md">
                    <img
                        className="w-full h-56"
                        src={blog1}
                        alt=""
                    />
                    <h3 className="text-lg font-bold mb-2">
                        How Dhaka Residential Have Transformed Into Inter-School
                        Football Favourites!
                    </h3>
                    <p className="text-gray-700 mb-4">Yesterday at 10:36</p>
                    <a
                        href="#"
                        className="text-indigo-500 hover:text-indigo-600"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
