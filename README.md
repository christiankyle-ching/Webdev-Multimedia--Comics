## Local Development Setup Instructions

### Prerequisites
- [NodeJS](https://nodejs.org/en/) (LTS Recommended)
- [VSCode](https://code.visualstudio.com/download) (if you want to edit code)
- Terminal (e.g. cmd, powershell)

### Steps
1. <a href="https://github.com/christiankyle-ching/Webdev-Multimedia--Comics/archive/main.zip" download>Download</a> this repository
2. Extract the ZIP file
3. Open the folder in VSCode
    - `Shift + Right-Click` inside the folder, then select `Open in Visual Studio Code`
    - Or, open a terminal inside the folder, then enter `code .`
4. Open the terminal inside VSCode with `ctrl + ~`
5. Run `npm start` (Make sure NodeJS is installed, which comes with NPM)
    - This can also be done using the default OS terminal
6. Open the local server link provided. Default: `localhost:1234`
7. Change code inside the `src` folder (such as HTMLs, CSSs, and Javascripts), and the browser should automatically reload to preview changes.

## Change Comics Pages / Images
To change the placeholder images, go to [src/assets/comics/](src/assets/comics/) in your local desktop, then replace the images provided. To ensure the order of images loaded is correct, rename the image filenames with ordered numbers (starting from 1).

## Suggest Changes
You can code changes to this repository. Basic knowledge of Git commands is required.
1. Before you start coding, DO NOT use the `Download ZIP` feature in Github. Run this in terminal instead:
    - `git clone https://github.com/christiankyle-ching/Webdev-Multimedia--Comics.git`
2. Create your own branch, with a name describing the feature you want to add.
    - `git checkout -b new-branch-name`
3. Once done, commit all staged changes, then push it to origin (this remote repository).
    - `git push -u origin new-branch-name`
4. Then, on github, Create a Pull Request on your branch.
5. Wait for your code changes to be merged to `main`.