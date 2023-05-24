import React, { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const inpRef = useRef(null);
  const [name, setMessage] = useState('');
  const [age, setAge] = useState('');
  const [friends, setFriends] = useState(['Ahmet', 'Murat']);
  const [address, setAddress] = useState({title: 'Istanbul', zip:34464});

  function handleClick() {
    setMessage(inputRef.current.value);
    setAge(inpRef.current.value);
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        placeholder="Name.."
        id="name"
        name="name"
      />
            <input
        ref={inpRef}
        type="text"
        placeholder="Age.."
        id="age"
        name="age"
      />
      <h2>Message: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={handleClick}>Log message</button>

      <hr />
      <br />
      <h2>Friends</h2>
      {
        friends.map((friends, index) =>
         <div key={index}>{friends}</div>)
      }

      <button onClick={() => setFriends([...friends, 'Ayşe']) }>Add friends</button>
      <hr />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <button onClick={() => setAddress({...address, title:'Ankara', zip:3564})}>Change the address</button>

    </div>
  );
}

export default App;
