#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

const int MOD = 998244353;

int n, k;
vector<int> digits;


unordered_map<int, int> leftSumFreq;


void generateHalfSums(int pos, int sum, int halfLen) {
    if (pos == halfLen) {
        leftSumFreq[sum]++;
        return;
    }
    for (int digit : digits) {
        generateHalfSums(pos + 1, sum + digit, halfLen);
    }
}

long long countLuckyTickets(int pos, int sum, int halfLen) {
    if (pos == halfLen) {
        return leftSumFreq[sum]; 
    }

    long long total = 0;
    for (int digit : digits) {
        total = (total + countLuckyTickets(pos + 1, sum + digit, halfLen)) % MOD;
    }
    return total;
}

int main() {
    cin >> n >> k;
    digits.resize(k);
    for (int i = 0; i < k; ++i) {
        cin >> digits[i];
    }

    int halfLen = n / 2;
   
    generateHalfSums(0, 0, halfLen);
    long long result = countLuckyTickets(0, 0, halfLen);
    cout << result % MOD << endl;
    return 0;
}
