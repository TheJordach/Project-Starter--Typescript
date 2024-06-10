

# Typescript Project Starter 🚀

## 1- First create package.json

```sh
 npm init
 
```
### 1-1 create project directory structure
```sh
 mkdir public
 mkdir src
```
* then >  create public/index.html
* then >  create src/index.ts
Content of index.ts 
```sh
console.log("Hello World 🚀");
console.log("If you can read this on your terminal your project is up and running 🤘");
```

### 1-2 create tsconfig.json
```sh
npm install --save-dev typescript @types/node -D
```
```sh
npx tsc --init
```
```sh
npm install --save-dev ts-node
```
### then > update tsconfig.json : target : "es6" | module : "es2015"

## 1-3 Install Dependencies
#### Install Babel
```sh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript babel-loader @babel/plugin-transform-runtime @babel/runtime 
```
#### Configure Babel to use the TypeScript preset:
Create a .babelrc file in the root of your project if you don't have one, and add the following content to

```sh
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```

#### Install ESLint
```sh
npm install --save-dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
```sh
npm fund
```
#### Configure ESLint create .eslintrc.json file

```sh
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "standard"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": ["warn"]
  }
}
```

### update package.json
```sh
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "release": "webpack --mode production",
    "build": "webpack --mode development",
    "build:dev": "webpack --mode development",
    "run": "ts-node script.ts",
    "lint": "eslint 'src/**/*.{js,ts}'",
    "type-check": "tsc --noEmit"
  },

```


### Install Webpack

```sh
 npm install webpack webpack-cli ts-loader -D
 ```
 ```sh
 npm update
 ```
 ```sh
 npm fund
```

#### Configure Webpack create webpack.config.js

```sh 
const path = require('path');

module.exports ={
    mode: 'development', // Change to 'production' for production builds
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/public")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "babel-loader",  //updated to babel loader
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },


}
``` 

## Testing Framework: 
##### Integrate a testing framework like Jest for unit tests:

```sh
npm install jest ts-jest @types/jest -D
```
```sh
 npm fund
```
#### Then Configure Jest by adding jest.config.ts:
```sh
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"]
};
```
##### Then add a test script to your package.json:

```sh
"scripts": {
    "test": "jest",
    ...
}
```

#### IMPORTANT
At this stage you should 
```sh
npm run build
```
To make your everything is OK 


## Clean-webpack-plugin
##### Clean Plugin: Use clean-webpack-plugin to clean the public directory before each build:

```sh
npm install clean-webpack-plugin -D
```
```sh
 npm fund
```
> You can add the devtool: 'source-map' configuration directly in your webpack.config.js file. 
This enables the generation of source maps, which helps in debugging by mapping the bundled code back to the original TypeScript code.Here's the updated webpack.config.js file with the devtool option added:

```sh
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: "./src/index.ts", // Change to your main file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/public")
    },
    devtool: 'source-map', // Enable source maps for better debugging
    module: {
        rules: [
            {
                test: /\.ts$/,  // Apply to both .ts and .tsx files
                use: "babel-loader", // move from ts-loader to babel-loader when babel is installed
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin() // Clean the output directory before each build
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};

```

#### IMPORTANT
At this stage you should 
```sh
npm run build
```
To make your everything is OK 



## Additional Suggestions
##### Prettier Integration: Consider integrating Prettier for code formatting.

```sh
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
```sh
 npm fund
```
##### 7-1 Then Update .eslintrc.json:
```sh
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "standard"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": ["warn"]
  }
}
```

### 8- Husky and Lint-Staged: For pre-commit hooks to ensure code quality.
* Install Husky and Lint-Staged using npm.
* Initialize Husky to set up Git hooks.
* Configure Husky to run Lint-Staged on pre-commit.
* Configure Lint-Staged to specify which linters to run on which files.
* Update package.json to include these configurations.


```sh
npm install --save-dev husky lint-staged
```
##### Initialize Husky:
Husky requires an initial setup to create the necessary Git hooks:
```sh
npx husky init
```

#### make sure script to your package.json is automatically set after Husky after installing dependencies:
```sh
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

#### Configure Husky: make sure a directory named .husky in the root of your project, and a Git hook script. For example, pre-commit hook is added inside

### Configure Lint-Staged:
Add a lint-staged section to your package.json to specify which linters to run on which files. Here’s an example configuration:
```sh
{
  "lint-staged": {
    "*.ts": "eslint --fix",
    "*.js": "eslint --fix",
    "*.css": "stylelint --fix",
    "*.md": "markdownlint --fix"
  }
}
```
#### Alternatively, you can create a separate lint-staged.config.js file:
```sh
// lint-staged.config.js
module.exports = {
  '*.ts': 'eslint --fix',
  '*.js': 'eslint --fix',
  '*.css': 'stylelint --fix',
  '*.md': 'markdownlint --fix'
};
```

### Example package.json Configuration:
Here’s how your package.json might look after adding Husky and Lint-Staged configurations:
```sh
{
  "name": "your-project",
  "version": "1.0.0",
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint 'src/**/*.{js,ts}'",
    "lint:fix": "eslint --fix 'src/**/*.{js,ts}'"
  },
  "devDependencies": {
    "husky": "^7.0.0",
    "lint-staged": "^10.0.0",
    "eslint": "^7.0.0",
    "stylelint": "^13.0.0",
    "markdownlint": "^0.23.1"
  },
  "lint-staged": {
    "*.ts": "eslint --fix",
    "*.js": "eslint --fix",
    "*.css": "stylelint --fix",
    "*.md": "markdownlint --fix"
  }
}
```

## Final steps 
* Create a folder __test__ in the root dir
* Create "index.test.ts" inside  __test__ then put inside 
```sh
describe('Console Log Test', () => {
    it('should log "Hello World 🚀"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        require('../src/index'); // Adjust the path to your actual file
        expect(consoleSpy).toHaveBeenCalledWith('Hello World 🚀');
        expect(consoleSpy).toHaveBeenCalledWith('If you can read this on your terminal your project is up and running 🤘');
        consoleSpy.mockRestore();
    });
});
```

* Create .gitattributes file for line ending normalization: 
```sh
 text=auto
```

#### Ready for the last show 🚀
run this one by one
```sh
npm run build
```
```sh
npm run release
```
```sh
node ./src/index.ts
```
Final test 
```sh
git add .
```

```sh
git commit -m "commit and relax"
```
