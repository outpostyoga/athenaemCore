const $$F_isBrowserStandaloneConsole = false;

// Logic. Shared interval caching for netcode fast cached validation and other purposes. // -- Version Rating. 33/2.

const $$O_memcache = {

  "date" : {

    "counter" : -1,

    "now" : Date.now ( )
  
  },

  "feamino" : { },

  "file" : { },

  "object" : {

    "isArray" : new WeakSet ( ),
    
    "isObject" : new WeakSet ( )

  },

  "primitive" : {

    "isInteger" : new Set ( ),

    "isString" : new Set ( ),

  },

  "resets" : -1

}

const $$M_memcacheReset = function ( cx ) {

  cx = cx == null ? Object.create ( null ) : cx;

  // Logic. Update every 60,000 milliseconds (1 minute).

  $$O_memcache.resets++;

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "It's been a minute." )

    )

  );

  // Logic. Reset timestamp, then the counter to avoid race conditions.

  $$O_memcache.date.now = Date.now ( );
  
  $$O_memcache.date.counter = -1;

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "Date $$O_memcache now timestamp successfully reset to the current value of Date.now." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "$$O_memcache.date.counter" ),

      $$O_memcache.date.counter

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "$$O_memcache.date.now" ),

      $$O_memcache.date.now

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheNow()" ),

      JSON.stringify ( cx, $$M_memcacheNow ( cx ) )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "String$$M_filestart()" ),

      JSON.stringify ( cx, String$$M_filestart ( cx ) )

    )

  );

  for ( const $0V_key in $$O_memcache.primitive ) $$O_memcache.primitive[ $0V_key ] = new Set ( );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "Primitive memcache containers successfully reset to an empty Javascript Set." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "$$O_memcache.primitive" ),

      JSON.stringify ( Object.keys ( $$O_memcache.primitive ) )

    )

  );

  for ( const $0V_key in $$O_memcache.object ) $$O_memcache.object[ $0V_key ] = new WeakSet ( );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "Object memcache containers successfully reset to an empty Javascript WeakSet." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "$$O_memcache.object" ),

      JSON.stringify ( Object.keys ( $$O_memcache.object ) )

    )

  );

  // Logic. It's been five minutes. Clear files.

  if ( $$O_memcache.resets % 5 === 0 ) {

    for ( const $0V_key in $$O_memcache.file ) $$O_memcache.file[ $0V_key ] = Object.create ( null );

    Log$$M_add ( cx,

      String$$M_oneliner ( cx,

        StringChat$$M_i18n ( cx, "Object.js" ),

        StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

        StringChat$$M_i18n ( cx, "File memcache containers successfully reset to an empty Javascript Object." )

      )

    );

    for ( const $0V_key in $$O_memcache.feamino ) $$O_memcache.feamino[ $0V_key ] = Object.create ( null );

    Log$$M_add ( cx,

      String$$M_oneliner ( cx,

        StringChat$$M_i18n ( cx, "Object.js" ),

        StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

        StringChat$$M_i18n ( cx, "Feamino memcache containers successfully reset to an empty Javascript Object." )

      )

    );

  }

  Log$$M_flush ( cx );

}

module.exports = {

  Object$$O_memcache : $$O_memcache,

  Object$$O_settings : Object.create ( null )
  
}

// Logic. Weirdly compliant circular require without partial feedback. Put them at the bottom.

const {
  
  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {
  
  StringChat$$M_i18n,

  String$$M_filestart,

  String$$M_oneliner } = $$F_isBrowserStandaloneConsole ? {

  "StringChat$$M_i18n" : ( ) => { throw new Error ( "Unavailable." ) },

  "String$$M_filestart" : ( ) => { throw new Error ( "Unavailable." ) },
  
  "String$$M_oneliner" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./String.js" );