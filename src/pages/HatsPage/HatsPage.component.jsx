import { Link } from "react-router-dom";

const HatsPage = (props) => {
   
   console.log(props.match);
   return (
      <div>
         <Link to={"/"}>HOME</Link>
         <h1>HATS</h1>
      </div>
   );
};
export default HatsPage;