# deborahsteele.info


# Development

## Requirements
- [git](https://git-scm.com/) - make sure your Privacy & Security settings allow to download applications from anywhere
- [SSH key associated with GitHub](https://help.github.com/articles/generating-an-ssh-key/)
- [node.js](https://nodejs.org) &mdash; Stable: See [Release schedule](https://github.com/nodejs/LTS#lts_schedule)
- Text editor (https://atom.io/ or https://www.sublimetext.com/ for example) set with _soft_ tabs (spaces).

## Installation
Clone the repository to your local machine (and remember where it's saved :)), using your favorite git client or the command line:
```bash
git clone https://github.com/debsteele/deborahsteele.info
cd deborahsteele.info
npm install
```

## Run Locally
```bash
npm start
```

## Run and host locally
```bash
npm run dev
```

### Change browser
The broswer defaults to `chromium-browser` but can be changed with the following command and then locally as usual.
```bash
npm config set Nuxeo-website:browser firefox
```