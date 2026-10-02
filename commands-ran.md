# Commands Ran

## Clean Workspace --> App --> Lib before migrations

[Initial commits for those at that point](https://github.com/msmallest/migrations-duplicate-bug/commits/54314cf0deddb5838f6c8ce5b2a017b43d2960c1/)

### Generate empty workspace

```bash
>16:39/myDirectory ~ $ ng new migrations-duplicate-bug --no-create-application
✔ Which AI tools should Angular integrate with? https://angular.dev/ai/develop-with-ai None
CREATE migrations-duplicate-bug/.prettierrc (161 bytes)
CREATE migrations-duplicate-bug/README.md (1475 bytes)
CREATE migrations-duplicate-bug/.editorconfig (314 bytes)
CREATE migrations-duplicate-bug/.gitignore (622 bytes)
CREATE migrations-duplicate-bug/angular.json (183 bytes)
CREATE migrations-duplicate-bug/package.json (719 bytes)
CREATE migrations-duplicate-bug/tsconfig.json (787 bytes)
CREATE migrations-duplicate-bug/.vscode/extensions.json (130 bytes)
CREATE migrations-duplicate-bug/.vscode/launch.json (470 bytes)
CREATE migrations-duplicate-bug/.vscode/tasks.json (978 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

### Generate Application

```bash
>16:41/myDirectory/migrations-duplicate-bug ~ $ ng g app app
✔ Which stylesheet system would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
CREATE projects/app/src/app/app.css (0 bytes)
CREATE projects/app/src/app/app.spec.ts (677 bytes)
CREATE projects/app/src/app/app.ts (286 bytes)
CREATE projects/app/src/app/app.html (20144 bytes)
CREATE projects/app/src/main.ts (222 bytes)
CREATE projects/app/src/app/app.config.ts (312 bytes)
CREATE projects/app/src/app/app.routes.ts (77 bytes)
CREATE projects/app/tsconfig.app.json (402 bytes)
CREATE projects/app/tsconfig.spec.json (413 bytes)
CREATE projects/app/public/favicon.ico (15086 bytes)
CREATE projects/app/src/index.html (289 bytes)
CREATE projects/app/src/styles.css (80 bytes)
UPDATE angular.json (1971 bytes)
UPDATE tsconfig.json (934 bytes)
UPDATE package.json (799 bytes)
✔ Packages installed successfully.
```

### Generate Library

```bash
>16:41/myDirectory/migrations-duplicate-bug ~ $ ng g lib lib
CREATE projects/lib/README.md (1423 bytes)
CREATE projects/lib/ng-package.json (152 bytes)
CREATE projects/lib/package.json (207 bytes)
CREATE projects/lib/tsconfig.lib.json (486 bytes)
CREATE projects/lib/tsconfig.lib.prod.json (401 bytes)
CREATE projects/lib/tsconfig.spec.json (449 bytes)
CREATE projects/lib/src/public-api.ts (64 bytes)
CREATE projects/lib/src/lib/lib.spec.ts (511 bytes)
CREATE projects/lib/src/lib/lib.ts (186 bytes)
UPDATE angular.json (2666 bytes)
UPDATE package.json (828 bytes)
UPDATE tsconfig.json (1125 bytes)
✔ Packages installed successfully.
```

## Schematic: Migration to signal queries

Added the following from the schematic doc example to both the root component of the library and application

```ts
  // plus imports
  @ContentChild('someRef') ref: ElementRef | undefined = undefined;
```

That was commited before schematic. Check out for easy running of schematic

### `ng generate @angular/core:signal-queries-migration`

```bash
>16:43/myDirectory/migrations-duplicate-bug ~ $ ng generate @angular/core:signal-queries-migration
✔ Which directory do you want to migrate? ./
✔ Do you want to migrate as much as possible, even if it may break your build? No
    Preparing analysis for: projects/app/tsconfig.app.json...
    Scanning for queries: projects/app/tsconfig.app.json...
    Preparing analysis for: projects/lib/tsconfig.lib.prod.json...
    Scanning for queries: projects/lib/tsconfig.lib.prod.json...
    Preparing analysis for: projects/lib/tsconfig.lib.json...
    Scanning for queries: projects/lib/tsconfig.lib.json...
    Preparing analysis for: projects/lib/tsconfig.spec.json...
    Scanning for queries: projects/lib/tsconfig.spec.json...

    Processing analysis data between targets...

    Running migration for: projects/app/tsconfig.app.json...
    Running migration for: projects/lib/tsconfig.lib.prod.json...
    Running migration for: projects/lib/tsconfig.lib.json...
    Running migration for: projects/lib/tsconfig.spec.json...

    Successfully migrated to signal queries 🎉

    Successfully migrated to signal queries 🎉
      -> Migrated 2/2 queries.
UPDATE projects/app/src/app/app.ts (322 bytes)
UPDATE projects/lib/src/lib/lib.ts (428 bytes)
WARNING: Formatting of files failed with the following error: Command failed: /Users/me/.nvm/versions/node/v22.22.3/bin/node /Users/me/myDirectory/migrations-duplicate-bug/node_modules/prettier/bin/prettier.cjs --write --no-error-on-unmatched-pattern --ignore-unknown projects/app/src/app/app.ts projects/lib/src/lib/lib.ts
[error] projects/lib/src/lib/lib.ts: SyntaxError: 'from' expected. (1:47)
[error] > 1 | import { Component, ElementRef, contentChild }{ Component, ElementRef, contentChild }{ Component, ElementRef, contentChild } from '@angular/core';
[error]     |                                               ^
[error]   2 |
[error]   3 | @Component({
[error]   4 |   imports: [],
```

See commit diff
