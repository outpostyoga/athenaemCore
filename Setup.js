const $$O_global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : Function("return this")();

const $$F_isBrowserStandaloneConsole = false;

const Node$$M_Archiver = !$$F_isBrowserStandaloneConsole ? require ( "archiver" ) : null; // NPM compress to .zip module.

const Node$$M_FileSystem = !$$F_isBrowserStandaloneConsole ? require ( "fs" ).promises : null;

const Node$$M_FileSystemStreams = !$$F_isBrowserStandaloneConsole ? require ( "fs" ) : null;

const Node$$M_Path = !$$F_isBrowserStandaloneConsole ? require ( "path" ) : null; // Path module for safe resolution and navigation.

const Node$$M_Process = !$$F_isBrowserStandaloneConsole ? require ( "process" ) : null;

const Node$$M_Util = !$$F_isBrowserStandaloneConsole ? require ( "util" ) : null;

const {

  Settings$$V_i18n,

  Settings$$V_pathToBaseDirectory,

  Settings$$V_pathToLogDirectory,

  Settings$$V_pathToLogBinDirectory,

  Settings$$V_pathToLogBinDirectoryFileExtensionFemale,

  Settings$$F_writeLogToConsole,

  Settings$$F_writeLogToFile

} = $$F_isBrowserStandaloneConsole

  ? {

      Settings$$V_i18n: "en",

      Settings$$F_writeLogToConsole: true,

      Settings$$F_writeLogToFile: false

    }

  : require ( "./Settings.js" );


// Logic. Get all combinations, not permutations of any array. // Version Rating. 13/2.

const Array$$M_combinations = function ( cx, array ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
    
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_combinations()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_combinations()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( !Array.isArray ( array ) ) array = [ ];

  // Logic.

  const $0V_arrayLength = this.length
  
  const $0V_total = ( $0V_arrayLength < 32 ) ? ( 1 << $0V_arrayLength ) : Math.pow ( 2, $0V_arrayLength );

  const $0A_return = [ ];

  // Logic. To generate every possible combination (not permutation) of elements in a JavaScript array (i.e., all subsets of any size, including the empty one), you can use a simple bitmasking approach.

  for ( let i = 0; i < $0V_total; i++ ) {

    const $0A_combo = [ ];

    for ( let j = 0; j < $0V_arrayLength; j++ ) if ( i & ( 1 << j ) ) $0A_combo.push ( this[ j ] );

    $0A_return.push ( $0A_combo );

  }

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_combinations()" ), StringChat$$M_i18n ( cx, "return" ), JSON.stringify ( $0A_return ) );

  return $0A_return;

}

// Logic. Convert an array into an object w/ extracted k/v pairs. // Version 11/2.

const Array$$M_toObject = function ( cx, array, randomLength, ... args ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_toObject()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_toObject()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( !Array.isArray ( array ) ) array = [ ];

  if ( !Number.isInteger ( randomLength ) || randomLength < 20 || randomLength > 100 ) randomLength = 20;

  // Logic. By Charlotte.

  const $0V_length = array.length;

  const $0O_return = { };

  for ( let i = 0; i < $0V_length; i++ ) {

    const $0V_value = array[ i ];

    const $0V_key = ObjectDeep$$M_get ( cx, $0V_value, ... args ) ?? String$$M_random ( cx, randomLength );

    $0O_return[ $0V_key ] = { "_" : $0V_value };

  }

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Array$$M_toObject()" ), StringChat$$M_i18n ( cx, "return" ), JSON.stringify ( $0O_return ) );

  return $0O_return;

}

// Logic. Cached timestamps for insane performance. // Version Rating. 15/2.

let dateCacheCounter = -1;

let dateCacheInterval = null;

let dateCacheNow = Date.now ( );

const DateCache$$M_now = function now ( cx ) {

  // Logic. No polyfill to avoid recursion errors. AcLog requires this function.

  return [ dateCacheNow, String ( ++ dateCacheCounter ).padStart ( 10, "0" ), String$$M_random ( cx, 10 ) ];

}

