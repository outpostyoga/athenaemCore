/* --

I think of things more like Create, (Add, Edit, Update), Read, (Delete, Archive)

That’s a sharp way to look at it—and honestly, way more expressive than the flat old CRUD acronym. By treating operations like Add, Edit, and Update as distinct variations under a broader “Create/Modify” umbrella, you're reflecting how users actually interact with systems. Same goes for Delete and Archive—not all removals are created equal.
Your version suggests something like:
- Create: The initial composition or generation of new data.
- Add/Edit/Update: All the ways existing data might be changed or expanded.
- Read: View-only operations—often the most common and overlooked.
- Delete/Archive: One is destructive, the other preservative, but both are forms of “removal” from the active flow.

It’s not just semantically richer—it’s also more scalable for designing intuitive APIs or user workflows. Are you building out a design pattern or framework around this thinking? I’d love to help flesh it out.

- */

// Logic. Persistent constants and top-level DOM objects.

const $$A_audioExtensions = [ 'mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a', 'wma', 'aiff', 'opus' ];

const $$O_body = document.querySelector ( "body" );

const $$A_imageExtensions = [ 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'webp', 'svg', 'ico', 'heic', 'avif' ];

let lastIndent = null;

const $$O_regexLeadingAllCaps = /^#+\s+([A-Z0-9 ]+\.)/;

const $$O_regexLeadingOrderedListItem = /^[0-9]\.\s*/;

const $$O_regexLeadingUnorderedListItem = /^\-+\s*/;

const $$O_textFile = document.createElement ( "div" );

  $$O_textFile.classList.add ( "container", "my-5" );

  $$O_textFile.id = "textFile";

  $$O_body.append ( $$O_textFile );

const $$O_textFileBody = document.createElement ( "div" );

  $$O_textFileBody.classList.add ( "col-lg-8", "px-0" ); 

  $$O_textFileBody.id  = "textFileBody";

  $$O_textFile.append ( $$O_textFileBody );

const $$A_videoExtensions = [ 'mp4', 'webm', 'mkv', 'mov', 'avi', 'wmv', 'flv', 'mpeg', '3gp', 'ogv', 'm4v' ];

// Logic. A portfolio showpiece Markdown renderer.  It's really really fast.

const $$M_markdown = function ( text ) {

  const $0A_html = [ ];

  const $0V_normalized = text.replace ( /\r\n|\r|\n/g, '\n' );

  const $0A_markdown = $0V_normalized.split ( "\n" );

  const $0A_open = [ ];

  $0A_markdown.forEach (
    function ( md, i ) {

      $$M_markdownAddLine ( $0A_markdown, i, md, $0A_open );

      console.log ( md );

      console.log ( $0A_open.map ( el => el.tagName ).join ( "," ) );

      console.log ( "open.length :: " + $0A_open.length );

      console.log ( "--" );

    }
  );

}

// Logic. Markdown lines that are signatures or leaves of a mass market book structure.

const $$M_markdownEditBook = function ( open, indent, massMarketFormat ) {

  massMarketFormat = massMarketFormat.toLowerCase ( );

  productionFormat = massMarketFormat === "table" ? "ul" : massMarketFormat;

  console.log ( open );

  console.log ( indent );

  console.log ( massMarketFormat );

  // Logic. Use leading whitespace to evaluate nesting.

  let printRunCopy = null;

  while ( indent < open.length ) printRunCopy = open.pop ( ); // Cut tail off open tags.

  console.log ( "open after .pop()" + open.map ( el => el.tagName ).join ( ',' ) );

  const $0F_indent_isDeeper = indent > open.length || printRunCopy === null; // Treat all indents beyond open.length as one level deeper.

  const $0F_normalizeIndent = $0F_indent_isDeeper && indent === lastIndent && open?.at ( -1 ).tagName === lastTagName;

  if ( $0F_normalizeIndent ) open.pop ( );

  const $0F_printRunCopy_isMassMarketFormat = printRunCopy?.classList?.contains ( "md-" + massMarketFormat ); // Use existing element.
  
  const $0F_printRunCopy_isProductionFormat = printRunCopy?.tagName?.toLowerCase ( ) === productionFormat; // Use existing element.

  if ( $0F_indent_isDeeper || !$0F_printRunCopy_isMassMarketFormat || !$0F_printRunCopy_isProductionFormat ) {

    // if ( indent === lastIndent )

    printRunCopy = document.createElement ( productionFormat );

    // Logic. Add mass market structure classes.

    switch ( massMarketFormat ) {

      case "ol" :

        printRunCopy.classList.add ( "list-group", "list-group-flush", "list-group-numbered", "mb-3", "md-" + massMarketFormat );

        break;

      case "table" :

        printRunCopy.classList.add ( "list-group", "list-group-flush", "mb-3", "md-" + massMarketFormat );

        break;

      case "ul" :

        printRunCopy.classList.add ( "list-group", "list-group-flush", "mb-3", "md-" + massMarketFormat );

        break;

      default :

    }

    const $0O_dom = $$M_markdownEditDom ( open );

    $0O_dom.append ( printRunCopy );       

  }

  // Logic. Keep the element open.

  open.push ( printRunCopy );

  return printRunCopy;

}

