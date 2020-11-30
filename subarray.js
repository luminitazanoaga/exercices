const arr = [6, 7, 8, 6, 12, 1, 2, 3, 4];
const arr1 = [5, 6, 1, 8, 9, 7];
const findLongestSub = arr => {
   let count = 1, len = 0, max = 1;
   while(len < arr.length){
      if(arr[len] === arr[len - 1] + 1){
         count++;
         if(max < count){
            max = count;
         }
         }else{
            count = 1;
      };
      len++;
   };
   return max;
};
console.log(findLongestSub(arr));
console.log(findLongestSub(arr1));