const DateCache$$M_start = function ( cx, intervalMs ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_start()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_start()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( !Number.isSafeInteger ( intervalMs ) ) intervalMs = NumberMs$$V_minute;

  // Logic. Set interval.

  if ( dateCacheInterval ) return; // already running

  dateCacheInterval = setInterval ( DateCache$$M_reset, intervalMs );

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_start()" ), StringChat$$M_i18n ( cx, "return" ), undefined );

}

const DateCache$$M_stop = function ( cx ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_stop()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_stop()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  // -- This line intentionally left blank. ----

  // Logic.

  clearInterval ( dateCacheInterval );

  dateCacheInterval = null;

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_stop()" ), StringChat$$M_i18n ( cx, "return" ), undefined );

}

const DateCache$$M_reset = function ( cx = { } ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_reset()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_reset()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  // -- This line intentionally left blank. ----

  // Logic.

  dateCacheNow = Date.now ( );

  dateCacheCounter = -1;

  console.log ( "Date.cache.reset");

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "DateCache$$M_reset()" ), StringChat$$M_i18n ( cx, "return" ), undefined );

}

// Logic. Add auto .messages including .message (per-instance) to all Error instances.

Error.prototype.messages = [ ];

// Data. Time in milliseconds. // Version Rating. 10/2.

const NumberMs$$V_second = 1000;

const NumberMs$$V_minute = 60000;

const NumberMs$$V_hour = 3600000;

const NumberMs$$V_day = 86400000;

// Logic. The second fastest way to deep access an Object value. // Version Rating. 19/2.

const ObjectDeep$$M_freeze = function ( cx, obj, seen ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_freeze()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_freeze()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  // -- This line intentionally left blank. ----

  if ( seen instanceof WeakSet === false ) seen = new WeakSet ( );

  // Logic. Use recursion.

  if ( obj === null || typeof obj !== "object" || seen.has ( obj ) ) return obj;

  seen.add ( obj );

  const $0A_keys =  Object.getOwnPropertyNames ( obj );

  for ( const key of $0A_keys ) this.freeze ( cx, obj[ key ], seen );

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_freeze()" ), StringChat$$M_i18n ( cx, "return" ), undefined );

  return Object.freeze ( obj );
  
}

const ObjectDeep$$M_get = function ( cx, obj, ... args ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_get()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_get()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if (( !Object$$M_isObject ( cx, obj ) && !Array.isArray ( obj )) || args.length < 1 ) return undefined;

  // Logic. By Sydney Sweeney.

  for ( let i = 0; i < args.length; i++ ) if ( ( obj = obj?.[ args[ i ] ] ) == null ) break;

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_get()" ), StringChat$$M_i18n ( cx, "return" ), obj );

  return obj;

}

const ObjectDeep$$M_set = function ( cx, obj, ... args ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_set()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_set()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if (( !Object$$M_isObject ( cx, obj ) && !Array.isArray ( obj )) || args.length < 2 ) return false;

  const $0V_value = args.pop ( );
  
  const $0V_key = args.pop ( );

  const $0V_argsLength = args.length;

  // Logic.

  for ( let i = 0; i < $0V_argsLength; i++ ) {

    const $0V_arg = args[ i ];

    if ( obj[ $0V_arg ] == null ) obj[ $0V_arg ] = { };

    obj = obj[ $0V_arg ];

    if ( !Object$$M_isObject ( cx, obj ) && !Array.isArray ( obj )) return false;

  }

  obj[ $0V_key ] = $0V_value;

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "ObjectDeep$$M_set()" ), StringChat$$M_i18n ( cx, "return" ), true );

  return true;

}

// Logic. The missing Object$$M_isObject check for any value. // Version Rating. 5/2.

const Object$$M_isObject = function ( cx, obj ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Object$$M_isObject()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Object$$M_isObject()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  // -- This line intentionally left blank. ----

  // Logic.

  const $0F_isObject = obj != null && typeof obj === "object" && Object.getPrototypeOf ( obj ) === Object.prototype;

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "AcSetup.js" ), StringChat$$M_i18n ( cx, "Object$$M_isObject()" ), StringChat$$M_i18n ( cx, "return" ), $0F_isObject );

  return $0F_isObject;

}

// Logic. // Version Rating. 15/2.

