function Count({ count }) {
  let check = () => {
    if (count < 0) return "red";
    else if (count > 0) return "green";
    else return "black";
  };

  return <p style={{ color: check() }}>{count}</p>;
}

export default Count;
