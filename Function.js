const $$F_isBrowserStandaloneConsole = false;

// Logic. Simply the framework overhead into a default wrapper.
 
// -- Version Rating. 44/1.

const $$M_wrap = function ( filename, fname, validators, flogic ) {

  return function wrapped ( ... args ) {

    const $0O_cx = args[ 0 ];

    if ( $0O_cx == null ) throw new Error ( "System Error. Missing cx context in function call." );

    if ( $0O_cx.log == null ) Log$$M_create ( $0O_cx,

      StringChat$$M_i18n ( $0O_cx, filename ),

      StringChat$$M_i18n ( $0O_cx, fname + "()" ),

      StringChat$$M_i18n ( $0O_cx, "New log started because 'cx.log' is missing in function call." )

    );

    // Data. Input parameters. Defaults.

    let jsonArgs = null;

    if ( $0O_cx.debug ) {

      try { jsonArgs = JSON.stringify ( args ); }

      catch { jsonArgs = "System Error. Unserializable arguments."; }

    }

    let returnValue = null;

    logic : {
    
      try {

        for ( let i = 0; i < validators.length; i++ ) {
          
          const $0M_validate = validators[ i ];
          
          const $0M_argument = args[ i + 1 ]; // Keep cx the first argument.

          const $0F_isValidated = typeof $0M_validate === "function" ? $0M_validate ( $0O_cx, $0M_argument ) : true;

          if ( $0O_cx.error != null || $0F_isValidated != true ) {

            if ( !$0O_cx.error ) $0O_cx.error = new Error ( "Validation returned null without setting cx.error." );

            Error$$M_format ( $0O_cx, filename, fname );

            break logic;

          }
        
        }

        returnValue = flogic.apply ( null, args );

        if ( $0O_cx.error != null || returnValue == null ) {

          if ( !$0O_cx.error ) $0O_cx.error = new Error ( "Function returned null without setting cx.error." );

          Error$$M_format ( $0O_cx, filename, fname );

          break logic;

        }

        $0O_cx.error = null;

      }

      catch ( error ) {

        $0O_cx.error = error;

        Error$$M_format ( $0O_cx, filename, fname );

      }

    }

    error : {  

      // Done. Log everything and get out of here.
    
      if ( $0O_cx.error || $0O_cx.debug ) {

        Log$$M_add ( $0O_cx,

          String$$M_oneliner ( $0O_cx,

            StringChat$$M_i18n ( $0O_cx, filename ),

            StringChat$$M_i18n ( $0O_cx, fname ),

            StringChat$$M_i18n ( $0O_cx, "arguments" ),

            jsonArgs || JSON.stringify ( args )

          )

        );

        Log$$M_add ( $0O_cx,

          String$$M_oneliner ( $0O_cx,

            StringChat$$M_i18n ( $0O_cx, filename ),

            StringChat$$M_i18n ( $0O_cx, fname ),

            StringChat$$M_i18n ( $0O_cx, "return" ),

            $0O_cx.error ? null : JSON.stringify ( returnValue )

          )

        );

        Log$$M_add ( $0O_cx,

          String$$M_oneliner ( $0O_cx,

            StringChat$$M_i18n ( $0O_cx, filename ),

            StringChat$$M_i18n ( $0O_cx, fname ),

            StringChat$$M_i18n ( $0O_cx, "cx?.error?.message" ),

            $0O_cx?.error?.message

          )

        );

      }

    }

    return $0O_cx.error ? null : returnValue;

  }

}

module.exports = {

  Function$$O_settings : Object.create ( null ),

  Function$$M_wrap : $$M_wrap

};

// Logic. Weirdly compliant circular require without partial feedback. Put them at the bottom.

const {
  
  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_settings" : { }

} : require ( "./Object.js" );
