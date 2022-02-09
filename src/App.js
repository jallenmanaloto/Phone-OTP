import Auth from "./components/Auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./App.css";

function App() {
  // const generateRecaptcha = (e) => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         //onSignInSubmit()
  //         console.log(response);
  //       },
  //     },
  //     Auth
  //   );
  // };

  // const getOTP = (e) => {
  //   e.preventDefault();
  //   let appVerifier = window.recaptchaVerifier;
  //   signInWithPhoneNumber(Auth, phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
