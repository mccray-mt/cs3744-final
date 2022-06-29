function NumType(num) {
  if (num === 1) {
    return ("odd")
  }
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        if (i === 2) {
          return ("even")
        }
        return ("odd")
      }
    }
    return ("prime")
  }
}

function StyleMaker(number) {
  const style = NumType(number)
  if (style === "prime") {
    return (<p style={{
      background: "red",
      borderStyle: "solid",
      borderColor: "black",
      color: "white"
    }}>{number}</p>)
  }
  if (style === "odd") {
    return (<p style={{
      background: "yellow"
    }}>{number}</p>)
  }
  return (<p style={{
    background: "green",
    color: "white"
  }}>{number}</p>)

}

function GridMaker({ arr }) {
  return (arr.map(item => (StyleMaker(item))))
}

function ArrMaker(start, end) {
  let myArr = new Array(end - start + 1);
  for (let i = 0; i < myArr.length; i++) {
    myArr[i] = i + start;
  }
  return myArr;
}

function NumberGrid({ start, end }) {
  const myArr = ArrMaker(start, end);
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gap: "10px",
      textAlign: "center",
      alignItems: "center"
    }}>
      <GridMaker arr={myArr} />
    </div>
  )
}

function P2() {
  return (
    <div className="project">
      <h1> Project 2 </h1>
      <p> For the odd numbers, the block's color is yellow; for the even numbers, the block's color is green; and for the prime numbers, the block's color is red with a solid black border.</p>
      <NumberGrid start={1} end={79} />
    </div>
  )
}

export default P2;