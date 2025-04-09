import React, { useEffect, useState } from "react";
import searchLogo from "/image.png";
import RestroCard from "./RestroCard";
import {
  topRatedImgUrl,
  mangaloreDataUrl,
  vizagDataUrl,
} from "../Utils/constants";

const BodyComponent = () => {
  console.log("first");

  const [restarentsData, setRestarentsData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("sec");
  }, []);

  const fetchData = async () => {
    const data = await fetch(mangaloreDataUrl);
    const json = await data.json();
    console.log(json);
    setRestarentsData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onFilter = () => {
    const topRated = restarentsData.filter((res) => res.info.avgRating > 4.3);
    setRestarentsData(topRated);
  };

  return (
    <>
      {console.log("third")}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img src={searchLogo} alt="Search" />
        </button>
      </div>
      <div className="filter-container">
        <button
          type="submit"
          className="filter-button"
          onClick={() => {
            onFilter();
          }}
        >
          <img src={topRatedImgUrl} alt="Search" />
        </button>
      </div>
      <div className="card-container-something-like-that">
        {restarentsData.map((restarent) => (
          <RestroCard key={restarent.info.id} resDetails={restarent} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
