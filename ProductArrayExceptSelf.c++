#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);

    // Left pass
    int left = 1;
    for (int i = 0; i < n; ++i) {
        result[i] = left;
        left *= nums[i];
    }

    // Right pass
    int right = 1;
    for (int i = n - 1; i >= 0; --i) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

int main() {
    vector<int> nums = {1, 2, 3, 4};

    vector<int> output = productExceptSelf(nums);

    cout << "Product of Array Except Self: ";
    for (int val : output) cout << val << " ";
    cout << endl;

    // Dry Run
    cout << "\nDry Run:\n";

    int n = nums.size();
    vector<int> leftPass(n, 1), rightPass(n, 1), result(n, 1);

    // Left pass
    int left = 1;
    cout << "Left Pass:\n";
    for (int i = 0; i < n; ++i) {
        leftPass[i] = left;
        left *= nums[i];
        cout << "i=" << i << ", left=" << leftPass[i] << "\n";
    }

    // Right pass
    int right = 1;
    cout << "Right Pass:\n";
    for (int i = n - 1; i >= 0; --i) {
        rightPass[i] = right;
        right *= nums[i];
        cout << "i=" << i << ", right=" << rightPass[i] << "\n";
    }

    cout << "Final result (left * right):\n";
    for (int i = 0; i < n; ++i) {
        result[i] = leftPass[i] * rightPass[i];
        cout << "i=" << i << ", result=" << result[i] << "\n";
    }

    return 0;
}
