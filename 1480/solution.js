/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.*/
var runningSum = function (nums) {
  let rsum = [];
  for (i = 0; i < nums.length; i++) {
    if (i == 0) rsum[0] = nums[0];
    else rsum[i] = rsum[i - 1] + nums[i];
  }

  return rsum;
};
