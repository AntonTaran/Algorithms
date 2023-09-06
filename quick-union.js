class QuickUnion {
  constructor(size) {
    this.ids = new Array(size);
    for (let i = 0; i < size; i++) {
      this.ids[i] = i; // Initialize each element as its own root
    }
  }

  // Find the root of a component (the representative element)
  findRoot(x) {
    while (x !== this.ids[x]) {
      x = this.ids[x];
    }
    return x;
  }

  // Check if two elements are in the same set
  isConnected(p, q) {
    return this.findRoot(p) === this.findRoot(q);
  }

  // Perform a union operation to merge two sets
  union(p, q) {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);

    if (rootP !== rootQ) {
      this.ids[rootP] = rootQ; // rootP connects to rootQ
    }
  }

  getSet() {
    return this.ids;
  }
}

// Example usage:
const uf = new QuickUnion(10); // Create a set of size 10

console.log(uf.getSet());
