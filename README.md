#   🎇  Wcat 🎇  
• It is used to display and perform actions on one or more files inside the terminal. 

## Commands:

|   Commands           |        Action                                                         |
| ----------------- | ------------------------------------------------------------------ |
| wcat -rs "filepath"| Remove all the white spaces present in file.|
| wcat -rn "filepath" | Remove all the new lines present in the file.|
| wcat -rsc "filepath" %"character"| Remove all the entered characters present in the file.|
| wcat -s "filepath" | Give serial numbers to all the lines Including empty lines present in the file.|
| wcat  -sn "filepath" | Give serial numbers to all the lines Excluding empty lines present in the file.|
| wcat -rel "filepath" | Remove all extra empty lines present in the file.|
| wcat "filepath1" "filepath2" -rel -b > "newFileName| Remove all extra lines from both given files and will combine them and create a new file of desired name.|


✔ You can also mix and match the Commands.

## Edge cases:

• If file entered is not found then it does not gives file does not exist error.
