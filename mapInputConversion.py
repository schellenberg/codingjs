import pyperclip


#
#print("Copy/paste the 3 lines of example map input code to convert")
#theInputs = []
#for line in range(3):
#    inputToConvert = input()
#    theInputs.append(inputToConvert)

toConvert = input()

def convertInput(code):
    parts = code.split("→")
    inPart = parts[0]
    cleansed = removeCurlyBrackets(inPart)
    inputs = cleansed.split(", ")
    newString = "'(["
    for i, item in enumerate(inputs):
        if i < len(inputs)-1:
            newString =  newString + "[" + item + "], "
        else:
            newString =  newString + "[" + item + "]"
    newString += "])',"
    newString = newString.replace(":", ",")
    return newString
    
    
def removeCurlyBrackets(code):
    firstCurlyBracket = code.find("{")
    lastCurlyBracket = code.find("}")
    return code[firstCurlyBracket+1:lastCurlyBracket]

output = convertInput(toConvert)
print(output)
pyperclip.copy(output)