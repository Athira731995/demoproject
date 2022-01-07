function getIndex() {
    let stmt = document.getElementById("stmt").value
    let letter = document.getElementById("letter").value
    let start = stmt.indexOf(letter)
    let last = stmt.lastIndexOf(letter)
    if (start != last) {
        let str = `the letter ${letter} is present at  index number ${start},`
        let index;
        for (let i = start + 1; i < last - 1; i++) {
            index = stmt.indexOf(letter, i)
            console.log(index);
            if (index != -1) {
                str += index+`,${last},`
            }
        }
        document.getElementById("p1").innerText = str
    } else {
        document.getElementById("p1").innerText = `the letter ${letter} is present at  index number ${start}`
    }
}
let obj=new Number(123.678980)
console.log(obj);
console.log(obj.toFixed(3))
