import { useDispatch, useSelector } from "react-redux";

export const Contact = () =>
{
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1> Contact Details {username}</h1>
        </div>
    );

}
