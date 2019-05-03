import Ai from './Ai';

const ai = new Ai();

describe('Ai', () => {
  test('should generate 1 color patterns', () => {
    const ps = ai.colorPermutations(1);
    expect(ps.length).toEqual(1);
  });
  test('should generate 2 color patterns', () => {
    const ps = ai.colorPermutations(2);
    expect(ps.length).toEqual(14);
  });
  test('should generate 3 color patterns', () => {
    const ps = ai.colorPermutations(3);
    //expect(ps.length).toEqual(14);
  });
  test('should generate 4 color patterns', () => {
    const ps = ai.colorPermutations(4);
    //expect(ps.length).toEqual(14);
  });
});