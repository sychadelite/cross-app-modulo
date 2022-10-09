import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import { list, warning, settings, moon } from 'ionicons/icons';
import MailDetail from './pages/MailDetail';
import MailTabs from './pages/Tabs';
import Settings from './pages/Settings';
import Spam from './pages/Spam';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/tabs/mail" class="sidebar-menu-link">
                  <IonIcon slot="start" icon={list} />
                  <IonLabel>All Mail</IonLabel>
                </IonItem>
                <IonItem button routerLink="/tabs/meet" class="sidebar-menu-link">
                  <IonIcon slot="start" icon={list} />
                  <IonLabel>All Meet</IonLabel>
                </IonItem>
                <IonItem button routerLink="/tabs/spam" class="sidebar-menu-link">
                  <IonIcon slot="start" icon={warning} />
                  <IonLabel>Spam</IonLabel>
                </IonItem>
                <IonItem button routerLink="/settings" class="sidebar-menu-link">
                  <IonIcon slot="start" icon={settings} />
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>

          <IonFooter style={{ marginBottom: '-7px' }}>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={moon} />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle
                  slot="end"
                  name="darkMode"
                  onIonChange={toggleDarkModeHandler}
                />
              </IonItem>
            </IonList>
          </IonFooter>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route path="/tabs" component={MailTabs} />
          <Route path="/tabs/mail/:mailId" component={MailDetail} />
          <Route path="/tabs/meet/:friendId" component={MailDetail} />
          <Route path="/tabs/spam" component={Spam} />
          <Route path="/settings" component={Settings} />
          <Redirect exact from='/' to='/tabs' />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

export default App;
