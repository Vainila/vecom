import { Link } from "react-router-dom";

const MenPage = (props) => {
   
   console.log(props.match);
   return (
      <div>
         <Link to={"/"}>HOME</Link>
         <h1>Men</h1>
      </div>
   );
};
export default MenPage;