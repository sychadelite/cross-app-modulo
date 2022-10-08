import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, 
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave } from "@ionic/react";
import { banSharp, ban, trash, create } from "ionicons/icons";
import React, { useRef, useState } from "react";

export const FRIENDS_DATA = [
    { id: 'f1', name: 'John Thor' },
    { id: 'f2', name: 'John Nees' },
    { id: 'f3', name: 'John Doe' }
];



const Meet: any = () => {
    var [counter, setCounter] = useState(0);
    
    useIonViewDidEnter(() => {
        setCounter(counter++);
        if(counter === 1) {
            console.log('ionViewDidEnter event fired');
        }
    });

    useIonViewDidLeave(() => {
        setCounter(counter--);
        if(counter === 0) {
            console.log('ionViewDidLeave event fired');
        }
    });

    useIonViewWillEnter(() => {
        // console.log('ionViewWillEnter event fired');
    });

    useIonViewWillLeave(() => {
        // console.log('ionViewWillLeave event fired');
    });



    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
    const callFriendHandler = () => {
        console.log("Calling...");
    };
    const blockFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Blocking...");
    };
    const deleteFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Deleting...");
    };
    const editFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Editing...");
    };
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Ionic Mail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {FRIENDS_DATA.map(friend => (
                        <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="start">
                                <IonItemOption color="danger" onClick={blockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>
                                <IonItemOption color="warning" onClick={deleteFriendHandler}>
                                    <IonIcon slot="icon-only" icon={trash} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItemOptions side="end">
                                <IonItemOption color="warning" onClick={editFriendHandler}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem lines="full"
                                button
                                onClick={callFriendHandler}
                                routerLink="/tabs/mail"
                            >
                                <IonAvatar class="ion-margin-end">
                                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>{friend.name}</IonLabel>
                            </IonItem>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
}



export default Meet;