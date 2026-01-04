## What npx does?

### npx searches for a file and executes it.

e.g. we are running **npx hello**

1. Step 1

   - Searches Locally in current working directory
     - Looks for a `package.json`
     - Then looks for a `name` key `hello`
     - Then looks for a `bin` key with file name which needs to be executed.
       - The `bin` means binary in node terminology. which means executable file

2. Step 2

   - Searhes in node_modules in current working directory
     - Looks for a `.bin`
     - Then looks for hello

3. Step 3

   - Searches for hello in npm global npm folder
   - it executes the file

4. Step 4

   - Searches for hello package in npm cache on system
   - if found then executes it

5. Step 5
   - Searches for hello package in npm registry
   - if found then prompt to install it ?
   - if not found then give error
   - if granted then installs it and executes it
   - it also gives error if the package is found on npm registry but that is not a executable package e.g.
     - if we do npx express then its a library package hence it would throw an error

### NOTES:

- if our CLI package is like npx create-react-app, create-vite
  - we can do with node latest version following
    - npm create react-app :-ps. \*\*the create after npm would be combined to search package like npx create-react-app
    - npm create vite
