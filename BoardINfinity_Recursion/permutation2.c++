// This code needs some fixing as only three test casesa repassing out of 12

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> result;
        vector<bool> used(nums.size(), false);
        vector<int> current;

        sort(nums.begin(), nums.end()); // Sort to handle duplicates
        backtrack(nums, used, current, result);
        return result;
    }

private:
    void backtrack(const vector<int>& nums, vector<bool>& used, vector<int>& current, vector<vector<int>>& result) {
        if (current.size() == nums.size()) {
            result.push_back(current);
            return;
        }

        for (int i = 0; i < nums.size(); ++i) {
            // Skip used elements
            if (used[i]) continue;

            // Skip duplicates
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            current.push_back(nums[i]);
            backtrack(nums, used, current, result);
            current.pop_back();
            used[i] = false;
        }
    }
};

int main() {
    Solution sol;
    vector<int> nums;
    int n, x;

    cout << "Enter number of elements: ";
    cin >> n;

    cout << "Enter elements: ";
    for (int i = 0; i < n; ++i) {
        cin >> x;
        nums.push_back(x);
    }

    vector<vector<int>> permutations = sol.permuteUnique(nums);

    cout << "Unique permutations:\n";
    for (const auto& perm : permutations) {
        for (int num : perm) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}
