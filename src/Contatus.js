import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Actions/UserAction";
const ContactUs = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
      console.log(e);
    dispatch(
      addUser({
     
        name: e.target.name,
        value: e.target.value,
      })
    );
  };
  const { first_name, last_name, email, password, contact_number } =
    useSelector(({ User }) => User);

  return (
    <div className="contact-us column">
      <div className="avatar-log">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="favicon.ico"
          className="usr-img"
        />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            required
            className="input-form"
            nam = "first_name"
            value={first_name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            required
            className="input-form"
            name="last_name"
            value={last_name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            required
            className="input-form"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            placeholder="Enter 6 digit Password"
            name="password"
            required
            className="input-form"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            required
            className="input-form"
            name="contact_number"
            value={contact_number}
            onChange={onChange}
          />
        </div>
        <div className="form-button">
          <button className="btn-btn">Submit Me</button>
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
