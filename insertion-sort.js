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

// let arr = [3, 2, 0, 4, 1, 5, 8, 7]
// console.log(insertionSort(arr))

/************************************************************************* */
/**********out-of-place***********************/

function insertionSort2(arr) {
    let sorted = []


    while (arr.length) {
        let n = sorted.length

        let num = arr.splice(0, 1)
        console.log(!sorted[0], num[0], sorted, 31)
        if (!sorted[0]) {
            sorted.unshift(num[0])
        }
        else if (num[0] > sorted[sorted.length - 1]) {
            console.log(!sorted[0], num[0], sorted, 36)
            sorted.push(num[0])
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (num[0] > arr[i] && num[0] < arr[i + 1]) {
                    sorted.splice(i + 1, 0, num[0])
                }

            }



        }



    }

    console.log(arr)
    return sorted
}



let arr = [1, 4, 2, 5, 3]
console.log(insertionSort2(arr))
