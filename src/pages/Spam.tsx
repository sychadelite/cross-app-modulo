import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel, IonButtons, IonMenuButton, useIonViewDidEnter, useIonViewDidLeave } from "@ionic/react";
import { useState } from "react";

const Spam: React.FC = () => {
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
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Spam</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel><h1>Spam</h1></IonLabel>
            </IonContent>
        </IonPage>
    );
}

const checkPathname = (args: String) => {
    const items = document.getElementsByClassName('sidebar-menu-link')
    for(let i=0; i<items.length; i++) {
        if(items[i].getAttribute('href') === args) {
            items[i].setAttribute('color', 'secondary')
        } else {
            items[i].setAttribute('color', '')
        }
    }
}

export default Spam;