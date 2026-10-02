# MigrationsDuplicateBug

## Problem / Fix

### Problem

Various migrations will apply more times than once, depending on the amount of `tsconfig.*.json` in a project beyond the root and the given lib/app.

This seems to be a reoccurence of this issue, but for other schematics like signal queries: [Signal migrations executing multiple times #61337](https://github.com/angular/angular/issues/61337)

My new issue: https://github.com/angular/angular/issues/71147

### "Fix"

The "fix" is to remove all `tsconfig.*.json` files that are not the root config for the workspace and not the one for the targeted application or library.
For example, if I wanted to run the migration on the library, I would remove all configs in the entire workspace except for `/tsconfig.json` and `/projects/lib/tsconfig.lib.json`.

## Using this project's git history for testing/reference

The main branch just sets up the workspace/app/lib using the CLI: at that point in time: https://github.com/msmallest/migrations-duplicate-bug/commits/54314cf0deddb5838f6c8ce5b2a017b43d2960c1/

SEE [commands-ran.md](./commands-ran.md) in this branch to see how I handled migrations from workspace creation to app/lib creation to migrations. And then that file in `signal-queries-migration` for how those ran the migration.

I found that when running various migrations, there were issues like:

- Duplicated imports from related core Angular libraries.
- Duplicate lines added to classfields, like multiple `thing = viewChild(...);thing = viewChild(...);` etc
- I could not reproduce it in this repro, but in a real repo, I had this happen during the `ngstyle-to-style` as well
- This did not happen in my real repo for the output migration or the service migration

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.1.
