/*

// BEGIN__HARVEST_EXCEPTION_ZSTRING

<javascriptresource>
<name>$$$/JavaScripts/SanitizeTemplateDocument/Menu=Sanitize Template Document</name>
<category>aaaaThisPutsMeAtTheTopOfTheMenu</category>
<eventid>2F9021B3-5045-42EB-AE2A-8E504FAA8D94</eventid>
</javascriptresource>

// END__HARVEST_EXCEPTION_ZSTRING

*/


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
// $.level = 1;
// debugger; // launch debugger on next line

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
$.localize = false;

// start



// !!!!!!!!######## the important part ########!!!!!!!!

	var mainDesc = new ActionDescriptor();
	var id6 = stringIDToTypeID( "sanitizeFileForTemplate" );
	executeAction( id6, mainDesc, DialogModes.NO );

// !!!!!!!!######## end important part ########!!!!!!!!



// done!