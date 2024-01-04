import React from "react";

function App() {
  const [count ,setCount] = React.useState(0)

  return (
  <>
  <h1>Hello world! {count}</h1>
  <button onClick={()=>setCount(count+1)}>+</button>
  </>
  );
}

export default App;