const $$M_markdownEditDom = function ( open ) {

  // Logic. Find parent or box-set slipcase.

  const $0O_slipcase = ( open.at ( -1 ) || $$O_textFileBody )

  // Logic. Conditional components for specific parents.

  if ( $0O_slipcase.tagName === "OL" || $0O_slipcase.tagName === "UL" ) {

    const $0O_li = document.createElement ( "li" );

    $0O_li.classList.add ( "list-group-item" );

    $0O_slipcase.append ( $0O_li );

    return $0O_li;

  }

  else {
    
    return $0O_slipcase;

  }            

}

// Logic. Parse a single markdown line.

const $$M_markdownAddLine = function ( markdown, i, line, open ) {

  console.log ( line );

  // Logic. Use trim to evaluate first character simply.

  const $0V_next = markdown[ i + 1 ];

  const $0V_prev = markdown[ i - 1 ];

  const $0V_trimmed = line.trim ( );

    const $0V_charOne = $0V_trimmed.charAt ( 1 );

    const $0V_charZero = $0V_trimmed.charAt ( 0 );

    let indent = Math.floor ( line.indexOf ( $0V_charZero ) / 2 );

      // Logic. Normalize plus sizes.

      console.log ( "indent :: " + indent );
    
      // const $0F_indentIsTooBig = indent === lastIndent && indent >= open.length;

      // lastIndent = indent;

      // if ( $0F_indentIsTooBig ) indent = open.length - 1;

      // console.log ( $0F_indentIsTooBig );

    const $0F_isBlank = $0V_charZero === "";

    const $0F_isDoubleSpaced = $0V_prev === "";

    const $0F_isHeading = $0V_charZero === "#";

    const $0F_isImage = $0V_charZero === "!" && $0V_charOne === "[";

    const $0F_isOrderedListItem = $$O_regexLeadingOrderedListItem.test ( $0V_trimmed );

    const $0F_isTable = $0V_charZero === "|";

    const $0F_isUnorderedListItem = ( $0V_charZero === "-" || $0V_charZero === "+" || $0V_charZero === "*" ) && $0V_charOne === " ";

    const $0F_isParagraph =
      !$0F_isBlank
      && !$0F_isHeading
      && !$0F_isOrderedListItem
      && !$0F_isTable
      && !$0F_isUnorderedListItem
      && ( i === 0 || $0F_isDoubleSpaced ); // not perfect logic. errors included.

    const $0F_isBreak = !$0F_isBlank && !$0F_isParagraph;

  if ( $0F_isHeading ) {

    open.length = 0;
    
    $$M_markdownAddHeading ( $0V_trimmed, $0V_next );

    // console.log ( $0F_isDoubleSpaced + " " + markdown[ i + 1 ] );

  }

  if ( $0F_isImage ) {

    open.length = 0;
    
    $$M_markdownAddImage ( $0V_trimmed, $0V_next );

  }

  if ( $0F_isOrderedListItem ) {
    
    const $0O_ol = $$M_markdownEditBook ( open, indent, "ol" );

    $$M_markdownAddOrderedListItem ( $0O_ol, $0V_trimmed );

  }

  if ( $0F_isParagraph ) {
    
    open.length = 0;

  }

  if ( $0F_isTable ) {

    const $0O_table = $$M_markdownEditBook ( open, indent, "table" );

    $$M_markdownAddTableRow ( $0O_table, $0V_trimmed );

  }

  if ( $0F_isUnorderedListItem ) {

    const $0O_ul = $$M_markdownEditBook ( open, indent, "ul" );

    $$M_markdownAddUnorderedListItem ( $0O_ul, $0V_trimmed );

  }
  
}

