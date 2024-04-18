import { useState } from "react";

function App() {
  // Creating a useState with the empty body
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Created a handle Change function to get the values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Creating a handle submit function to get the data from the input feild and display it in the console
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(response);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // this is the main body where out use will be returned on the web browser
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* input area for user name */}
        <br />
        <label>UserName</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />

        {/* input area for user name */}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />

        {/* input area for user name */}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />

        {/* Submit Btn */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
