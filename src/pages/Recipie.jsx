import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Recipie() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  if (data) {
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl h-[400px] md:flex-nowrap flex-wrap">
          <figure className="md:w-1/2 w-full h-[450px] md:h-full">
            <img
              className="w-full h-full  object-cover"
              src={data.img}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-center md:text-left">
            <h2 className="text-4xl mb-10 text-center md:text-left">
              Title: {data.title}
            </h2>
            <h3 className="text-2xl mb-4 text-center md:text-left">
              cookingTime: {data.cookingTime}
            </h3>
            <h3 className="text-2xl mb-4 text-center md:text-left">
              Ingredients:{data.ingredients}
            </h3>
            <h3>Method:{data.method}</h3>
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-primary">Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipie;