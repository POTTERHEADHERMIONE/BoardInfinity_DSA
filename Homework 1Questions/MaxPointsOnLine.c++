#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <utility>

using namespace std;

int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int maxPoints(vector<vector<int>>& points) {
    if (points.size() <= 2) return points.size();

    int result = 0;
    for (int i = 0; i < points.size(); ++i) {
        unordered_map<string, int> slopeCount;
        int duplicates = 1;

        for (int j = i + 1; j < points.size(); ++j) {
            int dx = points[j][0] - points[i][0];
            int dy = points[j][1] - points[i][1];

            if (dx == 0 && dy == 0) {
                duplicates++;
                continue;
            }

            int g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            // Normalize slope direction
            if (dx < 0) {
                dx *= -1;
                dy *= -1;
            }

            // To handle vertical lines
            if (dx == 0) dy = 1;
            if (dy == 0) dx = 1;

            string slopeKey = to_string(dy) + "/" + to_string(dx);
            slopeCount[slopeKey]++;
        }

        int maxLine = 0;
        for (auto& entry : slopeCount) {
            maxLine = max(maxLine, entry.second);
        }

        result = max(result, maxLine + duplicates);
    }

    return result;
}

int main() {
    vector<vector<int>> points = {{1,1},{2,2},{3,3},{4,4},{1,4}};
    cout << "Maximum points on a line: " << maxPoints(points) << endl;
    return 0;
}
