const $$F_isBrowserStandaloneConsole = false;

const {
  
  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {
  
  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_settings" : { }

} : require ( "./Object.js" );

// Flag. Where to put the log output.

Object$$O_settings.writeLogToConsole = true;

// Flag. Where to put the log output.

Object$$O_settings.writeLogToFile = true;
