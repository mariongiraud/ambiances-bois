# Best Practices for Front-End Development

### Pre-requisites:
* Make sure that [Middleman][Middleman] is installed on your machine.
* Make sure that you are running Ruby.
* Make sure that you have Google Chrome downloaded. We use Chrome's Web
  Inspector during development.

### Getting Started:
Set up your project in your code directory.

```
git clone git@github.com:craftsmen/scss-workshop.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-git-url
```

Install dependencies:

```
bundle install
```

Run the server

```
middleman
```

Deploy to Github Pages

```
middleman deploy
```

### Resources:
* [Neat][Neat]
* [Bourbon][Bourbon]
* [Bitters][Bitters]

### Expectations: After taking this workshop, students will know how to:

* Organize their stylesheets in a clean and efficient manner.
* Use the [Neat][Neat] grid framework to set the grid, lay out the composition of
  a website, and create a flexible and responsive grid. This also means
  understanding the basic 'box layout' structure and looking at both the 'bigger
  picture' and the smaller details at once.
* Use the [Bourbon][Bourbon] mixin library for greater efficiency in styling.
* Create their own mixins and extends to create a clean and modular stylesheet.
* Mark-up a website using semantic HTML5.
* Understand how to install gems (e.g. FontAwesome) and open-source libraries to
  build their toolkit and take advantage of using quality, already-made parts.

[Neat]: https://github.com/thoughtbot/neat "Neat"
[Bourbon]: https://github.com/thoughtbot/bourbon "Bourbon"
[Bitters]: https://github.com/thoughtbot/bitters "Bitters"
[Middleman]: http://middlemanapp.com/ "Middleman"
