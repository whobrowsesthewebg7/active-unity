import { useState } from "react";
import style from "./Categories.module.css";
import useActiveUnity from "../../hooks/useActiveUnity";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BASENAME } from "../../constant";

const Categories = () => {
  const { getCategories } = useActiveUnity();
  const [categories] = useState(() => getCategories());
  const [castSliderId] = useState(
    `slider-${Math.random().toString(36).substring(7)}`
  );

  const slideLeft = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft -= 500; // You can adjust the sliding distance
    }
  };

  const slideRight = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft += 500; // You can adjust the sliding distance
    }
  };

  return (
    <section className={"flex flex-col justify-center items-center py-16"}>
      <h2 className=" text-3xl font-bold mb-5">Categories</h2>
      <div
        className="w-[90vw] md:w-3/4 bg-white"
        style={{ overflowX: "hidden" }}
      >
        <div className=" relative flex items-center group">
          <IoIosArrowDropleftCircle
            onClick={() => {
              slideLeft(castSliderId);
            }}
            className="absolute left-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
            size={40}
          />
          <ul
            id={castSliderId}
            className=" flex gap-14 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative mx-10"
          >
            {categories.map((category, index) => (
              <li
                key={category.id}
                className=" flex flex-col items-center w-48"
              >
                <div className=" w-24 h-24">
                  <img
                    className=" w-full h-full object-cover"
                    src={`${BASENAME}${category.thumbnail}`}
                    alt={`Icon of ${category.name}`}
                  />
                </div>
                <p className=" text-sm font-medium">{category.name}</p>
              </li>
            ))}
          </ul>
          <IoIosArrowDroprightCircle
            onClick={() => {
              slideRight(castSliderId);
            }}
            className=" absolute right-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
            size={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
