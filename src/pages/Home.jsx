import React from 'react';
import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonIcon, IonItem, IonCol } from '@ionic/react';
import { arrowBackOutline, mailOutline, fingerPrintOutline } from 'ionicons/icons';

const SignInScreen = () => {

  const onSignIn = (e) => {
    e.preventDefault();
  }

  return (
    <IonPage>
      <IonContent fullscreen>

        <IonItem lines="none" className="ion-padding flex items-center hover:bg-gray-100">
          <IonIcon icon={arrowBackOutline} color="secondary" />
          <IonLabel className="pl-2">Sign In</IonLabel>
        </IonItem>

        <div className="ion-text-center">
          <img src="" alt="opaylogo" />
        </div>

        <form className="ion-margin-top ion-padding bg-white w-100" onSubmit={onSignIn}>
        
          <div className="ion-text-center ion-margin-bottom">
            <h3 className="text-purple-500 text-2xl">OPay</h3>  
          </div>
        
          <IonItem lines="none" className="ion-margin-bottom">
            <IonInput className="w-full" placeholder="Enter email"/>
          </IonItem>
        
          <IonItem lines="none">
           
            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </IonItem>

          <div className="ion-margin-top">
            <IonButton expand="block" color="success" className="ion-no-margin">Sign In</IonButton>
            <IonButton expand="block" color="light" className="ion-no-margin ion-margin-top">
              Create Account
            </IonButton>
          </div>

        </form>

        <IonCol size="12" className="ion-text-center ion-margin-top">
          <p className="text-2xl">Forgot password?</p>
          <p className="ion-text-medium-tint">Login with fingerprint</p>

          <IonIcon icon={fingerPrintOutline} color="secondary" className="p-2" />
        </IonCol>

        <IonCol className="ion-text-center ion-margin-top">
          <IonIcon icon={mailOutline} color="secondary" />
          <p>
            Need Help? <span className="ion-color-secondary">Chat with Support</span>  
          </p>
        </IonCol>

      </IonContent>
    </IonPage>
  );
};

export default SignInScreen;