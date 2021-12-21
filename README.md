For easy run use this command in repo's root:

- `docker run --rm -it -p 3000:3000 -v $(pwd):/app -w /app node:16-alpine sh`
- `npm install` inside container

And then you could try to run project by:

 - `npx tsm src/index.ts`
 - `npx ts-node src/index.ts`
 - `npx tsc && node ./dist/index.js`
