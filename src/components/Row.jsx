import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchURL]);

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    } else {
      console.error("Slider element not found");
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);

    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    } else {
      console.error("Slider element not found");
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4"> {title} </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={30}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
      </div>
    </>
  );
};

export default Row;
