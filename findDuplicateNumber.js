function findDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return num;
        }
        numSet.add(num);
    }
    return -1; // No duplicate found
}
function findDuplicates(nums) {
    const numSet = new Set();
    const duplicates = new Set();
    
    for (let num of nums) {
        if (numSet.has(num)) {
            duplicates.add(num);
        } else {
            numSet.add(num);
        }
    }
    
    return Array.from(duplicates);
}
const args = process.argv.slice(2);
const array = args.length? args.map(Number) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,5,6,8];
const duplicateNumber = findDuplicate(array);
console.log("The duplicate number is:", duplicateNumber);

const duplicateNumbers = findDuplicates(array);
console.log("The duplicate numbers are:", duplicateNumbers);