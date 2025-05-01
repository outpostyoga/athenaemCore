const $$F_isBrowserStandaloneConsole = false;

// Logic. Incoming error codes. Like a firewall.

const $$O_htmlErrorCodes = {

  "400" : { "title" : "Bad Request", "description" : "The server could not understand the request due to invalid syntax." },
  
  "401" : { "title" : "Unauthorized", "description" : "Authentication is required, or the provided credentials are invalid." },
  
  "403" : { "title" : "Forbidden", "description" : "The client is authenticated but does not have permission to access the resource." },
  
  "404" : { "title" : "Not Found", "description" : "The requested resource could not be found." },

  "405" : { "title" : "Method Not Allowed", "description" : "The HTTP method used is not allowed for the requested resource." },

  "408" : { "title" : "Request Timeout", "description" : "The server timed out waiting for the client to send a request." },

  "429" : { "title" : "Too Many Requests", "description" : "The client has sent too many requests in a given amount of time (rate limiting)." },

  "500" : { "title" : "Internal Server Error", "description" : "A generic error indicating that the server encountered an unexpected condition." },
  
  "501" : { "title" : "Not Implemented", "description" : "The server does not support the functionality required to fulfill the request." },
  
  "502" : { "title" : "Bad Gateway", "description" : "The server, acting as a gateway or proxy, received an invalid response from an upstream server." },
  
  "503" : { "title" : "Service Unavailable", "description" : "The server is currently unable to handle the request due to temporary overload or maintenance." },
  
  "504" : { "title" : "Gateway Timeout", "description" : "The server, acting as a gateway or proxy, did not receive a timely response from an upstream server." },

  "507" : { "title" : "Insufficient Storage", "description" : "The server cannot store the representation needed to complete the request." }

}

// Data. File mime types for http connections and general use.

