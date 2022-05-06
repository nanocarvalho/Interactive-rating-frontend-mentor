# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-rktrqgQU9)
- [Live site URL](https://interactive-rating-component-nano.pages.dev/)

## My process
I tend to get a little lost when I have a lot of information to look, so, in this challenge I separeted into small parts to tacle. In this one I started with the hole HTML, then the css and for the last, the javascript.

### Built with
- Mobile-first workflow
- Semantic HTML5 markup(for the most parts that I can understand how to use)
- CSS custom properties
- Flexbox
- Vanilla JS


### What I learned
I'd problems with the colors, the rating setup and the way that I can make the button stay pressed, so, a little googling and a good night of sleep, I managed to use a **ul** to build the rating system and found the **linear-gradient** and the **:focus** properties, that helped me with the style.
For the js part, I'd a little problem with the forEach(), but in the end managed to deal with it.

The rating system
```html
<ul id="options">
  <li><a href="#" class="btn-option">1</a></li>
</ul>
```
The little css that I had problems
```css
.star-rating-container {
    background: linear-gradient(to top, var(--Card-color-1), var(--Card-color-2));
}
.btn-option:focus {
    background-color: var(--Orange);
    color: var(--White);
}
```
Here the js that I had problem
```js
optionBtns.forEach(element => {
    element.onclick = function() {
        optionSelected = element.innerHTML
    }
})
```

## Author
- Website - [Nano Carvalho](https://nanocarvalho.github.io/)
- Twitter - [@nanocarvalho_](https://www.twitter.com/nanocarvalho_)
