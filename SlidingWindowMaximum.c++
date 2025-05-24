#include <iostream>
#include <vector>
#include <deque>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> result;

    for(int i = 0; i < nums.size(); i++) {
       
        if(!dq.empty() && dq.front() == i - k)
            dq.pop_front();

       
        while(!dq.empty() && nums[dq.back()] < nums[i])
            dq.pop_back();

        dq.push_back(i);

       
        if(i >= k - 1)
            result.push_back(nums[dq.front()]);
    }

    return result;
}

int main() {
    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;

    vector<int> output = maxSlidingWindow(nums, k);

    cout << "Sliding Window Maximums: ";
    for(int val : output) cout << val << " ";
    cout << endl;

    // Dry Run Explanation
    cout << "\nDry Run:\n";
    deque<int> dq;
    for(int i = 0; i < nums.size(); i++) {
        if(!dq.empty() && dq.front() == i - k)
            dq.pop_front();

        while(!dq.empty() && nums[dq.back()] < nums[i])
            dq.pop_back();

        dq.push_back(i);

        if(i >= k - 1) {
            cout << "Window [" << (i - k + 1) << " to " << i << "] ";
            cout << "-> Max: " << nums[dq.front()] << "\n";
        }
    }
    return 0;
}
