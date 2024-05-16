import {useState,useEffect} from 'react'
function Document(){
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);
  
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
   return(
<>
<div>
      <h2>Updating Document Title</h2>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
</>
   )
}
export default Document;