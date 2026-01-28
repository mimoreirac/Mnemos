import { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import "./LoginForm.css";
import { IonButton } from "@ionic/react";

interface ContainerProps {}

const LoginForm: React.FC<ContainerProps> = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axiosClient.get("", {
        params: {
          user,
          pass,
        },
      });

      if (response.data && response.data.length > 0) {
        const userData = response.data[0];
        history.push("/user", { user: userData });
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div id="container" className="mx-2 my-4 flex flex-col gap-2 px-2 py-4">
      <h3 className="text-left text-xl font-bold">Nombre de usuario</h3>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="Ingresa tu usuario"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <h3 className="text-left text-xl font-bold">Contraseña</h3>
      <input
        type="password"
        name="pass"
        id="pass"
        placeholder="Ingresa tu contraseña"
        className="h-13 w-full rounded-lg border-2 p-2"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleLogin}
        className="bg-uchuyellow-500 mt-6 h-13 rounded-lg border-2 border-solid border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginForm;
