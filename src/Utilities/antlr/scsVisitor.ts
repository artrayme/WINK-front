// Generated from src/Utilities/antlr/scs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ContentContext } from "./scsParser";
import { ContourContext } from "./scsParser";
import { ConnectorContext } from "./scsParser";
import { SyntaxContext } from "./scsParser";
import { Sentence_wrapContext } from "./scsParser";
import { SentenceContext } from "./scsParser";
import { Ifdf_aliasContext } from "./scsParser";
import { Idtf_systemContext } from "./scsParser";
import { Sentence_assignContext } from "./scsParser";
import { Idtf_lvl1_preffixContext } from "./scsParser";
import { Idtf_lvl1_valueContext } from "./scsParser";
import { Idtf_lvl1Context } from "./scsParser";
import { Idtf_edgeContext } from "./scsParser";
import { Idtf_setContext } from "./scsParser";
import { Idtf_atomicContext } from "./scsParser";
import { Idtf_urlContext } from "./scsParser";
import { Idtf_commonContext } from "./scsParser";
import { Idtf_listContext } from "./scsParser";
import { Internal_sentenceContext } from "./scsParser";
import { Internal_sentence_listContext } from "./scsParser";
import { Sentence_lvl1Context } from "./scsParser";
import { Sentence_lvl_4_list_itemContext } from "./scsParser";
import { Sentence_lvl_commonContext } from "./scsParser";
import { Attr_listContext } from "./scsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `scsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface scsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `scsParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.contour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContour?: (ctx: ContourContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.connector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnector?: (ctx: ConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.syntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntax?: (ctx: SyntaxContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence_wrap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence_wrap?: (ctx: Sentence_wrapContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence?: (ctx: SentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.ifdf_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfdf_alias?: (ctx: Ifdf_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_system`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_system?: (ctx: Idtf_systemContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence_assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence_assign?: (ctx: Sentence_assignContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_lvl1_preffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_lvl1_preffix?: (ctx: Idtf_lvl1_preffixContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_lvl1_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_lvl1_value?: (ctx: Idtf_lvl1_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_lvl1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_lvl1?: (ctx: Idtf_lvl1Context) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_edge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_edge?: (ctx: Idtf_edgeContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_set?: (ctx: Idtf_setContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_atomic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_atomic?: (ctx: Idtf_atomicContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_url?: (ctx: Idtf_urlContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_common`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_common?: (ctx: Idtf_commonContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.idtf_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdtf_list?: (ctx: Idtf_listContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.internal_sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInternal_sentence?: (ctx: Internal_sentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.internal_sentence_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInternal_sentence_list?: (ctx: Internal_sentence_listContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence_lvl1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence_lvl1?: (ctx: Sentence_lvl1Context) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence_lvl_4_list_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence_lvl_4_list_item?: (ctx: Sentence_lvl_4_list_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.sentence_lvl_common`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence_lvl_common?: (ctx: Sentence_lvl_commonContext) => Result;

	/**
	 * Visit a parse tree produced by `scsParser.attr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_list?: (ctx: Attr_listContext) => Result;
}

