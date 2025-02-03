# Name: Chhay Voin Vy
# Date: Jan/29, 2025
# Description: Number Guessing Game

import random

MAX = 100;
number = random.randint(1, MAX)

print("Try to guess my number. It is between 1 and ", MAX)
guess = -1
count = 0

while guess != number:
    count = count + 1
    print("Try:", count, "- ", end="")
    guess = int(input("Enter guess: "))

    if number > guess:
        print("My number is higher.")
    elif number < guess:
        print("My number is lower.")

print("You guessed it in", count, "tries!")

"""

    We can find a number between 1 and 1000 in about 10 moves.
    We can find a nuber between 1 and 1,000,000 in about 20 moves by doing the add and division to narrow down the range.

    ***** Imagine I find the number 671,780 in 1,000,000 *****

    For example, we go with the middle range of 1,000,000:

    1=> (1 + 1,000,000) / 2 = 500,000.          ;  if the output prompt as lower, then we narrow down to range 1 to 500,000, so I input 500,000
    2=> (1,000,000 + 500,000) / 2 = 750,000     ;  if the output prompt as higher, the range is between 500,000 to 1,000,000, so I input 750,000

    Then if output prompt as lower, then the range is between 500,000 to 750,000
    3=> (500,000 + 750,000) / 2 = 625,000 ; Then I input 625,000.

    I will keep doing this until I found the number 671,780 in 1,000,0000



    ================================================================

        My Output: 

        Try to guess my number. It is between 1 and  100
        Try: 1 - Enter guess: 50

        My number is higher.
        Try: 2 - Enter guess: 75

        My number is lower.
        Try: 3 - Enter guess: 60

        My number is higher.
        Try: 4 - Enter guess: 70

        You guessed it in 4 tries!


    ================================================================



"""