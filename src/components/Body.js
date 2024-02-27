import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
        }}
        >Top rated restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
