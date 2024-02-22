import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";

const Admin = () => {

    const { user, getUser } = useAuthContext();
    console.log(user);
    useEffect(() => {
        if (user) {
            getUser();
        }
    }, []);


    return <div>{user?.email}</div>
}
export default Admin