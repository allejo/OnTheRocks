---
layout: page-wrapper
---

# ...yet Sass another grid library?

Yeup. Sorry about that. I know that both [Neat](http://neat.bourbon.io/) and [Susy](http://susy.oddbird.net/) exist and they are amazing but this Sass library exists to make a flexbox based grid system. There is a lot of articles out there as to why to use flexbox and why not to use flexbox so this library isn't here to persuade you start using flexboxes; this library assumes you like flexboxes and want to use it for page layout.

# Feels familiar

```scss
.row {
  @include make-container();

  .col-4 {
    @include make-columns(4);
  }

  .col-8 {
    @include make-columns(8);
  }
}
```