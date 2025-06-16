const $$F_isBrowserStandaloneConsole = false;

// Data. Module settings. Will be merged into Object$$M_settings in Start.js.

const $$O_settings = {

  notification : {

    // Data. Phone number notification setting for admin role.

    admin : { phone : 518060587 },

    // Data. Phone number notification setting for dev role.

    dev : { phone : 3439964795 }

  },

  // Data. Usage range triggers.

  usage : { range : { minimum : 2, maximum : 120 } }

}

module.exports = {

  Number$$O_settings : $$O_settings

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