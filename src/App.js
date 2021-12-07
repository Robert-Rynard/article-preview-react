import "./App.css";

import User from "./components/User";
import drawer from "./images/drawers.jpg";
import profilePic from "./images/avatar-michelle.jpg";

function App() {
  return (
    <main>
      <article className="card">
        <img className="card__img" src={drawer} alt="green dresser" />
        <div className="card__info">
          <h2 className="card__title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="card__body">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <User name="Michelle Appleton" date="28 Jun 2020" img={profilePic} />
        </div>
      </article>
    </main>
  );
}

export default App;
