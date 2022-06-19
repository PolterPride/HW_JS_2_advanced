function printSmile(stringValue, numberOfRows){
    let result  = String()
    for(let i = 1; i <= numberOfRows; i++){
        result += stringValue
        console.log(result)
    }
}
printSmile(':)', 7)