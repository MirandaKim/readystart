# CLEAN-SLATE TASKS

**CAUTION**: THESE ARE DANGEROUS TASKS
         READ BELOW FOR MORE DETAILS

**REMEMBER**: ALWAYS BACK UP YOUR WORK!

***

This directory contains the tasks for *OVERRIDING* the existing project src content,
and replaces them with template/quick-start files.
Use theses tasks one time before starting your site from these files.

***

## Why Have These Tasks?

  This repository hopes to give you a starting point of a site with gulp tasks for processing and an established file structure. But you may have noticed there is already a fair bit of html and styles, which you probably don't want cluttering up your site. In lieu of cleaning out this content yourself, these clean-slate tasks are provided to help you out.

***

## Task Summaries
_See "Available clean-slate task" for the actual task commands._

  - The **Clean** task give you a good starting point with elements and selectors you can customize. Some styles including globals, mixins, general modifiers, and variables are left in place. For html, index.html has some useful tags with class names to make starting out easier. Use this task if you want to have some basic structure when starting out.

  - The **Bare** tasks give you the bare bones that you then can fill in as you wish. Most of the styles file structure is left in place with class names, but very few contain styles. For html, the index.html file is left with the bare minimum tags. Use this task if you're just here for the pre-made gulp tasks and want to make your own structure.

  - The **Full** tasks give you the initial starting point of this repository (aka the html and styles that are available when the repository was first downloaded) for whatever reason you might like it.

  - Other options:
      - If you want to establish your own style structure, I suggest forgoing these tasks and manually deleting ~/src/assets/styles/base and ~/src/assets/styles/modules then modifying the contents of
      - If you want to adjust the html manually, go to ~/src/index.html and modify the contents yourself.
      - If you want to start by using all the styles and html initially available, go for it and ignore these tasks.
      - If forgoing these clean-slate tasks, you should go ahead and delete the import statement for the clean-slate index in gulpfile.js (See "Delete The Clean-Slate Logic After Use").

***

## RAN ONE OF THESE TASKS BY MISTAKE?

For your safety, these task will attempt to move the existing files to a new directory at the root (~/.trashed)

There is no task to delete the trash directory (~/.trashed). You can delete it manually when you're 100% sure nothing important will be lost.

***

## Delete The Clean-Slate Logic After Use

I strongly suggest you DELETE the clean-slate logic once you start customizing your assets to avoid loosing any work:
  - Remove the clean-slate import lines from ~/gulpfile.js
  - Delete this directory (~/gulp/clean-slate)

***

## Available clean-slate tasks:
*(note: without either parameters --html or --css you will receive a console message summarizing what to expect)*

   - **gulp clean**

      Console will log a brief summary of the Clean-Slate Clean and what tasks are available. Nothing will be moved/deleted/created.

   - **gulp clean --html**

      Replace the existing html (~/src/index.html) with a template containing useful content to get you going faster. See template ~/gulp/clean-slate/templates/html/index--clean.html

   - **gulp clean --css**

      Replace the existing styles (~/src/assets/styles) with templates containing few css styles and modular files. See style files under ~/gulp/clean-slate/templates/styles/styles--clean

   - **gulp clean --html --css**

       Run both clean html and clean css.

   - **gulp bare**

      Console will log a brief summary of the Clean-Slate Bare and what tasks are available. Nothing will be moved/deleted/created.

   - **gulp bare --html**

      Replace the existing html (~/src/index.html) with a template containing the bare minimals. See template ~/gulp/clean-slate/templates/html/index--bare.html

   - **gulp bare --css**

      Replace the existing styles (~/src/assets/styles) with the bare minimal styles structure. See file structure ~/gulp/clean-slate/templates/styles/styles--bare

   - **gulp bare --css**

      Run both bare css and bare html.


   - **gulp full**

      Console will log a brief summary of the Clean-Slate Full and what tasks are available. Nothing will be moved/deleted/created.

   - **gulp full --html**

      Replace the existing html (~/src/index.html) with the initial html content (what you're likely looking at now). See template ~/gulp/clean-slate/templates/html/index--full.html

   - **gulp full --css**

      Replace the existing styles (~/src/assets/styles) with the initial full styles structure. See file structure ~/gulp/clean-slate/templates/styles/styles--full

   - **gulp full --html --css**

      Run both full css and full html.

***
***
**REMEMBER**: REMOVE THE CLEAN-SLATE GULP LOGIC FROM YOUR PROJECT ONCE YOU'VE USED IT TO AVOID ACCIDENTALLY RUNNING THEM AND USING YOUR CONTENT.

**ALWAYS BACK UP YOUR STUFF**
***
***
That's it. Good luck.
