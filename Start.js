const $$F_isBrowserStandaloneConsole = false;

const {
  
  Array$$M_now,

  Array$$O_settings } = $$F_isBrowserStandaloneConsole ? {
  
  "Array$$M_now" : ( ) => { throw new Error ( "Unavailable." ); },

  "Array$$O_settings" : Object.create ( null )

} : require ( "./Array.js" );

const {

  Boolean$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Boolean$$O_settings" : Object.create ( null )

} : require ( "./Boolean.js" );

const {
  
  Function$$O_settings,

  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {

  "Function$$O_settings" : Object.create ( null ),
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {

  Log$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Log$$O_settings" : Object.create ( null )
  
} : require ( "./Log.js" );

const {

  Number$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Number$$O_settings" : Object.create ( null )
  
} : require ( "./Number.js" );

const {

  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_settings" : Object.create ( null )
  
} : require ( "./Object.js" );

const {

  String$$M_createI18nDictionary,

  String$$M_createSet,

  String$$M_i18n,

  String$$M_random,

  String$$O_set,

  String$$O_settings,

  String$$M_start } = $$F_isBrowserStandaloneConsole ? {

  "String$$O_settings" : Object.create ( null )
  
} : require ( "./String.js" );

// Logic. Merge all the settings into one.

Object.assign ( Object$$O_settings, Array$$O_settings, Boolean$$O_settings, Function$$O_settings, Log$$O_settings, Number$$O_settings, String$$O_settings );

console.log ( Object$$O_settings );

// Logic. Initialize i18n lookups.

String$$M_createI18nDictionary ( null );

// Logic. Define base characters sets.

String$$M_createSet ( null, "az", "abcdefghijklmnopqrstuvwxyz" );

String$$M_createSet ( null, "AZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );

String$$M_createSet ( null, "09", "0123456789" );

String$$M_createSet ( null, "azAZ09", "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" );

console.log ( String$$O_set );

// Logic. Test run all functions that must avoid startup recursion errors.

console.log ( String$$M_random ( null ) );

console.log ( Array$$M_now ( null ) );

// Logic. Start modules after prework completed.

String$$M_start ( null );