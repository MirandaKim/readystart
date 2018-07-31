const gulp = require('gulp');
const argv = require('yargs').argv;
const CleanSlate = require('../modules/CleanSlate.class');

gulp.task('bare', gulp.series((done) => {
  let timestamp = Date.now();
  let renameMedfix = '.' + timestamp;
  let cleanSlate = new CleanSlate(renameMedfix);
  let bareHtml = argv.html;
  let bareCss = argv.css;
  if(bareHtml || bareCss){
    cleanSlate_sendExecuteMessage_bare();
    cleanSlate.execute('bare', bareHtml, bareCss);
    cleanSlate_sendCompletionMessage_bare();
  }else{
    cleanSlate_sendSummaryMessage_bare();
  }
  done();
}));

function cleanSlate_sendExecuteMessage_bare(){
  console.log(`
    --------------------------------------
    -- The Clean-Slate -- Bare -- STARTING...
    --------------------------------------
    Please wait while files are being moved and copied...
   `);
}

function cleanSlate_sendCompletionMessage_bare(){
  console.log(`
    -----------------------------------------
    -- The Clean-Slate -- Bare -- COMPLETE --
    -----------------------------------------
    Check ~/.trashed for your original files if you ran this command by mistake.
   `);
}

function cleanSlate_sendSummaryMessage_bare(){
  console.log(`
    --------------------
    The Clean-Slate Bare
    --------------------
    The Clean-Slate Bare task is designed to swap out existing assets for bare-minimal templates.
    - To view the bare templates that will be used, look under the directory ~/gulp/clean-slate/templates
    - Existing files will be relocated to ~/.trashed
    --------
    Commands
    --------
    run task: gulp bare (this will give you this summary message)
    run task: gulp bare --html (this will swap out only html)
    run task: gulp bare --css (this will swap out only css)
    run task: gulp bare --html --css  (this will swap out both html and css)
    `);
}
