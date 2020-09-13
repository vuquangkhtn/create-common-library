## **create-common-library**

CLI for creating reusable, modern common libraries using `create-react-library`, `react-styleguidist` or `storybook`.

The [create-common-library](https://www.npmjs.com/package/create-common-library) library exported as Nodejs module.

## **Installation**

Using `npm`:

```
npm i -g @vuquangkhtn/create-common-library
```

Using `yarn`:

```
yarn global add @vuquangkhtn/create-common-library
```

## **Usage**

**default**:

```
create-common-library
```

**specify options from the command line**:

```
create-common-library --name=newLibrary --template=storybook
```

## **Documentation**

## Name
The name expected for your common library

## Templates

**create-react-library**: the logic is based on [`create-react-library`](https://github.com/transitive-bullshit/create-react-library) 

**react-styleguildist**: the logic is based on [`react-styleguildist`](https://github.com/styleguidist/react-styleguidist)

**storybook**: the logic is based on [`storybook`](https://github.com/storybookjs/storybook)

## **Development**

## `create-react-library` and `react-styleguildist`

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
yarn install
yarn start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.


## `storybook`: 
Following the detailed `Storybook` document: https://storybook.js.org/

## **Example**

**Select template**

![Select template](/preview/select-template.PNG)

**Select project name**

![Select project name](/preview/select-project-name.PNG)
![Created successfully](/preview/created-successfully.PNG)

**Watch your library in `/src`**

![Watch you library](/preview/watch-your-library.PNG)
![library](/preview/library.PNG)