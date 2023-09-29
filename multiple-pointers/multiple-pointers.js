// [1, 2, 2, 3, 4, 4, 5, 6, 7] = > [1, 2, 3, 4, 5, 6, 7]
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183948#overview
export const uniqValues = (arr) => {
    let i = 0; // index

    for (let j = 1; j < arr.length; j++) {
        //  i
        // [1, 2, 2, 3, 4, 4, 5, 9]
        //     j
        // not equal
        // then
        //     i
        // [1, 2, 2, 3, 4, 4, 5, 9]
        //        j
        //     i
        // [1, 2, 2, 3, 4, 4, 5, 9]
        //        j
        // equal
        // then
        //     i
        // [1, 2, 2, 3, 4, 4, 5, 9]
        //           j
        // not equal
        // then
        //        i
        // [1, 2, 3, 3, 4, 4, 5, 9]
        //              j
        // not equal
        // then
        //           i
        // [1, 2, 3, 4, 4, 4, 5, 9]
        //                 j
        // .......
        
        if (arr[i] !== arr[j] ) {
            i++
            arr[i] = arr[j]
        }
    }

    return arr.slice(0, i + 1).length
}

console.log(uniqValues([1, 4, 4, 9, 11, 11, 11, 12]));