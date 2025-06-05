// Logic. Shared interval caching for netcode fast cached validation and other purposes. // -- Version Rating. 33/2.

const $$O_memcache = {

  "date" : {

    "counter" : -1,

    "now" : Date.now ( )
  
  },

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

  $$0_memcache.resets++;

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "It's been a minute." )

    )

  );

  // Logic. Reset timestamp, then the counter to avoid race conditions.

  $$0_memcache.date.now = Date.now ( );
  
  $$0_memcache.date.counter = -1;

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      StringChat$$M_i18n ( cx, "Date $$0_memcache now timestamp successfully reset to the current value of Date.now." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      $$0_memcache.date.counter

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      $$0_memcache.date.now

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      JSON.stringify ( cx, DateCache$$M_now ( cx ) )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "Object.js" ),

      StringChat$$M_i18n ( cx, "$$M_memcacheReset()" ),

      JSON.stringify ( cx, DateCache$$M_now ( cx ) )

    )

  );

  for ( const $0V_key in $$0_memcache.primitive ) $$0_memcache.primitive[ $0V_key ] = new Set ( );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "SnippetFileName.js" ),

      StringChat$$M_i18n ( cx, "Memcache$$M_reset()" ),

      StringChat$$M_i18n ( cx, "Primitive memcache containers successfully reset to an empty Javascript Set." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "SnippetFileName.js" ),

      StringChat$$M_i18n ( cx, "memcache.primitive" ),

      JSON.stringify ( Object.keys ( memcache.primitive ) )

    )

  );

  for ( const $0V_key in memcache.object ) memcache.object[ $0V_key ] = new WeakSet ( );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "SnippetFileName.js" ),

      StringChat$$M_i18n ( cx, "Memcache$$M_reset()" ),

      StringChat$$M_i18n ( cx, "Object memcache containers successfully reset to an empty Javascript WeakSet." )

    )

  );

  Log$$M_add ( cx,

    String$$M_oneliner ( cx,

      StringChat$$M_i18n ( cx, "SnippetFileName.js" ),

      StringChat$$M_i18n ( cx, "memcache.object" ),

      JSON.stringify ( Object.keys ( memcache.object ) )

    )

  );

  // Logic. It's been five minutes. Clear files.

  if ( memcache.resets % 5 === 0 ) {

    for ( const $0V_key in memcache.file ) memcache.file[ $0V_key ] = { };

    Log$$M_add ( cx,

      String$$M_oneliner ( cx,

        StringChat$$M_i18n ( cx, "SnippetFileName.js" ),

        StringChat$$M_i18n ( cx, "Memcache$$M_reset()" ),

        StringChat$$M_i18n ( cx, "File memcache containers successfully reset to an empty Javascript Object." )

      )

    );

  }

  Log$$M_flush ( cx );
