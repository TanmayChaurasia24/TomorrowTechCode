import { SignupFormDemo } from "../components/Loginform";
import { FloatingDockDemo } from "../components/MenuBarHome";

const Login = () => {
  return (
    <div className="bg-neutral-900 flex flex-col h-[100vh] justify-center items-center p-8">
      <SignupFormDemo></SignupFormDemo>
      <div className="mt-16">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default Login;
