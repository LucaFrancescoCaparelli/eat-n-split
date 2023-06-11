function Friend({ id, name, img, balance, selectedFriend, onSelectedFriend }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      {balance >= 1 && (
        <p className='green'>
          {name} owes you {balance}
        </p>
      )}
      {balance <= -1 && (
        <p className='red'>
          You owes {name} {Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <button className='button' onClick={() => onSelectedFriend(id, name)}>
        {id === selectedFriend?.id ? "Close" : "Select"}
      </button>
    </>
  );
}

export default Friend;
