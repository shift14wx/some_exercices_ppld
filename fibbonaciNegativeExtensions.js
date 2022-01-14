/**
 * Find fibonacci sequence with the length of the given number
 *
 * dictionary
 * ########################################################
 * LINES OF COMMENTS THAT START WITH "// #..." AND MULTI LINE COMMENTS ARE PURE COMMENTS
 * ########################################################
 * LINES WITH SINGLE // ARE ACTUALLY CODE THAT CAN BE UNCOMMENTED TO TEST
 *
 * By default, this function will return fibonacci sequence base on "x > 0 ? positives : negatives "
 * @param x integer
 * @returns {number[]|*[]}
 */
function fibonacci(x) {
    // # if zero then return zero
    if (x === 0) {
        return [0];
    }
    // # initializing variables that will hold the fibbonaci sequence

    /*
    * SEEDING
    * this will help us to generate the fibonacci sequence, bcs be need to start from some point
    * and that will be for positives like:
    * [0] = 1;
    * [1] = 1;
    * [2] = [0] + [1]
    * representative in loop will look like
    * i=1; (Variable "i" start with 1 because We need to access every time the indexes like [i-1] so if "i" were 0 at start, then this will cause a failure because i-1 = -1, and the index -1 doesn't exist in arrays)
    * [length of the array] = [i-1] + [i]
    * */
    let fibonacciNegativeSequence = [1,-1];
    let fibonacciPositiveSequence = [1,1];

    let fibonacciFullRangeSequence = [];

    /*
    * This is the function that actually iterate to append the fictional sequence to the arrays
    * */
    let subf = (x) => {
        let finalLoop = Math.abs(x);
        // # is negative
        let i = 1;
        while (fibonacciNegativeSequence.length <= finalLoop) {

            //# negatives
            fibonacciNegativeSequence[fibonacciNegativeSequence.length] = fibonacciNegativeSequence[i - 1] - (fibonacciNegativeSequence[i]);
            //console.log("negative iteration: ",fibonacciNegativeSequence[i-1],"+",fibonacciNegativeSequence[i]);

            //# positives
            fibonacciPositiveSequence[fibonacciPositiveSequence.length] = fibonacciPositiveSequence[i - 1] + (fibonacciPositiveSequence[i])
            //console.log("positive iteration: ",fibonacciPositiveSequence[i-1],"+",fibonacciPositiveSequence[i]);

            //console.log("NEGATIVES (-): ","index: ",i,", number: ",fibonacciNegativeSequence[fibonacciNegativeSequence.length-1]);
            //console.log("positives (+): ","index: ",i,", number: ",fibonacciPositiveSequence[fibonacciPositiveSequence.length-1]);
            i++;
        }
            fibonacciFullRangeSequence = x>0 ? fibonacciPositiveSequence :  fibonacciNegativeSequence;

        // # uncomment next line 26, if you want to return an array with 0 at index 0
        //fibonacciFullRangeSequence.unshift(0);

        // # you can uncomment this lines if you want to give a full range of fibonacci sequence, from negatives to positives
        // # don't worry about the line 24, the fibonacciFullRangeSequence variable will be replaced once you uncomment this lines

        //console.log("negative sequence: ",fibonacciNegativeSequence);
        //console.log("positive sequence: ",fibonacciPositiveSequence);

        // ######UNIQUE EXCEPTION THIS IS A HOLE BLOCK SO YOU CAN UNCOMMENT THIS ONE

        /*if (fibonacciPositiveSequence.length>0 && fibonacciNegativeSequence.length>0){
            // # first sort backwards negative sequence
            fibonacciNegativeSequence.reverse();
            // # then checkout if the last item is equals to 0
            if (fibonacciNegativeSequence[fibonacciNegativeSequence.length-1] === 0)
            {
                // # then eliminate the last item;
                fibonacciNegativeSequence.pop();
            }
            // # now append the two sequences, negatives and positives into the full range variable
            fibonacciFullRangeSequence = [...fibonacciNegativeSequence,0,...fibonacciPositiveSequence];
        }*/



    };

    // # start iterating
    subf(x);

    return fibonacciFullRangeSequence;
}

console.log(fibonacci(-5).join("\n"));