const $$O_htmlMimeTypes = {

  ".aiff" : "audio/x-aiff",

  "aiff" : "audio/x-aiff",

  ".arj" : "application/x-arj-compressed",

  "arj" : "application/x-arj-compressed",

  ".asf" : "video/x-ms-asf",

  "asf" : "video/x-ms-asf",

  ".asx" : "video/x-ms-asx",

  "asx" : "video/x-ms-asx",

  ".au" : "audio/ulaw",

  "au" : "audio/ulaw",

  ".avi" : "video/x-msvideo",

  "avi" : "video/x-msvideo",

  ".bcpio" : "application/x-bcpio",

  "bcpio" : "application/x-bcpio",

  ".ccad" : "application/clariscad",

  "ccad" : "application/clariscad",

  ".cod" : "application/vnd.rim.cod",

  "cod" : "application/vnd.rim.cod",

  ".com" : "application/x-msdos-program",

  "com" : "application/x-msdos-program",

  ".cpio" : "application/x-cpio",

  "cpio" : "application/x-cpio",

  ".cpt" : "application/mac-compactpro",

  "cpt" : "application/mac-compactpro",

  ".csh" : "application/x-csh",

  "csh" : "application/x-csh",

  ".css" : "text/css",

  "css" : "text/css",

  ".csv" : "text/csv",

  "csv" : "text/csv",

  ".deb" : "application/x-debian-package",

  "deb" : "application/x-debian-package",

  ".dl" : "video/dl",

  "dl" : "video/dl",

  ".doc" : "application/msword",

  "doc" : "application/msword",

  ".drw" : "application/drafting",

  "drw" : "application/drafting",

  ".dvi" : "application/x-dvi",

  "dvi" : "application/x-dvi",

  ".dwg" : "application/acad",

  "dwg" : "application/acad",

  ".dxf" : "application/dxf",

  "dxf" : "application/dxf",

  ".dxr" : "application/x-director",

  "dxr" : "application/x-director",

  ".etx" : "text/x-setext",

  "etx" : "text/x-setext",

  ".ez" : "application/andrew-inset",

  "ez" : "application/andrew-inset",

  ".fli" : "video/x-fli",

  "fli" : "video/x-fli",

  ".flv" : "video/x-flv",

  "flv" : "video/x-flv",

  ".gif" : "image/gif",

  "gif" : "image/gif",

  ".gl" : "video/gl",

  "gl" : "video/gl",

  ".gtar" : "application/x-gtar",

  "gtar" : "application/x-gtar",

  ".gz" : "application/x-gzip",

  "gz" : "application/x-gzip",

  ".hdf" : "application/x-hdf",

  "hdf" : "application/x-hdf",

  ".hqx" : "application/mac-binhex40",

  "hqx" : "application/mac-binhex40",

  ".html" : "text/html",

  "html" : "text/html",

  ".ice" : "x-conference/x-cooltalk",

  "ice" : "x-conference/x-cooltalk",

  ".ico" : "image/x-icon",

  "ico" : "image/x-icon",

  ".ief" : "image/ief",

  "ief" : "image/ief",

  ".igs" : "model/iges",

  "igs" : "model/iges",

  ".ips" : "application/x-ipscript",

  "ips" : "application/x-ipscript",

  ".ipx" : "application/x-ipix",

  "ipx" : "application/x-ipix",

  ".jad" : "text/vnd.sun.j2me.app-descriptor",

  "jad" : "text/vnd.sun.j2me.app-descriptor",

  ".jar" : "application/java-archive",

  "jar" : "application/java-archive",

  ".jpeg" : "image/jpeg",

  "jpeg" : "image/jpeg",

  ".jpg" : "image/jpeg",

  "jpg" : "image/jpeg",

  ".js" : "text/javascript",

  "js" : "text/javascript",

  ".json" : "application/json",

  "json" : "application/json",

  ".latex" : "application/x-latex",

  "latex" : "application/x-latex",

  ".lsp" : "application/x-lisp",

  "lsp" : "application/x-lisp",

  ".lzh" : "application/octet-stream",

  "lzh" : "application/octet-stream",

  ".m" : "text/plain",

  "m" : "text/plain",

  ".m3u" : "audio/x-mpegurl",

  "m3u" : "audio/x-mpegurl",

  ".man" : "application/x-troff-man",

  "man" : "application/x-troff-man",

  ".me" : "application/x-troff-me",

  "me" : "application/x-troff-me",

  ".midi" : "audio/midi",

  "midi" : "audio/midi",

  ".mif" : "application/x-mif",

  "mif" : "application/x-mif",

  ".mime" : "www/mime",

  "mime" : "www/mime",

  ".movie" : "video/x-sgi-movie",

  "movie" : "video/x-sgi-movie",

  ".mp4" : "video/mp4",

  "mp4" : "video/mp4",

  ".mpg" : "video/mpeg",

  "mpg" : "video/mpeg",

  ".mpga" : "audio/mpeg",

  "mpga" : "audio/mpeg",

  ".ms" : "application/x-troff-ms",

  "ms" : "application/x-troff-ms",

  ".nc" : "application/x-netcdf",

  "nc" : "application/x-netcdf",

  ".oda" : "application/oda",

  "oda" : "application/oda",

  ".og" : "text/plain",

  "og" : "text/plain",

  ".ogm" : "application/ogg",

  "ogm" : "application/ogg",

  ".pbm" : "image/x-portable-bitmap",

  "pbm" : "image/x-portable-bitmap",

  ".pdf" : "application/pdf",

  "pdf" : "application/pdf",

  ".pgm" : "image/x-portable-graymap",

  "pgm" : "image/x-portable-graymap",

  ".pgn" : "application/x-chess-pgn",

  "pgn" : "application/x-chess-pgn",

  ".pgp" : "application/pgp",

  "pgp" : "application/pgp",

  ".pm" : "application/x-perl",

  "pm" : "application/x-perl",

  ".png" : "image/png",

  "png" : "image/png",

  ".pnm" : "image/x-portable-anymap",

  "pnm" : "image/x-portable-anymap",

  ".ppm" : "image/x-portable-pixmap",

  "ppm" : "image/x-portable-pixmap",

  ".ppz" : "application/vnd.ms-powerpoint",

  "ppz" : "application/vnd.ms-powerpoint",

  ".pre" : "application/x-freelance",

  "pre" : "application/x-freelance",

  ".prt" : "application/pro_eng",

  "prt" : "application/pro_eng",

  ".ps" : "application/postscript",

  "ps" : "application/postscript",

  ".qt" : "video/quicktime",

  "qt" : "video/quicktime",

  ".ra" : "audio/x-realaudio",

  "ra" : "audio/x-realaudio",

  ".rar" : "application/x-rar-compressed",

  "rar" : "application/x-rar-compressed",

  ".ras" : "image/x-cmu-raster",

  "ras" : "image/x-cmu-raster",

  ".rgb" : "image/x-rgb",

  "rgb" : "image/x-rgb",

  ".rm" : "audio/x-pn-realaudio",

  "rm" : "audio/x-pn-realaudio",

  ".rpm" : "audio/x-pn-realaudio-plugin",

  "rpm" : "audio/x-pn-realaudio-plugin",

  ".rtf" : "text/rtf",

  "rtf" : "text/rtf",

  ".rtx" : "text/richtext",

  "rtx" : "text/richtext",

  ".scm" : "application/x-lotusscreencam",

  "scm" : "application/x-lotusscreencam",

  ".set" : "application/set",

  "set" : "application/set",

  ".sgml" : "text/sgml",

  "sgml" : "text/sgml",

  ".sh" : "application/x-sh",

  "sh" : "application/x-sh",

  ".shar" : "application/x-shar",

  "shar" : "application/x-shar",

  ".silo" : "model/mesh",

  "silo" : "model/mesh",

  ".sit" : "application/x-stuffit",

  "sit" : "application/x-stuffit",

  ".skt" : "application/x-koan",

  "skt" : "application/x-koan",

  ".smil" : "application/smil",

  "smil" : "application/smil",

  ".snd" : "audio/basic",

  "snd" : "audio/basic",

  ".sol" : "application/solids",

  "sol" : "application/solids",

  ".spl" : "application/x-futuresplash",

  "spl" : "application/x-futuresplash",

  ".src" : "application/x-wais-source",

  "src" : "application/x-wais-source",

  ".stl" : "application/SLA",

  "stl" : "application/SLA",

  ".stp" : "application/STEP",

  "stp" : "application/STEP",

  ".sv4cpio" : "application/x-sv4cpio",

  "sv4cpio" : "application/x-sv4cpio",

  ".sv4crc" : "application/x-sv4crc",

  "sv4crc" : "application/x-sv4crc",

  ".svg" : "image/svg+xml",

  "svg" : "image/svg+xml",

  ".swf" : "application/x-shockwave-flash",

  "swf" : "application/x-shockwave-flash",

  ".tar" : "application/x-tar",

  "tar" : "application/x-tar",

  ".tcl" : "application/x-tcl",

  "tcl" : "application/x-tcl",

  ".tex" : "application/x-tex",

  "tex" : "application/x-tex",

  ".texinfo" : "application/x-texinfo",

  "texinfo" : "application/x-texinfo",

  ".tgz" : "application/x-tar-gz",

  "tgz" : "application/x-tar-gz",

  ".tiff" : "image/tiff",

  "tiff" : "image/tiff",

  ".tr" : "application/x-troff",

  "tr" : "application/x-troff",

  ".tsi" : "audio/TSP-audio",

  "tsi" : "audio/TSP-audio",

  ".tsp" : "application/dsptype",

  "tsp" : "application/dsptype",

  ".tsv" : "text/tab-separated-values",

  "tsv" : "text/tab-separated-values",

  ".txt" : "text/plain",

  "txt" : "text/plain",

  ".unv" : "application/i-deas",

  "unv" : "application/i-deas",

  ".ustar" : "application/x-ustar",

  "ustar" : "application/x-ustar",

  ".vcd" : "application/x-cdlink",

  "vcd" : "application/x-cdlink",

  ".vda" : "application/vda",

  "vda" : "application/vda",

  ".vivo" : "video/vnd.vivo",

  "vivo" : "video/vnd.vivo",

  ".vrm" : "x-world/x-vrml",

  "vrm" : "x-world/x-vrml",

  ".wav" : "audio/x-wav",

  "wav" : "audio/x-wav",

  ".wax" : "audio/x-ms-wax",

  "wax" : "audio/x-ms-wax",

  ".wma" : "audio/x-ms-wma",

  "wma" : "audio/x-ms-wma",

  ".wmv" : "video/x-ms-wmv",

  "wmv" : "video/x-ms-wmv",

  ".wmx" : "video/x-ms-wmx",

  "wmx" : "video/x-ms-wmx",

  ".wrl" : "model/vrml",

  "wrl" : "model/vrml",

  ".wvx" : "video/x-ms-wvx",

  "wvx" : "video/x-ms-wvx",

  ".xbm" : "image/x-xbitmap",

  "xbm" : "image/x-xbitmap",

  ".xlw" : "application/vnd.ms-excel",

  "xlw" : "application/vnd.ms-excel",

  ".xml" : "text/xml",

  "xml" : "text/xml",

  ".xpm" : "image/x-xpixmap",

  "xpm" : "image/x-xpixmap",

  ".xwd" : "image/x-xwindowdump",

  "xwd" : "image/x-xwindowdump",

  ".xyz" : "chemical/x-pdb",

  "xyz" : "chemical/x-pdb",

  ".zip" : "application/zip",

  "zip" : "application/zip",

  ".woff" : "application/font-woff",

  "woff" : "application/font-woff",

  ".woff2" : "application/font-woff2",

  "woff2" : "application/font-woff2",

  ".otf" : "application/font-otf",

  "otf" : "application/font-otf",

  ".ttf" : "application/font-ttf",

  "ttf" : "application/font-ttf" };

