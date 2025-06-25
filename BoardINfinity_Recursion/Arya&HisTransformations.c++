#include <bits/stdc++.h>
using namespace std;

int isPossible(long long a, long long b) {
    while (b > a) {
        if (b % 2 == 0) {
            b /= 2; // Reverse "multiply by 2"
        } else if (b % 10 == 1) {
            b /= 10; // Reverse "append 1"
        } else {
            return 0; // If neither operation is possible
        }
    }
    return b == a ? 1 : 0; // Check if we reached `a`
}

int main() {
    long long a, b;
    cin >> a >> b;

    cout << isPossible(a, b) << endl;

    return 0;
}