export default function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return squares[a];
    }
  }

  return null;
}


// export default function calculateWinner(history: Array<string | null>){
//   const lines = [
//     [0,1,2,3,4],
//     [0,18,36,54,72],
//     [0,19,38,57,76],
//     [4,21,38,55,72]
//   ];
//   for(let i=0; i<lines.length; i++){
//     const [a,b,c,d,e] = lines[i];
//     for(let j=0; j<14; j++){ // 檢查橫向是否 win
//       for(let k=0; k<21; k++){ // 檢查縱向是否 win
//         if( history[a+j+(k*18)]
//           && history[a+j+(k*18)] === history[b+j+(k*18)]
//           && history[b+j+(k*18)] === history[c+j+(k*18)]
//           && history[c+j+(k*18)] === history[d+j+(k*18)]
//           && history[d+j+(k*18)] === history[e+j+(k*18)]
//           ){
//           return history[a+j+(k*18)];
//         }
//       }
//     }
//   }
//   return false;
// }