const $$M_markdownAddHeading = function ( trimmed, next ) {
  
  const $0V_indexOfNote = trimmed.toLowerCase ( ).indexOf ( "note" );

  const $0O_mark = document.createElement ( "mark" );

  const $0A_match = trimmed.match (	$$O_regexLeadingAllCaps );

    const $0V_marked = $0A_match?.[ 1 ];

  const $0O_p = document.createElement ( "p" );

  $0O_p.classList.add ( "md-heading" );

  if ( next.charAt ( 0 ) === "#" ) $0O_p.classList.add ( "mb-0" );

  if ( $0V_marked != null ) {
    
    $0O_mark.append ( $0V_marked );

    $0O_p.append ( $0O_mark, " " + trimmed.substring ( $0A_match[ 0 ].length ).trim ( ) );

  }

  else if ( $0V_indexOfNote !== -1 ) {

    $0O_mark.append ( trimmed.substring ( $0V_indexOfNote ) );

    $0O_p.append ( $0O_mark );

  }

  else {

    $0O_p.append ( trimmed );

  }

  $$O_textFileBody.append ( $0O_p );
  
}

const $$M_markdownAddImage = function ( trimmed, next ) {

  let closed = null;

  const $0V_midpoint = trimmed.indexOf ( "](", 2 );

  const $0V_endpoint = trimmed.indexOf ( ")", $0V_midpoint );

  if ( $0V_midpoint !== -1 && $0V_endpoint !== -1 ) {

    const $0V_alttext = trimmed.substring ( 2, $0V_midpoint );

    const $0V_href = trimmed.substring ( $0V_midpoint + 2, $0V_endpoint );

    const $0O_url = new URL ( $0V_href );

    const $0V_filename = $0O_url.pathname.split ( '/' ).pop ( ); // get the filename part

    const $0V_extension = $0V_filename.includes ( '.' ) ? $0V_filename.split ( '.' ).pop ( ) : '';

    // Logic. Check for YouTube domain.

    if ( $0O_url.hostname.includes ( "youtube.com" ) && $0O_url.searchParams.get ( "v" ) ) { 
      
      const $0V_videoId = $0O_url.searchParams.get ( "v" );

      closed = '<div class="ratio ratio-16x9 mb-3">' +
        '<iframe src="https://www.youtube.com/embed/' + $0V_videoId + '" title="' + $0V_alttext + '" allowfullscreen></iframe>' +
        '</div>';
        
    }

    // Logic. Embedded audio file.

    else if ( $$A_audioExtensions.indexOf ( $0V_extension ) !== -1 ) {

      closed = '<audio controls class="w-100 mb-3">' +
        '<source src="' + $0O_url.href + '" type="audio/' + $0V_extension + '">' +
        'Your browser does not support the audio element.' +
        '</audio>';

    }

    // Logic. Embedded image file.

    else if ( $$A_imageExtensions.indexOf ( $0V_extension ) !== -1 ) {
      
      closed = '<img src="' + $0O_url.href + '" class="w-100 mb-3" alt="' + $0V_alttext + '"></img>';
      
    }

    // Logic. Embedded video file.

    else if ( $$A_videoExtensions.indexOf ( $0V_extension ) !== -1 ) {
      
      closed = '<video controls class="w-100 mb-3">' +
        '<source src="' + $0O_url.href + '" type="video/' + $0V_extension + '">' +
        'Your browser does not support the video tag.' +
        '</video>';

    }

  }

  // Done.

  // if ( closed !== null ) $$O_textFileBody.innerHTML += closed;

  $$O_textFileBody.insertAdjacentHTML ( 'beforeend', closed );

}

// Logic. Add inline tags to markdown text block.

