function threeSum(arr, target) {
  //your code here
	{
		arrr.sort((a,b)=>a-b);
		let closestSum=1000000000;
		for(let i=0;i<arr.length-2;i++)
			{
				let ptr=i,ptr2=arr.length-1;
				while(ptr1<ptr2){
					let sum=rr[i]+arr[ptr2];
					if(Math.abs(1*target-sum)< Math.abs(1*target-closestSum))
					{
						closestSum=sum;
					}
					if(sum>target){
						ptr2--;
					}
					else{
						ptr1++;
					}
						}
			}
		return closestSum;
	}
}

module.exports = threeSum;
