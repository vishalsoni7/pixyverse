const user = JSON.parse(localStorage.getItem("user"));

export const LoginUser = () => {
  return (
    <div>
      <img src={user.profilePicture} />
    </div>
  );
};
