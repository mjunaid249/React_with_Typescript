import { useState } from "react";
import "./App.css";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<Person>();

  const submitHandler = () => {
    console.log(user);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Age"
          value={user?.age}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />
        <input
          type="text"
          value={user?.name}
          placeholder="Name"
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: String(e.target.value) }))
          }
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
