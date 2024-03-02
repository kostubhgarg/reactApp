import { useContext, useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOfflineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline, Please check your internet connection!</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="search-box border border-solid border-black p-1 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList2 = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList2);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-50 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="pr-2">UserName : </label>
          <input
            className="border border-black p-1 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredListOfRestaurants.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurants/" + restaurent.info.id}
          >
            <RestaurantCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
