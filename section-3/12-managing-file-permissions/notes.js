/*
- File Permissions in Linux/Unix:
    - Read (r): Permission to read the contents of the file or list the contents of a directory.
    - Write (w): Permission to modify or delete the file or add/remove files in a directory.
    - Execute (x): Permission to execute a file (if it's a script or binary) or access a directory and its contents.
- File Permission Representation:
    - The file permissions are represented by a string of 10 characters.
    - The first character indicates the file type:
        - '-' : Regular files
        - 'd' : Directory
        - 'l' : Symbolic link   
    - The next nine characters are divided into three sets of three characters each, representing the permissions for the owner, group, and others respectively.
        - First set (characters 2-4): Owner permissions
        - Second set (characters 5-7): Group permissions    
        - Third set (characters 8-10): Others permissions
    - Each set contains the characters 'r', 'w', and 'x' to indicate read, write, and execute permissions respectively. If a permission is not granted, a '-' is used in its place.
- Example:      
    -rw-r--r-- 1 psame psame  197609  882 Jul 19  2024  create_hostel.sql :  '-' indicates a regular file 
    drwxr-xr-x 1 psame psame 197609  0 Sep 11  2024  AndroidStudioProjects/ : 'd' indicates a directory
    lrwxrwxrwx 1 psame psame 197609   30 Jan 15  2025 'Application Data' -> /c/Users/psame/AppData/Roaming/ : 'l' indicates a symbolic link means it points to another file or directory
- Changing File Permissions:
    - chmod command is used to change file permissions.
    - Syntax: chmod [options] mode file
    - Example:  
        - chmod +x script.sh : Adds execute permission to the owner for the file script.sh
        - chmod 755 script.sh : Sets permissions to rwxr-xr-x (read, write, execute for owner; read, execute for group and others)
- Viewing File Permissions:     
    - ls -l command is used to view file permissions in a detailed list format.

-> -rw-r--r-- 1 psame psame 197609 2007 Dec 23 13:13 filePermission.js
  permission string: -rw-r--r--
  file type: -
  owner permissions: rw-
  group permissions: r--
  others permissions: r-- 
  1 indicates number of hard links means how many different names the file has in the file system.
  psame indicates the owner of the file.
  psame indicates the group owner of the file.
  197609 indicates the group id of the file.
  2007 indicates the size of the file in bytes.
  Dec 23 13:13 indicates the last modified date and time of the file.
  filePermission.js indicates the name of the file.   

755 in chmod(change mode) command represents the following permissions:
    - Owner: 7 (rwx) - Read, write, and execute permissions
    - Group: 5 (r-x) - Read and execute permissions
    - Others: 5 (r-x) - Read and execute permissions
    so for r =4 , w=2 , x=1 in every permission set we add the values to get the total.
    the permission string for 755 will be rwxr-xr-x
    (IMP)stat -c "%A %a %n" filePermission.js : This command displays the file permissions in both symbolic and numeric formats along with the file name.
        example output: -rw-r--r-- 755 filePermission.js
- Numeric Representation of Permissions:
    - Permissions can also be represented numerically using octal numbers.
- Special Permissions:
    - Setuid (s): When set on an executable file, allows the file to be executed with the permissions of the file owner.
    - Setgid (s): When set on a directory, files created within the directory inherit the group ownership of the directory.
    - Sticky bit (t): When set on a directory, only the file owner, directory owner, or root can delete or rename files within that directory.  
- Disk Space Allocation:
    - By default, in unix or linux based systems for a directory 4kB(1kb=1024 bytes -> 4KB = 4096 bytes) space is allocated and for a file 1kB space is allocated.   
    - The space allocated is not necessarily the same as the file size. The allocated space is the amount of disk space reserved for the file or directory.
    
-chmod -x ./src : This command removes the execute permission from the file or directory located at ./src for owner,group & others.
-chmod +x ./src : This command adds the execute permission to the file or directory located at ./src for owner,group & others.
like wise -r and +r for read permission for owner,group & others But -w and +w for write permission only for owner.  

Examples:
    -chmod u+x,g+x,o+x ./src : This command adds the execute permission to the file or directory located at ./src for owner(user),group & others.
    -chmod u-x,g-x,o-x ./src : This command removes the execute permission from the file or directory located at ./src for owner(user),group & others.
    -chmod u+r,g+r,o+r ./src : This command adds the read permission to the file or directory located at ./src for owner(user),group & others.
    -chmod u+r,u+w,u+x ./src : This command adds the read, write and execute permissions to the file or directory located at ./src for owner(user) only.

Git File Permissions:
    -1000644 : Regular file with read and write permissions for the owner, and read-only permissions for group and others.
    -1000755 : Regular file with read, write, and execute permissions for the owner, and read and execute permissions for group and others.
    -120000 : Symbolic link
    -040000 : Directory
*/
