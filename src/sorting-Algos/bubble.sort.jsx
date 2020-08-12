
export const BubbleSort = (arr)=>{
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    const arrayBar = document.getElementsByClassName('element-bar');
    console.log(arrayBar);
    for (let i = arr.length-1; i > 0; i--) {
        console.log(arrayBar[i])
      for (let j = 0; j < i - 1; j++) {
        arrayBar[i].style.backgroundColor='red';
        arrayBar[j].style.backgroundColor = 'green';;
        arrayBar[j+1].style.backgroundColor = 'green';
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
            arrayBar[j].style.height = arrayBar[j+1].style.height;
            arrayBar[j+1].style.height = arrayBar[j].style.height;
            arrayBar[j].style.backgroundColor = 'cadetblue';
            arrayBar[j].style.backgroundColor = 'cadetblue';
         
        }
      }
      arrayBar[i].style.backgroundColor = 'cadetblue';
    }
} 


