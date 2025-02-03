# Name: (** Chhay Voin Vy **)
# Desc: Mad Libs
# Date: Jan 24, 2025

print("Welcome to: MAD LIBS!!!")

min = 10
max = 100

name = input("Please enter a name: ")
pet_type = input("Please enter a pet type: ")
sound = input("Please enter a pet sound or trick: ")
numbers = int(input(f"Please enter a number between {min} and {max}: "))

extra_n1 = input(f"What are the noun that {pet_type} scared of?: ")
extra_n2 = input(f"What food does {pet_type} likes to eat?: ")
extra_number = int(input(f"How many {extra_n2} that {pet_type} can eat?: "))

print(f"Here is the story about {name} and the {pet_type}!\n")
print(f"{name} had a pet {pet_type}.")
print(f"The pet {pet_type} liked to {sound}.")
print(f"{name} taught the pet {pet_type} how to {sound} for each number.")

for i in [1, 5, numbers]:
    sounds = " ".join([sound] * i)
    print(f"When {name} called out {i}, the pet would: {sounds}.")

print(f"{name} thought that it was a very smart {pet_type}.")

print(f"\nBut there's more to {name}'s {pet_type}!")
print(f"The {pet_type} was scared of a {extra_n1}.")
print(f"Twelve hours of sleep was never enough for {pet_type}, and the {pet_type} loves to eat {extra_n2}.")
print(
    f"After eating {extra_number} {extra_n2}(s), {pet_type} is no longer scared of {extra_n1} because of sluggish then went back to sleep.")

"""
Answer these questions here for 20 points:
0) How hard was this program?  How much time did it take you?
The difficulty is 50/50 but it is tricky when I try to understand the Grader input, and it tooks me about few hours.

1) Did you get the program working with the original inputs?
Yes.

2) Did you add the required new inputs and verses to your program?
Yes, I did.

3) What are some funny inputs for your program?
What the pet scared of.

4) Have you done the bonus part to allow it to final punctuations correctly yet?
Yes, it works correctly.

5) +20 If so, what did you do to get the bonus part working?
I simply searched in Python's Doc for passing variable into double quotes. 
Then I found f-string, passing variable using {} just like Javascript.
"""