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

# mv => move file to specificed directory
mv index.html script.js style.css src # when you move a file to a directory and that has same name file already then it replaces that file so be cautious


# mv => can be used to rename a file or directory
mv ./text.txt ./text_update.txt

# mv can be used to rename and mv at once
mv ./hello.txt ./src/hello_world.txt

# rm can be used to delete directory
rm index.html style.css script.js

# to remove directory 
rmdir test # directory name and rm only removes directory if that is empty

# directory with content cannot be remove with rmdir as it contains content
# for such case following cmd can be used
rm -r directory-name # -r means recursively