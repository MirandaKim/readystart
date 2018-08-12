const gulp = require('gulp');
const argv = require('yargs').argv;
const CleanSlate = require('../modules/CleanSlate.class');

gulp.task('full', gulp.series((done) => {
  let timestamp = Date.now();
  let renameMedfix = '.' + timestamp;
  let fullSlate = new CleanSlate(renameMedfix);
  let fullHtml = argv.html;
  let fullCss = argv.css;
  if(fullHtml || fullCss){
    cleanSlate_sendExecuteMessage_full();
    cleanSlate.execute('full', fullHtml, fullCss);
    cleanSlate_sendCompletionMessage_full();
  }else{
    cleanSlate_sendSummaryMessage_full();
  }
  done();
}));

function cleanSlate_sendSummaryMessage_full(){
  console.log(`
    --------------------
    The Clean-Slate Full
    --------------------
    The Clean-Slate Full task is designed to swap out existing source files for the initial site content (in case you wanted it for any reason).
    - To view the templates that will be used, look under the directory ~/gulp/clean-slate/templates
    - Existing files will be relocated to ~/.trashed
    --------
    Commands
    --------
    run task: gulp full (this will give you this summary message)
    run task: gulp full --html (this will swap out only html)
    run task: gulp full --css (this will swap out only css)
    run task: gulp full --html --css  (this will swap out both html and css)
    `);
}


function cleanSlate_sendExecuteMessage_full(){
  console.log(`
    ---------------------------------------
    -- The Clean-Slate -- Full -- STARTING...
    ---------------------------------------
    Please wait while files are being moved and copied...
   `);
}

function cleanSlate_sendCompletionMessage_full(){
  console.log(`
    ------------------------------------------
    -- The Clean-Slate -- Full -- COMPLETE --
    ------------------------------------------
    Check ~/.trashed for your original files if you ran this command by mistake.
   `);
}
