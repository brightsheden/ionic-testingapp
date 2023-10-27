import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/react'
import { arrowBack, arrowDownCircleOutline, arrowUpCircleOutline, cogOutline, cogSharp, giftOutline, giftSharp,  settingsSharp,  walletSharp } from 'ionicons/icons'
import React, { useState } from 'react'
import WatchHistory from '../components/WatchHistory'
import EarnHistory from '../components/EarnHistory'

function ProfileScreen() {
    const [showWatchBtn, setShowWatchbtn] = useState(true)
    const [showEarnBtn, setShowEarnbtn] = useState(false)


    const onWatchBtn = ()=>{
        setShowWatchbtn(true)
        setShowEarnbtn(false)
    }

    const onEarnBtn = ()=>{
        setShowEarnbtn(true)
        setShowWatchbtn(false)
      
    }
  return (
    <div>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className='ion-padding' >
            <div className='flex justify-between'>
                <IonButton ><IonIcon icon={arrowBack} /></IonButton>
                <IonButton ><IonIcon icon={settingsSharp} /></IonButton>


            </div>
               
            <div className='flex flex-col justify-center items-center'>
              <img className='w-24 h-24 mb-3 rounded-full shadow-lg'
                src="https://docs-demo.ionic.io/assets/madison.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
                />

            <div>
                <h2>@UserName</h2>
                <span>user@gmail.com</span>
                
            </div>
            
        </div>

        <div className='bg-blue-500 flex justify-between p-2 rounded-md text-white'>
            <div className='flex justify-center items-center w-40'>
                <IonIcon icon={walletSharp} className='mr-0 text-xl' />:
                <span className='font-bold'>$400</span>

            </div>


            <div className='flex justify-center w-40 items-center'>
            <IonIcon icon={giftSharp} />:
                <span className='font-bold'>8400</span>

            </div>


          
       
            
        </div>

        <div className='mt-2'>
            <h2>Earning Cards</h2>
            <div className='p-2 rounded-md w-100 bg-blue-500 text-white text-base font-medium  '>
                <div className='flex justify-between'>
                <div className='text-center'>
                    <h2 className='text-base font-bold'>Video Point</h2>
               
                        <IonIcon icon={giftOutline}/> <span className='font-bold'>600</span>

           
                    
                </div>
                <div className='text-center'>
                    <h2 className='text-base font-bold'>Milestone</h2>
               
                        <IonIcon icon={giftOutline}/> <span className='font-bold'>600</span>

           
                    
                </div>

                <div className='text-center'>
                    <h2 className='text-base font-bold'>Redeemed</h2>
               
                        <IonIcon icon={giftOutline}/> <span className='font-bold'>600</span>

           
                    
                </div>

                </div>
         

                <div className='mt-2 flex-wrap flex justify-between'>
                    {/*
                   
                  <button color='light' className='p-2 bg-white  text-blue-500 rounded-lg text-sm shadow font-bold  items-center '>Redeem Point <IonIcon icon={arrowDownCircleOutline}/> </button>
                  <button color='success' className='p-2 bg-white  text-blue-500 rounded-lg text-sm shadow font-bold  items-center '>Fund Wallet <IonIcon icon={arrowUpCircleOutline}/> </button>
                  
                    */}

                <IonButton color='light' className='p-2   text-blue-500 rounded-lg text-sm  font-bold  items-center '>Redeem Point <IonIcon icon={arrowDownCircleOutline}/> </IonButton>
                <IonButton color='light' className='p-2  text-blue-500 rounded-lg text-sm  font-bold  items-center '>Fund Wallet <IonIcon icon={arrowUpCircleOutline}/> </IonButton>
                    
                 
                </div>

            </div>

        </div>

        <div className='mt-2  ' >
            <div className='flex justify-between  '>
                <IonButton onClick={onWatchBtn} color='light' className='   w-100 p-2 text-base font-medium '>Watch History</IonButton>
             
                <IonButton onClick={onEarnBtn} color='light' className='  w-100 p-2 text-base'>Earn History</IonButton> 

            </div>
        {/*watch history and earn history*/}
            <div>
                {showWatchBtn ? (<WatchHistory/>):
                (<EarnHistory/>)}
             

            </div>
        </div>
                    

          
        </IonContent>
    </div>
  )
}

export default ProfileScreen