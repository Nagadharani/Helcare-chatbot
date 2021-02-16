var handlebars=function(){var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,hashSegments:29,hashSegment:30,ID:31,EQUALS:32,pathSegments:33,SEP:34,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",
14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",31:"ID",32:"EQUALS",34:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[26,1],[29,2],[29,1],[30,3],[30,3],[21,1],[33,3],[33,1]],performAction:function(a,b,e,c,h,d){a=d.length-1;switch(h){case 1:return d[a-
1];case 2:this.$=new c.ProgramNode(d[a-2],d[a]);break;case 3:this.$=new c.ProgramNode(d[a]);break;case 4:this.$=new c.ProgramNode([]);break;case 5:this.$=[d[a]];break;case 6:d[a-1].push(d[a]);this.$=d[a-1];break;case 7:this.$=new c.InverseNode(d[a-2],d[a-1],d[a]);break;case 8:this.$=new c.BlockNode(d[a-2],d[a-1],d[a]);break;case 9:this.$=d[a];break;case 10:this.$=d[a];break;case 11:this.$=new c.ContentNode(d[a]);break;case 12:this.$=new c.CommentNode(d[a]);break;case 13:this.$=new c.MustacheNode(d[a-
1][0],d[a-1][1]);break;case 14:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1]);break;case 15:this.$=d[a-1];break;case 16:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1]);break;case 17:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1],!0);break;case 18:this.$=new c.PartialNode(d[a-1]);break;case 19:this.$=new c.PartialNode(d[a-2],d[a-1]);break;case 21:this.$=[[d[a-2]].concat(d[a-1]),d[a]];break;case 22:this.$=[[d[a-1]].concat(d[a]),null];break;case 23:this.$=[[d[a-1]],d[a]];break;case 24:this.$=[[d[a]],null];
break;case 25:d[a-1].push(d[a]);this.$=d[a-1];break;case 26:this.$=[d[a]];break;case 27:this.$=d[a];break;case 28:this.$=new c.StringNode(d[a]);break;case 29:this.$=new c.HashNode(d[a]);break;case 30:d[a-1].push(d[a]);this.$=d[a-1];break;case 31:this.$=[d[a]];break;case 32:this.$=[d[a-2],d[a]];break;case 33:this.$=[d[a-2],new c.StringNode(d[a])];break;case 34:this.$=new c.IdNode(d[a]);break;case 35:d[a-2].push(d[a]);this.$=d[a-2];break;case 36:this.$=[d[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,
12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],
23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,31:[1,25],33:24},{17:26,21:23,31:[1,25],33:24},{17:27,21:23,31:[1,25],33:24},{17:28,21:23,31:[1,25],33:24},{21:29,
31:[1,25],33:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,31:[1,25],33:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,34],28:[2,34],31:[2,34],34:[1,44]},{18:[2,36],28:[2,36],31:[2,36],34:[2,36]},{18:[1,45]},{18:[1,46]},{18:[1,47]},{18:[1,48],
21:49,31:[1,25],33:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:50,31:[1,25],33:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:51,27:52,
28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,23]},{18:[2,26],28:[2,26],31:[2,26]},{18:[2,29],30:53,31:[1,54]},{18:[2,27],28:[2,27],31:[2,27]},{18:[2,28],28:[2,28],31:[2,28]},{18:[2,31],31:[2,31]},{18:[2,36],28:[2,36],31:[2,36],32:[1,55],34:[2,36]},{31:[1,56]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],
23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,57]},{18:[1,58]},{18:[2,21]},{18:[2,25],28:[2,25],31:[2,25]},{18:[2,30],31:[2,30]},{32:[1,55]},{21:59,28:[1,60],31:[1,25],33:24},{18:[2,35],28:[2,35],31:[2,35],34:[2,35]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,32],31:[2,32]},{18:[2,
33],31:[2,33]}],defaultActions:{16:[2,1],37:[2,23],51:[2,21]},parseError:function(a){throw Error(a);},parse:function(a){function b(){var c;c=e.lexer.lex()||1;typeof c!=="number"&&(c=e.symbols_[c]||c);return c}var e=this,c=[0],h=[null],d=[],q=this.table,m="",r=0,n=0,k=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};a=this.lexer.yylloc;d.push(a);if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;
for(var i,o,j,l,s={},t,p;;){j=c[c.length-1];this.defaultActions[j]?l=this.defaultActions[j]:(i==null&&(i=b()),l=q[j]&&q[j][i]);if(typeof l==="undefined"||!l.length||!l[0]){if(!k){o=[];for(t in q[j])this.terminals_[t]&&t>2&&o.push("'"+this.terminals_[t]+"'");var u="",u=this.lexer.showPosition?"Parse error on line "+(r+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+o.join(", "):"Parse error on line "+(r+1)+": Unexpected "+(i==1?"end of input":"'"+(this.terminals_[i]||i)+"'");this.parseError(u,{text:this.lexer.match,
token:this.terminals_[i]||i,line:this.lexer.yylineno,loc:a,expected:o})}if(k==3){if(i==1)throw Error(u||"Parsing halted.");n=this.lexer.yyleng;m=this.lexer.yytext;r=this.lexer.yylineno;a=this.lexer.yylloc;i=b()}for(;;){if((2).toString()in q[j])break;if(j==0)throw Error(u||"Parsing halted.");c.length-=2;h.length-=1;d.length-=1;j=c[c.length-1]}o=i;i=2;j=c[c.length-1];l=q[j]&&q[j][2];k=3}if(l[0]instanceof Array&&l.length>1)throw Error("Parse Error: multiple actions possible at state: "+j+", token: "+
i);switch(l[0]){case 1:c.push(i);h.push(this.lexer.yytext);d.push(this.lexer.yylloc);c.push(l[1]);i=null;o?(i=o,o=null):(n=this.lexer.yyleng,m=this.lexer.yytext,r=this.lexer.yylineno,a=this.lexer.yylloc,k>0&&k--);break;case 2:p=this.productions_[l[1]][1];s.$=h[h.length-p];s._$={first_line:d[d.length-(p||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(p||1)].first_column,last_column:d[d.length-1].last_column};j=this.performAction.call(s,m,n,r,this.yy,l[1],h,d);if(typeof j!==
"undefined")return j;p&&(c=c.slice(0,p*-2),h=h.slice(0,-1*p),d=d.slice(0,-1*p));c.push(this.productions_[l[1]][0]);h.push(s.$);d.push(s._$);l=q[c[c.length-2]][c[c.length-1]];c.push(l);break;case 3:return!0}}return!0}},e=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parseError)this.yy.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.match+=a;this.matched+=a;a.match(/\n/)&&this.yylineno++;this._input=this._input.slice(1);return a},unput:function(a){this._input=a+this._input;return this},more:function(){this._more=!0;return this},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},
upcomingInput:function(){var a=this.match;a.length<20&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var a,b;if(!this._more)this.match=this.yytext="";for(var e=this._currentRules(),c=0;c<e.length;c++)if(a=this._input.match(this.rules[e[c]]))if((b=a[0].match(/\n.*/g))&&
(this.yylineno+=b.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-1:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],a=this.performAction.call(this,this.yy,this,e[c],this.conditionStack[this.conditionStack.length-1]))return a;else return;if(this._input===
"")return this.EOF;else this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a!=="undefined"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},performAction:function(a,b,e){switch(e){case 0:this.begin("mu");
if(b.yytext)return 14;break;case 1:return 14;case 2:return 24;case 3:return 16;case 4:return 20;case 5:return 19;case 6:return 19;case 7:return 23;case 8:return 23;case 9:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.begin("INITIAL"),15;case 10:return 22;case 11:return 32;case 12:return 31;case 13:return 31;case 14:return 34;case 16:return this.begin("INITIAL"),18;case 17:return this.begin("INITIAL"),18;case 18:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),28;case 19:return 31;
case 20:return"INVALID";case 21:return 5}},rules:[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^[a-zA-Z0-9_-]+(?=[=} /.])/,/^./,/^$/],conditions:{mu:{rules:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],inclusive:!1},INITIAL:{rules:[0,1,21],inclusive:!0}}}}();b.lexer=e;return b}();
if(typeof require!=="undefined"&&typeof exports!=="undefined")exports.parser=handlebars,exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)},exports.main=function(b){if(!b[1])throw Error("Usage: "+b[0]+" FILE");b=typeof process!=="undefined"?require("fs").readFileSync(require("path").join(process.cwd(),b[1]),"utf8"):require("file").path(require("file").cwd()).join(b[1]).read({charset:"utf-8"});return exports.parser.parse(b)},typeof module!=="undefined"&&require.main===module&&
exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args);var Handlebars={VERSION:"1.0.beta.1"};Handlebars.Parser=handlebars;Handlebars.parse=function(b){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(b)};Handlebars.print=function(b){return(new Handlebars.PrintVisitor).accept(b)};Handlebars.helpers={};Handlebars.partials={};Handlebars.registerHelper=function(b,e,a){if(a)e.not=a;this.helpers[b]=e};
Handlebars.registerPartial=function(b,e){this.partials[b]=e};Handlebars.registerHelper("helperMissing",function(b){if(arguments.length!==2)throw Error("Could not find property '"+b+"'");});
Handlebars.registerHelper("blockHelperMissing",function(b,e,a){var a=a||function(){},f="",g=Object.prototype.toString.call(b);g==="[object Function]"&&(b=b());if(b===!0)return e(this);else if(b===!1||b==null)return a(this);else if(g==="[object Array]"){if(b.length>0){a=0;for(g=b.length;a<g;a++)f+=e(b[a])}else f=a(this);return f}else return e(b)},function(b,e){return e(b)});
Handlebars.registerHelper("each",function(b,e,a){var f="";if(b&&b.length>0)for(var a=0,g=b.length;a<g;a++)f+=e(b[a]);else f=a(this);return f});Handlebars.registerHelper("if",function(b,e,a){return!b||b==[]?a(this):e(this)});Handlebars.registerHelper("unless",function(b,e,a){return Handlebars.helpers["if"].call(this,b,a,e)});Handlebars.registerHelper("with",function(b,e){return e(b)});Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(){}};
Handlebars.log=function(b,e){Handlebars.logger.log(b,e)};
(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(b,a){this.type="program";this.statements=b;if(a)this.inverse=new Handlebars.AST.ProgramNode(a)};Handlebars.AST.MustacheNode=function(b,a,f){this.type="mustache";this.id=b[0];this.params=b.slice(1);this.hash=a;this.escaped=!f};Handlebars.AST.PartialNode=function(b,a){this.type="partial";this.id=b;this.context=a};var b=function(b,a){if(b.original!==a.original)throw new Handlebars.Exception(b.original+" doesn't match "+a.original);};Handlebars.AST.BlockNode=
function(e,a,f){b(e.id,f);this.type="block";this.mustache=e;this.program=a};Handlebars.AST.InverseNode=function(e,a,f){b(e.id,f);this.type="inverse";this.mustache=e;this.program=a};Handlebars.AST.ContentNode=function(b){this.type="content";this.string=b};Handlebars.AST.HashNode=function(b){this.type="hash";this.pairs=b};Handlebars.AST.IdNode=function(b){this.type="ID";this.original=b.join(".");for(var a=[],f=0,g=0,c=b.length;g<c;g++){var h=b[g];h===".."?f++:h==="."||h==="this"||a.push(h)}this.parts=
a;this.string=a.join(".");this.depth=f;this.isSimple=a.length===1&&f===0};Handlebars.AST.StringNode=function(b){this.type="STRING";this.string=b};Handlebars.AST.CommentNode=function(b){this.type="comment";this.comment=b}})();Handlebars.Visitor=function(){};Handlebars.Visitor.prototype={accept:function(b){return this[b.type](b)}};Handlebars.Exception=function(b){this.message=b};Handlebars.SafeString=function(b){this.string=b};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};
(function(){var b={"<":"&lt;",">":"&gt;"},e=/&(?!\w+;)|[<>]/g,a=/[&<>]/,f=function(a){return b[a]||"&amp;"};Handlebars.Utils={escapeExpression:function(b){if(b instanceof Handlebars.SafeString)return b.toString();else if(b==null||b===!1)return"";if(!a.test(b))return b;return b.replace(e,f)},isEmpty:function(a){return typeof a==="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}})();Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(b,e){b.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,invokeInverse:14,assignToHash:15,pushStringParam:16};b.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:1,lookup:1,invokeMustache:2,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:2,invokePartial:1,push:1,invokeInverse:1,assignToHash:1,pushStringParam:1};
b.DISASSEMBLE_MAP={};for(var a in b.OPCODE_MAP)b.DISASSEMBLE_MAP[b.OPCODE_MAP[a]]=a;b.multiParamSize=function(c){return b.MULTI_PARAM_OPCODES[b.DISASSEMBLE_MAP[c]]};b.prototype={compiler:b,disassemble:function(){for(var c=this.opcodes,a,d=[],e,m=0,f=c.length;m<f;m++)if(a=c[m],a==="DECLARE")e=c[++m],a=c[++m],d.push("DECLARE "+e+" = "+a);else{e=b.DISASSEMBLE_MAP[a];for(var g=b.multiParamSize(a),k=[],i=0;i<g;i++)a=c[++m],typeof a==="string"&&(a='"'+a.replace("\n","\\n")+'"'),k.push(a);e=e+" "+k.join(" ");
d.push(e)}return d.join("\n")},guid:0,compile:function(c,a){this.children=[];this.depths={list:[]};this.options=a||{};return this.program(c)},accept:function(c){return this[c.type](c)},program:function(c){var c=c.statements,a;this.opcodes=[];for(var d=0,b=c.length;d<b;d++)a=c[d],this[a.type](a);this.depths.list=this.depths.list.sort(function(c,a){return c-a});return this},compileProgram:function(c){var c=(new this.compiler).compile(c,this.options),a=this.guid++;this.usePartial=this.usePartial||c.usePartial;
this.children[a]=c;for(var d=0,b=c.depths.list.length;d<b;d++)depth=c.depths.list[d],depth<2||this.addDepth(depth-1);return a},block:function(c){var a=this.setupStackForMustache(c.mustache),d=this.compileProgram(c.program);c.program.inverse&&(c=this.compileProgram(c.program.inverse),this.declare("inverse",c));this.opcode("invokeProgram",d,a.length);this.declare("inverse",null);this.opcode("append")},inverse:function(c){this.ID(c.mustache.id);this.opcode("invokeInverse",this.compileProgram(c.program));
this.opcode("append")},hash:function(c){var c=c.pairs,a,d;this.opcode("push","{}");for(var b=0,e=c.length;b<e;b++)a=c[b],d=a[1],this.accept(d),this.opcode("assignToHash",a[0])},partial:function(c){var a=c.id;this.usePartial=!0;c.context?this.ID(c.context):this.opcode("push","context");this.opcode("invokePartial",a.original);this.opcode("append")},content:function(c){this.opcode("appendContent",c.string)},mustache:function(c){this.opcode("invokeMustache",this.setupStackForMustache(c).length,c.id.original);
c.escaped?this.opcode("appendEscaped"):this.opcode("append")},ID:function(c){this.addDepth(c.depth);this.opcode("getContext",c.depth);this.opcode("lookupWithHelpers",c.parts[0]||null);for(var a=1,b=c.parts.length;a<b;a++)this.opcode("lookup",c.parts[a])},STRING:function(c){this.opcode("pushString",c.string)},comment:function(){},pushParams:function(c){for(var a=c.length,b;a--;)if(b=c[a],this.options.stringParams)b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",
b.string);else this[b.type](b)},opcode:function(c,a,d){this.opcodes.push(b.OPCODE_MAP[c]);a!==void 0&&this.opcodes.push(a);d!==void 0&&this.opcodes.push(d)},declare:function(c,a){this.opcodes.push("DECLARE");this.opcodes.push(c);this.opcodes.push(a)},addDepth:function(c){c!==0&&!this.depths[c]&&(this.depths[c]=!0,this.depths.list.push(c))},setupStackForMustache:function(c){var a=c.params;this.pushParams(a);c.hash?this.hash(c.hash):this.opcode("push","{}");this.ID(c.id);return a}};e.prototype={nameLookup:function(c,
a){return e.RESERVED_WORDS[a]||a.indexOf("-")!==-1?c+"['"+a+"']":c+"."+a},appendToBuffer:function(a){return"buffer = buffer + "+a+";"},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b){this.environment=a;this.options=b||{};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileChildren(a,b);Handlebars.log(Handlebars.logger.DEBUG,a.disassemble()+"\n\n");var d=a.opcodes;this.i=0;for(g=d.length;this.i<g;this.i++)d=this.nextOpcode(0),d[0]===
"DECLARE"?(this.i+=2,this[d[1]]=d[2]):(this.i+=d[1].length,this[d[0]].apply(this,d[1]));return this.createFunction()},nextOpcode:function(a){var h=this.environment.opcodes,d=h[this.i+a],e,m;if(d==="DECLARE")return e=h[this.i+1],a=h[this.i+2],["DECLARE",e,a];else{e=b.DISASSEMBLE_MAP[d];d=b.multiParamSize(d);m=[];for(var f=0;f<d;f++)m.push(h[this.i+f+1+a]);return[e,m]}},eat:function(a){this.i+=a.length},preamble:function(){var a=[];a.push("var buffer = "+this.initializeBuffer()+", currentContext = context");
var b="helpers = helpers || Handlebars.helpers;";this.environment.usePartial&&(b+=" partials = partials || Handlebars.partials;");a.push(b);this.lastContext=0;this.source=a},createFunction:function(){var a={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,c,b,d){var e=this.programs[a];return d?Handlebars.VM.program(this.children[a],c,b,d):(e||(e=this.programs[a]=Handlebars.VM.program(this.children[a],c,b)),e)},programWithDepth:Handlebars.VM.programWithDepth,
noop:Handlebars.VM.noop},b=this.stackVars.concat(this.registers.list);b.length>0&&(this.source[0]=this.source[0]+", "+b.join(", "));this.source[0]+=";";this.source.push("return buffer;");b=["Handlebars","context","helpers","partials"];this.options.data&&b.push("data");for(var d=0,e=this.environment.depths.list.length;d<e;d++)b.push("depth"+this.environment.depths.list[d]);b.length===4&&!this.environment.usePartial&&b.pop();b.push(this.source.join("\n"));b=Function.apply(this,b);b.displayName="Handlebars.js";
Handlebars.log(Handlebars.logger.DEBUG,b.toString()+"\n\n");a.render=b;a.children=this.environment.children;return function(b,d){try{var d=d||{},e=[Handlebars,b,d.helpers,d.partials,d.data],h=Array.prototype.slice.call(arguments,2),e=e.concat(h);return a.render.apply(a,e)}catch(f){throw f;}}},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }")},appendEscaped:function(){var a=
this.nextOpcode(1),b="";a[0]==="appendContent"&&(b=" + "+this.quotedString(a[1][0]),this.eat(a));this.source.push(this.appendToBuffer("this.escapeExpression("+this.popStack()+")"+b))},getContext:function(a){if(this.lastContext!==a)this.lastContext=a,a===0?this.source.push("currentContext = context;"):this.source.push("currentContext = depth"+a+";")},lookupWithHelpers:function(a){if(a){var b=this.nextStack();this.source.push("if('"+a+"' in helpers) { "+b+" = "+this.nameLookup("helpers",a,"helper")+
"; } else { "+b+" = "+this.nameLookup("currentContext",a,"context")+"; }")}else this.pushStack("currentContext")},lookup:function(a){var b=this.topStack();this.source.push(b+" = "+this.nameLookup(b,a,"context")+";")},pushStringParam:function(a){this.pushStack("currentContext");this.pushString(a)},pushString:function(a){this.pushStack(this.quotedString(a))},push:function(a){this.pushStack(a)},invokeMustache:function(a,b){this.populateParams(a,this.quotedString(b),"{}",null,function(a,b,c){this.source.push("else if("+
c+"=== undefined) { "+a+" = helpers.helperMissing.call("+b+"); }");this.source.push("else { "+a+" = "+c+"; }")})},invokeProgram:function(a,b){var d=this.programExpression(this.inverse),e=this.programExpression(a);this.populateParams(b,null,e,d,function(a,b){this.source.push("else { "+a+" = helpers.blockHelperMissing.call("+b+"); }")})},populateParams:function(a,b,d,e,f){var g=this.popStack(),n=[],k=this.popStack();this.register("tmp1",d);this.source.push("tmp1.hash = "+k+";");this.options.stringParams&&
this.source.push("tmp1.contexts = [];");for(k=0;k<a;k++)d=this.popStack(),n.push(d),this.options.stringParams&&this.source.push("tmp1.contexts.push("+this.popStack()+");");e&&(this.source.push("tmp1.fn = tmp1;"),this.source.push("tmp1.inverse = "+e+";"));this.options.data&&this.source.push("tmp1.data = data;");n.push("tmp1");e&&n.push(e);this.populateCall(n,g,b||g,f)},populateCall:function(a,b,d,e){var f=["context"].concat(a).join(", "),a=["context"].concat(d).concat(a).join(", ");nextStack=this.nextStack();
this.source.push("if(typeof "+b+" === 'function') { "+nextStack+" = "+b+".call("+f+"); }");e.call(this,nextStack,a,b)},invokeInverse:function(a){a=this.programExpression(a);this.pushStack("helpers.blockHelperMissing.call("+["context",this.topStack(),"this.noop",a].join(", ")+")")},invokePartial:function(a){this.pushStack("this.invokePartial("+this.nameLookup("partials",a,"partial")+", '"+a+"', "+this.popStack()+", helpers, partials);")},assignToHash:function(a){var b=this.popStack();this.source.push(this.topStack()+
"['"+a+"'] = "+b+";")},compiler:e,compileChildren:function(a,b){for(var d=a.children,e,f,g=[],n=0,k=d.length;n<k;n++)e=d[n],f=new this.compiler,g[n]=f.compile(e,b);a.rawChildren=d;a.children=g},programExpression:function(a){if(a==null)return"this.noop";var b=[a,"helpers","partials"],d=this.environment.rawChildren[a].depths.list;this.options.data&&b.push("data");for(var e=0,f=d.length;e<f;e++)depth=d[e],depth===1?b.push("context"):b.push("depth"+(depth-1));this.environment.usePartial||(b[3]?b[2]="null":
b.pop());return d.length===0?"this.program("+b.join(", ")+")":(b[0]="this.children["+a+"]","this.programWithDepth("+b.join(", ")+")")},register:function(a,b){this.useRegister(a);this.source.push(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStack:function(a){this.source.push(this.nextStack()+" = "+a+";");return"stack"+this.stackSlot},nextStack:function(){this.stackSlot++;this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+
this.stackSlot);return"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};a="break case catch continue default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with null true false".split(" ");compilerWords=e.RESERVED_WORDS={};for(var f=0,g=
a.length;f<g;f++)compilerWords[a[f]]=!0})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);
Handlebars.VM={programWithDepth:function(b,e,a,f){var g=Array.prototype.slice.call(arguments,4);return function(c,h){h=h||{};h={helpers:h.helpers||e,partials:h.partials||a,data:h.data||f};return b.apply(this,[c,h].concat(g))}},program:function(b,e,a,f){return function(g,c){c=c||{};return b(g,{helpers:c.helpers||e,partials:c.partials||a,data:c.data||f})}},noop:function(){return""},compile:function(b,e){var a=Handlebars.parse(b),a=(new Handlebars.Compiler).compile(a,e);return(new Handlebars.JavaScriptCompiler).compile(a,
e)},invokePartial:function(b,e,a,f,g){if(b===void 0)throw new Handlebars.Exception("The partial "+e+" could not be found");else return b instanceof Function?b(a,{helpers:f,partials:g}):(g[e]=Handlebars.VM.compile(b),g[e](a,{helpers:f,partials:g}))}};Handlebars.compile=Handlebars.VM.compile;