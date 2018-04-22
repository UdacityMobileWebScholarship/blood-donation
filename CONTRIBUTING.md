# Contributor's Guide
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## Setup

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `~ ^3`  |
| [Node.js](http://nodejs.org)                | `~ ^8.9.3`  |
| npm (comes with Node)                       | `~ ^5`  |

> _Updating to the latest releases is recommended_.

If Node.js or MongoDB is already installed on your machine, run the following commands to validate the versions:

```shell
node -v
mongo --version
```

To check your MongoDB version on Windows, you have to locate the installation directory. It is probably located at something like `C:\Program Files\MongoDB\Server\3.4\` where 3.4 is your version number.

If your versions are lower than the prerequisite versions, you should update.

### Forking the Project

#### Setting Up Your System

1. Install [Git](https://git-scm.com/) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

#### Forking blood-donation

1. Go to the top level blood-donation repository: <https://github.com/UdacityMobileWebScholarship/blood-donation>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository (repo) has been forked, you will be taken to your copy of the blood-donation repo at <https://github.com/yourUsername/blood-donation>

#### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your projects directory (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of blood-donation

```shell
$ git clone https://github.com/yourUsername/blood-donation.git
```

**(make sure to replace `yourUsername` with your GitHub username)**

This will download the entire blood-donation repo to your projects directory.

#### Setup Your Upstream

1. Change directory to the new blood-donation directory (`cd blood-donation`)
2. Add a remote to the official blood-donation repo:

```shell
$ git remote add upstream https://github.com/UdacityMobileWebScholarship/blood-donation.git
```

Congratulations, you now have a local copy of the blood-donation repo!

#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### Rebasing from Upstream

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `dev` branch

```shell
$ git status
On branch dev
Your branch is up-to-date with 'origin/dev'.
```
If your aren't on `dev`, resolve outstanding files / commits and checkout the `dev` branch

```shell
$ git checkout dev
```

2. Do a pull with rebase against `upstream`

```shell
$ git pull --rebase upstream dev
```

This will pull down all of the changes to the official dev branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated dev branch to your GitHub fork

```shell
$ git push origin dev --force
```

This will overwrite the dev branch of your fork.

### Create a Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch. This will keep your dev branch clean.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where you fix something specific to email login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

**If you need more help with branching, take a look at [this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).**

### Set Up Linting

You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to our style rules (you can find a summary of those rules [here](https://github.com/UdacityMobileWebScholarship/blood-donation/blob/dev/.eslintrc)).

> Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base.

### Set Up blood-donation

Once you have blood-donation cloned, before you start the application, you first need to install all of the dependencies:

```bash
# Install NPM dependencies
npm install
```

Now you will need to start MongoDB, and then you can start the application:

```bash
# Start the mongo server in a separate terminal
# On OS X:
mongod

# If you are using Windows, you have to instead specify the full path to the mongod binary
# Make sure to replace 3.4 with the version you have installed
"C:\Program Files\MongoDB\Server\3.4\bin\mongod"

# MongoDB requires a data directory to store all data. MongoDB's default data directory path is the absolute path \data\db on the drive from which you start MongoDB. Create this folder by running the following command in a Command Prompt:
md \data\db

#You can specify an alternate path for data files using the --dbpath option to mongod.exe, for example:
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath d:\test\mongodb\data

# Start the application
npm run start
```

Now navigate to your browser and open <http://localhost:8000>. If the app loads, congratulations – you're all set.

Otherwise, let us know by asking in the [Slack channel](https://mobilewebindiascholar.slack.com). There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem.

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following:

```bash
# Remove all installed node modules
rm -rf node_modules

# Reinstall npm packages
npm install

# Re-start the application
npm run start
```

### Creating a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the blood-donation
repo (or any repo, for that matter). You will make changes to copies of the
files which make up blood-donation in a personal fork, then apply to have them
accepted by blood-donation proper.

#### Need Help?

Moderators are on hand to assist with Pull Request related issues in our [Slack channel](https://mobilewebindiascholar.slack.com).

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER**
make edits to the `dev` branch. ALWAYS make a new branch BEFORE you edit
files. This is critical, because if your PR is not accepted, your copy of
dev will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request for blood-donation:

-   Editing files on a local clone (recommended)
-   Editing files via the GitHub Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local
Instance of blood-donation](#maintaining-your-fork).

1.  Perform the maintenance step of rebasing `dev`.
2.  Ensure you are on the `dev` branch using `git status`:

        $ git status
        On branch dev
        Your branch is up-to-date with 'origin/dev'.

        nothing to commit, working directory clean

3.  If you are not on dev or your working directory is not clean, resolve
    any outstanding files/commits and checkout dev `git checkout dev`

4.  Create a branch off of `dev` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `fix/short-fix-description` or `feature/short-feature-description`.

5.  Edit your file(s) locally with the editor of your choice.

6.  Check your `git status` to see unstaged files.

7.  Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

8.  [Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

9.  If you would want to add/remove changes to previous commit, add the files as in Step 5 earlier,
    and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

9.  Push your commits to your GitHub Fork: `git push origin branch/name-here`

10.  Go to [Common Steps](#common-steps)

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not
possible to update your fork via GitHub's interface without deleting and
recreating your fork.

### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the blood-donation main repo, `dev`
    branch.
    **Make sure that your Base Fork is set to UdacityMobileWebScholarship/blood-donation when raising a Pull Request.**

    <img border="0" src="https://3.bp.blogspot.com/-rrB3gPfu8_Y/WtdqtMRf7cI/AAAAAAAAA4g/CEZYbw2oZGQzhHC9Mklyp63vErhZ5ZqeQCLcBGAs/s640/fork.png" width="640" height="91" data-original-width="992" data-original-height="141" />

3.  Submit a pull request from your branch to blood-donation's `dev` branch.

4.  The title (also called the subject) of your PR should be descriptive of your
    changes and succinctly indicates what is being fixed.

    -   **Do not add the issue number in the PR title or commit message.**

    -   Examples: `Add Test Cases to Bonfire Drop It` `Correct typo in Waypoint
        Size Your Images`

5.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #1337`. This tells GitHub to
        close the existing issue, if the PR is merged.

6.  Indicate if you have tested on a local copy of the site or not.

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## License
By contributing, you agree that your contributions will be licensed under its MIT License.
