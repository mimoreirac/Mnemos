import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/react";
import RegistroForm from "../components/RegistroForm";

const Registro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Registro de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="text-center">
        <RegistroForm />
      </IonContent>
    </IonPage>
  );
};

export default Registro;
