import { IonContent } from '@ionic/react';
import React from 'react';

const HomePage = () => {
  return (
    <IonContent fullscreen className="bg-blue-100 overflow-scroll" >
      {/* Fixed Categories Header */}
      <div className="bg-blue-500 text-white p-2 fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between">
          <span className="px-4">Movies</span>
          <span className="px-4">Music Videos</span>
          <span className="px-4">Animation</span>
          <span className="px-4">Comedy</span>
        </div>
      </div>

      <div className="bg-white p-4 mt-16">
        {/* Advert Card */}
        <div className="mb-4">
          <div className="border rounded-lg overflow-hidden">
            <img
              src="https://th.bing.com/th/id/R.fbe9e995ae9f13853595bd43e1860853?rik=q1QUTQCFSP8ZIg&pid=ImgRaw&r=0"
              alt="Advert"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Video Cards */}
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <div className="mb-2">Video Title 1</div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600">
                Watch
              </button>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <div className="mb-2">Video Title 2</div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover-bg-blue-600">
                Watch
              </button>
            </div>
            {/* Add more video cards as needed */}
          </div>
        </div>

        {/* Shorts Slider */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Recommended Shorts</h2>
          <div className="border rounded-lg">
            <div className="w-full h-32 overflow-x-auto">
              <div className="flex space-x-4 p-4">
                <img
                  src="shorts-image-1.jpg"
                  alt="Short 1"
                  className="w-40 h-24 rounded-lg object-cover"
                />
                <img
                  src="shorts-image-2.jpg"
                  alt="Short 2"
                  className="w-40 h-24 rounded-lg object-cover"
                />

<img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/youtube-shorts-thumbnail-android.jpg"
                  alt="Short 2"
                  className="w-40 h-24 rounded-lg object-cover"
                />

<img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/youtube-shorts-thumbnail-android.jpg"
                  alt="Short 2"
                  className="w-40 h-24 rounded-lg object-cover"
                />


<img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/youtube-shorts-thumbnail-android.jpg"
                  alt="Short 2"
                  className="w-40 h-24 rounded-lg object-cover"
                />

<img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/youtube-shorts-thumbnail-android.jpg"
                  alt="Short 2"
                  className="w-40 h-24 rounded-lg object-cover"
                />
                {/* Add more shorts slides as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default HomePage;
