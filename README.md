# OnTheRocks

OnTheRocks is yet another [SASS](http://sass-lang.com/) grid framework. Unlike Neat and Susy, OnTheRocks is entirely flexbox based to create a grid; whether you agree that flexboxes are good or not for page layouts, the framework is available.

This framework was originally created for the [BZiON](https://github.com/allejo/bzion) project as an experiment in using flexboxes to create a page layout and take advantage of all of flexbox's features such as reordering columns.

## Requirements

* Any modern browser and IE 10+

## Usage

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

## License

[MIT](https://github.com/allejo/OnTheRocks/blob/master/LICENSE.md)