const $$F_isBrowserStandaloneConsole = false;

// Data. Module settings. Will be merged into Object$$M_settings in Start.js.

const $$O_settings = {

  // Flag. Where to put the log output.

  writeLogToConsole : true,

  // Flag. Where to put the log output.

  writeLogToFile : true 

}

module.exports = {

  Boolean$$O_settings : $$O_settings

}

// Logic. Weirdly compliant circular require without partial feedback. Put them at the bottom.

const {
  
  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {
  
  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_settings" : { }

} : require ( "./Object.js" );