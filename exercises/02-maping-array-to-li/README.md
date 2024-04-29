---
tutorial: "https://www.youtube.com/watch?v=wR18z-IngeA"
---

# `02` Mapping array to `<li>`

Now let's build an array dynamically...

Let's say you have an array of animals:

```js
const animals = [ 'Horse', 'Turtle', 'Elephant', 'Monkey' ];
```

## 📝 Instructions:

1. Update the code's [map() function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of `<li>`'s that corresponds to each animal from the original array, the resulting array should be something like this:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

2. Include them all together inside your website.

## 💻 Expected result:

![expected result of li's](../../.learn/assets/02-1.png?raw=true)

## 💡 Hint:

+ You can use the second parameter of the map function as a `key` to uniquely identify each HTML item.
