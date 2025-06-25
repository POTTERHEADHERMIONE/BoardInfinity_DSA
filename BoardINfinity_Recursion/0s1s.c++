#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Function to generate all sequences of 0s and 1s
void generateSequences(int N, string current, vector<string>& result) {
    // Base case: if the length of the current sequence equals N
    if (current.length() == N) {
        result.push_back(current);
        return;
    }

    // Recursive case: add '0' and '1' to the current sequence
    generateSequences(N, current + "0", result);
    generateSequences(N, current + "1", result);
}

vector<string> getAllSequences(int N) {
    vector<string> result;
    generateSequences(N, "", result);
    return result;
}

int main() {
    int N;
    cout << "Enter the value of N: ";
    cin >> N;

    vector<string> sequences = getAllSequences(N);

    cout << "All possible sequences of length " << N << " are:" << endl;
    for (const string& seq : sequences) {
        cout << seq << endl;
    }

    return 0;
}