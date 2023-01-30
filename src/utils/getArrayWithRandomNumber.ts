//array ---> filtered arr
//amount --->length of arr

export function getArrayWithRandomNumber(array: Array<any>, amount: number) {
    const randomPostsArray: Array<number> = []
    for (let i = 0; i < amount; i++) {
        let randomNum = Math.ceil(Math.random() * (array.length));
        randomPostsArray.push(randomNum)
    }
    console.log(randomPostsArray)
    return randomPostsArray
}