import Navbar from "./Navbar";
import FormField from "./FormField";

function SignupForm() {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <input className="button is-link" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignupForm;
