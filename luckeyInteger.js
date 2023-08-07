var findLucky = function (arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]] === undefined) {

            obj[arr[i]] = 1;

        } else {

            obj[arr[i]] += 1;

        }

    }

    let max = -1;

    for (let k in obj) {

        if (k == obj[k] && max < obj[k]) {

            max = obj[k];

        }

    }

    return max;

};

let findLuckyResult = findLucky([1, 2, 2, 3, 3, 3]);

console.log(findLuckyResult);