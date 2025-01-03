import { useState } from "react";

function ListGroup() {
  const items = ["New York", "Tokyo", "San Francisco", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
