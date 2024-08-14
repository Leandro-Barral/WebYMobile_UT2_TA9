function getOdds(nums) {
    const oddNumbers = nums.filter(num => num % 2 !== 0)
    console.log(oddNumbers);
}

getOdds([1,2,3,4,5,6,7,8,9]);