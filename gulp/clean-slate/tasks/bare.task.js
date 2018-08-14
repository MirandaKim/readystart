const gulp = require('gulp');
const argv = require('yargs').argv;
const CleanSlate = require('../modules/CleanSlate.class');
const CleanSlateMessages = require('../modules/CleanSlateMessages.class');

/****************************************************/
/*                                                 */
/*   Clean-Slate Bare Task (bare.task.js)         */
/*                                               */
/************************************************/
/*

  - Swap out existing source files for the bare version.
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

let taskName = 'bare';
gulp.task(taskName, gulp.series((done) => {
  let timestamp = Date.now();
  let renameMedfix = '.' + timestamp;
  let cleanSlate = new CleanSlate(renameMedfix);
  let bareHtml = argv.html;
  let bareCss = argv.css;
  let csMsgs = new CleanSlateMessages(taskName);
  /**
  If either html or css was flagged to be swapped out, enter the process.
  Else, log a summary of the task.
  **/
  if(bareHtml || bareCss){
    cleanSlate_sendExecuteMessage_bare();
    csMsgs.logExecuteMessage(); // log console message before execute
    cleanSlate.execute(taskName, bareHtml, bareCss);
    csMsgs.logCompletionMessage(); // log console message now that task is complete
  }else{
    csMsgs.logSummaryMessage(); // log a summary of what this task is supposed to do
  }
  done(); // let everyone know you're done
}));