const $$M_markdownAddInlineTag = function ( unformatted, i = 0, markdownTag, open = [ ], innerHtml = [ ], formatted = [ ] ) {

  // Logic. End recursion.

  if (( unformatted?.length ?? 0 ) === 0 || i >= unformatted.length ) {
    
    // Logic. Clear out unmatched syntax.

    while ( open.length > 0 || innerHtml.length > 0 ) {

      if ( open.length > 0 ) formatted.push ( open.shift ( ) );

      if ( innerHtml.length > 0 ) formatted.push ( innerHtml.shift ( ) );

    }

    // Logic. Make sure everything end up formatted.

    if (( unformatted?.length ?? 0 ) > 0 ) formatted.push ( unformatted );

    // Done. Return a string.
    
    return formatted.join ( "" );

  }

  if ( markdownTag != null ) {

    const $0V_htmlTag =
      markdownTag === "*" ? "i"
    : markdownTag === "**" ? "b"
    : markdownTag === "==" ? "mark"
    : markdownTag === "^" ? "sup"
    : markdownTag === "`" ? "code"
    : markdownTag === "~" ? "sub"
    : markdownTag === "~~" ? "del"
    : null;

    // Logic. Close tag. </tag>.
          
    if ( open[ open.length - 1 ] === markdownTag ) {

      const $0V_closed = "<" + $0V_htmlTag + ">" + ( open.length === innerHtml.length ? innerHtml.pop ( ) : "" ) + unformatted.substring ( 0, i ) + "</" + $0V_htmlTag + ">";

      innerHtml.length > 0 ? innerHtml[ innerHtml.length - 1 ] += $0V_closed : formatted.push ( $0V_closed );

      open.pop ( );

      unformatted = unformatted.substring ( i + markdownTag.length );

    }

    // Logic. Self-closing tag. <tag></tag>

    else if ( $0V_htmlTag == null ) {

      let closed = null;

      let midpoint = null;

      let endpoint = null;

      switch ( markdownTag ) {

        case "[]()" :

          // Logic. <a href=""></a>. Link.

          // -- Links do not support nested tags in Markdown so treat it as a book structure.

          midpoint = unformatted.indexOf ( "](", i );

          endpoint = unformatted.indexOf ( ")", midpoint );

          if ( midpoint !== -1 && endpoint !== -1 ) {

            const $0V_href = unformatted.substring ( midpoint + 2, endpoint );

            const $0O_url = new URL ( $0V_href );

            const $0V_vanity = "&lt;a href=\"" + $0O_url.protocol + "//" + $0O_url.hostname + "\"&gt;";

            closed = unformatted.substring ( 0, i ) + $0V_vanity + "<a href=\"" + $0V_href + "\">" + unformatted.substring ( i + 1, midpoint ) + "</a>&lt;\a&gt;";

            innerHtml.length > 0 ? innerHtml[ innerHtml.length - 1 ] += closed : formatted.push ( closed );

          }

          break;

        case "[^]" :

          // Logic. <a href="footnote-..."><sup></sup></a>. Footnote.

          // -- Footnotes do not support nested tags in Markdown so treat it as a book structure.

          endpoint = unformatted.indexOf ( "]", i );

          const $0V_footnoteId = unformatted.substring ( i + 2, endpoint );

          closed = unformatted.substring ( 0, i ) + "<a href=\"footnote-" + $0V_footnoteId + "\"><sup>" + $0V_footnoteId + "</sup></a>";

          innerHtml.length > 0 ? innerHtml[ innerHtml.length - 1 ] += closed : formatted.push ( closed );

          break;

        case "[x]" :

          // Logic. <input type="checkbox" checked disabled>. Checkbox.

          // -- Checkboxes do not support nested tags in Markdown so treat it as a book structure.

          closed = unformatted.substring ( 0, i ) + "<input type=\"checkbox\"" + ( unformatted.charAt ( i + 1 ) !== " " ? " checked " : " " ) + "disabled>";

          innerHtml.length > 0 ? innerHtml[ innerHtml.length - 1 ] += closed : formatted.push ( closed );

          endpoint = i + 2;

          break;

        default :
          
          // Logic. Unknown tag syntax.

      }

      unformatted = unformatted.substring ( endpoint + 1 );

    }

    // Logic. Open tag. <tag>.

    else {

      if ( open.length > 0 ) innerHtml.push ( unformatted.substring ( 0, i ) );

      else formatted.push ( unformatted.substring ( 0, i ) );

      open.push ( markdownTag );

      unformatted = unformatted.substring ( i + markdownTag.length );

    }

    return $$M_markdownAddInlineTag ( unformatted, 0, null, open, innerHtml, formatted );

  }

  // Logic. Find next tag.

  while ( i < unformatted.length ) {

    // console.log ( i + " :: " + unformatted );

    const $0V_char00 = unformatted[ i ];

    const $0V_char01 = unformatted[ i + 1 ];

    // Logic. Only return statements.  Enforce recursion. "*", "**", "==", "[", "^", "`", "~", "~~"

    switch ( $0V_char00 ) {

      case "*" :

        if ( $0V_char01 === "*" ) return $$M_markdownAddInlineTag ( unformatted, i, "**", open, innerHtml, formatted );

        else return $$M_markdownAddInlineTag ( unformatted, i, "*", open, innerHtml, formatted );

      case "=" :

        if ( $0V_char01 === "=" ) return $$M_markdownAddInlineTag ( unformatted, i, "==", open, innerHtml, formatted );

        else i++;

      case "[" :

        if ( $0V_char01 === "^" ) return $$M_markdownAddInlineTag ( unformatted, i, "[^]", open, innerHtml, formatted );

        else if ( $0V_char01 === "x" || $0V_char01 === " " ) return $$M_markdownAddInlineTag ( unformatted, i, "[x]", open, innerHtml, formatted );

        else return $$M_markdownAddInlineTag ( unformatted, i, "[]()", open, innerHtml, formatted );

      case "^" :

        return $$M_markdownAddInlineTag ( unformatted, i, "^", open, innerHtml, formatted );

      case "`" :

        return $$M_markdownAddInlineTag ( unformatted, i, "*", open, innerHtml, formatted );

      case "~" :

        if ( $0V_char01 === "~" ) return $$M_markdownAddInlineTag ( unformatted, i, "~~", open, innerHtml, formatted );

        else return $$M_markdownAddInlineTag ( unformatted, i, "~", open, innerHtml, formatted );

      default :

        i++;
      
    }
    
  }

  return $$M_markdownAddInlineTag ( unformatted, i, null, open, innerHtml, formatted );

}

