import { Link } from "react-router-dom";

const JacketsPage = (props) => {
   
   console.log(props.match);
   return (
      <div>
         <Link to={"/"}>HOME</Link>
         <h1>Jackets</h1>
      </div>
   );
};
export default JacketsPage;