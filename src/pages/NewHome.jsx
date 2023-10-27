import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon } from '@ionic/react';
import ReactPlayer from 'react-player';
import 'swiper/css';
//import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { chatbubbleEllipses, eye, thumbsUp } from 'ionicons/icons';

//SwiperCore.use([Navigation, Pagination]);

const NewHomePage = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="bg-blue-100 ">
        {/* Fixed Categories Header */}
       {/**  <div className="bg-blue-500 text-white p-2 fixed top-1 left-0 right-0 z-10">
            <div className="flex justify-between">
              <span className="px-4">Movies</span>
              <span className="px-4">Music Videos</span>
              <span className="px-4">Animation</span>
              <span className="px-4">Comedy</span>
            </div>
        </div>*/}

        <div className="bg-white mt-12">
          {/* Advert Card */}
          <IonCard className="mb-2">
            <img
              src="https://th.bing.com/th/id/R.fbe9e995ae9f13853595bd43e1860853?rik=q1QUTQCFSP8ZIg&pid=ImgRaw&r=0"
              alt="Advert"
            />
          </IonCard>

          {/* Video Cards with Video Player and Autoplay */}
          <div className="mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5].map((video) => (
              <IonCard key={video} className="bg-white">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=dN4QxTcis2w`}
                  playing={false}
                  controls={true}
                  width="100%"
                  height="auto"
                />
                <IonCardContent>
                  <h2 className="text-lg font-semibold mb-2">Video Title {video}</h2>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <div>
                      <IonIcon  icon={thumbsUp} slot="start" />
                      <span>100 </span>
                    </div>
                    <div>
                      <IonIcon icon={chatbubbleEllipses} slot="start" />
                      <span>50 </span>
                    </div>
                    <div>
                      <IonIcon icon={eye} slot="start" />
                      <span>1,000 </span>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            ))}
          </div>

          {/* Shorts Slider (Using Swiper.js) */}
          <div className="mb-4">
            <h2 className="text-xl p-1 font-semibold mb-2">Recommended Shorts</h2>
            <Swiper navigation pagination spaceBetween={10} slidesPerView={1.5}>
              {[1, 2, 3, 4, 5].map((short) => (
                <SwiperSlide key={short}>
                  <img
                    src={`https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/youtube-shorts-thumbnail-android.jpg`}
                    alt={`Short ${short}`}
                    className="w-40 h-24 rounded-lg object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default NewHomePage;
