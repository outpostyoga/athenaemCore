# athenaemCore
A solid Javascript library for localhost, data files and production insanity. Version 0.1744920307919 aka Southbound.

# Rules.
Because sometimes they are the elegant solution and the result of an incredible amount of work and self-discipline.

CONST. Use them always, they are faster. Variables, then Object.property and then ( Object.freeze ( Object.property ) ).property. Import and destructure into module constants. const Namespace$$F_isHotAsHell = true is an imported boolean (or flag), const $$F_isHotAsHell is a local module boolean, const $0F_isHotAsHell is a function boolean and let fl_isHotAsHell is a block scoped variable boolean.

CRYPTO. Avoid it.  It goes up, it goes down, it represents nothing.  Look up the history of trade and fraud.  Stay safe.

STRINGS. Javascript string concatenation is optimized for <1K characters <5 element strings and <10K loops. Otherwise arrays and .join() for the win.

TIME. Time is always Date.now ( ).  UTC timestamps in milliseconds.  Fuck you.

IN DEVELOPMENT.
1. // Commuter RR - X-Wing - Fighter Class Designation 34F23 'Commander G.'
2. let jsonInputArgs = cx.debug ? JSON.stringify ( Array.from ( arguments ) ) : undefined;
3. if ( cx.debug ) cx.log.line ( "[" + $0MM_i18n ( "AcString.js" ) + "][" + $0MM_i18n ( "$0M_assetTag" ) + "] " + jsonInputArgs + " " + $0V_result );
4. In the source module, declare constants using const. Then, in the consumer module, import using destructuring with const to retain maximum performance and clarity.
