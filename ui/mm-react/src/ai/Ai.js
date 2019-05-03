
class Ai {
  colors = [0, 1, 2, 3, 4, 5];
  positions = [0, 1, 2, 3];
  keys = [0, 1, 2];
  variables = ['a', 'b', 'c', 'd'];

  colorPermutations(n) {
    const xs = this.variables.slice(0, n);
    const ps = this.permutations(xs, this.positions.length);
    return ps.filter(p => xs.every(x => p.indexOf(x) > - 1));
  }

  permutations(xs, length = 1) {
    const ps = [];
    if (length > 0) {
      for (let i = 0; i < xs.length; i++) {
        if (length === 1) {
          ps.push(xs[i]);
        }
        else {
          for (let ys of this.permutations(xs, length - 1)) {
            ps.push(xs[i].concat(ys));
          }
        }
      }
      return ps;
    }
  }
}

export default Ai;
