var searchIndex={};
searchIndex["spandex"] = {"doc":"This crate contains all the tools we need to generate nice…","i":[[4,"Error","spandex","The error type of the library.",null,null],[13,"CannotReadCurrentDir","","Cannot read current directory.",0,null],[13,"NoConfigFile","","No spandex.toml was found.",0,null],[13,"FreetypeError","","Error while dealing with freetype.",0,null],[13,"PrintpdfError","","Error while dealing with printpdf.",0,null],[13,"FontNotFound","","The specified font was not found.",0,null],[13,"FontWithoutName","","The specified font has no name or no style.",0,null],[13,"HyphenationLoadError","","An error occured while loading an hyphenation dictionnary.",0,null],[13,"IoError","","Another io error occured.",0,null],[13,"DexError","","Some error occured while parsing a dex file.",0,null],[5,"build","","Compiles a spandex project.",null,[[["config"]],["result"]]],[0,"document","","This module allows to create beautiful documents.",null,null],[3,"Window","spandex::document","The window that is the part of the page on which we're…",null,null],[12,"x","","The x coordinate of the window, in pt.",1,null],[12,"y","","The y coordinate of the window, in pt.",1,null],[12,"width","","The width of the window, in pt.",1,null],[12,"height","","The height of the window, in pt.",1,null],[3,"Document","","This struct contains the pdf document.",null,null],[0,"configuration","","This module defines the basic configuration of a document…",null,null],[3,"PtVisitor","spandex::document::configuration","Visitor for the `Pt` structure.",null,null],[3,"Config","","Holds the configuration of a document, including various…",null,null],[12,"title","","The title of the document.",2,null],[12,"page_width","","The width of the page of the document.",2,null],[12,"page_height","","The height of the page of the document.",2,null],[12,"top_margin","","The top margin of the document.",2,null],[12,"left_margin","","The left margin of the document.",2,null],[12,"text_width","","The text width of the document.",2,null],[12,"text_height","","The text height of the document.",2,null],[12,"input","","The path to the first file of the spandex content.",2,null],[5,"serialize_pt","","Serializes a `Pt` structure.",null,[[["pt"],["serializer"]],["result"]]],[5,"deserialize_pt","","Deserializes a `Pt` structure.",null,[[["deserializer"]],[["pt"],["result",["pt"]]]]],[11,"with_title","","Creates a default configuration with a title.",2,[[["str"]],["config"]]],[11,"init","","Creates a document and a font maanger from the config.",2,[[["self"]],["cresult"]]],[0,"counters","spandex::document","Logic for recursive counters in a document for titles and…",null,null],[3,"Counters","spandex::document::counters","The struct that manages the counters for the document.",null,null],[12,"counters","","The counters.",3,null],[11,"new","","Creates a new empty counters.",3,[[],["counters"]]],[11,"increment","","Increases the corresponding counter and returns it if it…",3,[[["self"],["usize"]],["usize"]]],[11,"counter","","Returns a specific value of a counter.",3,[[["self"],["usize"]],["usize"]]],[11,"new","spandex::document","Creates a new pdf document from its name and its size in pt.",4,[[["str"],["pt"],["window"],["into",["pt"]]],["document"]]],[11,"inner","","Returns a reference to the inner pdf document.",4,[[["self"]],["pdfdocumentreference"]]],[11,"inner_mut","","Returns a mutable reference to the inner pdf document.",4,[[["self"]],["pdfdocumentreference"]]],[11,"render","","Renders an AST to the document.",4,[[["ast"],["fontconfig"],["pt"],["self"]]]],[11,"write_content","","Writes content on the document.",4,[[["str"],["fontconfig"],["pt"],["self"]]]],[11,"write_paragraph","","Writes a paragraph on the document.",4,[[["standard"],["ast"],["fontconfig"],["pt"],["self"]]]],[11,"write_line","","Writes a line in the document.",4,[[["font"],["pt"],["self"]]]],[11,"new_line","","Goes to the beginning of the next line.",4,[[["pt"],["self"]]]],[11,"new_page","","Creates a new page and append it to the document.",4,[[["self"]]]],[11,"save","","Saves the document into a file.",4,[[["path"],["asref",["path"]]]]],[0,"fonts","spandex","This module contains everything that helps us dealing with…",null,null],[3,"Font","spandex::fonts","A font that contains the printpdf object font needed to…",null,null],[0,"configuration","","Configuration for a `Font` used to typeset a document.",null,null],[3,"FontConfig","spandex::fonts::configuration","A font configuration for a document.",null,null],[12,"regular","","The regular font.",5,null],[12,"bold","","The bold font.",5,null],[12,"italic","","The italic font.",5,null],[12,"bold_italic","","The bold italic font.",5,null],[11,"for_style","","Returns the font corresponding to the style.",5,[[["self"],["fontstyle"]],["font"]]],[0,"manager","spandex::fonts","Font manager that detects, loads and handles the different…",null,null],[3,"FontManager","spandex::fonts::manager","This struct holds the different fonts.",null,null],[11,"init","","Creates a new font manager, with the default fonts.",6,[[["document"]],[["result",["fontmanager"]],["fontmanager"]]]],[11,"add_font","","Adds a new font to the font manager.",6,[[["self"],["document"]],["result"]]],[11,"get","","Returns a reference font if it is present in the font…",6,[[["str"],["self"]],[["font"],["option",["font"]]]]],[11,"config","","Creates a font config.",6,[[["str"],["self"]],[["result",["fontconfig"]],["fontconfig"]]]],[11,"default_config","","Returns the default configuration for computer modern fonts.",6,[[["self"]],["fontconfig"]]],[0,"styles","spandex::fonts","Different style variants of a `Font`.",null,null],[3,"FontStyle","spandex::fonts::styles","A style for a font. It can be bold, italic, both or none.",null,null],[12,"bold","","Whether the bold is activated or not.",7,null],[12,"italic","","Whether the italic is activated or not.",7,null],[11,"regular","","Creates a new regular font style.",7,[[],["fontstyle"]]],[11,"bold","","Adds the bold style to the font.",7,[[],["fontstyle"]]],[11,"italic","","Adds the italic style to the font.",7,[[],["fontstyle"]]],[11,"unbold","","Removes the bold style from the font.",7,[[],["fontstyle"]]],[11,"unitalic","","Removes the italic style from the font.",7,[[],["fontstyle"]]],[11,"from_file","spandex::fonts","Creates a font from a path to a file.",8,[[["document"],["path"],["library"],["asref",["path"]]],[["result",["font"]],["font"]]]],[11,"from_bytes","","Creates a font from a byte array.",8,[[["library"],["document"]],[["result",["font"]],["font"]]]],[11,"char_width","","Computes the width of a char of the font at a specified…",8,[[["pt"],["self"],["char"]],["pt"]]],[11,"text_width","","Computes the text width of the font at a specified size.",8,[[["str"],["pt"],["self"]],["pt"]]],[11,"printpdf","","Returns a reference to the printpdf font.",8,[[["self"]],["indirectfontref"]]],[0,"layout","spandex","Logic for laying out the various pieces that make up a…",null,null],[3,"Glyph","spandex::layout","A glyph with its font style.",null,null],[12,"glyph","","The content of the word.",9,null],[12,"font","","The font style of the word.",9,null],[12,"scale","","The size of the font.",9,null],[0,"constants","","Various constants used for laying out the items of a…",null,null],[17,"DASH_GLYPH","spandex::layout::constants","The glyph that represents a char.",null,null],[17,"SPACE_WIDTH","","The width a whitespace.",null,null],[17,"DEFAULT_LINE_LENGTH","","The default length of a line if no desired length is…",null,null],[17,"MIN_COST","","The minimal cost of a penalty to count as a legal…",null,null],[17,"MAX_COST","","The maximal cost of a penalty to count as a legal…",null,null],[17,"ADJACENT_LOOSE_TIGHT_PENALTY","","The additional cost that should be added to a penalty when…",null,null],[17,"MIN_ADJUSTMENT_RATIO","","Minimum adjustment ratio to consider a breakpoint is legal.",null,null],[17,"MAX_ADJUSTMENT_RATIO","","Maximal adjustment ratio to consider a breakpoint is legal.",null,null],[17,"PLUS_INFINITY","","An infinite length in points.",null,null],[17,"IDEAL_SPACING","","The ideal spacing between two words.",null,null],[0,"paragraphs","spandex::layout","Logic for laying out a paragraph.",null,null],[3,"Paragraph","spandex::layout::paragraphs","Holds a list of items describing a paragraph.",null,null],[12,"items","","Sequence of items representing the structure of the…",10,null],[0,"engine","","Mathematical logic for typesetting a sequence of words…",null,null],[5,"algorithm","spandex::layout::paragraphs::engine","Finds the optimal sequence of breakpoints that minimize…",null,[[["paragraph"]],[["usize"],["vec",["usize"]]]]],[5,"positionate_items","","Generates a list of positioned items from a list of items…",null,[[],[["vec",["positioneditem"]],["vec",["vec"]]]]],[0,"graph","spandex::layout::paragraphs","Structure used in the graph part of the line breaking…",null,null],[3,"Node","spandex::layout::paragraphs::graph","Aggregates various measures up to and from a feasible…",null,null],[12,"index","","Index of the item represented by the node, within the…",11,null],[12,"line","","Line at which the item lives within the paragraph.",11,null],[12,"fitness","","The fitness class of the item represented by the node.",11,null],[12,"total_width","","Total width from the previous breakpoint to this one.",11,null],[12,"total_stretch","","Total stretchability from the previous breakpoint to this…",11,null],[12,"total_shrink","","Total shrinkability from the previous breakpoint to this…",11,null],[12,"total_demerits","","Accumulated demerits from previous breakpoints.",11,null],[0,"items","spandex::layout::paragraphs","Various blocks holding information and specifications…",null,null],[3,"Item","spandex::layout::paragraphs::items","Top abstraction of an item, which is a specification for a…",null,null],[12,"width","","The width of the item in scaled units.",12,null],[12,"content","","The type of the item.",12,null],[3,"PositionedItem","","Holds the information of an item that's ready to be…",null,null],[12,"index","","The index of the item within the list of items that make…",13,null],[12,"line","","The index of the line on which this item is to be rendered.",13,null],[12,"horizontal_offset","","The horizontal offset of the item.",13,null],[12,"width","","The (potentially adjusted) width this item should be…",13,null],[12,"glyph","","The glyph that should be layed out within this item.",13,null],[4,"Content","","Possible available types for an item.",null,null],[13,"BoundingBox","","A bounding box refers to something that is meant to be…",14,null],[13,"Glue","","Glue is a blank space which can see its width altered in…",14,null],[12,"stretchability","spandex::layout::paragraphs::items::Content","How inclined the glue is to stretch from its natural…",14,null],[12,"shrinkability","","How inclined the glue is to shrink from its natural width,…",14,null],[13,"Penalty","spandex::layout::paragraphs::items","Penalty is a potential place to end a line and step to…",14,null],[12,"value","spandex::layout::paragraphs::items::Content","The \"cost\" of the penalty.",14,null],[12,"flagged","","Whether or not the penalty is considered as flagged.",14,null],[11,"from_glyph","spandex::layout::paragraphs::items","Creates a box for a particular glyph and font.",12,[[["glyph"]],["item"]]],[11,"glue","","Creates some glue.",12,[[["pt"]],["item"]]],[11,"penalty","","Creates a penalty.",12,[[["pt"],["f64"],["bool"]],["item"]]],[0,"justification","spandex::layout::paragraphs","This module contains the trait and implementation of…",null,null],[3,"NaiveJustifier","spandex::layout::paragraphs::justification","A naive justifier, that goes to the next line once a word…",null,null],[3,"LatexJustifier","","The LaTeX style justifier.",null,null],[8,"Justifier","","An algorithm that justifies a paragraph.",null,null],[10,"justify","","Justifies the paragraph passed as parameter.",15,[[["pt"],["paragraph"]],[["vec"],["vec",["vec"]]]]],[0,"ligatures","spandex::layout::paragraphs","This module contains the functions related to ligatures.",null,null],[5,"ligature","spandex::layout::paragraphs::ligatures","Ligates a string.",null,[[["str"]],["string"]]],[0,"utils","spandex::layout::paragraphs","Set of utility functions for manipulating ASTs, the line…",null,null],[0,"ast","spandex::layout::paragraphs::utils","Utility functions for manipulating an abstract syntax tree…",null,null],[5,"itemize_ast","spandex::layout::paragraphs::utils::ast","Parses an AST into a sequence of items.",null,[[["standard"],["ast"],["fontconfig"],["pt"]],["paragraph"]]],[5,"itemize_ast_aux","","Parses an AST into a sequence of items.",null,[[["standard"],["ast"],["paragraph"],["fontconfig"],["pt"],["fontstyle"]]]],[0,"linebreak","spandex::layout::paragraphs::utils","Utility functions for the various stages of the line…",null,null],[3,"Measures","spandex::layout::paragraphs::utils::linebreak","Accumulator to hold the three key related measures.",null,null],[12,"width","","Measure of the width accumulated so far.",16,null],[12,"shrinkability","","Measure of the shrinkability accumulated so far.",16,null],[12,"stretchability","","Measure of the stretchability accumulated so far.",16,null],[5,"compute_adjustment_ratio","","Computes the adjusment ratio of a line of items, based on…",null,[[["pt"]],["f64"]]],[5,"compute_adjustment_ratios_with_breakpoints","","Computes the adjustment ratios of all lines given a set of…",null,[[],[["vec",["f64"]],["f64"]]]],[5,"compute_demerits","","Computes the demerits of a line based on its accumulated…",null,[[["f64"]],["f64"]]],[5,"compute_fitness","","Computes the fitness class of a line based on its…",null,[[["f64"]],["i64"]]],[5,"is_forced_break","","Checks whether or not a given item encodes a forced…",null,[[["item"]],["bool"]]],[5,"find_legal_breakpoints","","Finds all the legal breakpoints within a paragraph. A…",null,[[["paragraph"]],[["usize"],["vec",["usize"]]]]],[5,"create_node_for_feasible_breakpoint","","Handles a feasible breakpoint and adds it to the current…",null,[[["node"],["usize"],["item"],["f64"],["measures"]],["node"]]],[5,"get_measures_to_next_box","","Computes the accumulated measures from the current…",null,[[["item"],["usize"]],["measures"]]],[0,"paragraphs","spandex::layout::paragraphs::utils","Utility functions for manipulating and typesetting a…",null,null],[5,"add_word_to_paragraph","spandex::layout::paragraphs::utils::paragraphs","Adds a word to a buffer.",null,[[["standard"],["vec",["glyph"]],["paragraph"],["glyph"]]]],[5,"glue_from_context","","Returns the glue based on the spatial context of the cursor.",null,[[["glyph"],["option",["glyph"]],["pt"]],["item"]]],[5,"get_line_length","","Returns the length of the line of given index, from a list…",null,[[["usize"]],["pt"]]],[11,"new","spandex::layout::paragraphs","Instantiates a new paragraph.",10,[[],["paragraph"]]],[11,"push","","Pushes an item at the end of the paragraph.",10,[[["self"],["item"]]]],[11,"iter","","Returns an iterator to the items of the paragraph.",10,[[["self"]],[["item"],["iter",["item"]]]]],[11,"new","spandex::layout","Creates a new word from a string and a font style.",9,[[["pt"],["font"],["char"]],["glyph"]]],[0,"parser","spandex","This crate contains the parser for spandex.",null,null],[3,"Position","spandex::parser","A position is a span but without the reference to the…",null,null],[12,"line","","The line number of the position.",17,null],[12,"column","","The column number of the position.",17,null],[12,"offset","","The offset from the beginning of the string.",17,null],[3,"Parsed","","An ast that was successfully parsed.",null,null],[12,"ast","","The parsed ast.",18,null],[12,"warnings","","The warnings that were produced.",18,null],[5,"position","","Returns the position of a span.",null,[[["span"]],["position"]]],[0,"ast","","This module contains everything related to the ast.",null,null],[4,"Ast","spandex::parser::ast","The abstract syntax tree representing the parsed file.",null,null],[13,"Title","","A title.",19,null],[12,"level","spandex::parser::ast::Ast","The level of the title.",19,null],[12,"children","","The content of the title.",19,null],[13,"Bold","spandex::parser::ast","Some bold content.",19,null],[13,"Italic","","Some italic content.",19,null],[13,"InlineMath","","A math inlinemath.",19,null],[13,"Text","","Some text.",19,null],[13,"Paragraph","","A paragraph.",19,null],[13,"File","","Content stored in a specific file.",19,null],[13,"Newline","","An empty line.",19,null],[13,"Error","","An error.",19,null],[13,"Warning","","A warning.",19,null],[11,"children","","Returns the children of the ast, if any.",19,[[["self"]],[["vec"],["option",["vec"]]]]],[11,"errors","","Returns all the errors contained in the ast.",19,[[["self"]],[["emptyerror"],["vec",["emptyerror"]]]]],[11,"warnings","","Returns all the errors contained in the ast.",19,[[["self"]],[["emptywarning"],["vec",["emptywarning"]]]]],[11,"print_debug","","Pretty prints the ast.",19,[[["str"],["formatter"],["self"],["bool"]],["result"]]],[0,"combinators","spandex::parser","This module contains all the functions needed for parsing.",null,null],[5,"should_stop","spandex::parser::combinators","Returns true if the character passed as parameter changes…",null,[[["char"]],["bool"]]],[5,"error","","Creates an error.",null,[[["errortype"],["span"]],["ast"]]],[5,"warning","","Creates a warning.",null,[[["span"],["warningtype"]],["ast"]]],[5,"parse_bold","","Parses some bold content. `# use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_italic","","Parses some italic content. `# use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_inline_math","","Parses some math inline math. `# use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_delimited","","Parses a delimited element.",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_comment","","Parses a comment. `# use spandex::parser::ast::Ast; # use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_any","","Parses some multiline inline content.",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_group","","Parses some text content. `# use…",null,[[["span"]],[["iresult",["span","vec"]],["span"],["vec",["ast"]]]]],[5,"parse_paragraph","","Parses a paragraph of text content. `# use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_single_line","","Parses a title on a single line. `# use…",null,[[["span"]],[["iresult",["span","vec"]],["span"],["vec",["ast"]]]]],[5,"parse_title_level","","Parses the hashes from the level of a title. `# use…",null,[[["span"]],[["span"],["usize"],["iresult",["span","usize"]]]]],[5,"parse_title","","Parses a whole title. `# use spandex::parser::ast::Ast; #…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"get_block","","Gets a block of content. `# use spandex::parser::ast::Ast;…",null,[[["span"]],[["iresult",["span","span"]],["span"]]]],[5,"parse_block_content","","Parses a block of content. `# use…",null,[[["span"]],[["span"],["iresult",["span","ast"]],["ast"]]]],[5,"parse_content","","Parses a whole dex file.",null,[[["str"]],[["iresult",["span","vec"]],["span"],["vec",["ast"]]]]],[5,"parse","","Parses a whole dex file from a name.",null,[[["path"],["asref",["path"]]],[["error"],["parsed"],["result",["parsed","error"]]]]],[0,"error","spandex::parser","This module contains everything related to parsing errors.",null,null],[3,"EmptyError","spandex::parser::error","An error that occured during the parsing.",null,null],[12,"position","","The position of the error.",20,null],[12,"ty","","The type of the error.",20,null],[3,"Errors","","A struct that contains many errors that references a file.",null,null],[12,"path","","The path to the corresponding file.",21,null],[12,"content","","The content that produced the errors.",21,null],[12,"errors","","The errors that were produced.",21,null],[4,"ErrorType","","The different types errors that can occur while parsing.",null,null],[13,"UnmatchedStar","","A star for bold content is unmatched.",22,null],[13,"UnmatchedSlash","","A slash for italic content is unmatched.",22,null],[13,"UnmatchedDollar","","A dollar for a inlinemath is unmatched.",22,null],[13,"MultipleLinesTitle","","A title is on multiple lines.",22,null],[11,"title","","Returns the title of the error.",22,[[],["str"]]],[11,"detail","","Returns the detail of the error.",22,[[],["str"]]],[11,"note","","Returns an optional note.",22,[[],[["option",["str"]],["str"]]]],[0,"utils","spandex::parser","This module contains some functions that will help us…",null,null],[5,"replicate","spandex::parser::utils","Replicates a char n times.",null,[[["char"],["usize"]],["string"]]],[5,"is_new_line","","Returns true if the char at specified byte is a \\n.",null,[[["str"],["usize"]],["bool"]]],[5,"compute_column","","Computes the column of a specified byte depending on its…",null,[[["str"],["usize"]],["usize"]]],[5,"previous_new_line","","Finds the previous \\n char.",null,[[["str"],["usize"]],["usize"]]],[5,"next_new_line","","Finds the next \\n char.",null,[[["str"],["usize"]],["usize"]]],[0,"warning","spandex::parser","This module contains everything related to parse warnings.",null,null],[3,"EmptyWarning","spandex::parser::warning","An warning that occured during the parsing.",null,null],[12,"position","","The position of the warning.",23,null],[12,"ty","","The type of the warning.",23,null],[3,"Warnings","","A struct that contains many warnings that references a file.",null,null],[12,"path","","The path to the corresponding file.",24,null],[12,"content","","The content that produced the warnings.",24,null],[12,"warnings","","The warnings produced.",24,null],[4,"WarningType","","The different types of warning that can occur.",null,null],[13,"ConsecutiveStars","","Two consecutive stars only seperated by whitespaces.",25,null],[11,"title","","Returns the title of the warning.",25,[[],["str"]]],[11,"detail","","Returns the defail of the warning.",25,[[],["str"]]],[11,"note","","Returns a potential note.",25,[[],[["option",["str"]],["str"]]]],[6,"Span","spandex::parser","This type will allow us to know where we are while we're…",null,null],[6,"Result","spandex","The result type of the library.",null,null],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","spandex::document","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","spandex::document::configuration","",26,[[["t"]],["t"]]],[11,"into","","",26,[[],["u"]]],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"try_into","","",26,[[],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"type_id","","",26,[[["self"]],["typeid"]]],[11,"fmt","","",26,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","spandex::document::counters","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","spandex::fonts","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","spandex::fonts::configuration","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","spandex::fonts::manager","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","spandex::fonts::styles","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","spandex::layout","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","spandex::layout::paragraphs","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","spandex::layout::paragraphs::graph","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"equivalent","","",11,[[["k"],["self"]],["bool"]]],[11,"from","spandex::layout::paragraphs::items","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"into","","",14,[[],["u"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"try_into","","",14,[[],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"type_id","","",14,[[["self"]],["typeid"]]],[11,"from","spandex::layout::paragraphs::justification","",27,[[["t"]],["t"]]],[11,"into","","",27,[[],["u"]]],[11,"try_from","","",27,[[["u"]],["result"]]],[11,"try_into","","",27,[[],["result"]]],[11,"borrow","","",27,[[["self"]],["t"]]],[11,"borrow_mut","","",27,[[["self"]],["t"]]],[11,"type_id","","",27,[[["self"]],["typeid"]]],[11,"from","","",28,[[["t"]],["t"]]],[11,"into","","",28,[[],["u"]]],[11,"try_from","","",28,[[["u"]],["result"]]],[11,"try_into","","",28,[[],["result"]]],[11,"borrow","","",28,[[["self"]],["t"]]],[11,"borrow_mut","","",28,[[["self"]],["t"]]],[11,"type_id","","",28,[[["self"]],["typeid"]]],[11,"from","spandex::layout::paragraphs::utils::linebreak","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","spandex::parser","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,[[["self"],["t"]]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"equivalent","","",17,[[["k"],["self"]],["bool"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[],["u"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"try_into","","",18,[[],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"type_id","","",18,[[["self"]],["typeid"]]],[11,"from","spandex::parser::ast","",19,[[["t"]],["t"]]],[11,"into","","",19,[[],["u"]]],[11,"to_owned","","",19,[[["self"]],["t"]]],[11,"clone_into","","",19,[[["self"],["t"]]]],[11,"to_string","","",19,[[["self"]],["string"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"try_into","","",19,[[],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"type_id","","",19,[[["self"]],["typeid"]]],[11,"equivalent","","",19,[[["k"],["self"]],["bool"]]],[11,"from","spandex::parser::error","",20,[[["t"]],["t"]]],[11,"into","","",20,[[],["u"]]],[11,"to_owned","","",20,[[["self"]],["t"]]],[11,"clone_into","","",20,[[["self"],["t"]]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"try_into","","",20,[[],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"type_id","","",20,[[["self"]],["typeid"]]],[11,"equivalent","","",20,[[["k"],["self"]],["bool"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"into","","",21,[[],["u"]]],[11,"to_string","","",21,[[["self"]],["string"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"try_into","","",21,[[],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"type_id","","",21,[[["self"]],["typeid"]]],[11,"from","","",22,[[["t"]],["t"]]],[11,"into","","",22,[[],["u"]]],[11,"to_owned","","",22,[[["self"]],["t"]]],[11,"clone_into","","",22,[[["self"],["t"]]]],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"try_into","","",22,[[],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"type_id","","",22,[[["self"]],["typeid"]]],[11,"equivalent","","",22,[[["k"],["self"]],["bool"]]],[11,"from","spandex::parser::warning","",23,[[["t"]],["t"]]],[11,"into","","",23,[[],["u"]]],[11,"to_owned","","",23,[[["self"]],["t"]]],[11,"clone_into","","",23,[[["self"],["t"]]]],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"try_into","","",23,[[],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"type_id","","",23,[[["self"]],["typeid"]]],[11,"equivalent","","",23,[[["k"],["self"]],["bool"]]],[11,"from","","",24,[[["t"]],["t"]]],[11,"into","","",24,[[],["u"]]],[11,"to_string","","",24,[[["self"]],["string"]]],[11,"try_from","","",24,[[["u"]],["result"]]],[11,"try_into","","",24,[[],["result"]]],[11,"borrow","","",24,[[["self"]],["t"]]],[11,"borrow_mut","","",24,[[["self"]],["t"]]],[11,"type_id","","",24,[[["self"]],["typeid"]]],[11,"from","","",25,[[["t"]],["t"]]],[11,"into","","",25,[[],["u"]]],[11,"to_owned","","",25,[[["self"]],["t"]]],[11,"clone_into","","",25,[[["self"],["t"]]]],[11,"try_from","","",25,[[["u"]],["result"]]],[11,"try_into","","",25,[[],["result"]]],[11,"borrow","","",25,[[["self"]],["t"]]],[11,"borrow_mut","","",25,[[["self"]],["t"]]],[11,"type_id","","",25,[[["self"]],["typeid"]]],[11,"equivalent","","",25,[[["k"],["self"]],["bool"]]],[11,"justify","spandex::layout::paragraphs::justification","",27,[[["pt"],["paragraph"]],[["vec"],["vec",["vec"]]]]],[11,"justify","","",28,[[["pt"],["paragraph"]],[["vec"],["vec",["vec"]]]]],[11,"from","spandex","",0,[[["error"]],["error"]]],[11,"from","","",0,[[["error"]],["error"]]],[11,"from","","",0,[[["error"]],["error"]]],[11,"from","","",0,[[["error"]],["error"]]],[11,"from","","",0,[[["errors"]],["error"]]],[11,"clone","spandex::document::configuration","",2,[[["self"]],["config"]]],[11,"clone","spandex::document::counters","",3,[[["self"]],["counters"]]],[11,"clone","spandex::document","",1,[[["self"]],["window"]]],[11,"clone","spandex::fonts::styles","",7,[[["self"]],["fontstyle"]]],[11,"clone","spandex::layout::paragraphs::graph","",11,[[["self"]],["node"]]],[11,"clone","spandex::layout","",9,[[["self"]],["glyph"]]],[11,"clone","spandex::parser::ast","",19,[[["self"]],["ast"]]],[11,"clone","spandex::parser::error","",22,[[["self"]],["errortype"]]],[11,"clone","","",20,[[["self"]],["emptyerror"]]],[11,"clone","spandex::parser::warning","",25,[[["self"]],["warningtype"]]],[11,"clone","","",23,[[["self"]],["emptywarning"]]],[11,"clone","spandex::parser","",17,[[["self"]],["position"]]],[11,"default","spandex::document::counters","",3,[[],["counters"]]],[11,"default","spandex::layout::paragraphs","",10,[[],["paragraph"]]],[11,"cmp","spandex::layout::paragraphs::graph","",11,[[["node"],["self"]],["ordering"]]],[11,"eq","","",11,[[["node"],["self"]],["bool"]]],[11,"eq","spandex::parser::ast","",19,[[["ast"],["self"]],["bool"]]],[11,"ne","","",19,[[["ast"],["self"]],["bool"]]],[11,"eq","spandex::parser::error","",22,[[["errortype"],["self"]],["bool"]]],[11,"eq","","",20,[[["self"],["emptyerror"]],["bool"]]],[11,"ne","","",20,[[["self"],["emptyerror"]],["bool"]]],[11,"eq","spandex::parser::warning","",25,[[["self"],["warningtype"]],["bool"]]],[11,"eq","","",23,[[["emptywarning"],["self"]],["bool"]]],[11,"ne","","",23,[[["emptywarning"],["self"]],["bool"]]],[11,"eq","spandex::parser","",17,[[["self"],["position"]],["bool"]]],[11,"ne","","",17,[[["self"],["position"]],["bool"]]],[11,"partial_cmp","spandex::layout::paragraphs::graph","",11,[[["node"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"fmt","spandex::fonts::styles","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::fonts","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::layout::paragraphs::graph","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::layout::paragraphs::items","",12,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",14,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",13,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::layout::paragraphs","",10,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::layout","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::ast","",19,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::error","",22,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",20,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",21,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::warning","",25,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",23,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",24,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser","",17,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",18,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::document::counters","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::ast","",19,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::error","",21,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex::parser::warning","",24,[[["formatter"],["self"]],["result"]]],[11,"fmt","spandex","",0,[[["formatter"],["self"]],["result"]]],[11,"hash","spandex::layout::paragraphs::graph","",11,[[["self"],["h"]]]],[11,"expecting","spandex::document::configuration","",26,[[["formatter"],["self"]],["result"]]],[11,"visit_u8","","",26,[[["u8"]],["result"]]],[11,"visit_u16","","",26,[[["u16"]],["result"]]],[11,"visit_u32","","",26,[[["u32"]],["result"]]],[11,"visit_u64","","",26,[[["u64"]],["result"]]],[11,"visit_i8","","",26,[[["i8"]],["result"]]],[11,"visit_i16","","",26,[[["i16"]],["result"]]],[11,"visit_i32","","",26,[[["i32"]],["result"]]],[11,"visit_i64","","",26,[[["i64"]],["result"]]],[11,"visit_f32","","",26,[[["f32"]],["result"]]],[11,"visit_f64","","",26,[[["f64"]],["result"]]],[11,"serialize","","",2,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",2,[[["__d"]],["result"]]]],"p":[[4,"Error"],[3,"Window"],[3,"Config"],[3,"Counters"],[3,"Document"],[3,"FontConfig"],[3,"FontManager"],[3,"FontStyle"],[3,"Font"],[3,"Glyph"],[3,"Paragraph"],[3,"Node"],[3,"Item"],[3,"PositionedItem"],[4,"Content"],[8,"Justifier"],[3,"Measures"],[3,"Position"],[3,"Parsed"],[4,"Ast"],[3,"EmptyError"],[3,"Errors"],[4,"ErrorType"],[3,"EmptyWarning"],[3,"Warnings"],[4,"WarningType"],[3,"PtVisitor"],[3,"NaiveJustifier"],[3,"LatexJustifier"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);