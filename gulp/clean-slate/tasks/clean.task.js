const gulp = require('gulp');
const argv = require('yargs').argv;
const CleanSlate = require('../modules/CleanSlate.class');

gulp.task('clean', gulp.series((done) => {
  let timestamp = Date.now();
  let renameMedfix = '.' + timestamp;
  let cleanSlate = new CleanSlate(renameMedfix);
  let cleanHtml = argv.html;
  let cleanCss = argv.css;
  if(cleanHtml || cleanCss){
    cleanSlate_sendExecuteMessage_clean();
    cleanSlate.execute('clean', cleanHtml, cleanCss);
    cleanSlate_sendCompletionMessage_clean();
  }else{
    cleanSlate_sendSummaryMessage_clean();
  }
  done();
}));

function cleanSlate_sendSummaryMessage_clean(){
  console.log(`
    --------------------
    The Clean-Slate Clean
    --------------------
    The Clean-Slate Clean task is designed to swap out existing source files for clean templates.
    - To view the clean templates that will be used, look under the directory ~/gulp/clean-slate/templates
    - Existing files will be relocated to ~/.trashed
    --------
    Commands
    --------
    run task: gulp clean (this will give you this summary message)
    run task: gulp clean --html (this will swap out only html)
    run task: gulp clean --css (this will swap out only css)
    run task: gulp clean --html --css  (this will swap out both html and css)
    `);
}


function cleanSlate_sendExecuteMessage_clean(){
  console.log(`
    ---------------------------------------
    -- The Clean-Slate -- Clean -- STARTING...
    ---------------------------------------
    Please wait while files are being moved and copied...
   `);
}

function cleanSlate_sendCompletionMessage_clean(){
  console.log(`
    ------------------------------------------
    -- The Clean-Slate -- Clean -- COMPLETE --
    ------------------------------------------
    Check ~/.trashed for your original files if you ran this command by mistake.
   `);
}
