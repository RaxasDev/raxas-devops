function sum(a, b) {
    return a + b;
}

test("Should return an sum of two numbers", () => {
    expect(sum(1, 2)).toBe(15);
});