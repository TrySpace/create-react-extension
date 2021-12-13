'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

function copyPublicFolder(buildFolder) {
  fs.copySync(paths.appPublic, buildFolder, {
    dereference: true,
    filter: file =>
      file !== paths.appPopupHtml &&
      file !== paths.appOptionsHtml &&
      file !== paths.appNewTabHtml,
  });
}

module.exports = copyPublicFolder;
