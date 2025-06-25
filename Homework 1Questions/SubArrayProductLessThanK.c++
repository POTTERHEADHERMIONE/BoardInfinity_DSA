#include <iostream>
#include <vector>

using namespace std;

int numSubarrayProductLessThanK(vector<int>& nums, int k) {
    if (k <= 1) return 0;

    int prod = 1, left = 0, result = 0;
    for (int right = 0; right < nums.size(); ++right) {
        prod *= nums[right];

        while (prod >= k) {
            prod /= nums[left++];
        }

        result += right - left + 1;
    }

    return result;
}

int main() {
    vector<int> nums = {10, 5, 2, 6};
    int k1 = 100;
    int k2 = 200;
    cout << "Sub-array count with product less than " << k1 << ": " << numSubarrayProductLessThanK(nums, k1) << endl;
    cout << "Sub-array count with product less than " << k2 << ": " << numSubarrayProductLessThanK(nums, k2) << endl;
    
    return 0;
}
