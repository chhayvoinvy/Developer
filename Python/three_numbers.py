# Name: (** Chhay Voin Vy **)
# Desc: Three Numbers
# This program takes inputs from user then display biggest, smallest, sum, and average.
# Date: Jan 29, 2025

print("This program takes 3 numbers and then shows the sum and average...")

num_1 = int(input("Enter the first number: "))
num_2 = int(input("Enter the second number: "))
num_3 = int(input("Enter the third number: "))
num_list = [num_1, num_2, num_3]

sum = num_1 + num_2 + num_3
avg = round(float(sum/3), 2) # Round the Float to 2 Digit Ending

biggest_num = max(num_list)
smallest_num = min(num_list)

print(f"The sum of {num_1} + {num_2} + {num_3} = {sum}")
print(f"The average is: {avg:.2f}")
print(f"The biggest is: {biggest_num:.2f}")
print(f"The smallest is: {smallest_num:.2f}")


""" 

For 10 points answer these questions:

1) How hard was this assignment?
- It's simple and fun to do because I have PHP and Javascript Backgorund. 
However, I do need to google for syntax

2) How long did it take to do (mins, hours, days)?
- Less than 2h

3) What part if any did you get help on?  What was the help?
- Float: https://www.digitalocean.com/community/tutorials/python-convert-string-to-float
- Average: https://www.calculator.net/average-calculator.html
- 2 Decimal Float: https://www.geeksforgeeks.org/how-to-round-floating-value-to-two-decimals-in-python/
- Compare value in Array List: https://www.geeksforgeeks.org/python-program-to-find-largest-number-in-a-list/

4) Please list each of your variables and tell what they are used for:
- I have 7 variables, I could eliminate the num_ variable by storing them in Array 
    but I will just keep it simple because I'm new to python.
- Here's my variables and what are they for: num_123 are just to store inputs as strictly integrer,
    num_list I put them into list to easily find bigger and smaller, sum to calculate total, and avg to caluclate
    average of total and round to 2 decimal ending of float. I store each number in list because I need to 
    display them in the print. For the grader test "Avg 2 Decimal", I use :.2f because I output 
    string within f-string.

"""