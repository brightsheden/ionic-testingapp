import { IonContent, IonHeader, IonIcon, IonInput, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { personCircle, personCircleOutline } from 'ionicons/icons'
import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoScreen() {
  return (
    <>
 <IonHeader className='ion-no-border'>
        <IonToolbar>
            <IonTitle >
                ScenePoint
            </IonTitle>
        </IonToolbar>
    </IonHeader>

        <IonContent fullscreen={true} className='ion-margin-top ion-padding mb-2 '>
            <div  >
            <ReactPlayer width={'100%'}   controls  url='https://www.youtube.com/watch?v=KCep7O2YcOc' />

            </div>
            <p className='text-xl font-medium'>Olamide x Asake</p>
            <span className='text-sm text-gray-500'>47,645Views·07/22/23</span>
            <br/>

            <p>Listen to the single New Religion. Out Now!
                Stream: https://music.empi.re/newreligion
              #Olamide  #Asake  #EMPIRE
            </p>

            <div className='mt-8'>
                <h2>Reviews <span className='m-2'>40</span></h2>
                <form className='mt-2 flex justify-between items-center'>
                    <div>
                        <IonIcon icon={personCircleOutline} className='text-2xl mr-2' />
                    </div>
                <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="comment" id="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comment</label>
                </div>
                </form>

                <div className='space-y-5'>
                <div>
                    {/*comment header*/}
                    <div className='flex items-center '>
                        <IonIcon icon={personCircle} className='text-xl mr-2' />
                        <span className='text-sm text-gray-500 text-sm'>@shedenbright . 5days ago</span>
                    </div>

                    <p className='mx-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam porro non obcaecati provident praesentium adipisci voluptate! Explicabo, vel impedit exercitationem assumenda totam placeat molestiae nam consequuntur excepturi pariatur deleniti culpa.</p>
                   
                </div>

                
                <div>
                    {/*comment header*/}
                    <div className='flex items-center'>
                        <IonIcon icon={personCircle} className='text-xl' />
                        <span className='text-sm text-gray-500 '>@shedenbright . 5days ago</span>
                    </div>

                    <p className='mx-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam porro non obcaecati provident praesentium adipisci voluptate! Explicabo, vel impedit exercitationem assumenda totam placeat molestiae nam consequuntur excepturi pariatur deleniti culpa.</p>
                   
                </div>


                
                <div>
                    {/*comment header*/}
                    <div className='flex items-center'>
                        <IonIcon icon={personCircle} className='text-xl' />
                        <span className='text-sm text-gray-500 '>@shedenbright . 5days ago</span>
                    </div>

                    <p className='mx-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam porro non obcaecati provident praesentium adipisci voluptate! Explicabo, vel impedit exercitationem assumenda totam placeat molestiae nam consequuntur excepturi pariatur deleniti culpa.</p>
                   
                </div>

                </div>

               

                

     
            </div>


       
        </IonContent>



    </>
  )
}
