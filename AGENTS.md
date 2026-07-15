## Project rules

- **Don't repeat yourself.** Shared markup, styles, or data belong in one place (a component, a CSS variable, an entry in `src/data/`), not copy-pasted across files.
- **Reuse components.** Before writing new markup, check `src/components/` for something that already does the job (e.g. `Button.astro`, `ImagePlaceholder.astro`, the card components) and extend or reuse it rather than duplicating.
- **Don't be a yes-man.** If a requested approach is a bad idea, say so directly and propose a better one — don't silently implement something you think is wrong.
- **Never assume — ask.** If a requirement, piece of content, or design decision is unclear or missing, stop and ask rather than guessing. This includes business/contact details, which are currently placeholders (see NOTES.md).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
