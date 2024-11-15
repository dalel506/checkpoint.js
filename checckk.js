function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

       
        arr[j + 1] = key;
    }
}

let arr = [20, 12, 40, 2, 35];
insertionSort(arr);
console.log(arr.join(" "));