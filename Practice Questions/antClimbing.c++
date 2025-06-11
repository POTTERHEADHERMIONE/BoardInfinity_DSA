// ANT CLIMBING 
#include <iostream>
#include <vector>
using namespace std;

int cntWays(int n)
{
    vector<long long> prev = {0, 0, 0, 1};
    vector<long long> curr = {0, 0, 0, 0};

    long long total = 0;

    for (int i = 1; i <= n; i++)
    {
        total = prev[0] + prev[1] + prev[2] + prev[3];
        for (int j = 0; j < 4; j++)
        {
            curr[j] = total - prev[j];
        }
        prev = curr; 
    }
    return prev[3];
}

int main()
{
    int n;
    cout << "Eneter the number of steps the ant needs: ";
    cin >> n;

    if (n < 0)
    {
        using namespace std;
        cout << "The steps cannot be negative." << endl;
        return 1;
    }

    int ways = cntWays(n);
    cout << "Number of ways: " << ways << endl;

    return 0;
}