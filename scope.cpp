#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference {
    private:
    vector<int> elements;
  
  	public:
  	int maximumDifference;

	// Add your code here
    Difference(vector<int> a){
        elements = a;
        maximumDifference = 0;
    }
    void computeDifference(){
        int x = elements.size() - 1;
        for(int i = 0 ; i < x ; i ++){
            for (int j = i; j < x ; j ++){
                if(maximumDifference < abs(elements[i] - elements[j+1])){
                    maximumDifference = abs(elements[i] - elements[j+1]);
                }
            }
        }
    }

}; // End of Difference class
