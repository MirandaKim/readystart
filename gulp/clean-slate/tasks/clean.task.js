const gulp = require('gulp');
const argv = require('yargs').argv;
const CleanSlate = require('../modules/CleanSlate.class');

/****************************************************/
/*                                                 */
/*   Clean-Slate Clean Task (clean.task.js)       */
/*                                               */
/************************************************/
/*

  - Swap out existing source files for the clean version.
  - This task primarily accesses the clean-slate module
    See module for more details (~/gulp/clean-slate/modules/CleanSlate.class.js)
  - Also refer to ~/gulp/clean-slate/README.md for more details.


  *************
  * Contents: *
  *************

  # Task

*/

/**************************************/
/*   # Task                          */
/************************************/
let taskName = 'clean';
gulp.task(taskName, gulp.series((done) => {
  let timestamp = Date.now();
  let renameMedfix = '.' + timestamp;
  let cleanSlate = new CleanSlate(renameMedfix);
  let cleanHtml = argv.html;
  let cleanCss = argv.css;
  let csMsgs = new CleanSlateMessages(taskName);
  /**
  If either html or css was flagged to be swapped out, enter the process.
  Else, log a summary of the task.
  **/
  if(cleanHtml || cleanCss){
    let cleanSlate = new CleanSlate(renameMedfix);
    csMsgs.logExecuteMessage(); // log console message before execute
    cleanSlate.execute(taskName, fullHtml, fullCss);
    csMsgs.logCompletionMessage(); // log console message now that task is complete
  }else{
    csMsgs.logSummaryMessage(); // log a summary of what this task is supposed to do
  }
  done();
}));
