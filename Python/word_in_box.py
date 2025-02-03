# Name: (** Chhay Voin Vy **)
# Desc: Python Word in a Box
# Date: Jan 27, 2025

msg = input("Enter a sentence: ")
msg_len = len(msg)
msg_border = "+" + "-" * (msg_len+2) + "+"
message = msg_border + "\n| " + msg + " |\n" + msg_border

print(message)