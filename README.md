# Next.js Static HTML Website

This is a starter kit for a [Next.js](https://nextjs.org/) static HTML website project.

## Getting Started

Here are some steps you may need to take when using this template for the first time:

1. Install [Docker](https://www.docker.com/products/docker-desktop) and [Visual Studio Code](https://code.visualstudio.com/Download).
1. Open the root folder of this repository in Visual Studio Code. Visual Studio Code will ask you to reopen folder in container. Say yes to this prompt.
1. For safety reasons, you need to explicitly activate this workspace's custom TypeScript settings.
   1. Open a TypeScript file such as `pages/index.tsx`.
   1. Open the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).
   1. Select the "TypeScript: Select TypeScript Version..." command.
   1. Select the "Use Workspace Version" option.

## Useful Operations

Following are the Node scripts that are useful in day-to-day development.

### `yarn dev`

Run this script to start the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the site by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### `yarn lint`

Run this script to use [ESLint](https://eslint.org/) to find code problems.

### `yarn format`

Run this script to use [Prettier](https://prettier.io/) to find formatting inconsistencies.

### `yarn test`

Run this script to use [Jest](https://jestjs.io/) to run automated tests.

### `yarn build`

Run this script to create an optimized production build of the website.

This script also invokes the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to generate treemap visualizations of bundle files. The visualizations can be viewed at `.next/analyze/client.html` and `.next/server/analyze/server.html`.

### `yarn export`

Run this script to export the Next.js application to static HTML, which can be run standalone without the need of a Node.js server.

The static files are put in the `out/` folder.

### `yarn clean`

The `build` and `export` scripts above creates files in the `.next/` and `out/` folders, respectively. Run this script to remove both these folders for a clean slate.

### `yarn pipeline`

This script runs a sequence of operations such as running tests, checking formatting, checking for code problems, and generating the static HTML website output.

This is a convenient script for any [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) server to run.

To anticipate failures on the server side, this script is also configured to run on the client side as a Git [`pre-push` hook](https://git-scm.com/docs/githooks#_pre_push).

## Guardrails

As you may have noticed from scripts like `test` and `lint`, this starter kit comes with many guardrails out of the box.

These guardrails are intended to detect and resolve issues early, so that you can stay focused and productive.

### Language Syntax

Your code will not run as intended if it violates TypeScript language specifications.

A list of TypeScript language syntax issues can be found [in the TypeScript repository](https://github.com/microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json). A friendlier list with code examples can be found [here](https://typescript.tv/error-ts/).

These issues are checked by the TypeScript compiler, which is implicitly executed by Next.js's [build](https://nextjs.org/docs/api-reference/cli#build) operation, which you can manually run via the `yarn build` script.

This check is automatically run as part of the Git `pre-push` hook. Git push operations are blocked if there are any language syntax issues.

Before getting to the point of any Git push operations, you will most likely be made aware of these issues already, because Visual Studio Code uses the TypeScript language service to underline them in the editor in real time.

### Code Quality

Certain problematic coding patterns can lead to defective code in the future. These problematic patterns can be identified by the static code analysis tool [ESLint](https://eslint.org/).

ESLint can be run manually via the `yarn lint` script. It is also run automatically as part of the Git `pre-push` hook. Any error or warning found by ESLint will block Git push operations.

The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integrates ESLint into Visual Studio Code to visually indicate issues in the editor.

This workspace also configures ESLint to automatically fix problematic coding patterns to the best of its abilities when you save a file. This setting can be changed in the `.vscode/settings.json` file.

### Documentation

Code written without proper documentation can lead to defects in the future if developers need to change the code but misunderstands its intentions.

Proper JavaScript documentation is defined by [JSDoc](https://jsdoc.app/) and enforced by ESLint through [plugin](https://github.com/gajus/eslint-plugin-jsdoc).

Similarly, proper TypeScript documentation is defined by [TSDoc](https://tsdoc.org/) and enforced by ESLint through [plugin](https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/).

Since enforcement is done by ESLint, see above for expected behaviors.

### Testing

Proper documentation helps to make code intentions clear, but does not check whether the code's actual behaviors matches the intentions. For this, a testing framework is needed.

The testing framework of this workspace is [Jest](https://jestjs.io/). Add and maintain tests in the `__tests__` folder.

Failed tests block Git push operations.

To run the tests manually, use the `yarn test` script.

To debug tests, open Visual Studio Code's [built-in debugger](https://code.visualstudio.com/Docs/editor/debugging), and launch the "Debug Tests" configuration.

### Formatting

Much productivity is lost when developers debate about styling and formatting issues. Therefore it is prudent to set clear guardrails upfront, to prevent distractions later.

ESLint includes some formatting checks. Since they are not comprehensive, these checks are disabled in favor of dedicated formatters.

Basic formatting is defined using [EditorConfig](https://editorconfig.org/). Formatting unsupported by EditorConfig is defined using [Prettier](https://prettier.io/).

Enforcement is done by Prettier, which enforces both EditorConfig properties and Prettier configurations. You can manually run Prettier checks via the `yarn format` script

Inconsistent formatting blocks Git push operations.

The [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension integrates Prettier into Visual Studio Code to visually indicate formatting inconsistencies in the editor.

This workspace also configures Prettier to automatically format files on save. This setting can be changed in the `.vscode/settings.json` file.

### Spelling

Misspellings create confusion and slow down development.

This workspace uses the [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension to check spelling. Misspellings are indicated in the editor.

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js Repository](https://github.com/vercel/next.js/) - look under the hood.
