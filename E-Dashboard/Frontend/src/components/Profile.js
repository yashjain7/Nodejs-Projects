import React from "react";

const Profile = () => {
  const auth = localStorage.getItem("user");

  return (
    <div>
      <h1>User : {JSON.parse(auth).name}</h1>
      <h1>Email : {JSON.parse(auth).email}</h1>
    </div>
  );
};
// Logout ({JSON.parse(auth).name})
export default Profile;
