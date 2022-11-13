const BSF = function (start, end) {
  const paths = solve(start);
  const path = reconstructPath(start, end, paths);
  return path;
};
const solve = function (start) {
  const queue = [start];
  const paths = {};

  while (queue.length > 0) {
    const moves = getAllNextMoves(queue[0]);

    moves.forEach((move) => {
      const stringMove = JSON.stringify(move);
      if (!paths[stringMove]) {
        queue.push(move);
        paths[stringMove] = queue[0];
      }
    });
    queue.shift();
  }
  return paths;
};

const getAllNextMoves = function (s) {
  const x = s[0];
  const y = s[1];
  const moves = [];
  if (x + 1 < 8 && y + 2 < 8) {
    moves.push([x + 1, y + 2]);
  }
  if (x + 2 < 8 && y + 1 < 8) {
    moves.push([x + 2, y + 1]);
  }
  if (x + 2 < 8 && y - 1 > 0) {
    moves.push([x + 1, y - 1]);
  }
  if (x + 2 < 8 && y - 2 > 0) {
    moves.push([x + 2, y - 2]);
  }
  if (x - 1 > 0 && y - 2 > 0) {
    moves.push([x - 1, y - 2]);
  }
  if (x - 2 > 0 && y - 1 > 0) {
    moves.push([x - 2, y - 1]);
  }
  if (x - 2 > 0 && y + 1 < 8) {
    moves.push([x - 2, y + 1]);
  }
  if (x - 1 > 0 && y + 2 < 8) {
    moves.push([x - 1, y + 2]);
  }
  return moves;
};
//'[6,4]': [ 7, 2 ], or 5G
const reconstructPath = function (start, end, paths) {
  let currentMove = end;
  const path = [end];
  while (currentMove != start) {
    path.push(paths[JSON.stringify(currentMove)]);
    currentMove = path[path.length - 1];
  }
  return path.reverse();
};
console.log(BSF([0, 0], [1, 1]));
