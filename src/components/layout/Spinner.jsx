import spinner from "../../assets/loading.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto hue-rotate-[260deg] invert"
        width={180}
      />
    </div>
  );
}

export default Spinner;
