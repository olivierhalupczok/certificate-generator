import React from "react";
import WelcomeModal from "./components/WelcomeModal";
import Diploma from "./components/Diploma";
import Form from "./components/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stage: 0,
      firstName: undefined,
      lastName: undefined,
      contestName: undefined,
      achievedPlace: undefined,
    };
  }
  resign = () => {
    this.setState(() => ({ stage: -1 }));
  };
  setName = (firstName, lastName) => {
    if (!firstName || !lastName) {
      return "musisz wypełnić wszystkie pola!";
    }

    this.setState(() => ({
      firstName,
      lastName,
    }));
  };
  setCompetitionInfo = (contestName, achievedPlace) => {
    if (!contestName || !achievedPlace) {
      return "musisz wypełnić wszystkie pola!";
    }

    this.setState(() => ({
      contestName,
      achievedPlace,
    }));
  };
  closeModal = () => {
    this.setState((prevState) => ({
      stage: prevState.stage + 1,
    }));
  };
  render = () => (
    <div className="App">
      <WelcomeModal
        isOpen={this.state.stage === -1}
        closeModal={this.closeModal}
      >
        <h1>Przykro nam że nie chcesz dyplomu :c</h1>
        <h3 className="my-3">Cykor jesteś, nie zawodnik</h3>
        <button className="mx-auto btn btn-primary" onClick={this.closeModal}>
          Jednak chcę
        </button>
      </WelcomeModal>
      <WelcomeModal
        isOpen={this.state.stage === 0}
        closeModal={this.closeModal}
      >
        <h1>Witaj!</h1>
        <button className="btn btn-primary" onClick={this.closeModal}>
          Cześć!
        </button>
      </WelcomeModal>
      <WelcomeModal isOpen={this.state.stage === 1}>
        <h1>Czy chcesz wygenerować dyplom?</h1>
        <button className="m-2 btn btn-primary" onClick={this.closeModal}>
          Oczywiście!
        </button>
        <button className="m-2 btn btn-secondary" onClick={this.resign}>
          Rezygnuje :c
        </button>
      </WelcomeModal>
      <WelcomeModal isOpen={this.state.stage === 2}>
        <h1>Jak masz na imię?</h1>
        <Form
          closeModal={this.closeModal}
          stateModifier={this.setName}
          formLabels={["Jak masz na imię?", "Jak masz na nazwisko?"]}
        />
      </WelcomeModal>
      <WelcomeModal isOpen={this.state.stage === 3}>
        <h1>Jakie są twoje osiągnięcia?</h1>
        <Form
          closeModal={this.closeModal}
          stateModifier={this.setCompetitionInfo}
          formLabels={[
            "Jak nazywa się konkurs w którym wziąłeś udział?",
            "Które zająłeś miejsce?",
          ]}
        />
      </WelcomeModal>
      {this.state.stage === 4 && (
        <Diploma
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          contestName={this.state.contestName}
          achievedPlace={this.state.achievedPlace}
        />
      )}
    </div>
  );
}
