import "../stylesheets/Form.css"


function Login() {
  const getIn = () => {
    alert("Type '/Profile' at the end of this URL... ")
  }
  return(
    <div>
      <p>Do you want to get in?</p>
      <button className="form-btn" onClick={getIn}>
        yes
        </button>
    </div>
  )
}

export default Login;