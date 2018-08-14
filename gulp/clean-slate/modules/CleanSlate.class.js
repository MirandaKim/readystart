const fs = require('fs-extra');

/****************************************************/
/*                                                 */
/*   Clean-Slate (CleanSlate.class.js)            */
/*                                               */
/************************************************/
/*

  - Swap out existing source files for clean templates
  - This functionality is for both html and css assets.
  - Public Access: Execute
    Execute expects a template type ('bare', 'clean', or 'full') that determines which templates will be copied into the source directory.
    It also expects booleans for html and css to determine which (or both) will be swapped out.
  - On execute, the original files will be moved to a trash directory
    and the selected template files will be copied into their place.
  - See the list of variables within the contructor function for the expected location of the original files,
    the location of the template files/directories, and other settings.

  *************
  * Contents: *
  *************

  # Constructor
    > Time Stamp
    > General Paths
    > HTML Paths
    > CSS Paths

  # Public
    > Execute

  # Protected
    > Run Clean Slate
    > Move Originals
    > Copy HTML Templates
    > Copy CSS Templates
    > File Utils
    > Error Message

  # Export

*/

class CleanSlate {

  /**************************************/
  /*   # Constructor                   */
  /************************************/
  constructor(midfix = '') {

    /******************
    *  > Time Stamp   *
    ******************/

    this._timestamp = Date.now(); // The timestamp at the contruction of this object

    /*********************
    *  > General Paths   *
    *********************/
    this._templatesDir = 'gulp/clean-slate/templates';// Where the templates are located
    this._trashDir = '.trashed';// Where the original files will be renamed to
    this._srcDir = 'src'; //Where the source files are located
    // this._srcDir = '.test'; //currently set to test directory to avoid accidental override while testing

    /******************
    *  > HTML Paths   *
    ******************/
    this._htmlFile = this._srcDir + '/index.html';
    this._htmlTemplateClean = this._templatesDir + '/html/index--clean.html';
    this._htmlTemplateBare = this._templatesDir + '/html/index--bare.html';
    this._htmlTemplateFull = this._templatesDir + '/html/index--full.html';
    this._htmlTrashDest = `${this._trashDir}/index${midfix}.html`;

    /*********************
    *  > CSS Paths   *
    *********************/
    this._cssDir = this._srcDir + '/assets/styles';
    this._cssTemplateClean = this._templatesDir + '/styles/styles--clean';
    this._cssTemplateBare = this._templatesDir + '/styles/styles--bare';
    this._cssTemplateFull = this._templatesDir + '/styles/styles--full';
    this._cssTrashDest = `${this._trashDir}/styles-${this._timestamp}`;
  }

  /**************************************/
  /*   # Public                        */
  /************************************/

  /***************
  *  > Execute   *
  ***************/

  /*
  EXECTUE
  Move original css and html src files into a trash directory
  and replace them with premade template/quick-start files/directories.

  type(string) -> either 'bare', 'clean', or 'full' to determine which templates should be copied into the source directory
  cleanHtml(boolean) -> if true, the original html will be swapped out for the template version. Else, ignored.
  cleanCss(boolean) -> if true, the original css will be swapped out for the template version. Else, ignored.
  */
  execute(type, cleanHtml=false, cleanCss=false) {
    try{
      this._runCleanSlate(type, cleanHtml, cleanCss);
    }catch(error){
      this._completionErrorMsg(error);
    }

  }

  /**************************************/
  /*   # Protected                     */
  /************************************/

  /***********************
  *  > Run Clean Slate   *
  ***********************/

  _runCleanSlate(type, cleanHtml, cleanCss) {
    if(cleanHtml) {
      this._moveOrigHtml();
      this._copyHtmlTemplate(type);
    }
    if(cleanCss) {
      this._moveOrigCss();
      this._copyCssTemplate(type);
    }
  }

  /**********************
  *  > Move Originals   *
  **********************/

  _moveOrigHtml() {
    console.log(`MOVE ORIGINAL HTML REACHED`);
    this._renameFile(this._htmlFile, this._htmlTrashDest);
  }

  _moveOrigCss () {
    console.log(`MOVE ORIGINAL CSS REACHED`);
    this._renameFile(this._cssDir, this._cssTrashDest);
  }


  /***************************
  *  > Copy HTML Templates   *
  ***************************/

  _copyHtmlTemplate(type) {
    switch(type) {
      case 'bare':
        this._copyHtmlTemplate_bare();
      break;
      case 'clean':
        this._copyHtmlTemplate_clean();
      break;
      case 'full':
        this._copyHtmlTemplate_full();
      break;
      default:
        console.log('Clean Slate: No HTML template option was selected. No HTML templates were moved into the desired directory.');
      break;
    }
  }

  _copyHtmlTemplate_bare() {
    console.log('COPY HTML TEMPLATE REACHED (BARE)');
    this._copyFileSync(this._htmlTemplateBare, this._htmlFile);
  }

  _copyHtmlTemplate_clean (){
    console.log('COPY HTML TEMPLATE REACHED (CLEAN)');
    this._copyFileSync(this._htmlTemplateClean, this._htmlFile);
  }

  _copyHtmlTemplate_full (){
    console.log('COPY HTML TEMPLATE REACHED (Full)');
    this._copyFileSync(this._htmlTemplateFull, this._htmlFile);
  }


  /**************************
  *  > Copy CSS Templates   *
  **************************/

  _copyCssTemplate (type){
    switch(type) {
      case 'bare':
        this._copyCssTemplate_bare();
      break;
      case 'clean':
        this._copyCssTemplate_clean();
      break;
      case 'full':
        this._copyCssTemplate_full();
      break;
      default:
        console.log('Clean Slate: No CSS template option was selected. No CSS templates were moved into the desired directory.');
      break;
    }
  }

  _copyCssTemplate_bare() {
    console.log('COPY CSS TEMPLATE REACHED (BARE)');
    this._copyFileSync(this._cssTemplateBare, this._cssDir);
  }

  _copyCssTemplate_clean() {
    console.log('COPY CSS TEMPLATE REACHED (CLEAN)');
    this._copyFileSync(this._cssTemplateClean, this._cssDir);
  }

  _copyCssTemplate_full() {
    console.log('COPY CSS TEMPLATE REACHED (FULL)');
    this._copyFileSync(this._cssTemplateFull, this._cssDir);
  }


  /******************
  *  > File Utils   *
  ******************/

  _renameFile (orig, dest) {
    if(fs.existsSync(orig)){
      fs.renameSync(orig, dest);
      console.log(`Clean Slate -- Rename File: ${orig} had been moved to ${dest}`);
    }else{
      console.log(`Clean Slate -- Rename File: No original file was found for ${orig}. No HTML file was trashed.`);
    }
  }

  _copyFileSync (src, dest){
    fs.copySync(src, dest, {
      overwrite: false,
      errorOnExit: true,
      preserveTimestamps: true
    });
    console.log(`Clean Slate -- Copy FIle: File Copied: ${src} COPIED TO ${dest}`);
  }

  /*********************
  *  > Error Message   *
  *********************/

  _completionErrorMsg(error){
    console.log(`
      ------------------------------------------------------
      CleanSlate -- unable to complete process due to error:
      ------------------------------------------------------
      ${error}
    `);
  }
}

/**************************************/
/*   # Export                        */
/************************************/

module.exports = CleanSlate;
