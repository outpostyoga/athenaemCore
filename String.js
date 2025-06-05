const $$F_isBrowserStandaloneConsole = false;

const {
  
  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {

  Object$$O_memcache,
  
  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_memcache" : { },
  
  "Object$$O_settings" : { }

} : require ( "./Object.js" );
