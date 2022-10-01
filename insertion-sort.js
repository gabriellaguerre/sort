/*****in-place****************/

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {

            if (arr[i] < arr[j]) {
                let tmp = arr.splice(i, 1)
                arr.splice(j, 0, tmp[0])
            }
        }
    }
    return arr
}

let arr = [3, 2, 0, 4, 1, 5,8,7]
console.log(insertionSort(arr))

/************************************************************************* */
/**********out-of-place***********************/