const Object$$M_map = function ( cx, obj, map ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_map()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_map()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( !Object$$M_isObject ( cx, obj )) obj = { };
  
  if ( !Object$$M_isObject ( cx, map )) map = { };

  const $0F_generateRandomKeys = Number.isInteger ( map.key );

  const $0V_randomKeyLength = map.key < 20 || map.key > 100 ? 20 : map.key;

  // Logic. Create a new object.

  let returnKey;

  const $0O_return = { };

  // Logic. Keyitems.

  for ( const $0V_key in obj ) {

    const $0O_keyitem = obj[ $0V_key ];

    console.log ( $0O_keyitem );

    if ( $0O_keyitem[ "_" ] == null ) continue;

    console.log ( "root node present." );

    // Logic. Each map term.

    for ( const $0V_toField in map ) if ( map[ $0V_toField ] != null ) {

      console.log ( $0V_toField );

      const $0V_mapValue = $0F_generateRandomKeys && $0V_toField === "key" ? String$$M_random ( cx, $0V_randomKeyLength ) : ObjectDeep$$M_get ( cx, $0O_keyitem[ "_" ], ... ( Array.isArray ( map[ $0V_toField ] ) ? map[ $0V_toField ] : [ ] ) );

      console.log ( $0V_mapValue );

      if ( $0V_mapValue == null ) continue;

      // Logic. Allow key overwrites.

      if ( $0V_toField === "key" ) {

        returnKey = $0V_mapValue;

        continue;

      }

      // Logic. Merge mapped values in.

      const $0V_existing = $0O_keyitem[ $0V_toField ];

      if ( $0V_existing == null ) $0O_keyitem[ $0V_toField ] = $0V_mapValue;

      else if ( Array.isArray ( $0V_existing ) ) $0V_existing.push ( ... ( Array.isArray ( $0V_mapValue ) ? $0V_mapValue : [ $0V_mapValue ] ));

      else if ( true ) $0O_keyitem[ $0V_toField ] = [ $0V_existing, ... ( Array.isArray ( $0V_mapValue ) ? $0V_mapValue : [ $0V_mapValue ] )];

    }

    // Logic. Move items to a new object.

    $0O_return[ returnKey || $0V_key ] = $0O_keyitem;

    returnKey = null;

  }

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_map()" ), StringChat$$M_i18n ( cx, "return" ), JSON.stringify ( $0O_return ) );

  return $0O_return;

}

// Logic. Build database structure out of a ordered list. // Version Rating. 17/2.

