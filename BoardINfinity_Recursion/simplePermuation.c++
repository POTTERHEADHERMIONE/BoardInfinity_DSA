#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        backtrack(nums, 0, result);
        return result;
    }

private:
    void backtrack(vector<int>& nums, int start, vector<vector<int>>& result) {
        if (start == nums.size()) {
            result.push_back(nums);
            return;
        }

        for (int i = start; i < nums.size(); ++i) {
            swap(nums[start], nums[i]);           // Choose
            backtrack(nums, start + 1, result);   // Explore
            swap(nums[start], nums[i]);           // Un-choose (Backtrack)
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

    vector<vector<int>> permutations = sol.permute(nums);

    cout << "All permutations:\n";
    for (const auto& perm : permutations) {
        for (int num : perm) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}
