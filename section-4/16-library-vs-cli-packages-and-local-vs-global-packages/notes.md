## Library vs CLI Packages & Local vs Global Packages

- Library Packages are used in projects
- CLI Packages are used in terminal:- e.g. `vite`
  - CLI Packages create `.bin` folder in `node_modules`
  - Library packages don't usually have `.bin` until and unless they have a dependency on any terminal package
- Any CLI package needs to be executed via `npx` however the library pacakge can be used via `import` in code
- CLI package cannot be imported in code
- CLI packages are usually part of **dev dependencies** using `npm i package-nam -D`

### Local vs. Global

- Local packages are part of any directory which can be accessed only in that directory
- Global packages can be accessed from system anywhere
- Global packages can be executed via package name or using npx in front e.g. **vite**
