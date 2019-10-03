//recursive while loop;
isPalindrome = (str) => {
    str = str.toLocaleLowerCase();
    const compareVal = str[0] === str[str.length - 1]
    if (str.length === 1 || (str.length === 2 && compareVal)) return true;
    if (!compareVal) return false;
    return isPalindrome(str.slice(1, str.length - 1))
}


console.log(isPalindrome("cattac"));
console.log(isPalindrome("cattfiwfienac"));

//recursive merge
merge = (left, right, sortedArr = []) => {
    if (left.length === 0) return sortedArr.concat(right);
    if (right.length === 0) return sortedArr.concat(left);
    if (left[0] < right[0]) {
        sortedArr.push(left.shift());
        return merge(left, right, sortedArr);
    }

    sortedArr.push(right.shift());
    return merge(left, right, sortedArr);
}

console.log(merge([2,4,6], [1,3,5]));