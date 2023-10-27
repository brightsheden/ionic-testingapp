import { IonContent } from '@ionic/react';
import React from 'react';
import ReactPlayer from 'react-player';

const ShortScreen = () => {
  return (
    <div  className="h-screen bg-black">
      {/* Video Container */}
      <div className="relative h-4/5">
      <ReactPlayer width={'100%'}  className='w-full h-full'   controls  url='https://www.youtube.com/watch?v=KCep7O2YcOc' />
      
      </div>

      {/* Video Details and Actions */}
      <div className="text-white p-4">
        <h2 className="text-lg font-semibold mb-2">Video Title</h2>
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
          <span>100 Likes</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7l2-2m0 0l-2-2m2 2h6m-9-4l-2-2m0 0l2-2m-2 2H3m9 4v6m0 0v6m0-6h6m-6 0l2 2"
              />
            </svg>
          </div>
          <span>50 Comments</span>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-4 rounded-t-lg">
        <h3 className="text-black font-semibold text-lg">Comments</h3>
        <div className="mt-2">
          {/* Comment 1 */}
          <div className="flex items-center mb-2">
            <img
              src="user-avatar.jpg"
              alt="User"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <h4 className="text-black font-semibold">Username</h4>
              <p className="text-gray-600">This is a comment. 👍</p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex items-center mb-2">
            <img
              src="user-avatar.jpg"
              alt="User"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <h4 className="text-black font-semibold">AnotherUser</h4>
              <p className="text-gray-600">Nice video! 🎉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortScreen;
