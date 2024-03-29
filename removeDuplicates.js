const removeDuplicates = (nums) => {
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			--i
		}
	}
	return nums
}

const removeDuplicatesV2 = (nums) => {
	let l = 1
	for (let i = 1; i < nums.length; ++i) {
		if (nums[i] != nums[i - 1]) {
			nums[l] = nums[i]
			l += 1
		}
	}
	return l
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// const nums = [1, 1, 2]
console.log(removeDuplicates(nums))