const Object$$M_toHashlist = function ( cx, obj ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_toHashlist()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_toHashlist()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( !Object$$M_isObject ( cx, obj )) obj = { "_" : null };

  // Logic. Start slowly.

  let v;

  const [ $0V_timestamp, $0V_tsCounter, $0V_tsRandom ] = DateCache$$M_now ( cx );
  
  const $0O_headspace = { };

  const $0O_keyitems = { };

  const $0A_list = [ ];

  const $0A_timestamp = [ $0V_timestamp, $0V_tsCounter, $0V_tsRandom ];

  // Logic. One level deep.

  for ( const $0V_key in obj ) {

    const $0O_objItem = obj[ $0V_key ];

    const $0O_listItem = {

      "#" : ( v = $0O_objItem[ "#" ] ) != null ? Array.isArray ( v ) && v || typeof v === "string" && [ v ] || String ( v ) : null,

      "metadata" : {

        "permissions" : [ '[dev][Tyler () McGill][tyler.mcgill@avenmore.com][outpostyoga] ["read","write","filesystem","delete","approve","factory"]', ... (( v = $0O_objItem.permissions ) != null ? ( Array.isArray ( v ) && v || typeof v === "string" && [ v ] || [ ] ) : [ ] )],

        "approved" : ( v = $0O_objItem.approved ) != null && $0O_objItem.rejected == null && Number.isInteger ( v ) && v > -1 && v <= $0V_timestamp ? v : null,

        "rejected" : ( v = $0O_objItem.rejected ) != null && $0O_objItem.approved == null && Number.isInteger ( v ) && v > -1 && v <= $0V_timestamp ? v : null,

        "comments" : null,

        "release" : ( v = $0O_objItem.release ) != null && Number.isSafeInteger ( v ) ? v : 0,

        "update" : $0A_timestamp,

        "keyitem" : $0V_key

      },

      "capture" : null, // ObjectDeep$$M_get ( obj[ $OV_key ].value, ... args ) ?? obj[ $0V_key ].value,

      "factory" : null,

      "dictionary" : $0O_objItem.dictionary != null && Array.isArray ( $0O_objItem.dictionary ) ? $0O_objItem.dictionary : [ { } ]

    };

    // Logic. Two levels deep. No overwrites.

    $0O_objItem[ "#" ] = $0O_objItem.permissions = $0O_objItem.approved = $0O_objItem.rejected = $0O_objItem.comments = $0O_objItem.release = $0O_objItem.update = $0O_objItem.keyitem = $0O_objItem.capture = $0O_objItem.factory = $0O_objItem.dictionary = null;

    for ( const $0V_key in $0O_objItem ) {

      if ( $0O_objItem == null ) continue;

      $0O_listItem.metadata[ $0V_key ] = $0O_objItem[ $0V_key ];

    }

    // Logic. Extra processing. List metadata. Aka file headers.

    const $0V_listIndex = $0A_list.push ( $0O_listItem ) - 1;

    $0O_keyitems[ $0V_key ] = $0O_listItem;

    // Logic. Hashtags.

    if ( $0O_listItem[ "#" ] != null ) {

      $0O_listItem[ "#" ] = $0O_listItem[ "#" ].map (( v ) => String$$M_toCamelCase ( cx, v )).sort ( );

      const $0A_compositeHashtags = Array$$M_combinations ( cx, $0O_listItem[ "#" ] ); // Already localCompare sorted on save.

      const $0V_compositeHashtagsLength = $0A_compositeHashtags.length;

      // Logic. Ignore empty first array entry.

      for ( let i = 1; i < $0V_compositeHashtagsLength; i++ ) {

        $0A_compositeHashtags[ i ] = "#" + $0A_compositeHashtags[ i ].join ( "." );

        if ( $0O_headspace[ $0A_compositeHashtags[ i ] ] == null ) $0O_headspace[ $0A_compositeHashtags[ i ] ] = [ ];

        if ( $0O_headspace[ $0A_compositeHashtags[ i ] ].indexOf ( $0V_listIndex ) === -1 ) $0O_headspace[ $0A_compositeHashtags[ i ] ].push ( $0V_listIndex );

      }

    }

  }

  // Logic. Wrap it in a hashlist.

  const $0V_assetTag = String$$M_random ( cx );

  const $0O_hashlist = {

    assetTag : $0V_assetTag, // Must be 20 alphanumeric english characters.

    description : "aNoobDataFile", // Must be camel case english.

    headspace : $0O_headspace,

    keyitems : $0O_keyitems,

    ol : $0A_list,

    release : { integer : 0, vanity : "southbound" },

    uid : String$$M_filestart ( cx, $0V_timestamp ) + "." + $0V_tsCounter + "." + $0V_tsRandom + ".aNoobDataFile." + $0V_assetTag,

    update : $0A_timestamp // Must be 1970 epoch millisecond timestamp.

  };

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "Object$$M_toHashlist()" ), StringChat$$M_i18n ( cx, "return" ), JSON.stringify ( $0O_hashlist ) );

  return $0O_hashlist;

}

// Logic. Where we put the i18n strings. // StringChat$$M_i18n ( cx, "Hello world." ); // Version rating. 51/3.

const StringChat$$M_i18n = function ( cx, en, language ) { return $$F_isBrowserStandaloneConsole ? en : StringChat$$A_lib?.[ 0 ]?.[ en ]?.[ language ?? StringChat$$V_language ] ?? "-- i18n Warning! ---- " + en; };

const StringChat$$V_language = Settings$$V_i18n;

const StringChat$$A_lib = $$F_isBrowserStandaloneConsole ? [ { } ] : ( require ( "./Data.Chat.json" ) ?? [ { } ] );

