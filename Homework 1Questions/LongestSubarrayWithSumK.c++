// Q2: Longest Subarray with Sum K
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int longestSubarrayWithSumK(vector<int>& nums, int k) {
    unordered_map<int, int> prefixSum;
    int sum = 0, maxLen = 0;
    for(int i = 0; i < nums.size(); i++) {
        sum += nums[i];
        if(sum == k) maxLen = i + 1;
        if(prefixSum.find(sum - k) != prefixSum.end())
            maxLen = max(maxLen, i - prefixSum[sum - k]);
        if(prefixSum.find(sum) == prefixSum.end())
            prefixSum[sum] = i;
    }
    return maxLen;
}

int main() {
    vector<int> nums = {1, 2, 3, 1, 1, 1, 1};
    int k = 5;
    cout << "Longest subarray with sum " << k << ": " << longestSubarrayWithSumK(nums, k) << endl;

    // Dry Run:
    cout << "\nDry Run:" << endl;
    cout << "Index | Num | Sum | MaxLen" << endl;
    unordered_map<int, int> prefixSum;
    int sum = 0, maxLen = 0;
    for (int i = 0; i < nums.size(); i++) {
        sum += nums[i];
        if (sum == k) maxLen = i + 1;
        if (prefixSum.find(sum - k) != prefixSum.end())
            maxLen = max(maxLen, i - prefixSum[sum - k]);
        if (prefixSum.find(sum) == prefixSum.end())
            prefixSum[sum] = i;

        cout << "  " << i << "   |  " << nums[i] << "  |  " << sum << "  |  " << maxLen << endl;
    }
    return 0;
}
