# Non-Divisible SVGNumberList

Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S is not evenly divisible by K.

For example, the array  S = [19, 10, 12, 10, 24, 25, 22] and K = 4. One of the arrays that can be created is S[0] = [10,12,25] . Another is S[1] = [19,22,24]. After testing all permutations, the maximum length solution array has 3 elements.

Function Description

Complete the nonDivisibleSubset function in the editor below. It should return an integer representing the length of the longest subset of S meeting the criteria.

nonDivisibleSubset has the following parameter(s):

S: an array of integers

k: an integer

Input Format

The first line contains 2 space-separated integers, n and k, the number of values in S and the non factor.
The second line contains n space-separated integers describing S[i], the unique values of the set.

Constraints

1 < n < 10^5

1 < k < 100

1 < S[i] < 10^9

All of the given numbers are distinct.

Output Format

Print the size of the largest possible subset (S).

Sample Input

    4 3 
    1 7 2 4

Sample Output

    3

Explanation

The sums of all permutations of two elements from S = { 1, 7, 2, 4 } are:

    1 + 7 = 8
    1 + 2 = 3
    1 + 4 = 5
    7 + 2 = 9
    7 + 4 = 11
    2 + 4 = 6

We see that only S = { 1, 7, 4} will not ever sum to a multiple of k = 3.