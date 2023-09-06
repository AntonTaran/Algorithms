// QUICK FIND. N2 quadratic

const ids = [1, 1, 3, 4, 5];
let newIds = [...ids];

const union = (p, q) => {
  const pId = ids[p];
  const qId = ids[q];

  for (let index = 0; index <= ids.length; index++) {
    // find all pId and change to qId
    if (ids[index] === pId) newIds[index] = qId;
  }
};

const isConnected = (p, q) => {
  return ids[p] === ids[q];
};

union(2, 4); // newIds = [1, 1, 5, 4, 5]
