function selectionSort(arr) {

    let sorted = []


    while(arr.length) {

        let min = Math.min(...arr)
        sorted.push(min)

        let index = arr.indexOf(min)
        arr.splice(index,1)

    }
    return sorted
  }

  let arr = [1, 4, 2, 5, 3, 8, 9,]
console.log(selectionSort(arr))
