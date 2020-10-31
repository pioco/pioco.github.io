# Pioco ry website

## Pre-requisites

- [Git](https://git-scm.com/)
- [Ruby](https://www.ruby-lang.org/)
- [Bundler](https://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Node.js](https://nodejs.org/en/)

## Development

Install ruby gems and npm dependecies

    bundle install
    npm install

Run the site locally

    bundle exec jekyll serve

Build the CSS styles

    npm run build

## Production

The site is hosted in [GitHub Pages](https://help.github.com/en/articles/setting-up-a-github-pages-site-with-jekyll). All the changes to `master` branch are automatically deployed to production.

Before deploying to the production (= pushing to `master` branch), remember to build the CSS styles with `npm run build`. Styles will be built to `assets/css/main.css`, which needs to be included in the repository.
