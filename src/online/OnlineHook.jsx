import { useEffect, useState } from "react";

export function useOnline() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true) 
        }

        function handleOffLine() {
            setIsOnline(false)
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffLine)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffLine)
        }
    }, [])

    return isOnline
}