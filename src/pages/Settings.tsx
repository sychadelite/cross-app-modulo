import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButtons, IonMenuButton, useIonViewDidEnter, useIonViewDidLeave } from "@ionic/react";
import { useState } from "react";

const Settings: React.FC = () => {
    var [counter, setCounter] = useState(0);
    
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
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel><h1>Settings</h1></IonLabel>
            </IonContent>
        </IonPage>
    )
};

export default Settings;