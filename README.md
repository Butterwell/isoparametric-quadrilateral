# isoparametric-quadrilateral
Two dimensional shape functions for "square", with one function per corner, n0, n1, n2, n3.
Where the portion of the four functions is such that:
at (-1, -1) n0 is 1, and at all other corners is 0,
at ( 1, -1) n1 is 1, and at all other corners is 0,
at (-1,  1) n2 is 1, and at all other corners is 0, and
at ( 1,  1) n3 is 1, and at all other corners is 0.
The functions are of the form c0 + c1\*s + c2\*t + c3\*s\*t
where c0, c1, c2, c4 are the constants for that particular function
