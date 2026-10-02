# MigrationsDuplicateBug

MAIN BRANCH IS PRISTINE OF ANY MIGRATIONS

Example branch for before/after reference and testing: `signal-queries-migration`

Initial commits that added workspace/app/lib at that point in time: https://github.com/msmallest/migrations-duplicate-bug/commits/54314cf0deddb5838f6c8ce5b2a017b43d2960c1/

SEE [commands-ran.md](./commands-ran.md) to see how I handled migrations from workspace creation to app/lib creation to migrations.

For a bug: TODO - link to issue

I found that when running various migrations, there were issues like:

- Duplicated imports from related core Angular libraries.
- Duplicate lines added to classfields, like multiple `thing = viewChild(...);thing = viewChild(...);` etc

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.1.
