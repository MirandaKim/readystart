# CLEAN-SLATE TASKS

**CAUTION**: THESE ARE DANGEROUS TASKS
         READ BELOW FOR MORE DETAILS

**REMEMBER**: ALWAYS BACK UP YOUR WORK!

***

This directory contains the tasks for *OVERRIDING* the existing project src content,
and replaces them with template/quick-start files.
Use theses tasks one time before starting your site from these files.

***

## RAN ONE OF THESE TASKS BY MISTAKE?

For your safety, these task will attempt to move the existing files to a new directory at the root (~/.trashed)

There is no task to delete the trash directory (~/.trahsed). You can delete it manually when you're 100% sure nothing important will be lost.

***

## Delete The Clean-Slate Logic After Use

I strongly suggest you DELETE the clean-slate logic once you start customizing your assets to avoid loosing any work:
  - Remove the clean-slate import lines from ~/gulpfile.js
  - Delete this directory (~/gulp/clean-slate)

***

## Available clean-slate tasks:
*(note: without --seriously you will receive a console message summarizing what to expect)*

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

***
***
**REMEMBER**: REMOVE THE CLEAN-SLATE GULP LOGIC FROM YOUR PROJECT ONCE YOU'VE USED IT.
***
***
That's it. Good luck.
