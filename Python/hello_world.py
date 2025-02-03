# Name: (** Chhay Voin Vy **)
# Desc: This program shows some information on the screen
# Date: Jan 27, 2025 (Last Update)

msg = "Hello World!"

# Part 1
print(msg)

# Part 2
msg_len = len(msg)+2
print("/" + "-" * msg_len + "+\n" + "|" + " " * msg_len + "|")
print("| " + msg + " |\n" + "|" + " " * msg_len + "|")
print("+" + "-" * msg_len + "/")