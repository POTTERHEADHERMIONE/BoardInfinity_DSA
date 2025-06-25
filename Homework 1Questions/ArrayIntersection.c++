/*
Here I have created two unordered sets, where set1 contains all the elemets of arr1 
The set2 containes the results
In the loop, first we take all the elements in the array 2
If we have the num, in the set1, then it is added into the resultSet. Return the resultSet
*/

#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

vector<int> arrayIntersection(const vector<int>& arr1, const vector<int>& arr2) {
    unordered_set<int> set1(arr1.begin(), arr1.end());
    unordered_set<int> resultSet;

    for (int num : arr2) {
        if (set1.count(num)) {
            resultSet.insert(num);  
        }
    }

    return vector<int>(resultSet.begin(), resultSet.end());
}

int main() {
    vector<int> array1 = {1, 2, 2, 3, 4};
    vector<int> array2 = {2, 3, 5};

    vector<int> result = arrayIntersection(array1, array2);

    cout << "Intersection: ";
    for (int num : result) {
        cout << num << " ";
    }

    return 0;
}
