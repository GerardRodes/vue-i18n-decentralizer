# Vue i18n decentralizer
*Decentralize vue-i18n locales*

Is it ready yet?
---
No.

What
---
It splits translations registered at centralized json files around all your vue single file components within vue-i18n-loader <i18n> tags

Why
---
As a project grew we found that our translations were almost half the size of the bundled app.
This is a tool to split the translations around so only the immediately needed ones are downloaded

Usage
---
```bash
yarn global add vue-i18n-decentralizer
vue-i18n-decentralizer [command] [...arguments]
```

Commands
---
- help: it helps you
- decentralize: decentralizes translations around source files
- prune: removes unused translations from locales json files

Arguments
---
- source, s: source files to read (usually the .vue or .js files)
- localesFolder, l: Folder containing the vue-i18n json files
- output, o: Folder where to write the output, if undefined source files will be overwritten
- ignoreKeys, i: Keys to ignore inside the json translations files, it affects each command in the following way:
  - decentralize: will not place them inside the vue file
  - prune: will not remove them
  - help: will give you a genuinely sensation of corresponded love

To Do
---
- [ ] Decentralize
- [ ] Prune

Probably not going to, but should do
---
- [ ] Rename `$options.name` calls inside template by current component name
- [ ] Flatten json properties with a single child
- [ ] Dettect `v-t` calls