const StringChat$$M_start = function ( cx ) {

  const $0O_dictionary = StringChat$$A_lib[ 0 ];

  const $0V_dictionaryLength = StringChat$$A_lib.length;

  for ( let i = 1; i < $0V_dictionaryLength; i++ ) $0O_dictionary[ StringChat$$A_lib[ i ].en ] = StringChat$$A_lib[ i ];

}

// Logic. The pretty way to format a timestamp. // Version Rating. 12/2.

const String$$M_filestart = function ( cx, timestamp ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_filestart()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_filestart()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  const $0O_date = Number.isSafeInteger ( timestamp ) ? new Date ( timestamp ) : new Date ( timestamp = Date.now ( ) );

  // Logic.

  const $0V_month = $0O_date.getUTCMonth ( ) + 1;

  const $0V_day = $0O_date.getUTCDate ( );

  const $0V_hour = $0O_date.getUTCHours ( );

  const $0V_return = [ "[", $0O_date.getUTCFullYear ( ), $0V_month < 10 ? "y][0" : "y][", $0V_month, $0V_day < 10 ? "m][0" : "m][", $0V_day, $0V_hour < 10 ? "d][0" : "d][", $0V_hour, "h] ", timestamp ].join ( "" );

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_filestart()" ), StringChat$$M_i18n ( cx, "return" ), $0V_return );

  return $0V_return;

}

// Logic. Generate a random string with the specified length and charset. Default is 20 char asset tag. // Version Rating. 14/2.

const String$$M_random = function ( cx, length, set, returnResultAs = "string" ) {

  // Logic. No polyfill to avoid recursion errors. AcLog requires this function.

  // Data. Input parameters. Defaults.

  if ( !Number.isSafeInteger ( length ) || length <= 0 ) length = 20;

  set = String.set[ set ]?.chars ?? String.set.azAZ09.char.array;

  // Logic.

  const $0A_bytes = new Uint8Array ( length );

  const $0A_random = new Array ( length );

  const $0V_setLength = set.length;

  crypto.getRandomValues ( $0A_bytes );

  for ( let i = 0; i < length; i++ ) {

    // Logic. Map random integer to set size.

    const $0V_setIndex = $0V_setLength < 256 ? $0A_bytes[ i ] % $0V_setLength : ( $0A_bytes[ i ] * $0V_setLength ) >> 8;

    $0A_random[ i ] = set[ $0V_setIndex ];

  }

  return returnResultAs === "string" ? $0A_random.join ( "" ) : $0A_random;

}

// Logic. String sets.

String.set = { };

// Logic. Keeping string sets simple. // Version Rating. 10/2.

const StringSet$$M_add = function ( cx, name, string ) {

  // Logic. No polyfill to avoid recursion errors. AcLog requires this function.

  // Data. Input parameters. Defaults.

  if ( typeof name !== "string" || String.set.hasOwnProperty ( name ) ) return null;

  if ( typeof string !== "string" || string.length < 2 ) return null;

  // Logic. Preproces string into all possible set forms.

  const $0A_chars = string.split ( "" );
  
  const $0A_codes = $0A_chars.map (( v ) => v.charCodeAt ( ))

  const $0O_return = {

    "char" : { "array" : $0A_chars, "set" : new Set ( $0A_chars ), "string" : string },

    "code" : { "array" : $0A_codes, "set" : new Set ( $0A_codes ) }

  }

  String.set[ name ] = $0O_return;

  return $0O_return;

}

// Logic. String format and edit into camel case. // Version Rating. 2/2.

