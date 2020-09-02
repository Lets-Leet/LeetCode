var findSmallestSetOfVertices = function (n, Edges) {
  let all = new Set([...Array(n).keys()]);
  Edges.forEach(([_, tail]) => {
    all.delete(tail);
  });
  return [...all];
};
