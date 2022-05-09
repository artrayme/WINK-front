// Generated from src/Utilities/antlr/scs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { scsListener } from "./scsListener";
import { scsVisitor } from "./scsVisitor";


export class scsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly ID_SYSTEM = 64;
	public static readonly ALIAS_SYMBOLS = 65;
	public static readonly CONTOUR_BEGIN = 66;
	public static readonly CONTOUR_END = 67;
	public static readonly CONTENT_BODY = 68;
	public static readonly LINK = 69;
	public static readonly EDGE_ATTR = 70;
	public static readonly LINE_TERMINATOR = 71;
	public static readonly LINE_COMMENT = 72;
	public static readonly MULTINE_COMMENT = 73;
	public static readonly WS = 74;
	public static readonly RULE_content = 0;
	public static readonly RULE_contour = 1;
	public static readonly RULE_connector = 2;
	public static readonly RULE_syntax = 3;
	public static readonly RULE_sentence_wrap = 4;
	public static readonly RULE_sentence = 5;
	public static readonly RULE_ifdf_alias = 6;
	public static readonly RULE_idtf_system = 7;
	public static readonly RULE_sentence_assign = 8;
	public static readonly RULE_idtf_lvl1_preffix = 9;
	public static readonly RULE_idtf_lvl1_value = 10;
	public static readonly RULE_idtf_lvl1 = 11;
	public static readonly RULE_idtf_edge = 12;
	public static readonly RULE_idtf_set = 13;
	public static readonly RULE_idtf_atomic = 14;
	public static readonly RULE_idtf_url = 15;
	public static readonly RULE_idtf_common = 16;
	public static readonly RULE_idtf_list = 17;
	public static readonly RULE_internal_sentence = 18;
	public static readonly RULE_internal_sentence_list = 19;
	public static readonly RULE_sentence_lvl1 = 20;
	public static readonly RULE_sentence_lvl_4_list_item = 21;
	public static readonly RULE_sentence_lvl_common = 22;
	public static readonly RULE_attr_list = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"content", "contour", "connector", "syntax", "sentence_wrap", "sentence", 
		"ifdf_alias", "idtf_system", "sentence_assign", "idtf_lvl1_preffix", "idtf_lvl1_value", 
		"idtf_lvl1", "idtf_edge", "idtf_set", "idtf_atomic", "idtf_url", "idtf_common", 
		"idtf_list", "internal_sentence", "internal_sentence_list", "sentence_lvl1", 
		"sentence_lvl_4_list_item", "sentence_lvl_common", "attr_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'_'", "'<>'", "'>'", "'<'", "'..>'", "'<..'", "'->'", "'<-'", 
		"'<=>'", "'=>'", "'<='", "'-|>'", "'<|-'", "'-/>'", "'</-'", "'~>'", "'<~'", 
		"'~|>'", "'<|~'", "'~/>'", "'</~'", "'_<>'", "'_>'", "'_<'", "'_..>'", 
		"'_<..'", "'_->'", "'_<-'", "'_<=>'", "'_=>'", "'_<='", "'_-|>'", "'_<|-'", 
		"'_-/>'", "'_</-'", "'_~>'", "'_<~'", "'_~|>'", "'_<|~'", "'_~/>'", "'_</~'", 
		"';;'", "'...'", "'='", "'sc_node'", "'sc_link'", "'sc_edge_dcommon'", 
		"'sc_edge_ucommon'", "'sc_edge_main'", "'sc_edge_access'", "'sc_arc_common'", 
		"'sc_edge'", "'sc_arc_main'", "'sc_arc_access'", "'#'", "'('", "')'", 
		"'{'", "';'", "'}'", "'(*'", "'*)'", "'|'", undefined, undefined, "'[*'", 
		"'*]'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ID_SYSTEM", "ALIAS_SYMBOLS", "CONTOUR_BEGIN", "CONTOUR_END", 
		"CONTENT_BODY", "LINK", "EDGE_ATTR", "LINE_TERMINATOR", "LINE_COMMENT", 
		"MULTINE_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(scsParser._LITERAL_NAMES, scsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return scsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "scs.g4"; }

	// @Override
	public get ruleNames(): string[] { return scsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return scsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(scsParser._ATN, this);
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, scsParser.RULE_content);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === scsParser.T__0) {
				{
				this.state = 48;
				this.match(scsParser.T__0);
				}
			}

			this.state = 51;
			_localctx._c = this.match(scsParser.CONTENT_BODY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contour(): ContourContext {
		let _localctx: ContourContext = new ContourContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, scsParser.RULE_contour);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(scsParser.CONTOUR_BEGIN);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__0 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (scsParser.T__42 - 43)) | (1 << (scsParser.T__44 - 43)) | (1 << (scsParser.T__45 - 43)) | (1 << (scsParser.T__46 - 43)) | (1 << (scsParser.T__47 - 43)) | (1 << (scsParser.T__48 - 43)) | (1 << (scsParser.T__49 - 43)) | (1 << (scsParser.T__50 - 43)) | (1 << (scsParser.T__51 - 43)) | (1 << (scsParser.T__52 - 43)) | (1 << (scsParser.T__53 - 43)) | (1 << (scsParser.T__55 - 43)) | (1 << (scsParser.T__57 - 43)) | (1 << (scsParser.ID_SYSTEM - 43)) | (1 << (scsParser.ALIAS_SYMBOLS - 43)) | (1 << (scsParser.CONTOUR_BEGIN - 43)) | (1 << (scsParser.CONTENT_BODY - 43)) | (1 << (scsParser.LINK - 43)))) !== 0)) {
				{
				{
				this.state = 54;
				this.sentence_wrap();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 60;
			this.match(scsParser.CONTOUR_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connector(): ConnectorContext {
		let _localctx: ConnectorContext = new ConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, scsParser.RULE_connector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			_localctx._c = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__1) | (1 << scsParser.T__2) | (1 << scsParser.T__3) | (1 << scsParser.T__4) | (1 << scsParser.T__5) | (1 << scsParser.T__6) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__13) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__16) | (1 << scsParser.T__17) | (1 << scsParser.T__18) | (1 << scsParser.T__19) | (1 << scsParser.T__20) | (1 << scsParser.T__21) | (1 << scsParser.T__22) | (1 << scsParser.T__23) | (1 << scsParser.T__24) | (1 << scsParser.T__25) | (1 << scsParser.T__26) | (1 << scsParser.T__27) | (1 << scsParser.T__28) | (1 << scsParser.T__29) | (1 << scsParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (scsParser.T__31 - 32)) | (1 << (scsParser.T__32 - 32)) | (1 << (scsParser.T__33 - 32)) | (1 << (scsParser.T__34 - 32)) | (1 << (scsParser.T__35 - 32)) | (1 << (scsParser.T__36 - 32)) | (1 << (scsParser.T__37 - 32)) | (1 << (scsParser.T__38 - 32)) | (1 << (scsParser.T__39 - 32)) | (1 << (scsParser.T__40 - 32)))) !== 0))) {
				_localctx._c = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntax(): SyntaxContext {
		let _localctx: SyntaxContext = new SyntaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, scsParser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__0 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (scsParser.T__42 - 43)) | (1 << (scsParser.T__44 - 43)) | (1 << (scsParser.T__45 - 43)) | (1 << (scsParser.T__46 - 43)) | (1 << (scsParser.T__47 - 43)) | (1 << (scsParser.T__48 - 43)) | (1 << (scsParser.T__49 - 43)) | (1 << (scsParser.T__50 - 43)) | (1 << (scsParser.T__51 - 43)) | (1 << (scsParser.T__52 - 43)) | (1 << (scsParser.T__53 - 43)) | (1 << (scsParser.T__55 - 43)) | (1 << (scsParser.T__57 - 43)) | (1 << (scsParser.ID_SYSTEM - 43)) | (1 << (scsParser.ALIAS_SYMBOLS - 43)) | (1 << (scsParser.CONTOUR_BEGIN - 43)) | (1 << (scsParser.CONTENT_BODY - 43)) | (1 << (scsParser.LINK - 43)))) !== 0)) {
				{
				{
				this.state = 64;
				this.sentence_wrap();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(scsParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_wrap(): Sentence_wrapContext {
		let _localctx: Sentence_wrapContext = new Sentence_wrapContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, scsParser.RULE_sentence_wrap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 72;
			this.sentence();
			this.state = 73;
			this.match(scsParser.T__41);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, scsParser.RULE_sentence);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.sentence_lvl1();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.sentence_assign();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				this.sentence_lvl_common();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifdf_alias(): Ifdf_aliasContext {
		let _localctx: Ifdf_aliasContext = new Ifdf_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, scsParser.RULE_ifdf_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(scsParser.ALIAS_SYMBOLS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_system(): Idtf_systemContext {
		let _localctx: Idtf_systemContext = new Idtf_systemContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, scsParser.RULE_idtf_system);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case scsParser.ID_SYSTEM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(scsParser.ID_SYSTEM);
				}
				break;
			case scsParser.T__42:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.match(scsParser.T__42);
				}
				break;
			case scsParser.T__44:
			case scsParser.T__45:
			case scsParser.T__46:
			case scsParser.T__47:
			case scsParser.T__48:
			case scsParser.T__49:
			case scsParser.T__50:
			case scsParser.T__51:
			case scsParser.T__52:
			case scsParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 84;
				_localctx._type = this.idtf_lvl1_preffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_assign(): Sentence_assignContext {
		let _localctx: Sentence_assignContext = new Sentence_assignContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, scsParser.RULE_sentence_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(scsParser.ALIAS_SYMBOLS);
			this.state = 88;
			this.match(scsParser.T__43);
			this.state = 89;
			_localctx._i = this.idtf_common();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1_preffix(): Idtf_lvl1_preffixContext {
		let _localctx: Idtf_lvl1_preffixContext = new Idtf_lvl1_preffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, scsParser.RULE_idtf_lvl1_preffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			_localctx._type = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (scsParser.T__44 - 45)) | (1 << (scsParser.T__45 - 45)) | (1 << (scsParser.T__46 - 45)) | (1 << (scsParser.T__47 - 45)) | (1 << (scsParser.T__48 - 45)) | (1 << (scsParser.T__49 - 45)) | (1 << (scsParser.T__50 - 45)) | (1 << (scsParser.T__51 - 45)) | (1 << (scsParser.T__52 - 45)) | (1 << (scsParser.T__53 - 45)))) !== 0))) {
				_localctx._type = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1_value(): Idtf_lvl1_valueContext {
		let _localctx: Idtf_lvl1_valueContext = new Idtf_lvl1_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, scsParser.RULE_idtf_lvl1_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_localctx._type = this.idtf_lvl1_preffix();
			this.state = 94;
			this.match(scsParser.T__54);
			this.state = 95;
			_localctx._i = this.match(scsParser.ID_SYSTEM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1(): Idtf_lvl1Context {
		let _localctx: Idtf_lvl1Context = new Idtf_lvl1Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, scsParser.RULE_idtf_lvl1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.idtf_lvl1_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_edge(): Idtf_edgeContext {
		let _localctx: Idtf_edgeContext = new Idtf_edgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, scsParser.RULE_idtf_edge);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(scsParser.T__55);
			this.state = 100;
			_localctx._src = this.idtf_atomic();
			this.state = 101;
			_localctx._c = this.connector();
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				_localctx._attrs = this.attr_list();
				}
				break;
			}
			this.state = 105;
			_localctx._trg = this.idtf_atomic();
			this.state = 106;
			this.match(scsParser.T__56);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_set(): Idtf_setContext {
		let _localctx: Idtf_setContext = new Idtf_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, scsParser.RULE_idtf_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(scsParser.T__57);
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				_localctx._a1 = this.attr_list();
				}
				break;
			}
			this.state = 112;
			_localctx._i1 = this.idtf_common();
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__58) {
				{
				{
				this.state = 113;
				this.match(scsParser.T__58);
				this.state = 115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 114;
					_localctx._a2 = this.attr_list();
					}
					break;
				}
				this.state = 117;
				_localctx._i2 = this.idtf_common();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(scsParser.T__59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_atomic(): Idtf_atomicContext {
		let _localctx: Idtf_atomicContext = new Idtf_atomicContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, scsParser.RULE_idtf_atomic);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case scsParser.ALIAS_SYMBOLS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				_localctx._a = this.ifdf_alias();
				}
				break;
			case scsParser.T__42:
			case scsParser.T__44:
			case scsParser.T__45:
			case scsParser.T__46:
			case scsParser.T__47:
			case scsParser.T__48:
			case scsParser.T__49:
			case scsParser.T__50:
			case scsParser.T__51:
			case scsParser.T__52:
			case scsParser.T__53:
			case scsParser.ID_SYSTEM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				_localctx._is = this.idtf_system();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_url(): Idtf_urlContext {
		let _localctx: Idtf_urlContext = new Idtf_urlContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, scsParser.RULE_idtf_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(scsParser.LINK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_common(): Idtf_commonContext {
		let _localctx: Idtf_commonContext = new Idtf_commonContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, scsParser.RULE_idtf_common);
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case scsParser.T__42:
			case scsParser.T__44:
			case scsParser.T__45:
			case scsParser.T__46:
			case scsParser.T__47:
			case scsParser.T__48:
			case scsParser.T__49:
			case scsParser.T__50:
			case scsParser.T__51:
			case scsParser.T__52:
			case scsParser.T__53:
			case scsParser.ID_SYSTEM:
			case scsParser.ALIAS_SYMBOLS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				_localctx._a = this.idtf_atomic();
				}
				break;
			case scsParser.T__55:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				_localctx._ie = this.idtf_edge();
				}
				break;
			case scsParser.T__57:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 133;
				_localctx._iset = this.idtf_set();
				}
				break;
			case scsParser.CONTOUR_BEGIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 134;
				_localctx._ct = this.contour();
				}
				break;
			case scsParser.T__0:
			case scsParser.CONTENT_BODY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 135;
				_localctx._cn = this.content();
				}
				break;
			case scsParser.LINK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 136;
				_localctx._u = this.idtf_url();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_list(): Idtf_listContext {
		let _localctx: Idtf_listContext = new Idtf_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, scsParser.RULE_idtf_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			_localctx._i1 = this.idtf_common();
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === scsParser.T__60) {
				{
				this.state = 140;
				this.internal_sentence_list();
				}
			}

			this.state = 150;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 143;
					this.match(scsParser.T__58);
					this.state = 144;
					_localctx._i2 = this.idtf_common();
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === scsParser.T__60) {
						{
						this.state = 145;
						this.internal_sentence_list();
						}
					}

					}
					}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internal_sentence(): Internal_sentenceContext {
		let _localctx: Internal_sentenceContext = new Internal_sentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, scsParser.RULE_internal_sentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			_localctx._c = this.connector();
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				_localctx._attrs = this.attr_list();
				}
				break;
			}
			this.state = 157;
			_localctx._targets = this.idtf_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internal_sentence_list(): Internal_sentence_listContext {
		let _localctx: Internal_sentence_listContext = new Internal_sentence_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, scsParser.RULE_internal_sentence_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(scsParser.T__60);
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 160;
				this.internal_sentence();
				this.state = 161;
				this.match(scsParser.T__41);
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__1) | (1 << scsParser.T__2) | (1 << scsParser.T__3) | (1 << scsParser.T__4) | (1 << scsParser.T__5) | (1 << scsParser.T__6) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__13) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__16) | (1 << scsParser.T__17) | (1 << scsParser.T__18) | (1 << scsParser.T__19) | (1 << scsParser.T__20) | (1 << scsParser.T__21) | (1 << scsParser.T__22) | (1 << scsParser.T__23) | (1 << scsParser.T__24) | (1 << scsParser.T__25) | (1 << scsParser.T__26) | (1 << scsParser.T__27) | (1 << scsParser.T__28) | (1 << scsParser.T__29) | (1 << scsParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (scsParser.T__31 - 32)) | (1 << (scsParser.T__32 - 32)) | (1 << (scsParser.T__33 - 32)) | (1 << (scsParser.T__34 - 32)) | (1 << (scsParser.T__35 - 32)) | (1 << (scsParser.T__36 - 32)) | (1 << (scsParser.T__37 - 32)) | (1 << (scsParser.T__38 - 32)) | (1 << (scsParser.T__39 - 32)) | (1 << (scsParser.T__40 - 32)))) !== 0));
			this.state = 167;
			this.match(scsParser.T__61);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_lvl1(): Sentence_lvl1Context {
		let _localctx: Sentence_lvl1Context = new Sentence_lvl1Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, scsParser.RULE_sentence_lvl1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			_localctx._src = this.idtf_lvl1();
			this.state = 170;
			this.match(scsParser.T__62);
			this.state = 171;
			_localctx._edge = this.idtf_lvl1();
			this.state = 172;
			this.match(scsParser.T__62);
			this.state = 173;
			_localctx._trg = this.idtf_lvl1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_lvl_4_list_item(): Sentence_lvl_4_list_itemContext {
		let _localctx: Sentence_lvl_4_list_itemContext = new Sentence_lvl_4_list_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, scsParser.RULE_sentence_lvl_4_list_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			_localctx._c = this.connector();
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				_localctx._attrs = this.attr_list();
				}
				break;
			}
			this.state = 179;
			_localctx._targets = this.idtf_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_lvl_common(): Sentence_lvl_commonContext {
		let _localctx: Sentence_lvl_commonContext = new Sentence_lvl_commonContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, scsParser.RULE_sentence_lvl_common);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			_localctx._src = this.idtf_common();
			this.state = 182;
			this.sentence_lvl_4_list_item();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__58) {
				{
				{
				this.state = 183;
				this.match(scsParser.T__58);
				this.state = 184;
				this.sentence_lvl_4_list_item();
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, scsParser.RULE_attr_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 190;
					this.match(scsParser.ID_SYSTEM);
					this.state = 191;
					this.match(scsParser.EDGE_ATTR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\xC7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x05\x024\n\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x07\x05D\n\x05\f\x05\x0E\x05G\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07Q\n\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x05\tX\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0Ej\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0Fq\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0Fv\n\x0F\x03\x0F\x07\x0Fy\n\x0F\f\x0F\x0E\x0F|\v\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\x82\n\x10\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x8C\n\x12\x03\x13" +
		"\x03\x13\x05\x13\x90\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\x95\n\x13\x07" +
		"\x13\x97\n\x13\f\x13\x0E\x13\x9A\v\x13\x03\x14\x03\x14\x05\x14\x9E\n\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x06\x15\xA6\n\x15\r\x15" +
		"\x0E\x15\xA7\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x05\x17\xB4\n\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\xBC\n\x18\f\x18\x0E\x18\xBF\v\x18\x03\x19\x03" +
		"\x19\x06\x19\xC3\n\x19\r\x19\x0E\x19\xC4\x03\x19\x02\x02\x02\x1A\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x02\x02\x04\x03\x02\x04+\x03\x02/8\x02\xC7\x023\x03\x02\x02\x02" +
		"\x047\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bE\x03\x02\x02\x02\nJ\x03\x02" +
		"\x02\x02\fP\x03\x02\x02\x02\x0ER\x03\x02\x02\x02\x10W\x03\x02\x02\x02" +
		"\x12Y\x03\x02\x02\x02\x14]\x03\x02\x02\x02\x16_\x03\x02\x02\x02\x18c\x03" +
		"\x02\x02\x02\x1Ae\x03\x02\x02\x02\x1Cn\x03\x02\x02\x02\x1E\x81\x03\x02" +
		"\x02\x02 \x83\x03\x02\x02\x02\"\x8B\x03\x02\x02\x02$\x8D\x03\x02\x02\x02" +
		"&\x9B\x03\x02\x02\x02(\xA1\x03\x02\x02\x02*\xAB\x03\x02\x02\x02,\xB1\x03" +
		"\x02\x02\x02.\xB7\x03\x02\x02\x020\xC2\x03\x02\x02\x0224\x07\x03\x02\x02" +
		"32\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x07F\x02\x02" +
		"6\x03\x03\x02\x02\x027;\x07D\x02\x028:\x05\n\x06\x0298\x03\x02\x02\x02" +
		":=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02" +
		"=;\x03\x02\x02\x02>?\x07E\x02\x02?\x05\x03\x02\x02\x02@A\t\x02\x02\x02" +
		"A\x07\x03\x02\x02\x02BD\x05\n\x06\x02CB\x03\x02\x02\x02DG\x03\x02\x02" +
		"\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02HI\x07\x02\x02\x03I\t\x03\x02\x02\x02JK\x05\f\x07\x02KL\x07,\x02\x02" +
		"L\v\x03\x02\x02\x02MQ\x05*\x16\x02NQ\x05\x12\n\x02OQ\x05.\x18\x02PM\x03" +
		"\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\r\x03\x02\x02\x02RS" +
		"\x07C\x02\x02S\x0F\x03\x02\x02\x02TX\x07B\x02\x02UX\x07-\x02\x02VX\x05" +
		"\x14\v\x02WT\x03\x02\x02\x02WU\x03\x02\x02\x02WV\x03\x02\x02\x02X\x11" +
		"\x03\x02\x02\x02YZ\x07C\x02\x02Z[\x07.\x02\x02[\\\x05\"\x12\x02\\\x13" +
		"\x03\x02\x02\x02]^\t\x03\x02\x02^\x15\x03\x02\x02\x02_`\x05\x14\v\x02" +
		"`a\x079\x02\x02ab\x07B\x02\x02b\x17\x03\x02\x02\x02cd\x05\x16\f\x02d\x19" +
		"\x03\x02\x02\x02ef\x07:\x02\x02fg\x05\x1E\x10\x02gi\x05\x06\x04\x02hj" +
		"\x050\x19\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl" +
		"\x05\x1E\x10\x02lm\x07;\x02\x02m\x1B\x03\x02\x02\x02np\x07<\x02\x02oq" +
		"\x050\x19\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rz" +
		"\x05\"\x12\x02su\x07=\x02\x02tv\x050\x19\x02ut\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02wy\x05\"\x12\x02xs\x03\x02\x02\x02y|\x03\x02" +
		"\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02" +
		"\x02\x02}~\x07>\x02\x02~\x1D\x03\x02\x02\x02\x7F\x82\x05\x0E\b\x02\x80" +
		"\x82\x05\x10\t\x02\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82" +
		"\x1F\x03\x02\x02\x02\x83\x84\x07G\x02\x02\x84!\x03\x02\x02\x02\x85\x8C" +
		"\x05\x1E\x10\x02\x86\x8C\x05\x1A\x0E\x02\x87\x8C\x05\x1C\x0F\x02\x88\x8C" +
		"\x05\x04\x03\x02\x89\x8C\x05\x02\x02\x02\x8A\x8C\x05 \x11\x02\x8B\x85" +
		"\x03\x02\x02\x02\x8B\x86\x03\x02\x02\x02\x8B\x87\x03\x02\x02\x02\x8B\x88" +
		"\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C#" +
		"\x03\x02\x02\x02\x8D\x8F\x05\"\x12\x02\x8E\x90\x05(\x15\x02\x8F\x8E\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x98\x03\x02\x02\x02\x91\x92\x07" +
		"=\x02\x02\x92\x94\x05\"\x12\x02\x93\x95\x05(\x15\x02\x94\x93\x03\x02\x02" +
		"\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x91\x03\x02\x02" +
		"\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02" +
		"\x02\x99%\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9D\x05\x06\x04" +
		"\x02\x9C\x9E\x050\x19\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02" +
		"\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x05$\x13\x02\xA0\'\x03\x02\x02\x02" +
		"\xA1\xA5\x07?\x02\x02\xA2\xA3\x05&\x14\x02\xA3\xA4\x07,\x02\x02\xA4\xA6" +
		"\x03\x02\x02\x02\xA5\xA2\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA5" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA" +
		"\x07@\x02\x02\xAA)\x03\x02\x02\x02\xAB\xAC\x05\x18\r\x02\xAC\xAD\x07A" +
		"\x02\x02\xAD\xAE\x05\x18\r\x02\xAE\xAF\x07A\x02\x02\xAF\xB0\x05\x18\r" +
		"\x02\xB0+\x03\x02\x02\x02\xB1\xB3\x05\x06\x04\x02\xB2\xB4\x050\x19\x02" +
		"\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
		"\xB5\xB6\x05$\x13\x02\xB6-\x03\x02\x02\x02\xB7\xB8\x05\"\x12\x02\xB8\xBD" +
		"\x05,\x17\x02\xB9\xBA\x07=\x02\x02\xBA\xBC\x05,\x17\x02\xBB\xB9\x03\x02" +
		"\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02" +
		"\x02\x02\xBE/\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC1\x07B\x02" +
		"\x02\xC1\xC3\x07H\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
		"\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC51\x03\x02\x02" +
		"\x02\x153;EPWipuz\x81\x8B\x8F\x94\x98\x9D\xA7\xB3\xBD\xC4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!scsParser.__ATN) {
			scsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(scsParser._serializedATN));
		}

		return scsParser.__ATN;
	}

}

