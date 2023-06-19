import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const Explore = () => {
  const {
    initialState: { posts, users },
  } = useContext(DataContext);

  return (
    <div>
      <h2> Explore </h2>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {users.map((person) => (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <img src={person.profilePicture} className="profilePicture" />
            <span> {person.name} </span> <span> @{person.username} </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
