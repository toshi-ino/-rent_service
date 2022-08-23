export default function Signup() {
  return (
    <>
      <h1>Create a new account.</h1>
      <h2>Email</h2>
      <input type="email" placeholder="Enter your email address" />
      <h2>Password</h2>
      <input type="password" placeholder="Enter your password" />
      <button>SIGN UP</button>

      <p>OR</p>
      <button>Continue with Google</button>

      <p>Already have an account?</p>
      <a href="login">LOGIN</a>
    </>
  );
}