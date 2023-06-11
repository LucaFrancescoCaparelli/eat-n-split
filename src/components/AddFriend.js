import { useState } from "react";

function AddFriend({ addNewFriend }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewFriend({
      id: Date.now(),
      name,
      image: "https://i.pravatar.cc/48",
      balance: 0,
    });
    setName("");
  }

  return (
    <div>
      <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>Friend Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image url</label>
        <input text='text' placeholder='https://...' />
        <button className='button'>Add</button>
      </form>
    </div>
  );
}

export default AddFriend;
