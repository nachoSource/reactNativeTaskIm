This project aims to work as an API that allows users to access a preview of Art Institute of Chicago events information and schedule/save events.

Consider the following:

- As the main framework, React Native (ts) has been chosen (https://reactnative.dev).
- For cleaner legibility, better dev-experience and project management, redux-saga has been chosen as the preferred
  variant of this tool for global state handling (https://redux-saga.js.org).
- For storage persistence, AsyncStorage is being used (https://www.npmjs.com/package/@react-native-async-storage/async-storage).
- For better UX, Animated is being used (https://reactnative.dev/docs/animated).
- For environment variables management, (https://www.npmjs.com/package/react-native-dotenv).
- Layout and UI design aimed to take after https://www.artic.edu UI design. However, any improvement about data
  presentation is welcome.
- For future upgrades, a series of improvements have been signaled with a `TODO` tag.
- In order to meet project deadline, the use of native modules is left to future improvements.

# Getting Started

> **Note**: Make sure you have completed
> the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native) instructions till "Creating a new
> application" step, before proceeding.

## Step 1: install dependencies

```bash
npm i
```

## Step 2: Start the Metro Server

Before installing your app, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the
following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your
  environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for
  React Native.
