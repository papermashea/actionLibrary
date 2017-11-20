//var testdoc = app.open (File("/Users/labuser/Desktop/Test doc.indd"));
var testdoc = app.activeDocument;
var message = '';

//Checking the units as per the doc intent.
var docHUnit = testdoc.viewPreferences.horizontalMeasurementUnits;
var docIntent = testdoc.documentPreferences.intent;
var mismtach = false;
if(docIntent == DocumentIntentOptions.PRINT_INTENT)
{
    if (docHUnit != MeasurementUnits.POINTS || docVUnit != MeasurementUnits.POINTS)
    {
        mismatch = true;
    }
}
else if(docIntent == DocumentIntentOptions.WEB_INTENT || docIntent == DocumentIntentOptions.MOBILE_INTENT)
{
    if (docHUnit != MeasurementUnits.PIXELS || docVUnit != MeasurementUnits.PIXELS)
        mismatch = true;
 }
 if (mismatch == true) 
{
    message = message + '\n Unit Mismatch';
    mismatch = false;
}
//Unit matching ends    

//Orientation
if(docIntent == DocumentIntentOptions.PRINT_INTENT || docIntent == DocumentIntentOptions.MOBILE_INTENT)
{
    if (testdoc.documentPreferences.pageOrientation != PageOrientation.PORTRAIT)
        mismatch = true;
} else {
    if (testdoc.documentPreferences.pageOrientation == PageOrientation.PORTRAIT)
        mismatch = true;
}
if (mismatch == true) 
{
    message = message + '\n Orientation Mismatch';
    mismatch = false;
}
//Orientation ends.



//Overall matching ends.
if (message == '')
    message = 'Success';
alert(message);
