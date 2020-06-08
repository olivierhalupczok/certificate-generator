import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      error: undefined,
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();
    const error = this.props.stateModifier(
      e.target.elements.firstValue.value,
      e.target.elements.secondValue.value
    );
    if (error) {
      this.setState(() => ({ error }));
    } else {
      this.props.closeModal();
    }
  };

  render = () => (
    <form onSubmit={this.HandleSubmit}>
      <div className="d-flex flex-column">
        <div>
          <p className="m-2">{this.props.formLabels[0]}</p>
          <input className="m-2 form-text" type="text" name="firstValue" />
        </div>
        <div>
          <p className="m-2">{this.props.formLabels[1]}</p>
          <input className="m-2 form-text" type="text" name="secondValue" />
        </div>
        <button type="submit" className="align-self-end mt-3 btn btn-primary">
          Wyślij!
        </button>
      </div>
      {this.state.error && (
        <p className="my-3 alert alert-danger">{this.state.error}</p>
      )}
    </form>
  );
}
