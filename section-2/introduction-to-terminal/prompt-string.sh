# prompt string is the path which is shown in terminal where 
# it indicates of ready for execute command e.g. Dilanwazs-Macbook-M1:introduction-to-terminal dilnawazkhan$ 

# you can see that how the string is design by echo $PS1
# $PS2 means that another prompt(which usually is >) comes when your command to execute is more than on line 
# e.g. "hello (hit enter) another line: world (and then end using closed quotes)"


# PS1 and PS2 can be customised via following
# PS1=new string or special characters
# PS2=new string or special characters

# Note. this changed prompt string only remains in current terminal and fallbacks to old if terminal is closed and re-opened

# PART 2 - Renaming propmt string permanantly

# 1. create a .bashrc file in ~ folder e.g. cd ~
# 2. then in that file update the PS1="the code for customisation can be generated via Chatgpt just paste and reload 
# 3. reload via source ~/.bashrc

# Alias to same long commands in single keyword 
# e.g. alias source="source ~/.bashrc"
# now we can do soruce and the source ~/.bashrc gets executed