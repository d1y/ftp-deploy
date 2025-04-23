# ftp-deploy

A Node.js package to help with deploying code. Ftp a folder from your local disk to a remote ftp destination. Does not delete from destination directory.

## Installation

```js
npm install --save-dev @patch_dev/ftp-deploy
```

And run

```bash
ftp-deploy --host example.com --user demo --password demo --localRoot ./dist/ --remoteRoot /web
```