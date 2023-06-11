import Friend from "./Friend";
import AddFriend from "./AddFriend";
import { useState } from "react";

function FriendsList({ data, selectedFriend, onSelectedFriend, addNewFriend }) {
  const [open, setIsOpen] = useState(false);
  return (
    <div className='sidebar'>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <Friend
              id={el.id}
              name={el.name}
              img={el.image}
              balance={el.balance}
              selectedFriend={selectedFriend}
              onSelectedFriend={onSelectedFriend}
            />
          </li>
        ))}
      </ul>
      {open && <AddFriend addNewFriend={addNewFriend} />}
      <button className='button' onClick={() => setIsOpen((s) => !s)}>
        {open ? "Close" : "Add friend"}
      </button>
    </div>
  );
}

export default FriendsList;
