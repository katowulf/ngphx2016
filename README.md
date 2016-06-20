
# NG-PHX Live Demo, 2016

```
git clone https://github.com/katowulf/ngphx2016.git
npm install
npm start
```

Check out the [release tags](https://github.com/katowulf/ngphx2016/releases) for various stages of the project.

## Troubleshooting TypeScript errors

If you have issues with TypeScript definitions (e.g. `error TS2304: Cannot find name 'Promise'.`), or with changes to .ts files not being compiled, then instead of using `npm start`, launch two terminals and run the commands separately:

```
## terminal 1
tsc --watch

## terminal 2
npm run lite
```
