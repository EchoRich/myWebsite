/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let a  = new Map()
a.set(1,2)

let arr  = [1,2,3]

let target  =5
var twoSum = function(nums, target) {
    let map=new Map()
    
    let retrnObj = []
    for(let i =0; i<nums.length-1; i++){
        let minusnumber  = target-nums[i]
        console.log("target", minusnumber)
        if(map.get(minusnumber) ||map.get(minusnumber)==0 ){
           
               retrnObj =[map.get(minusnumber),i]
               
               return retrnObj
        }
       
        map.set(nums[i], i);
         console.log(222,map.get(nums[i]))
        
    }
    
    return retrnObj

};
twoSum(arr,target)