const String$$M_toCamelCase = function ( cx, str ) {

  // Logic. [130,245y][04m][21d] Javascript polyfill function header.

  const $0F_isBrowserStandaloneConsole = false;

  if ( cx.log == null ) {

    cx.debug = cx.debug === true;
      
    cx.log = $0F_isBrowserStandaloneConsole ? { console : console.log, table : console.table, warn : console.warn } : new AcLog ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_toCamelCase()" ), StringChat$$M_i18n ( cx, "New log started because 'cx.log' is missing in function call." ) )

  }

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_toCamelCase()" ), StringChat$$M_i18n ( cx, "arguments" ), arguments.length > 0 ? JSON.stringify ( Array.from ( arguments ) ) : undefined );

  // Data. Input parameters. Defaults.

  if ( typeof str !== "string" ) return null;

  // Logic.

  const $0V_length = str.length;

  const $0A_return = [ ];

  let fl_capNext = false, fl_first = true;

  for ( let i = 0; i < $0V_length; i++ ) {

    const $0V_char = str[ i ];

    if ( $0V_char === " " || $0V_char === "-" || $0V_char === "_" ) fl_capNext = true;
    
    else {

      if ( fl_first ) {

        $0A_return.push ( $0V_char.toLowerCase ( ) );

        fl_first = false;

      }

      else $0A_return.push ( fl_capNext ? $0V_char.toUpperCase ( ) : $0V_char.toLowerCase ( ) );

      fl_capNext = false;

    }

  }

  const $0V_return = $0A_return.join ( "" );

  // Done. Log everything and get out of here.

  if ( cx.debug ) cx.log.oneliner ( cx, StringChat$$M_i18n ( cx, "SnippetFileName.js" ), StringChat$$M_i18n ( cx, "String$$M_toCamelCase()" ), StringChat$$M_i18n ( cx, "return" ), $0V_return );

  return $0V_return;

}

// Logic. The missing log class for Node.js // Version Rating. 11/2.

class AcLog {

  constructor ( cx, ... args ) {

    const $0A_timestamp = DateCache$$M_now ( cx );

    this.timestamp = $0A_timestamp;

    // Logic. Add first line.

    const $0V_msg = args.pop ( );

    args.push ( ... $0A_timestamp );

    // Logic. Faster than template literal when performance matters

    this.lines = [ ":: [" + args.join ( "][" ) + "] " + $0V_msg ];

  }

  append ( cx, log ) {

    if ( log?.lines?.length > 0 ) this.lines.push ( ... log.lines );

  }

  // Logic. Function to measure execution time.

  benchmark ( cx, filename, fname, fn, iterations, params = [ ] ) {

    if ( typeof fn !== "function" ) return this.log ( StringChat$$M_i18n ( cx, "Benchmark skipped because of an invalid function." ));
    
    if ( !Number.isSafeInteger ( iterations ) || iterations < 1 ) return this.log ( StringChat$$M_i18n ( cx, "Benchmark skipped because of invalid iterations." ));

    if ( !Array.isArray ( params ) ) return this.log ( StringChat$$M_i18n ( cx, "Benchmark skipped because of invalid params." ));

    const $0V_start = performance.now ( );

    for ( let i = 0; i < iterations; i++ ) try { fn ( ... params ); } catch { }

    const $0V_end = performance.now ( );

    this.oneliner ( StringChat$$M_i18n ( cx, filename ), StringChat$$M_i18n ( cx, fname + "().arguments" ), JSON.stringify ( params ) );
    
    this.oneliner ( StringChat$$M_i18n ( cx, filename ), StringChat$$M_i18n ( cx, fname + "()", "x" + iterations ), (( $0V_end - $0V_start ) / iterations ).toFixed ( 6 ) + " ms per call" );

  }

  console ( cx, str ) {

    // Avoid JSON.stringify unless absolutely necessary

    if ( typeof str !== "string" ) {

      try { str = JSON.stringify ( str ); }

      catch { str = "[Unserializable]"; }

    }

    this.lines.push ( ">> " + str );

    // Logic. Only log if console exists.

    console?.log?. ( str );

  }

  inspect ( cx, obj ) {

    const $0V_inspected = Node$$M_Util.inspect ( obj, { depth: null, colors: false } );

    const $0V_formatted = $0V_inspected.replace ( "/\n/g", "\n``   " );

    this.lines.push ( "``   " + $0V_formatted );

  }

  oneliner ( cx, ... args ) {

    const $0V_msg = args.pop ( );

    this.lines.push ( ":: [" + args.join ( "][" ) + "] " + $0V_msg );

  }

  table ( cx, ... args ) {

    console?.table?. ( ... args );

    return this.console ( ... args );

  }

  warn ( cx, ... args ) {

    console?.warn?. ( ... args );

    return this.console ( ... args );

  }

