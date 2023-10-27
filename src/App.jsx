import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/react';
import { playCircle, radio, library, search, home, logoYoutube, personCircleOutline, homeOutline, homeSharp, peopleCircleOutline, peopleSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VideoScreen from './pages/VideoScreen';
import Login from './pages/LoginSCreen';
import Register from './pages/REgisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import HomePage from './pages/NHone';
import NewHomePage from './pages/NewHome';
import ShortScreen from './pages/ShortScreen';

setupIonicReact();

const App = () => (
  <IonApp>
      
    <IonReactRouter>
    <IonTabs >

     



   
      <IonRouterOutlet>
        <Route exact path="/home">
         <NewHomePage/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/video">
          <VideoScreen />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/nhome">
          <HomePage />
        </Route>

        <Route exact path="/newhome">
          <NewHomePage />
        </Route>

        <Route exact path="/shorts">
          <ShortScreen />
        </Route>
        
        <Route exact path="/profile">
          <ProfileScreen />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className=''>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="shorts" href="/shorts">
            <IonIcon icon={logoYoutube} />
            <IonLabel>Shorts</IonLabel>
          </IonTabButton>

          <IonTabButton tab="watchhistory" href="/watchhistory">
            <IonIcon icon={library} />
            <IonLabel>Engagements</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile" >
            <IonIcon icon={peopleSharp} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
 
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
