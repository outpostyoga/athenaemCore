# athenaemCore
A solid Javascript library for localhost, data files and production insanity. Version 0.1744920307919 aka Southbound.

# Rules.
Because sometimes they are the elegant solution and the result of an incredible amount of work and self-discipline.

CONSTANTS. Use `const` if possible as it is always faster. In descending performance order are `let` and `var` variables, `Object.property`, and then `Object.freeze ( Object.property ); Object.property`. Import and destructure into module constants.
- `let fl_isHotAsHell = true;` is a block scoped variable boolean
- `const $0F_isHotAsHell` is a block scoped function boolean
- `const $$F_isHotAsHell` is a local module boolean (private by default, public if declared in module.exports)
- `const Namespace$$F_isHotAsHell = true;` is an imported / exported boolean (or flag)

In our syntax, the prefixes are a nod the all caps constant standard while avoiding the frustration of that solution when constants are used more than variables. `$0A` means array, `$0F` means flag, `$0M` means method, `$0O` means object, `$0V` means value.

CRYPTO. Avoid it.  It goes up, it goes down, it represents nothing.  Look up the history of trade and fraud.  Stay safe.

ERRORS. Use the netcode version for everything. The try catch is extremely slow when you use it and negligible when present but unused.  The best solution for returning an error?
- `if ( cx.error != null ) { cx.error.messages.push ( cx.error.message = StringChat$$M_i18n ( "[AcString.js][$0M_assetTag] This is a new Error message for an old error." ) ); return null; }`

STRINGS. Javascript string concatenation is optimized for <1K characters <5 element strings and <10K loops. Otherwise arrays and `.join ( )` for the win.
- `""` is null or undefined.
- `"a"` is a character.
- `"ab"` where `"string".length > 1` is a string.

TIME. Time is always `Date.now ( )` aka UTC timestamps in milliseconds.  Fuck you.

IN DEVELOPMENT.
1. // Commuter RR - X-Wing - Fighter Class Designation 34F23 'Commander G.'
2. let jsonInputArgs = cx.debug ? JSON.stringify ( Array.from ( arguments ) ) : undefined;
3. if ( cx.debug ) cx.log.line ( "[" + $0MM_i18n ( "AcString.js" ) + "][" + $0MM_i18n ( "$0M_assetTag" ) + "] " + jsonInputArgs + " " + $0V_result );
4. In the source module, declare constants using const. Then, in the consumer module, import using destructuring with const to retain maximum performance and clarity.