  write ( cx ) {

    this.lines.push ( "--" );

    const $0V_novel = this.lines.join ( "\n" );

    if ( Settings$$F_writeLogToConsole ) console.log ( $0V_novel );

    if ( !$$F_isBrowserStandaloneConsole && Settings$$F_writeLogToFile ) {

      const $0V_pathToWriteOut = Settings$$V_pathToLogBinDirectory + "\\" + this.timestamp.join ( "." ) + Settings$$V_pathToLogBinDirectoryFileExtensionFemale;

      Node$$M_FileSystem.writeFile ( $0V_pathToWriteOut, $0V_novel, { flag: 'wx', encoding : "utf-8" } ).then (( ) => { } ).catch (
        function ( error ) {

          throw error;

        }
      );

    }

  }

  // Logic. Compile writes in to a zip archive and .log.txt file. // Version Rating. 5/2.

  static archive = function ( cx ) {

    return Node$$M_FileSystem.readdir ( Settings$$V_pathToLogBinDirectory ).then (
      function ( files ) {

        files = files.filter ( file => file.endsWith ( Settings$$V_pathToLogBinDirectoryFileExtensionFemale )).sort ( );

        return new Promise (
          function ( resolve, reject ) {

            // Logic. Do file names.

            try { const $0V_timestamp = parseInt ( files[ 0 ].match ( /[0-9]+/ )[ 0 ] ); }

            catch ( error ) {

              const $0V_message = StringChat$$M_i18n ( cx, "[AcLog.js][archive()] Unable to parse timestamp from bin filename. Archive aborted prematurely." );

              throw new Error ( $0V_message );

            }

            const $0V_timestring = String$$M_filestart ( cx, $0V_timestamp );

            const $0V_pathToLogFileOut = Settings$$V_pathToLogDirectory + "\\" + $0V_timestring + Settings$$V_pathToLogBinDirectoryFileExtensionFemale;

            const $0V_pathToZipFileOut = Settings$$V_pathToLogDirectory + "\\" + $0V_timestring + ".zip";

            // Logic. Create a writable stream for the zip file and single log text file.

            const $0O_archive = Node$$M_Archiver ( "zip", { zlib: { level: 9 } } );
            
            const $0O_streamToLogFileOut = Node$$M_FileSystemStreams.createWriteStream ( $0V_pathToLogFileOut );

            const $0O_streamToZipFileOut = Node$$M_FileSystemStreams.createWriteStream ( $0V_pathToZipFileOut );

            // Logic. Pipe data to the archive file. Start slowly.
            
            $0O_streamToZipFileOut.on ( "close",
              function ( ) {

                console.log ( StringChat$$M_i18n ( cx, "[AcLog.js][archive()] Compiled log archive successfully written to disk in .zip format using component log files from bin directory." ) );

                resolve ( files );

              }
            );
            
            $0O_archive.on ( "error", reject );
            
            $0O_archive.on ( "warning", reject );

            $0O_archive.pipe ( $0O_streamToZipFileOut );

            // Logic. Next file.
            
            const $0M_processNextFile = function ( i ) {

              // Logic. Close streams and exit if done.

              if ( i >= files.length ) {

                $0O_streamToLogFileOut.end ( );

                console.log ( StringChat$$M_i18n ( cx, "[AcLog.js][archive()] Compiled log text file successfully written to disk in .txt format using component log files from bin directory." ) );

                $0O_archive.finalize ( );

                return;

              }

              // Logic. Create a readable stream for the next file.

              const $0V_pathToTxtFileIn = Settings$$V_pathToLogBinDirectory + "\\" + files[ i ];
                  
              const $0O_streamFromTxtFileIn = Node$$M_FileSystemStreams.createReadStream ( $0V_pathToTxtFileIn );

              // Logic. Pipe file into both ZIP and concatenated output

              $0O_streamFromTxtFileIn.pipe ( $0O_streamToLogFileOut, { end: false } );

              $0O_archive.append ( $0O_streamFromTxtFileIn, { name: files[ i ] } );

              // Logic. End of file.

              $0O_streamFromTxtFileIn.on ( "end",
                function ( ) {
                
                  // Logic. Add newline between files.

                  $0O_streamToLogFileOut.write ( "\n" );

                  $0M_processNextFile ( i + 1 );

                }
              );

              $0O_streamFromTxtFileIn.on ( "error", reject );

            }

            // Logic. Start at the first file.

            $0M_processNextFile ( 0 );

        });

      }
    )

    // Logic. Delete all bin files.

    .then (
      function ( files ) {

        return Promise.all ( files.map (
          function ( file ) {

            Node$$M_FileSystem.unlink ( Settings$$V_pathToLogBinDirectory + "\\" + file );

          }
        ));

      }
    )

    .catch (
      function ( error ) {

        // Logic. No files in the directory.

        // Logic. Filename doesn't include numbers (aka no timestamp in filename)

        // Logic. Streams and/or pipes error in fs read/write during zip.

        console.log ( error.message );

        console.log ( Node$$M_Util.inspect ( error, { depth: null, colors: false } ) );

      }
    );

  }

}