// Data. The operational language for the system.

const $$V_i18n = "en";

// Data. Directory to serve files from.

const $$V_pathToBaseDirectory = __dirname;

// Data. Directory to archive files to.

const $$V_pathToLogDirectory = $$V_pathToBaseDirectory + "\\log";

// Data. Directory to write files to.

const $$V_pathToLogBinDirectory = $$V_pathToLogDirectory + "\\bin";

// Data. Bin file extension. Female.

const $$V_pathToLogBinDirectoryFileExtensionFemale = ".txt";

// Data. Bin file extension. Male.

const $$V_pathToLogBinDirectoryFileExtensionMale = "txt";

// Flag. Where to put the log output.

const $$F_writeLogToConsole = true;

// Flag. Where to put the log output.

const $$F_writeLogToFile = false;

// Logic. Export settings.

module.exports = {
  
  Settings$$O_htmlErrorCodes : $$O_htmlErrorCodes,

  Settings$$O_htmlMimeTypes : $$O_htmlMimeTypes,

  Settings$$V_i18n : $$V_i18n,

  Settings$$V_pathToBaseDirectory : $$V_pathToBaseDirectory,

  Settings$$V_pathToLogDirectory : $$V_pathToLogDirectory,

  Settings$$V_pathToLogBinDirectory : $$V_pathToLogBinDirectory,

  Settings$$V_pathToLogBinDirectoryFileExtensionFemale : $$V_pathToLogBinDirectoryFileExtensionFemale,

  Settings$$F_writeLogToConsole : $$F_writeLogToConsole,

  Settings$$F_writeLogToFil : $$F_writeLogToFile

};