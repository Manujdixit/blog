const Quote = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg  ">
          <img src={type === "signup" ? "/people.svg" : "/login.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Quote;
