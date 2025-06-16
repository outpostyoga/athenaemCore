const $$F_isBrowserStandaloneConsole = false;

// Logic. Cached timestamps for insane performance.
 
// -- Version Rating. 15/2.

// -- Note. No Function$$_wrap or Log$$_ ... to avoid recursion errors.

const $$M_now = function now ( cx ) {

  return [ Object$$O_memcache.date.now, String ( ++ Object$$O_memcache.date.counter ).padStart ( 10, "0" ), String$$M_random ( cx, 10 ) ];

}

// Data. Module settings. Will be merged into Object$$M_settings in Start.js.

const $$O_settings = { 
  
  categories : [
      
    "animalBiologyAndCulture",
    
    "artDesignAndAesthetics",
    
    "energyWeatherAndClimate",
    
    "historyTimeAndMaps",

    "humanBiologyAndCulture",

    "landscapeGeologyAndGeography",

    "languageLiteratureAndSymbols",

    "mathMusicAndEngineering",

    "moneySocietyandCivilization",

    "philosophyReligionAndEthics",

    "physicsChemistryAndMatter",

    "plantBiologyAndCulture",

    "spaceAstronomyAndExploration"

  ],

  learning : [ 

    "1 Textbooks",

    "2 Labs and Field Trips",

    "3 Class Notes, Assignments and Exams",

    "4 Highlighted Epiphanies and Comprehension (Theory)",

    "5 Highlighted Epiphanies and Comprehension (Practical)"

  ],

  schools : [

    "In A Library",

    "In A Museum",

    "In A School",

    "In The Wild"

  ],

  tags : [

    "athlete",

    "cooking",
    
    "culture",
    
    "dancing",
    
    "engineering",

    "eternal",

    "eureka",

    "failarmy",

    "family",
    
    "fishing",

    "health",

    "jedi",
    
    "landscape",
    
    "lover",
    
    "meat",

    "mimic",

    "money",

    "music",

    "oneHitWonder",

    "polymath",
    
    "reuse",

    "schadenfreude",

    "skyfire",

    "space",
    
    "supermodel",
    
    "wedding"
      
  ]

}

module.exports = {

  Array$$M_now : $$M_now,

  Array$$O_settings : $$O_settings
  
}

// Logic. Weirdly compliant circular require without partial feedback. Put them at the bottom.

const {
  
  Function$$M_wrap } = $$F_isBrowserStandaloneConsole ? {
  
  "Function$$M_wrap" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./Function.js" );

const {
  
  Object$$O_memcache,

  Object$$O_settings } = $$F_isBrowserStandaloneConsole ? {

  "Object$$O_memcache" : {
    
    date : {
      
      counter : -1,
      
      now : Date.now ( )
    
    }
  
  },

  "Object$$O_settings" : { }

} : require ( "./Object.js" );

const {

  String$$M_random } = $$F_isBrowserStandaloneConsole ? {

    "String$$M_random" : ( ) => { throw new Error ( "Unavailable." ); }

} : require ( "./String.js" );