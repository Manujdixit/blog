import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props: { Component: any }) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      navigate("/signup");
    }
    if (login) {
      navigate(Component);
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
