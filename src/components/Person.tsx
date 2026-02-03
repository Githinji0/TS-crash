import { useState } from "react";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}
function Person(props: Props) {
    const [showDetails, setShowDetails] = useState<boolean>(true);

    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };
  return (
    <div>
        <button onClick={toggleDetails}>{showDetails ? "Hide" : "Show"} Details</button>
      <h1>{props.name}</h1>
      {showDetails && (
        <>
          <p>Age: {props.age}</p>
          <p>is married: {props.isMarried ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
}

export default Person;
