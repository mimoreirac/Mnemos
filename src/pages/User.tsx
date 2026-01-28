import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axiosClient from "../api/axiosClient";
import { UserData } from "../types";
import RegistroAsistencia from "../components/RegistroAsistencia";
import "./User.css";

interface RecordData {
  record: number;
  date: string;
  time: string;
}

const User: React.FC = () => {
  const location = useLocation<{ user: UserData }>();
  const user = location.state?.user;
  const [records, setRecords] = useState<RecordData[]>([]);

  const fetchRecords = useCallback(() => {
    if (user?.record) {
      axiosClient
        .get("", { params: { record: user.record } })
        .then((response) => {
          setRecords(response.data);
        })
        .catch((error) => console.error("Error fetching records:", error));
    }
  }, [user]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  if (!user) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <div>
            No se encontró información del usuario. Por favor inicie sesión
            nuevamente.
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>
            {user.names} {user.lastnames}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding">
          <RegistroAsistencia user={user} onSuccess={fetchRecords} />

          <h2 className="mx-4 mt-6 mb-2 text-xl font-bold">
            Historial de Asistencias
          </h2>
          <IonList>
            {records.map((rec, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>Fecha: {rec.date}</h2>
                  <p>Hora: {rec.time}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default User;
