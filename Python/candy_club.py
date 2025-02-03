# Name: Chhay Voin Vy
# Date: Jan 31, 2025
# Description: Project 1 - CARL’s Crazy CANDY CLUB
# About: Write an automated ordering system for Carl’s Candy Club

print("WELCOME TO CARL'S CANDY CLUB")

itemsList = ["Candy Corns", "Chocolate Chews", "Jelly Jumpers", "Raspberry Roll Ups"]
itemsPrice = [1.20, 1.89, 2.35, 2.50]

longestName = len(max(itemsList, key=len))
spacing = " "

# Inputs
cCorn = int(input(f"How many {itemsList[0]} at ${itemsPrice[0]:.2f} do you want? "))
cChews = int(input(f"How many {itemsList[1]} at ${itemsPrice[1]:.2f} do you want? "))
jJump = int(input(f"How many {itemsList[2]} at ${itemsPrice[2]:.2f} do you want? "))
rUps = int(input(f"How many {itemsList[3]} at ${itemsPrice[3]:.2f} do you want? "))

print("Here is your receipt")

# Total Price by Row
cCorn_total = cCorn * itemsPrice[0]
cChews_total = cChews * itemsPrice[1]
jJump_total = jJump * itemsPrice[2]
rUps_total = rUps * itemsPrice[3]

# Table of Items
print(f"  {itemsList[0]:>{longestName}}  {cCorn} at $ {itemsPrice[0]:.2f} = $ {cCorn_total:.2f}")
print(f"  {itemsList[1]:>{longestName}}  {cChews} at $ {itemsPrice[1]:.2f} = $ {cChews_total:.2f}")
print(f"  {itemsList[2]:>{longestName}}  {jJump} at $ {itemsPrice[2]:.2f} = $ {jJump_total:.2f}")
print(f"  {itemsList[3]:>{longestName}}  {rUps} at $ {itemsPrice[3]:.2f} = $ {rUps_total:.2f}")

# Total
item_count = cCorn + cChews + jJump + rUps
subtotal = cCorn_total + cChews_total + jJump_total + rUps_total
tax = subtotal * 0.08  # 8%
grand_total = subtotal + tax

# Final Print Totals
print(f"TOTAL {spacing * (longestName - 3)} {item_count} items       $ {subtotal:.2f}")
print(f"Tax (8%) {spacing * (longestName)}         $ {tax:.2f}")
print("=============================================")
print(f"GRAND TOTAL{spacing * (longestName)}       $ {grand_total:.2f}")

# Display Change
amountReceived = float(input("How much money did you receive?: "))
amountDue = amountReceived - grand_total
rChange = round(amountDue * 100)

print("The amount due back is $%.2f" % (amountDue))
print("That is  ", rChange, "  cents")


def calChange(cents):
    # 20 dollars
    n20 = cents // 2000
    cents %= 2000

    # 10 dollars
    n10 = cents // 1000
    cents %= 1000

    # 10 dollars
    n5 = cents // 500
    cents %= 500

    # 50 dollars
    n50 = cents // 5000
    cents %= 5000

    # 1 dollars
    n1 = cents // 100
    cents %= 100

    # quarters
    nQ = cents // 25
    cents %= 25

    # dimes
    nD = cents // 10
    cents %= 10

    # nickels
    nN = cents // 5
    cents %= 5

    # pennies
    nP = cents

    print("Please give the customer the following: ")

    if n20 > 0:
        print(f"  {n20} $20s")
    if n10 > 0:
        print(f"  {n10} $10s")
    if n5 > 0:
        print(f"  {n5} $5s")
    if n1 > 0:
        print(f"  {n1} $1s")
    if nQ > 0:
        print(f"  {nQ} quarters")
    if nD > 0:
        print(f"  {nD} dimes")
    if nN > 0:
        print(f"  {nN} nickels")
    if nP > 0:
        print(f"  {nP} pennies")


calChange(rChange)

"""

Answer these questions here for 20 points:
1) How long did it take you to do this assignment?
- It tooks me about 3.5h to finished this assigment.

2) Did you get stuck on any parts, if who which?
- Yes, I stucked at trying to align the row and column, it tooks me a while by 
  doing space counting, figuring out the longest string of items. 
  It seems unpractical, then I ask ChatGPT how can I align the table.

  ChatGPT came up with good way to do it by using the :> that alight the text 
  by comparing it to length to my longest string.

3) Did you get help, if so from where?
- Function: https://www.geeksforgeeks.org/python-functions/

"""