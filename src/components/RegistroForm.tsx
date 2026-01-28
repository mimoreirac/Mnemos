import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { IonToast } from "@ionic/react";

const RegistroForm: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    id: "",
    names: "",
    lastnames: "",
    mail: "",
    phone: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (Object.values(formData).some((val) => val.trim() === "")) {
      setToastMessage("Por favor complete todos los campos");
      setToastColor("warning");
      setShowToast(true);
      return;
    }

    try {
      await axiosClient.post("", formData);
      setToastMessage("Registro exitoso");
      setToastColor("success");
      setShowToast(true);
      setTimeout(() => history.push("/home"), 1500);
    } catch (error) {
      console.error("Error registering user:", error);
      setToastMessage("Error al registrar el usuario");
      setToastColor("danger");
      setShowToast(true);
    }
  };

  return (
    <div className="mx-2 my-4 flex flex-col gap-2 px-2 py-4">
      <h3 className="text-left text-xl font-bold">Cédula</h3>
      <input
        type="text"
        name="id"
        placeholder="Ingresa tu cédula"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={formData.id}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, "");
          if (val.length <= 10) setFormData({ ...formData, id: val });
        }}
      />

      <h3 className="text-left text-xl font-bold">Nombres</h3>
      <input
        type="text"
        name="names"
        placeholder="Ingresa tus nombres"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={formData.names}
        onChange={handleChange}
      />

      <h3 className="text-left text-xl font-bold">Apellidos</h3>
      <input
        type="text"
        name="lastnames"
        placeholder="Ingresa tus apellidos"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={formData.lastnames}
        onChange={handleChange}
      />

      <h3 className="text-left text-xl font-bold">Correo</h3>
      <input
        type="email"
        name="mail"
        placeholder="Ingresa tu correo"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={formData.mail}
        onChange={handleChange}
      />

      <h3 className="text-left text-xl font-bold">Teléfono</h3>
      <input
        type="tel"
        name="phone"
        placeholder="Ingresa tu teléfono"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={formData.phone}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, "");
          if (val.length <= 10) setFormData({ ...formData, phone: val });
        }}
      />

      <button
        onClick={handleSubmit}
        className="bg-uchuyellow-500 mt-6 h-13 rounded-lg border-2 border-solid border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Registrarse
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

export default RegistroForm;
