# Lord of the Rings - browser adapation

[lordoftherings.bradwoods.io](https://lordoftherings.bradwoods.io/)

[Details](https://garden.bradwoods.io/notes/creative/browser-adaptation)

## Quick start

```
npm install && npm run dev
```

## Dev notes

### Layers

The page is made up of layers stacked on top of each other.
To make things easier to understand, directories containing layer content are prefixed with a number showing the stacking order.
For example: `_2_paperLayer` is on top of `_1_mapLayer`, `_3_timelineLayer` is on top of `_2_paperLayer`, ...
