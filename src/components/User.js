import { useEffect, useState } from "react";

const User = () => {
  const dummyInfo = {
    name: "Koshu",
    bio:"Developer",
    company:"-",
    location: "Cheeka",
    contact:"Github"
  };

  const [userInfo, setUserInfo] = useState(dummyInfo);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/kostubhgarg");

    const json = await data.json();
   
    setUserInfo(json);
  };

  return (
    <div className="user-card p-4 m-4 bg-gray-100 rounded-lg w-64">
      <img src={userInfo.avatar_url} alt="Profile Pic" />
      <h2>Name: {userInfo.name}</h2>
      <h4>{userInfo.bio}</h4>
      <h3>Company: {userInfo.company}</h3>
      <h3>Location: {userInfo.location}</h3>
      <h3>Contact:{" " + userInfo.login}</h3>
    </div>
  );
};

export default User;
