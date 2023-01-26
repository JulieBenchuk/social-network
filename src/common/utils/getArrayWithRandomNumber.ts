export function getArrayWithRandomNumber(array: Array<any>) {
    const randomPostsArray: Array<number> = []
    for (let i = 0; i < 4; i++) {
        let randomNum = Math.ceil(Math.random() * (array.length - 0) + 0);
        randomPostsArray.push(randomNum)
    }
    console.log(randomPostsArray)
    return randomPostsArray
}