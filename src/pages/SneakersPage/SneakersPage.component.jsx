import { Link } from "react-router-dom";

const SneakersPage = (props) => {
   
   console.log(props.match);
   return (
      <div>
         <Link to={"/"}>HOME</Link>
         <h1>Sneakers</h1>
      </div>
   );
};
export default SneakersPage;