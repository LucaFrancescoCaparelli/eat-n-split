import { useState } from "react";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function sendBill(bill) {
    setFriends((f) =>
      f.map((e) => (e.id === bill.id ? { ...e, balance: bill.amount } : e))
    );
  }

  function handleSelectedFriend(id, name) {
    selectedFriend?.id !== id
      ? setSelectedFriend({ id, name })
      : setSelectedFriend(null);
  }

  function addNewFriend(friend) {
    setFriends((s) => [...s, friend]);
  }

  return (
    <div className='app'>
      <FriendsList
        data={friends}
        selectedFriend={selectedFriend}
        onSelectedFriend={handleSelectedFriend}
        addNewFriend={addNewFriend}
      />
      {selectedFriend && (
        <SplitBill friend={selectedFriend} sendBill={sendBill} />
      )}
    </div>
  );
}

export default App;
