import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="flex items-center">
          <IonTitle className="px-5 text-2xl font-bold">Apps Híbridas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="text-center">
        <LoginForm />
        <p className="">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
