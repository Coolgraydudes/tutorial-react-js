import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";

export default function Profile() {
    const profile = useContext(ProfileContext)
    return (
        <>
            <h2>Profile</h2>
            <p>Hello {profile}</p>
        </>
    )
}