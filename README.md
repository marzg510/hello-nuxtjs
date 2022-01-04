# hello-nuxtjs

## Refer sites

- <https://reffect.co.jp/vue/nuxt-js-first-step>

## create project

### create-nuxt-app

```shell
$ mkdir nuxt-first
$ cd nuxt-first
$ npx create-nuxt-app

create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in .
? Project name: nuxt-first
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Bootstrap Vue
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git

...


Successfully created project nuxt-first

  To get started:

        npm run dev

  To build & start for production:

        npm run build
        npm run start

$ npm run dev
```

### nuxt-second

```shell
$ mkdir nuxt-second
$ cd nuxt-second
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (hello-nuxtjs) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: (https://github.com/marzg510/hello-nuxtjs.git) 
keywords: 
author: 
license: (ISC) 
About to write to /mnt/wd500/gotowork/workspace/hello-nuxtjs/package.json:

{
  "name": "hello-nuxtjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/marzg510/hello-nuxtjs.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/marzg510/hello-nuxtjs/issues"
  },
  "homepage": "https://github.com/marzg510/hello-nuxtjs#readme"
}


Is this OK? (yes) 
```

```bash
npm install --save nuxt
```

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

### vue-cli

```bash
$ cd ..
$ vue init nuxt-community/starter-template vue-cli

? Project name vue-cli
? Project description Nuxt.js project
? Author Masaru Gotou <masaru.gotou@gmail.com>

   vue-cli · Generated "vue-cli".

   To get started:
   
     cd vue-cli
     npm install # Or yarn
     npm run dev

$ cd vue-cli
$ npm install
$ npm run dev
```

## Run

### vue-cli

```bash
nuxt build # <- コマンド 'nuxt' が見つかりません。もしかして:

```
