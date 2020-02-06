# WebdriverIO

WebdriveIO first project with basic code and BDD - cucumber implementation. Allure report also encorporated

## Getting Started

Clone the project from "https://github.com/nitinkumarsd/webdriverio.git" on local machine

### Prerequisites

1. Node.js installed
2. Editor(VScode, intellij etc) installed
3. Install NVM to assist managing multiple active Node.js version

```
npm init -y
```

### Project Set up

A step by step series of examples that tell you how to get a development env running
1. Clone the project as mentioned location to local
2. Open project folder in any editor(vs code)
3. Right clickon package.js and open it in terminal
4. Run below commands for installation and project setup 

Install WebdriverIO CLI

```
npm install webdriverio –save-dev
npm i --save-dev @wdio/cli

```


1. Run below command to download and setup cucumber dependencies
```
npm install @wdio/cucumber-framework --save-dev
```
In pakage.json -> devdependencies -> "@wdio/cucumber-framework": should exist with lates version
 
2. Run below command to download and setup Allure Report dependencies
```
npm install @wdio/allure-reporter --save-dev
```
In pakage.json -> devdependencies -> "allure-commandline": should exist with lates version



## Running the tests

1. Open gitbash in project location and run following command "npm run test" or
2. If using "VS code" editor, open terminal in prokect location and run command "npm run test"

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

A very basic coding style is used to prepare the solution

## Authors

* **Nitin Kumar** - *Initial work* 

