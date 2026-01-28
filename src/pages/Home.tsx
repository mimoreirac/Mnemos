import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LoginForm from "../components/LoginForm";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="flex items-center">
          <IonTitle className="px-5 text-2xl font-bold">
            Registro de Asistencias
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="text-center">
        <LoginForm />
        <p className="">
          ¿No tienes cuenta? <a>Regístrate</a>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
