function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let step = ' '.repeat(n - i) + '#'.repeat(i);
        console.log(step);
    }
}

// Example usage
staircase(5);
