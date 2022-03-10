import React from "react";
import { useAuth0 } from "@auth0/auth0-react";




const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div>
        <br/>
        <img src={user.picture} alt={user.name} />
        <br/>
        <h2>{user.name}</h2>
        <br/>
        <p>{user.email}</p>
        
      </div>
    )
  );
};

export default Profile;
