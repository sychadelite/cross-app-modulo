import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, 
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave } from "@ionic/react";
import { ban, trash, create } from "ionicons/icons";
import React, { useRef, useState } from "react";

export const FRIENDS_DATA = [
    { id: 'f1', name: 'Mohammad Barj Lazuardi Dindashwara' },
    { id: 'f2', name: 'Muhammad Adam Canrayneldi' },
    { id: 'f3', name: 'Idham Noor Faidzi' },
    { id: 'f4', name: 'Fhicky Lukmansyah' },
    { id: 'f5', name: 'Michael Handi' }
];

const Meet: any = () => {
    var [counter, setCounter] = useState(0);

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
    
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
    useIonViewWillEnter(() => {
    });  
    useIonViewWillLeave(() => {
    });

    const callFriendHandler = (args: String) => {
        console.log("Calling...", args);
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
                    <IonTitle>All Meet</IonTitle>
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
                                onClick={() => callFriendHandler(`${friend.name}`)}
                                routerLink={`/tabs/meet/${friend.id}`}
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
};

export default Meet;