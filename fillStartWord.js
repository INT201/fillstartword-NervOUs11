const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word == null || word == undefined) {
        console.log(undefined)
        return undefined
    }

    else if (startWord.length == word.length){
        if (startWord == word){
            console.log(word)
            return String(word) 
        }
    }

    else {
        let str = ""
        for (let index = 0; index < startWord.length; index++) {
            if (startWord[index] != word[index]){
            str += startWord[index]
            }
        }
        for (let index = 0; index < word.length; index++) {
            str += word[index]
        }    
        console.log(str)
        return String(str)  
    }
}
module.exports = fillStartWord