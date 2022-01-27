import { Link } from "react-router-dom";

const WomenPage = (props) => {
   
   console.log(props.match);
   return (
      <div>
         <Link to={"/"}>HOME</Link>
         <h1>Women</h1>
      </div>
   );
};
export default WomenPage;