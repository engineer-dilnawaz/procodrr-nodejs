# to run a .sh file you have to give e.g. ./test.sh

# bash: ./test.sh: Permission denied issue fix are below

# 1. chmod +x ./filename.sh //here chmod stands for change mode
# 2. bash filepath of .sh
# 3. chmod +x *.sh // wild-card to change mode or give permission to execute

#!/bin/bash
# echo is used to log something in terminal
echo Hello Script .sh

num1=3
num2=4

echo $((num1+num2))

# pwd logs the current working directory in terminal
pwd

# whoami tells the current user name
whoami

# cd => change directory

cd ../

cd ../../

cd ./section-1/

cd ../section-2/introduction-to-terminal/


# ls list all the content of current directory/folder
ls

# ls -a list all the content including hidden fildes of current directory
ls -a

# ls -la list the permissions of content of current directory

# touch => to create file - using space we can create multiple files at once
touch index.html style.css script.js

# mkdir => creates a new directory - using space we can create multiple folders/directory
mkdir src src1 src2 

# cp => copy file to specificed directory
cp index.html src # single file to single directory
cp cp ./index.html ./script.js ./src1/ # multiple files copy to single directory