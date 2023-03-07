import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className=" w-5/6 md:w-1/2 mx-auto py-16">
      <div>
        <form
          action=""
          className="lg:flex justify-center items-center lg:space-x-4"
        >
          <input
            placeholder="name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="inputStyles"
          />
          <input
            placeholder="username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="inputStyles"
          />
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              );
            }}
          >
            Add user
          </button>
        </form>
      </div>
      <div className="w-5/6 my-5 md:w-1/2 mx-auto">
        <p className="text-center text-xl font-semibold">Users List</p>
        <div>
          {userList.map((user) => (
            <div className="py-3 px-2 border my-2 shadow-sm rounded">
              <input
                type="text"
                className="border rounded w-full py-1.5 px-3 focus:outline-none"
                placeholder="new username.."
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <p className="my-2">Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <div className="flex justify-between items-center my-2 gap-6">
                <button
                  onClick={() => {
                    dispatch(
                      updateUser({ id: user.id, username: newUsername })
                    );
                  }}
                  className="rounded-md bg-blue-600 text-sm text-white px-3 py-2  hover:bg-blue-800"
                >
                  Update username
                </button>
                <button
                  className="rounded-md bg-blue-600 text-sm text-white px-3 py-2  hover:bg-blue-800"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete user
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
