import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      setDisplayedName(firstName + " " + lastName);
      setFormError({ firstName: "", lastName: "" });
    } else {
      const errors = {
        firstName: firstName ? "" : "Please fill out this field.",
        lastName: lastName ? "" : "Please fill out this field.",
      };
      setFormError(errors);
    }
  };
  const isSubmitDisabled = !firstName || !lastName;

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {formError.firstName && (
          <span className="error-tooltip">{formError.firstName}</span>
        )}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {formError.lastName && (
            <span className="error-tooltip">{formError.lastName}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {displayedName && <p>Full Name: {displayedName}</p>}
    </div>
  );
}

export default App;
