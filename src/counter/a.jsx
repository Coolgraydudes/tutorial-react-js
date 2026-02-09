import React from "react";
import { useImmer } from "use-immer";

function ProfileApp() {
  const [user, updateUser] = useImmer({
    name: "Budi",
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false
      }
    }
  });

  const toggleEmail = () => {
    updateUser(draft => {
      draft.settings.notifications.email = !draft.settings.notifications.email;
    });
  };

  return (
    <button onClick={toggleEmail}>
      Email: {user.settings.notifications.email ? "ON" : "OFF"}
    </button>
  );
}