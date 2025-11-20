# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing node
This project requires node and npm to run.
If you don't have these on the target machine, I'd recommend using [nvm-windows](https://github.com/coreybutler/nvm-windows), which has a windows installer. Click [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe) to download installer.

If you don't want to download nvm, I used node v20.0.0 and npm v9.6.4 to execute the remaining commands.

If you download/install nvm, simply execute these commands in a (new) command prompt (running as administrator).

Verify nvm was installed properly:
`nvm -v`

Install node v20.0.0 and npm v9.6.4:
`nvm install 20.0.0`

`nvm use 20.0.0`

Verify the installs are correct:
`node -v`

`npm -v`

## Setting up .npmrc for Flowable Arifactory
Next, we need to make sure that your Flowable credentials are used and npm uses Flowbable Artifactory for the npm registry.

Navigate to [Flowable Artifactory](https://artifacts.flowable.com/ui/repos/tree/General/npm-all) and use your flowable credentials.

Once logged in, make sure you are on the "npm-all" artifact root and click the "Set Me Up" button on the top right:
<img width="1343" alt="image" src="https://github.com/abretz-mimacom/flowable-forms-react-example/assets/133235099/75adc154-1cfc-443b-ac7a-1b11a643a5eb">

Then, click "Generate Token and Create Instructions:
<img width="663" alt="image" src="https://github.com/abretz-mimacom/flowable-forms-react-example/assets/133235099/0cd0ea7c-967a-4cb9-9c62-3c12516b3947">

Follow ALL instructions provided.

By the end, you should have made edits to the .npmrc file, which will allow you to authenticate to the Flowable Artifactory when running npm commands. Without this, you will get 403 errors when trying to install the Flowable Forms packages.

## Clone this repo
Clone this repo. 

If you need to install git on your local machine, see [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

You will need to add an ssh public key to your GitHub account settings in order to us git over ssh (most secure, and required for pushing changes).

Using Git GUI for Windows:
Select "Clone an existing repository"
<img width="440" alt="image" src="https://github.com/abretz-mimacom/flowable-forms-react-example/assets/133235099/00f726c5-5ee7-4dba-97df-eba0835d3691">

Copy the ssh clone path. ex, `git@github.com:abretz-mimacom/flowable-forms-react-example.git`

Place the copied text in the the Source Location:
<img width="614" alt="image" src="https://github.com/abretz-mimacom/flowable-forms-react-example/assets/133235099/87089413-e757-47de-9456-a2270fafbdda">

Choose a destination folder on your local machine.

Click "Clone"
<img width="612" alt="image" src="https://github.com/abretz-mimacom/flowable-forms-react-example/assets/133235099/99be7eaf-cb8b-4097-a8db-f199ed081ea1">



## Install the node_modules
In the command prompt, navigate to the directory this repo was cloned to.
`cd <path to where this was cloned>`

`npm install`

## Start the project

`npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
