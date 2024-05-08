import Auth from "../components/Auth";
import Quote from "../components/Quote";
import SignNav from "../components/SignNav";

function Signin() {
  return (
    <>
      <SignNav />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signin"} />
        </div>
        <div className="hidden lg:block">
          <Quote type={"signin"} />
        </div>
      </div>
    </>
  );
}

export default Signin;
