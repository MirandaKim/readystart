const gulp = require('gulp');
require('./tasks/bare.task');
require('./tasks/clean.task');
require('./tasks/full.task');

/****************************************************/
/*                                                 */
/*   Index of Clean-Slate Tasks (index.tasks.js)  */
/*                                               */
/************************************************/
/*
  - Import all clean-slate tasks into this file
  - For more information on the clean-slate tasks, see ~/gulp/clean-slate/README.md
  - This file should be imported into gulpfile.js, unless the clean-slate tasks have been deactivated,
    in which case the import statement for this file in gulpfile.js should be deleted or commented out.
  - Keep import statements above this file header.
  - No content is required beyond this point.

*/
