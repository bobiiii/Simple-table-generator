function tableFunc() {
  let tableValue = document.getElementById("tableValue").value;

  if (tableValue == 0 || "") {
    console.log("if works");
    return (p = document.getElementById("table").innerHTML =
      "Value Must Be Greater Than 0 ");
  } else {
    for (i = 1; i <= 10; i++) {
      let answer = tableValue * i;
      let result = `${tableValue} x ${i} = ${answer}`;
      let p = document.createElement("p");
      p.append(result);
      document.getElementById("table").append(p);
      console.log("else works");
    }
  }
}
