import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";

export const MAIL_DATA = [
    { id: 'm1', subject: 'Hangouts to a random coffee shop near perum' },
    { id: 'm2', subject: 'Brainstorming with startup X team' },
    { id: 'm3', subject: 'Auditing the current progress' },
    { id: 'm4', subject: 'Healing to New Zealand' },
    { id: 'm5', subject: 'A new pull request from development cross mobile team and the demand from them to increase the wages' }
];

const Mail: React.FC = () => 
<>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton/>
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
</>;


export default Mail;