#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> currentPartition;
        backtrack(s, 0, currentPartition, result);
        return result;
    }

private:
    void backtrack(const string& s, int start, vector<string>& current, vector<vector<string>>& result) {
        if (start == s.length()) {
            result.push_back(current);
            return;
        }

        for (int end = start; end < s.length(); ++end) {
            if (isPalindrome(s, start, end)) {
                current.push_back(s.substr(start, end - start + 1));
                backtrack(s, end + 1, current, result);
                current.pop_back(); // backtrack
            }
        }
    }

    bool isPalindrome(const string& s, int left, int right) {
        while (left < right) {
            if (s[left++] != s[right--])
                return false;
        }
        return true;
    }
};

int main() {
    Solution sol;
    string input;
    cout << "Enter a string: ";
    cin >> input;

    vector<vector<string>> partitions = sol.partition(input);

    cout << "Palindrome partitions:\n";
    for (const auto& partition : partitions) {
        for (const string& str : partition) {
            cout << str << " ";
        }
        cout << endl;
    }

    return 0;
}
