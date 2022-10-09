import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router"
import { FRIENDS_DATA } from "./Meet";

const MeetDetail: React.FC = () => {
    const fId = useParams<{friendId: string}>().friendId;
    const selectedFriend = FRIENDS_DATA.find(f => f.id === fId);
    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Meet: {truncate(selectedFriend ? selectedFriend?.name : 'No friend found')}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Friend ID: {fId}</h2>
            </IonContent>
        </IonPage>
    )
};

function truncate(arg0: any | undefined): import("react").ReactNode {
    return arg0.length > 50 ? arg0.substring(0, 50) + " ..." : arg0;
};

export default MeetDetail;


