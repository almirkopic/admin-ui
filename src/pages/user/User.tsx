import "./user.scss";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

const User = () => {
  //fetch data and send single component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
