import Auth from "../components/Auth";
import Quote from "../components/Quote";
import SignNav from "../components/SignNav";

function Signup() {
  return (
    <>
      <SignNav />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signup"} />
        </div>
        <div className="hidden lg:block">
          <Quote type={"signup"} />
        </div>
      </div>
    </>
  );
}

export default Signup;
