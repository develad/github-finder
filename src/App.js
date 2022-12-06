import { useState } from "react";

function App() {
  const [isShowing, setIsSwhoing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    setIsSwhoing(!isShowing);
  };

  return (
    <div className="container mx-auto p-16 text-white">
      {/* <h1 className="text-4xl font-bold ">Hello world</h1>
      <button
        className="btn mt-4 text-warning text-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <p
        className={
          isShowing
            ? `transition-all ease-in-out opacity-100`
            : `transition-all ease-in-out opacity-0`
        }
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        eum fuga. Facilis ad ut tenetur, a harum nobis ex exercitationem
        cupiditate. Sed iste modi consequuntur necessitatibus sapiente fugit
        alias dolorem a incidunt quidem omnis, repellat obcaecati consectetur,
        tenetur, similique nemo.
      </p> */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Buy Now
            </button>
            <p
              className={
                isShowing
                  ? `transition-all ease-in-out opacity-100 absolute left-[0.7rem] bottom-[2.5rem]`
                  : `transition-all ease-in-out opacity-0 absolute left-[0.7rem] bottom-[2.5rem]`
              }
            >
              Thank you for buying from us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
