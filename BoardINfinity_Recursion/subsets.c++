#include <iostream>
#include <vector>
using namespace std;

// Backtracking function to generate all subsets
void backtrack(int start, vector<int>& nums, vector<int>& current, vector<vector<int>>& result) {
    result.push_back(current);  // Always include the current subset (even empty)

    for (int i = start; i < nums.size(); ++i) {
        current.push_back(nums[i]);             // Choose
        backtrack(i + 1, nums, current, result); // Explore
        current.pop_back();                     // Un-choose (backtrack)
    }
}

vector<vector<int>> solve(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(0, nums, current, result);
    return result;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);

    for (int i = 0; i < n; ++i) {
        cin >> nums[i];
    }

    // Call the solve function to generate subsets
    vector<vector<int>> subsets = solve(nums);

    // Print the subsets
    cout << "Subsets:" << endl;
    for (const auto& subset : subsets) {
        cout << "{ ";
        for (int num : subset) {
            cout << num << " ";
        }
        cout << "}" << endl;
    }

    return 0;
}



