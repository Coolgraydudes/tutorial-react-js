import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import {ProfileContext} from "./ProfileContext.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { useState } from "react";

export default function ProfileApp() {
    const [name, setName] = useState("Jhon doe")
    const [address, setAddress] = useState("USA")

    return(
        <>
            <ProfileContext.Provider value={name}>   
                <h1>Profile App</h1>
                <h2>Profile form</h2>
                <ProfileForm name={name} setName={setName}/>
                <Profile/>
            </ProfileContext.Provider>


            <ProfileContext.Provider value={address}>   
                <ProfileForm name={address} setName ={setAddress}/>
                <ProfileAddress/>
            </ProfileContext.Provider>

        </>
    )
}