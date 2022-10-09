import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave } from "@ionic/react";
import { useState } from "react";

export const MAIL_DATA = [
    { id: 'm1', subject: 'Hangouts to a random coffee shop near perum' },
    { id: 'm2', subject: 'Brainstorming with startup X team' },
    { id: 'm3', subject: 'Auditing the current progress' },
    { id: 'm4', subject: 'Healing to New Zealand' },
    { id: 'm5', subject: 'A new pull request from development cross mobile team and the demand from them to increase the wages' }
];

const Mail: React.FC = () => {
    var [counter, setCounter] = useState(0);
    var [path, setPath] = useState(window.location.pathname);
    
    useIonViewDidEnter(() => {
        setCounter(counter++);
        if(counter === 1) {
        }
    });
    useIonViewDidLeave(() => {
        setCounter(counter--);
        if(counter === 0) {            
        }
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" onClick={() => checkPathname(path)}>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>All Mail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {MAIL_DATA.map(mail => (
                    <IonCard key={mail.id}>
                        <IonCardContent className="ion-text-center">
                            <h2>{mail.subject}</h2>
                            <IonButton routerLink={`/tabs/mail/${mail.id}`}>
                                View Mail
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    )
};

const checkPathname = (args: String) => {
    const items = document.getElementsByClassName('sidebar-menu-link')
    const contraPath = '/tabs/meet'
    for(let i=0; i<items.length; i++) {
        if(items[i].getAttribute('href') === args) {
            items[i].removeAttribute('hidden')
            items[i].setAttribute('color', 'secondary')
        } else {
            if(items[i].getAttribute('href') === contraPath) {
                items[i].setAttribute('hidden', 'true')
            }
            items[i].setAttribute('color', '')
        }
    }
}


export default Mail;