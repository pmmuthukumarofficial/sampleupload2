
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return <h1>Hi {username}, You welcome</h1>;
};