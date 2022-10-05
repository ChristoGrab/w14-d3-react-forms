import { useEffect, useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [comments, setComments] = useState("");
  const [validationErrors, setValidationErrors] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name.length) {
      errors.push("Please enter your Name");
    }
    if (!email.includes("@")) {
      errors.push("Please provide a valid Email");
    }
    setValidationErrors(errors);
  }, [name, email]);

  const onSubmit = (event) => {
    event.preventDefault();

    setHasSubmitted(true);

    if (validationErrors.length) {
      return window.alert("Cannot submit");
    }

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setComments("");
    setValidationErrors([]);
    setHasSubmitted(false);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(event) => setPhoneType(event.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(event) => setComments(event.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
