import "../stylesheets/Form.css";

function Login() {
  const getIn = () => {
    alert("Inicia sesión o crea una cuenta!");
  };
  return (
    <div className="main-container">
      <div className="welcome-container">
        <h2>Te damos la bienvenida</h2>
        <p>
          NoStateNode es un espacio para compartir ideas, recursos y buscar
          financiación para proyectos.
          Para comenzar debes crear una cuenta, si ya la tienes inicia sesión.
          Gracias.
        </p>
      </div>
      <button className="form-btn" onClick={() => getIn()}>
        ¡Quiero ser parte!
      </button>
    </div>
  );
}

export default Login;
