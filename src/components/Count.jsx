function Count({ count }) {
  let checkColor = () => {
    if (count < 0) {
      return "red";
    } else if (count > 0) {
      return "green";
    } else {
      return "black";
    }
  };
  return <p style={{ color: checkColor() }}>{count}</p>;
}

export default Count;
