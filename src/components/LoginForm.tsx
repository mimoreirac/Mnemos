import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container" className="mx-2 my-4 flex flex-col gap-2 px-2 py-4">
      <h3 className="text-left text-xl font-bold">Nombre de usuario</h3>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="Ingresa tu usuario"
        className="h-13 w-full rounded-lg border-2 p-2"
      />
      <h3 className="text-left text-xl font-bold">Contraseña</h3>
      <input
        type="password"
        name="pass"
        id="pass"
        placeholder="Ingresa tu contraseña"
        className="h-13 w-full rounded-lg border-2 p-2"
      />
      <button
        type="submit"
        className="bg-uchuyellow-500 mt-6 h-13 rounded-lg border-2 border-solid border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default ExploreContainer;
