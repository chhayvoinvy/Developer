# Name: Chhay Voin Vy
# Date: Jan 30, 2025
# Desc: Program to Make Change and Display Total Coins!

totalDue = float(input("Enter amount of change: "))

print("Change due is $%.2f" % (totalDue))

rChange = round(totalDue * 100)

# quarters
nQ = rChange // 25
rChange = rChange % 25

# dimes
nD = rChange // 10
rChange %= 10

# nickels
nN = rChange // 5
rChange %= 5

# pennies
nP = rChange

coins = [nQ, nD, nN, nP]
total = 0

# count total coins ----
# all_coins = nQ + nD + nN + nP
# print("This is the following" , all_coins , "coins: ")
# we can simply do like above this but it just doesn't look clean to me, so I go with for loop in array list
for c in coins:
    total += c
# ----------------------

print("This is the following" , total , "coins: ")
print(" ", nQ, " quarters")
print(" ", nD, " dimes")
print(" ", nN, " nickels")
print(" ", nP, " pennies")


"""
Answer these Questions here: 10pt
1) How long did it take you to do this assignment?
- About 2 hours.

2) What was the hardest / tricky-ist part?
- Tricky: It tooks me a couple minutes to understand the formular, so I asked ChatGPT to explain why "*100" and why using "//25, //5"
  then I google the image search for the coins' value...

3) Did you get help & if so did you comment it above?
- Accessing items in array list with for in loop: https://developers.google.com/edu/python/lists#for-and-in


"""