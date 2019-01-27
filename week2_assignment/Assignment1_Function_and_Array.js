//1.Function and Array
//Complete the function below to find the  max number  of passing numbers. You may refer to this  MDN document  about rest parameters of the function.

function max(a,b, ...numbers){
// your code here, for-loop method preferred
	var arr = [a,b, ...numbers];
	var min = arr[0];
	var max = arr[0];
	var average = 0;

for(var i = 0; i < arr.length; i++) {
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i];
  average += arr[i];
}

average /= arr.length;

}


max(1, 2, 4, 5);  // result to 5 
max(5, 2, 7, 1, 6);  // result to 7

cosole.log(max);


