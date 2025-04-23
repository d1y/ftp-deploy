#!/usr/bin/env node

const args = require('args')
const FtpDeploy = require('./ftp-deploy')

args
  .option('host', 'ftp host')
  .option('port', 'ftp port', 21)
  .option('user', 'ftp user')
  .option('password', 'ftp password')
  .option('localRoot', 'ftp path', '.')
  // .option('include', 'include files', '*,**/*')
  .option('deleteRemote', 'delete remote files', true)
  .option('remoteRoot', 'remote path')
  .option('sftp', 'use sftp', false)
 
const flags = args.parse(process.argv)

;(new FtpDeploy()).deploy({
  user: flags.user,
  password: flags.password,
  host: flags.host,
  port: flags.port,
  localRoot: flags.localRoot,
  // TODO: use option
  include: ["*", "**/*"],
  remoteRoot: flags.remoteRoot,
  deleteRemote: flags.deleteRemote,
  sftp: flags.sftp
}).then(()=> {
  console.log("deploy complete")
}).catch(err=> {
  console.error(err)
})