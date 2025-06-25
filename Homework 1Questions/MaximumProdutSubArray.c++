#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxProduct(vector<int>& nums) {
    int maxProd = nums[0];
    int minProd = nums[0];
    int result = nums[0];

    for (int i = 1; i < nums.size(); ++i) {
        if (nums[i] < 0) swap(maxProd, minProd);

        maxProd = max(nums[i], nums[i] * maxProd);
        minProd = min(nums[i], nums[i] * minProd);

        result = max(result, maxProd);
    }

    return result;
}

int main() {
    vector<int> nums = {2, 3, -2, 4};
    cout<<"Array: " <<endl;
    for(int num: nums)
    {
        cout<<num<<" ";
    }
    cout << "Maximum product subarray: " << maxProduct(nums) << endl;
    return 0;
}