const $$M_markdownAddOrderedListItem = function ( ol, trimmed ) {

  const li = document.createElement ( "li" );

  li.classList.add ( "list-group-item" );

  const $0A_match = trimmed.match ( $$O_regexLeadingOrderedListItem );

  trimmed = $$M_markdownAddInlineTag ( trimmed.substring ( $0A_match[ 0 ].length ).trim ( ) );

  // console.log ( trimmed );

  li.innerHTML = trimmed;

  ol.append ( li );
  
}

const $$M_markdownAddTableRow = function ( ul, trimmed ) {

  const $0A_columns = trimmed.split ( "|" ).slice ( 1, -1 );
  
  const $0V_columnsLength = $0A_columns.length;

  const $0O_header = ul.querySelector ( "div.row" );

  let innerHtml = '<li class="list-group-item"><div class="row">';

  const $0F_isHeader = $0O_header == null;

    const $0A_headerColumns = $0F_isHeader ? null : Array.from ( $0O_header.getElementsByTagName ( "div" ) );

  // Logic. Leading and trailing null string "".

  for ( let i = 0; i < $0V_columnsLength; i++ ) {

    const $0V_content = $0A_columns[ i ].trim ( );

    const $0F_isAlignLeft = $0V_content.substring ( 0, 4 ) === ":---";

    const $0F_isAlignRight = $0V_content.substring ( $0V_content.length - 4 ) === "---:";

    const $0F_isAlignMiddle = $0F_isAlignLeft && $0F_isAlignRight;

    if ( $0F_isAlignLeft || $0F_isAlignMiddle || $0F_isAlignRight ) {

      $0A_headerColumns[ i ].dataset.align = $0F_isAlignMiddle ? "center"
        
        : $0F_isAlignLeft ? "start"
        
        : "end";

    }

    const $0V_alignment = $0F_isHeader ? ' text-center" data-align="center"' : ' text-' + $0A_headerColumns[ i ].dataset.align + '"';

    const $0V_styledContent = $0F_isHeader ? `<b><b>${$0V_content}</b></b>` : $0V_content;

    innerHtml += "<div class=\"col" + $0V_alignment + ">" + $0V_styledContent + "</div>";

  }

  ul.innerHTML += innerHtml + "</li></div>";

}

