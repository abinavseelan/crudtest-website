# crudTest website

This repository houses the website for crudtest.com

## Contributing

Want to raise an issue or pull request? Do give our [Contributing page](https://github.com/abinavseelan/crudtest-api/blob/master/CONTRIBUTING.md) a read. 🤓

### Getting started

_Note: This has been developed on node 9.x. Please develop your feature and/or bugfix with a node version that is 9.0 and above_ 😄

1. Clone the repository
2. Run `npm install` to install all the dependencies
3. Run `npm run build` to start the development server.

### Development

The project uses gulp to serve the static pages and to compile the sass to css. Just run `npm run build` and the gulp server starts on port `8080`.

Any change will re-compile the sass and restart the server. Just refresh the site after a change to see the change in action!

⚠️ Don't edit `styles/style.css` directly. This file is generated by the gulp task. Make changes **only** to the `.scss` files.
