weight: 1 3 4 5
value:  1 4 5 7

7
					 Root
				/   |    |  \
			 1    3    4   5
    / | |  / \   |   |
	3  4  5 4   1  3   1
/          
4

3 + 1
4

T(i, j) = max(T(i - 1, j))

     0 1 2 3 4 5 6 7
[1]1 0 1 1 1 1 1 1 1 
[4]3 0 1 1 4 5 5 5 5
[5]4 0 1 1 4 5 
[7]5 0 