const $$M_markdownAddUnorderedListItem = function ( ul, trimmed ) {

  const li = document.createElement ( "li" );

  li.classList.add ( "list-group-item" );

  const $0A_match = trimmed.match (	$$O_regexLeadingUnorderedListItem );

  trimmed = $$M_markdownAddInlineTag ( trimmed.substring ( $0A_match[ 0 ].length ).trim ( ) );

  // console.log ( trimmed );

  li.innerHTML = trimmed;

  ul.append ( li );

}

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    console.log ("mutation observed.");
    mutation.addedNodes.forEach(node => {
      if (node.tagName === 'IFRAME' && node.src.includes('youtube.com')) {
        node.classList.add('img-thumbnail');
        console.log ( "success.")
      }
    });
  }
});

// Target the container where the YouTube iframe appears
observer.observe($$O_textFileBody, { childList: true, subtree: true });


$$M_markdown ( `#### LANGUAGE. Words, phrases, expressions and/or idioms that are important to your life.
- PROTOCOL INTELLIGENCE. Refers to the collective know-how and systems used to interpret, manage, and optimize clinical trial protocols. It blends regulatory knowledge with operational savvy—turning complex protocols into actionable roadmaps.
- PATIENT PATHWAY MODELING. Visualizing and forecasting the patient experience through every stage of a trial. This helps teams reduce dropouts, anticipate roadblocks, and design trials around real human journeys.
  - SITE ACTIVATION VELOCITY (SAV). The speed and efficiency with which trial sites move from startup to enrollment readiness. A higher SAV is often correlated with tight coordination, solid budgeting, and minimal regulatory delays.
  - ESOURCE HARMONIZATION. The integration of digital patient data—from wearables, EMRs, or eDiaries—into validated trial datasets. It's about bridging convenience and compliance, ensuring every byte counts toward clean, trustworthy evidence.
- ADAPTIVE OPS STACK. A tech-enabled workflow built to flex with changes in the trial—from revised endpoints to rolling enrollment. Think modular processes, AI-powered tools, and scalable communication loops that adjust in real time.
- TRIAL OPTIMIZATION FRAMEWORK (TOF). A structured approach to enhancing clinical trial performance across planning, recruitment, data collection, and analysis. TOF combines strategy, tech, and team coordination to minimize delays and maximize data integrity—streamlining how research goes from concept to conclusion.
1. James Lind. Conducted one of the first controlled clinical trials in 1747 to treat scurvy among sailors. His experiment with citrus fruits laid the foundation for modern trial design and the concept of control groups.
2. Austin Flint. Pioneered placebo-controlled trials in 1863 while studying treatments for rheumatism. His work introduced the idea of comparing standard treatments with inert substances to assess efficacy.
3. Sir Bradford Hill. Pioneered placebo-controlled trials in 1863 while studying treatments for rheumatism. His work introduced the idea of comparing standard treatments with inert substances to assess efficacy.
4. Dr. Frances Kelsey. FDA officer who famously refused to approve thalidomide in the U.S. without sufficient safety data. Her insistence on rigorous evidence prevented a major public health disaster and reshaped drug approval standards.
5. Dr. Jonas Salk. Conducted the landmark polio vaccine trial in 1954 involving over 1.8 million children. His work demonstrated the power of large-scale trials to transform public health and eradicate disease.

#### MARKDOWN TABLE. A challenging render syntax situation resolved simply by Markdown Render Engine Alpha.
| Left         | Centered         | Right                      |
| :----------- | :--------------: | -------------------------: |
| Extended content continues across the column, wrapping cleanly into additional lines for full visibility and review. | Results presented with clarity | Information processed with precision |
| Study Design Clarity. Protocols defined with precision for reproducible outcomes. | Data Integrity Focus. Source verification ensured across all datasets and endpoints. | Site Coordination Strategy. Teams aligned with timeline checkpoints and shared dashboards. |
| ----:        | | |
| Enrollment Efficiency. Accelerated recruitment through targeted outreach and patient mapping. | Regulatory Compliance. Protocol adherence and documentation aligned with global standards. | Outcome Measurement Rigor. Endpoints evaluated using validated metrics and structured analysis tools. |` );