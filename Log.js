const $$F_isBrowserStandaloneConsole = false;

// Logic. The missing log class for Node.js
 
// -- Version Rating. 11/2.

// -- Note. No Function$$_wrap to avoid recursion errors.

const $$M_create = function ( cx, ... args ) {

  // Data. Input parameters. Defaults.

  if ( cx == null ) cx = Object.create ( null );

  const $0F_debug = cx.debug = cx.debug === true;
  
  const $0O_log = cx.log = { };

  // Logic. Add a full timestamp array from memcache.

  const $0A_timestamp = $0O_log.timestamp = Array$$M_now ( cx );

  // Logic. Add first line.

  const $0V_msg = args.pop ( );

  args.push ( ... $0A_timestamp );

  // Logic. Faster than template literal when performance matters.

  $0O_log.lines = [ ":: [" + args.join ( "][" ) + "] " + $0V_msg ];

  // Done. Log everything and get out of here.

  if ( cx.debug ) $$M_createLine ( cx,

    String$$M_oneliner ( cx,

      String$$M_i18n ( cx, "Log.js" ),

      String$$M_i18n ( cx, "$$M_create()" ),

      String$$M_i18n ( cx, "return" ),

      JSON.stringify ( cx )

    )

  );

  return cx;

}

// Logic. Add a log string to the file.
 
// -- Version Rating. 11/2.

// -- Note. No Function$$_wrap to avoid recursion errors.

const $$M_createLine = function ( cx, text ) {

  if ( cx.log == null ) $$M_create ( cx,

    String$$M_i18n ( cx, "Log.js" ),

    String$$M_i18n ( cx, "$$M_createLine()" ),

    String$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." )

  );

  const $0A_lines = cx.log.lines;
  
  if ( cx.debug ) $0A_lines.push (

    String$$M_oneliner ( cx,

      String$$M_i18n ( cx, "Log.js" ),

      String$$M_i18n ( cx, "$$M_createLine()" ),

      String$$M_i18n ( cx, "arguments" ),

      JSON.stringify ( Array.from ( arguments ) )

    )

  );

  // Data. Avoid JSON.stringify unless absolutely necessary.

  if ( typeof text !== "string" ) {

    try { text = JSON.stringify ( text ); }

    catch { text = "[" + String$$M_i18n ( cx, "Unserializable" ) + "]"; }

  }

  // Logic. Finish as quickly as possible.

  $0A_lines.push ( ":: " + text );

}

module.exports = {
    
    Log$$M_create : $$M_create,

    Log$$M_createLine : $$M_createLine,

    Log$$O_settings : Object.create ( null )

}

// Logic. Weirdly compliant circular require without partial feedback. Put them at the bottom.

const {
  
  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_settings" : { }

} : require ( "./Object.js" );

const {

  String$$M_i18n,

  String$$M_oneliner,

  String$$M_random } = $$F_isBrowserStandaloneConsole ? {
  
} : require ( "./String.js" );