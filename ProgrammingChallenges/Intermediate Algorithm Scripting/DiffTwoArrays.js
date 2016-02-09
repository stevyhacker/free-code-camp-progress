function diff(arr1, arr2) {
    var arr = arr1.concat(arr2);
    var newArr= arr.filter(difftwo);

    function difftwo(value){

        if(arr1.indexOf(value)==-1 ^ arr2.indexOf(value)==-1 ){
            return value;
        }

    }

    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);