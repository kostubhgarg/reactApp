import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId ? (
            <div className="w-3/12 p-4">
              <div className="absolute w-15  text-sm">
                <button
                  className="p-2 bg-gray-800 text-white shadow-lg mx-[45px] my-14 rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>

              <img
                src={CDN_URL + item.card.info.imageId}
                alt=" "
                className="w-full h-20 object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className=" w-15 mr-[58px] text-sm">
              <button
                className="p-2 bg-gray-800 text-white shadow-lg rounded-lg "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
