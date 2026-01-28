import React, { useState, useEffect } from "react";
import { UserData } from "../types";
import axiosClient from "../api/axiosClient";
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonToast,
} from "@ionic/react";

interface Props {
  user: UserData;
  onSuccess?: () => void;
}

const RegistroAsistencia: React.FC<Props> = ({ user, onSuccess }) => {
  const [indices, setIndices] = useState<[number, number]>([1, 2]);
  const [inputs, setInputs] = useState<[string, string]>(["", ""]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("success");

  useEffect(() => {
    generateRandomIndices();
  }, []);

  const generateRandomIndices = () => {
    const idx1 = Math.floor(Math.random() * 10) + 1;
    let idx2 = Math.floor(Math.random() * 10) + 1;
    while (idx2 === idx1) {
      idx2 = Math.floor(Math.random() * 10) + 1;
    }
    setIndices([idx1, idx2]);
  };

  const handleRegister = async () => {
    const digit1 = user.id[indices[0] - 1];
    const digit2 = user.id[indices[1] - 1];

    if (inputs[0] === digit1 && inputs[1] === digit2) {
      try {
        await axiosClient.post("", {
          record_user: user.record,
          join_user: user.user,
        });
        setToastMessage("Asistencia registrada correctamente");
        setToastColor("success");
        setShowToast(true);
        setInputs(["", ""]);
        generateRandomIndices();
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error("Error registering attendance:", error);
        setToastMessage("Error al registrar la asistencia");
        setToastColor("danger");
        setShowToast(true);
      }
    } else {
      setToastMessage("Los dígitos ingresados son incorrectos");
      setToastColor("warning");
      setShowToast(true);
    }
  };

  return (
    <div className="mx-4 my-4 rounded-lg border-2 bg-white p-4 text-black shadow-md">
      <h3 className="mb-2 text-xl font-bold">Registrar Asistencia</h3>
      <p className="mb-4 text-sm text-gray-600">
        Para registrar su asistencia, ingrese los dígitos de su cédula:
      </p>

      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <IonItem lines="none" className="rounded-md border">
            <IonLabel position="stacked">{indices[0]}</IonLabel>
            <IonInput
              type="text"
              inputmode="numeric"
              value={inputs[0]}
              maxlength={1}
              onIonInput={(e) => {
                const val = (e.detail.value || "").replace(/[^0-9]/g, "");
                setInputs([val.slice(-1), inputs[1]]);
              }}
              placeholder="0"
            />
          </IonItem>
        </div>
        <div className="flex-1">
          <IonItem lines="none" className="rounded-md border">
            <IonLabel position="stacked">{indices[1]}</IonLabel>
            <IonInput
              type="text"
              inputmode="numeric"
              value={inputs[1]}
              maxlength={1}
              onIonInput={(e) => {
                const val = (e.detail.value || "").replace(/[^0-9]/g, "");
                setInputs([inputs[0], val.slice(-1)]);
              }}
              placeholder="0"
            />
          </IonItem>
        </div>
      </div>

      <button
        onClick={handleRegister}
        className="bg-uchuyellow-500 h-13 w-full rounded-lg border-2 border-solid border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Registrar
      </button>

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={3000}
        color={toastColor}
        position="top"
      />
    </div>
  );
};

export default RegistroAsistencia;
