# React.js Koans #

If you want to learn React.js you came to the right place. We've prepared a set of practical exercises that will help you learn React.js from square one. The only thing you need to know is modern JavaScript.

Koans are a set of tasks to complete. Prepared tests checks if they are done correctly. Your goal is to fill in the source code to pass all the tests.

_This is a fork of [https://github.com/arkency/reactjs_koans.git](https://github.com/arkency/reactjs_koans.git) updated for 2018, with React 16, webpack 4, and babel 7._

## Installing Node.JS ##

You'll need Node.JS to do this koans. You can skip this step if you already have Node.JS installed.

The simplest way to keep up with Node.JS versions is through a tool called [Node Version Manager, or nvm](https://github.com/creationix/nvm). Installing and using `nvm` is easy:

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

In the URL used in the first command above, `v0.33.11` may be outdated. Check out [Github](https://github.com/creationix/nvm) for the latest installation instructions. This same command will also update an existing nvm installation.

Close and reopen the terminal. Running `command -v nvm` should cause the terminal to output `nvm`, verifying the installation was successful. Now we can install the latest Long Term Support (LTS) release of Node.JS and `npm`:

``` bash
$ nvm install lts/carbon
v8.11.1 is already installed.
Now using node v8.9.1 (npm v6.0.0)
$ nvm alias default lts/carbon
default -> lts/carbon (-> v8.11.1)
$ which node
/home/lrp/.nvm/versions/node/v8.11.1/bin/node
$ which npm
/home/lrp/.nvm/versions/node/v8.11.1/bin/npm
$ npm -g i npm
+ npm@6.0.0
added 244 packages, removed 40 packages and updated 121 packages in 6.085s
```

It's a good idea to update to the latest LTS and set it as the default every now and then using the commands above.

## Project Setup ##

Clone the project, install the dependencies, and copy the koans to a local exercises directory by issuing the following commands:

``` bash
$ git clone https://github.com/larryprice/reactjs_koans.git
$ cd reactjs_koans
$ npm run setup
```

## Koans structure ##

* Edit the files found in the **`exercises`** directory.
* The `koans` directory contains the source of all the exercises. `__tests__` contains the tests.
* `build` contains some extra files to display the Koans in your browser

## Start a local web server ##

It is recommended that you run a web server and see your changes live in your web browser:

1. Run command `npm run start`
1. Visit [http://localhost:3000/](http://localhost:3000/) in a web browser

## Instructions ##

1. Remember to run the setup script before you start working on the Koans
1. Edit the code found in the `exercises` directory, starting with `01-HelloWorld` and moving on sequentially
1. Try to not peek at the test files! They contain spoilers
1. To run the tests, use `npm run test`. Alternatively, you can automatically run tests when your code changes using `npm run watch`

## TODO ##

This branch is a work in progress. Here are some TODO items:

- [x] Update the packages
- [x] Web server working
- [x] Update tests
- [ ] Modify tests to show clearer error messages
- [x] Modify tests to fail earlier
- [x] Make tests run in order
- [x] Add a koan for `getDerivedStateFromProps`
- [x] Clean up comments in koans
- [x] Update README