$$O_global.AcLog = AcLog;

// Module Test.

let cx = { };

StringSet$$M_add ( cx, "az", "abcdefghijklmnopqrstuvwxyz" );

StringSet$$M_add ( cx, "AZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );

StringSet$$M_add ( cx, "09", "0123456789" );

StringSet$$M_add ( cx, "azAZ09", "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" );

console.log ( String.set );

// Start the auto-updating cache.

DateCache$$M_start ( cx );

// Start the built in i18n chat library.

StringChat$$M_start ( cx );

// Logic. Run some tests.

Array$$M_combinations ( cx, [ 1, 2, 3, 4 ] );

const $0A_bigDataArray = [

  { band : "Blackpink", members : [ "Kim () Ji-soo", "Jennie () Kim", "Roseanne () Park", "Lalisa () Manobal" ], albums : [ "Born Pink", "Forever" ] },

  { band : "Spice Girls", members : [ "Mel () B", "Melanie () C", "Emma () Bunton", "Geri () Halliwell", "Victoria () Beckham" ], albums : [ "Spice", "Spiceworld", "Forever" ] },

];

let bigDataObject = Array$$M_toObject ( cx, $0A_bigDataArray );

let bigDataMap = { key : null, lead : [ "members", 0 ] };

bigDataObject = Object$$M_map ( cx, bigDataObject, bigDataMap );

bigDataMap = { key : 55, band : [ "band" ] };

bigDataObject = Object$$M_map ( cx, bigDataObject, bigDataMap );

bigDataMap = { key : [ "members", 1 ], members : [ "members" ], albums : [ "albums" ] };

bigDataObject = Object$$M_map ( cx, bigDataObject, bigDataMap );

bigDataMap = { "#" : [ "albums" ] };

bigDataObject = Object$$M_map ( cx, bigDataObject, bigDataMap );

console.log ( bigDataObject );

let bigDataHashlist = Object$$M_toHashlist ( cx, bigDataObject );

console.log ( bigDataHashlist );

// cx.log.write ( );

console.log ( ":: [AcSetup.js][String$$M_random()] " + String$$M_random ( cx, ) );

console.log ( ":: [AcSetup.js][String$$M_random()] " + String$$M_random ( cx, 4 ) );

console.log ( ":: [AcSetup.js][String$$M_random()] " + String$$M_random ( cx, 40, undefined, "array" ) );

console.log ( ":: [AcSetup.js][String$$M_random()] " + String$$M_random ( cx, 40, "09" ) );

console.log ( ":: [AcSetup.js][String$$M_random()] " + String$$M_random ( cx, 40, "AZ", "array" ) );

module.exports = {

  Array$$M_combinations,

  Array$$M_toObject,

  DateCache$$M_now,

  NumberMs$$V_second,

  NumberMs$$V_minute,

  NumberMs$$V_hour,

  NumberMs$$V_day,

  ObjectDeep$$M_freeze,

  ObjectDeep$$M_get,

  ObjectDeep$$M_set,

  Object$$M_isObject,

  Object$$M_map,

  Object$$M_toHashlist,

  StringChat$$M_i18n,

  String$$M_filestart,

  String$$M_random,

  StringSet$$M_add,

  String$$M_toCamelCase

}