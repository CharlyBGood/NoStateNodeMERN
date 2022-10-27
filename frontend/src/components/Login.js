import "../stylesheets/Form.css";

function Login() {
  const getIn = () => {
    alert("Log in or create user!")
  }
  return (
    <div className="main-container">
      <p>Do you want to get in?</p>
      <button className="form-btn"  onClick={() => getIn()}>YES, please!</button>
    </div>
  );
}

export default Login;
