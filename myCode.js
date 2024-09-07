export function gcd(a,b) {
    if (a < b) [a,b] = [b,a];
    while (b) {
        a %= b;
        [a,b] = [b,a];
    }
    return a;
}

export function lcm(a,b) {
    return a * b / gcd(a,b);
}