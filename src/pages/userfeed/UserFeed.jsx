import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UserFeed = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <button onClick={signOut}> Sign Out </button>
    </>
  );
};