export class ContentContext extends ParserRuleContext {
	public _c!: Token;
	public CONTENT_BODY(): TerminalNode { return this.getToken(scsParser.CONTENT_BODY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_content; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContourContext extends ParserRuleContext {
	public CONTOUR_BEGIN(): TerminalNode { return this.getToken(scsParser.CONTOUR_BEGIN, 0); }
	public CONTOUR_END(): TerminalNode { return this.getToken(scsParser.CONTOUR_END, 0); }
	public sentence_wrap(): Sentence_wrapContext[];
	public sentence_wrap(i: number): Sentence_wrapContext;
	public sentence_wrap(i?: number): Sentence_wrapContext | Sentence_wrapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sentence_wrapContext);
		} else {
			return this.getRuleContext(i, Sentence_wrapContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_contour; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterContour) {
			listener.enterContour(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitContour) {
			listener.exitContour(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitContour) {
			return visitor.visitContour(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectorContext extends ParserRuleContext {
	public _c!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_connector; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterConnector) {
			listener.enterConnector(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitConnector) {
			listener.exitConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitConnector) {
			return visitor.visitConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(scsParser.EOF, 0); }
	public sentence_wrap(): Sentence_wrapContext[];
	public sentence_wrap(i: number): Sentence_wrapContext;
	public sentence_wrap(i?: number): Sentence_wrapContext | Sentence_wrapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sentence_wrapContext);
		} else {
			return this.getRuleContext(i, Sentence_wrapContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_syntax; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSyntax) {
			listener.enterSyntax(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSyntax) {
			listener.exitSyntax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSyntax) {
			return visitor.visitSyntax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sentence_wrapContext extends ParserRuleContext {
	public sentence(): SentenceContext | undefined {
		return this.tryGetRuleContext(0, SentenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_wrap; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_wrap) {
			listener.enterSentence_wrap(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_wrap) {
			listener.exitSentence_wrap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence_wrap) {
			return visitor.visitSentence_wrap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public sentence_lvl1(): Sentence_lvl1Context | undefined {
		return this.tryGetRuleContext(0, Sentence_lvl1Context);
	}
	public sentence_assign(): Sentence_assignContext | undefined {
		return this.tryGetRuleContext(0, Sentence_assignContext);
	}
	public sentence_lvl_common(): Sentence_lvl_commonContext | undefined {
		return this.tryGetRuleContext(0, Sentence_lvl_commonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ifdf_aliasContext extends ParserRuleContext {
	public ALIAS_SYMBOLS(): TerminalNode { return this.getToken(scsParser.ALIAS_SYMBOLS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_ifdf_alias; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIfdf_alias) {
			listener.enterIfdf_alias(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIfdf_alias) {
			listener.exitIfdf_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIfdf_alias) {
			return visitor.visitIfdf_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_systemContext extends ParserRuleContext {
	public _type!: Idtf_lvl1_preffixContext;
	public ID_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(scsParser.ID_SYSTEM, 0); }
	public idtf_lvl1_preffix(): Idtf_lvl1_preffixContext | undefined {
		return this.tryGetRuleContext(0, Idtf_lvl1_preffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_system; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_system) {
			listener.enterIdtf_system(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_system) {
			listener.exitIdtf_system(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_system) {
			return visitor.visitIdtf_system(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sentence_assignContext extends ParserRuleContext {
	public _i!: Idtf_commonContext;
	public ALIAS_SYMBOLS(): TerminalNode { return this.getToken(scsParser.ALIAS_SYMBOLS, 0); }
	public idtf_common(): Idtf_commonContext {
		return this.getRuleContext(0, Idtf_commonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_assign; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_assign) {
			listener.enterSentence_assign(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_assign) {
			listener.exitSentence_assign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence_assign) {
			return visitor.visitSentence_assign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_lvl1_preffixContext extends ParserRuleContext {
	public _type!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1_preffix; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1_preffix) {
			listener.enterIdtf_lvl1_preffix(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1_preffix) {
			listener.exitIdtf_lvl1_preffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_lvl1_preffix) {
			return visitor.visitIdtf_lvl1_preffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_lvl1_valueContext extends ParserRuleContext {
	public _type!: Idtf_lvl1_preffixContext;
	public _i!: Token;
	public idtf_lvl1_preffix(): Idtf_lvl1_preffixContext {
		return this.getRuleContext(0, Idtf_lvl1_preffixContext);
	}
	public ID_SYSTEM(): TerminalNode { return this.getToken(scsParser.ID_SYSTEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1_value; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1_value) {
			listener.enterIdtf_lvl1_value(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1_value) {
			listener.exitIdtf_lvl1_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_lvl1_value) {
			return visitor.visitIdtf_lvl1_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_lvl1Context extends ParserRuleContext {
	public idtf_lvl1_value(): Idtf_lvl1_valueContext {
		return this.getRuleContext(0, Idtf_lvl1_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1) {
			listener.enterIdtf_lvl1(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1) {
			listener.exitIdtf_lvl1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_lvl1) {
			return visitor.visitIdtf_lvl1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_edgeContext extends ParserRuleContext {
	public _src!: Idtf_atomicContext;
	public _c!: ConnectorContext;
	public _attrs!: Attr_listContext;
	public _trg!: Idtf_atomicContext;
	public idtf_atomic(): Idtf_atomicContext[];
	public idtf_atomic(i: number): Idtf_atomicContext;
	public idtf_atomic(i?: number): Idtf_atomicContext | Idtf_atomicContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_atomicContext);
		} else {
			return this.getRuleContext(i, Idtf_atomicContext);
		}
	}
	public connector(): ConnectorContext {
		return this.getRuleContext(0, ConnectorContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_edge; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_edge) {
			listener.enterIdtf_edge(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_edge) {
			listener.exitIdtf_edge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_edge) {
			return visitor.visitIdtf_edge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_setContext extends ParserRuleContext {
	public _a1!: Attr_listContext;
	public _i1!: Idtf_commonContext;
	public _a2!: Attr_listContext;
	public _i2!: Idtf_commonContext;
	public idtf_common(): Idtf_commonContext[];
	public idtf_common(i: number): Idtf_commonContext;
	public idtf_common(i?: number): Idtf_commonContext | Idtf_commonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_commonContext);
		} else {
			return this.getRuleContext(i, Idtf_commonContext);
		}
	}
	public attr_list(): Attr_listContext[];
	public attr_list(i: number): Attr_listContext;
	public attr_list(i?: number): Attr_listContext | Attr_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attr_listContext);
		} else {
			return this.getRuleContext(i, Attr_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_set; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_set) {
			listener.enterIdtf_set(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_set) {
			listener.exitIdtf_set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_set) {
			return visitor.visitIdtf_set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_atomicContext extends ParserRuleContext {
	public _a!: Ifdf_aliasContext;
	public _is!: Idtf_systemContext;
	public ifdf_alias(): Ifdf_aliasContext | undefined {
		return this.tryGetRuleContext(0, Ifdf_aliasContext);
	}
	public idtf_system(): Idtf_systemContext | undefined {
		return this.tryGetRuleContext(0, Idtf_systemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_atomic; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_atomic) {
			listener.enterIdtf_atomic(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_atomic) {
			listener.exitIdtf_atomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_atomic) {
			return visitor.visitIdtf_atomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_urlContext extends ParserRuleContext {
	public LINK(): TerminalNode { return this.getToken(scsParser.LINK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_url; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_url) {
			listener.enterIdtf_url(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_url) {
			listener.exitIdtf_url(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_url) {
			return visitor.visitIdtf_url(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_commonContext extends ParserRuleContext {
	public _a!: Idtf_atomicContext;
	public _ie!: Idtf_edgeContext;
	public _iset!: Idtf_setContext;
	public _ct!: ContourContext;
	public _cn!: ContentContext;
	public _u!: Idtf_urlContext;
	public idtf_atomic(): Idtf_atomicContext | undefined {
		return this.tryGetRuleContext(0, Idtf_atomicContext);
	}
	public idtf_edge(): Idtf_edgeContext | undefined {
		return this.tryGetRuleContext(0, Idtf_edgeContext);
	}
	public idtf_set(): Idtf_setContext | undefined {
		return this.tryGetRuleContext(0, Idtf_setContext);
	}
	public contour(): ContourContext | undefined {
		return this.tryGetRuleContext(0, ContourContext);
	}
	public content(): ContentContext | undefined {
		return this.tryGetRuleContext(0, ContentContext);
	}
	public idtf_url(): Idtf_urlContext | undefined {
		return this.tryGetRuleContext(0, Idtf_urlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_common; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_common) {
			listener.enterIdtf_common(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_common) {
			listener.exitIdtf_common(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_common) {
			return visitor.visitIdtf_common(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Idtf_listContext extends ParserRuleContext {
	public _i1!: Idtf_commonContext;
	public _i2!: Idtf_commonContext;
	public idtf_common(): Idtf_commonContext[];
	public idtf_common(i: number): Idtf_commonContext;
	public idtf_common(i?: number): Idtf_commonContext | Idtf_commonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_commonContext);
		} else {
			return this.getRuleContext(i, Idtf_commonContext);
		}
	}
	public internal_sentence_list(): Internal_sentence_listContext[];
	public internal_sentence_list(i: number): Internal_sentence_listContext;
	public internal_sentence_list(i?: number): Internal_sentence_listContext | Internal_sentence_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Internal_sentence_listContext);
		} else {
			return this.getRuleContext(i, Internal_sentence_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_list) {
			listener.enterIdtf_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_list) {
			listener.exitIdtf_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitIdtf_list) {
			return visitor.visitIdtf_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Internal_sentenceContext extends ParserRuleContext {
	public _c!: ConnectorContext;
	public _attrs!: Attr_listContext;
	public _targets!: Idtf_listContext;
	public connector(): ConnectorContext {
		return this.getRuleContext(0, ConnectorContext);
	}
	public idtf_list(): Idtf_listContext {
		return this.getRuleContext(0, Idtf_listContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_internal_sentence; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterInternal_sentence) {
			listener.enterInternal_sentence(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitInternal_sentence) {
			listener.exitInternal_sentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitInternal_sentence) {
			return visitor.visitInternal_sentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Internal_sentence_listContext extends ParserRuleContext {
	public internal_sentence(): Internal_sentenceContext[];
	public internal_sentence(i: number): Internal_sentenceContext;
	public internal_sentence(i?: number): Internal_sentenceContext | Internal_sentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Internal_sentenceContext);
		} else {
			return this.getRuleContext(i, Internal_sentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_internal_sentence_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterInternal_sentence_list) {
			listener.enterInternal_sentence_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitInternal_sentence_list) {
			listener.exitInternal_sentence_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitInternal_sentence_list) {
			return visitor.visitInternal_sentence_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sentence_lvl1Context extends ParserRuleContext {
	public _src!: Idtf_lvl1Context;
	public _edge!: Idtf_lvl1Context;
	public _trg!: Idtf_lvl1Context;
	public idtf_lvl1(): Idtf_lvl1Context[];
	public idtf_lvl1(i: number): Idtf_lvl1Context;
	public idtf_lvl1(i?: number): Idtf_lvl1Context | Idtf_lvl1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_lvl1Context);
		} else {
			return this.getRuleContext(i, Idtf_lvl1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_lvl1; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_lvl1) {
			listener.enterSentence_lvl1(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_lvl1) {
			listener.exitSentence_lvl1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence_lvl1) {
			return visitor.visitSentence_lvl1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sentence_lvl_4_list_itemContext extends ParserRuleContext {
	public _c!: ConnectorContext;
	public _attrs!: Attr_listContext;
	public _targets!: Idtf_listContext;
	public connector(): ConnectorContext {
		return this.getRuleContext(0, ConnectorContext);
	}
	public idtf_list(): Idtf_listContext {
		return this.getRuleContext(0, Idtf_listContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_lvl_4_list_item; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_lvl_4_list_item) {
			listener.enterSentence_lvl_4_list_item(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_lvl_4_list_item) {
			listener.exitSentence_lvl_4_list_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence_lvl_4_list_item) {
			return visitor.visitSentence_lvl_4_list_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sentence_lvl_commonContext extends ParserRuleContext {
	public _src!: Idtf_commonContext;
	public sentence_lvl_4_list_item(): Sentence_lvl_4_list_itemContext[];
	public sentence_lvl_4_list_item(i: number): Sentence_lvl_4_list_itemContext;
	public sentence_lvl_4_list_item(i?: number): Sentence_lvl_4_list_itemContext | Sentence_lvl_4_list_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sentence_lvl_4_list_itemContext);
		} else {
			return this.getRuleContext(i, Sentence_lvl_4_list_itemContext);
		}
	}
	public idtf_common(): Idtf_commonContext {
		return this.getRuleContext(0, Idtf_commonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_lvl_common; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_lvl_common) {
			listener.enterSentence_lvl_common(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_lvl_common) {
			listener.exitSentence_lvl_common(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitSentence_lvl_common) {
			return visitor.visitSentence_lvl_common(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	public ID_SYSTEM(): TerminalNode[];
	public ID_SYSTEM(i: number): TerminalNode;
	public ID_SYSTEM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(scsParser.ID_SYSTEM);
		} else {
			return this.getToken(scsParser.ID_SYSTEM, i);
		}
	}
	public EDGE_ATTR(): TerminalNode[];
	public EDGE_ATTR(i: number): TerminalNode;
	public EDGE_ATTR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(scsParser.EDGE_ATTR);
		} else {
			return this.getToken(scsParser.EDGE_ATTR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitAttr_list) {
			listener.exitAttr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scsVisitor<Result>): Result {
		if (visitor.visitAttr_list) {
			return visitor.visitAttr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


