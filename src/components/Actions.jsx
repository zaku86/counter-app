function Actions({ count, setCount }) {
  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    let x = count - 1;
    setCount(x);
  };
  let reset = () => {
    setCount(0);
  };

  return (
    <div className="button-div">
      <button onClick={decrease} className="minus-button">
        -
      </button>
      <button onClick={reset} className="reset-button">
        Reset
      </button>
      <button onClick={increase} className="plus-button">
        +
      </button>
    </div>
  );
}

export default Actions;
