for (let i=1; i<=5; i++){
  let line = "";
  for(let m = 5; m >= 1; m--){
    line += " ";
  }

  let k = m;
  for (let j = m; j <= i; j++){
    line += " " + k;
    k = (K * (i - j)) / j;
  }
  console.log(line);
}
