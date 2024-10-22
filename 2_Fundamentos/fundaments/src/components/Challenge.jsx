
const Challenge = () => {
    const a = 5;
    const b = 7;
  
    return (
      <div>
        <p>a: {a}</p>
        <p>b: {b}</p>
        <button onClick={() => console.log(a + b)}>Somar!</button>
      </div>
    );
  };

  export default Challenge