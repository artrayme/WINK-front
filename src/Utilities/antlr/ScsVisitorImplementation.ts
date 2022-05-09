import {scsVisitor} from "./scsVisitor";
import {
    Attr_listContext,
    ConnectorContext,
    ContentContext,
    ContourContext,
    Idtf_atomicContext,
    Idtf_commonContext,
    Idtf_edgeContext,
    Idtf_listContext,
    Idtf_lvl1Context,
    Idtf_lvl1_preffixContext,
    Idtf_lvl1_valueContext,
    Idtf_setContext,
    Idtf_systemContext,
    Idtf_urlContext,
    Ifdf_aliasContext,
    Internal_sentenceContext,
    Internal_sentence_listContext,
    SentenceContext,
    Sentence_assignContext,
    Sentence_lvl1Context,
    Sentence_lvl_4_list_itemContext,
    Sentence_lvl_commonContext,
    Sentence_wrapContext,
    SyntaxContext
} from "./scsParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import {ErrorNode} from "antlr4ts/tree";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

export class ScsVisitorImplementation implements scsVisitor<string> {
    visitAttr_list(ctx: Attr_listContext): string {
        console.log(ctx)
        return "";
    }

    visitConnector(ctx: ConnectorContext): string {
        console.log(ctx)
        return "";
    }

    visitContent(ctx: ContentContext): string {
        console.log(ctx)
        return "";
    }

    visitContour(ctx: ContourContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_atomic(ctx: Idtf_atomicContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_common(ctx: Idtf_commonContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_edge(ctx: Idtf_edgeContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_list(ctx: Idtf_listContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_lvl1(ctx: Idtf_lvl1Context): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_lvl1_preffix(ctx: Idtf_lvl1_preffixContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_lvl1_value(ctx: Idtf_lvl1_valueContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_set(ctx: Idtf_setContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_system(ctx: Idtf_systemContext): string {
        console.log(ctx)
        return "";
    }

    visitIdtf_url(ctx: Idtf_urlContext): string {
        console.log(ctx)
        return "";
    }

    visitIfdf_alias(ctx: Ifdf_aliasContext): string {
        console.log(ctx)
        return "";
    }

    visitInternal_sentence(ctx: Internal_sentenceContext): string {
        console.log(ctx)
        return "";
    }

    visitInternal_sentence_list(ctx: Internal_sentence_listContext): string {
        console.log(ctx)
        return "";
    }

    visitSentence(ctx: SentenceContext): string {
        console.log(ctx)
        return "";
    }

    visitSentence_assign(ctx: Sentence_assignContext): string {
        console.log(ctx)
        return "";
    }

    visitSentence_lvl1(ctx: Sentence_lvl1Context): string {
        console.log(ctx)
        return "";
    }

    visitSentence_lvl_4_list_item(ctx: Sentence_lvl_4_list_itemContext): string {
        console.log(ctx)
        return "";
    }

    visitSentence_lvl_common(ctx: Sentence_lvl_commonContext): string {
        console.log(ctx)
        return "";
    }

    visitSentence_wrap(ctx: Sentence_wrapContext): string {
        console.log(ctx)
        return "";
    }

    visitSyntax(ctx: SyntaxContext): string {
        console.log(ctx)
        return "";
    }

    visit(tree: ParseTree): string {
        console.log(tree)
        return undefined;
    }

    visitChildren(node: RuleNode): string {
        console.log(node)
        return undefined;
    }

    visitErrorNode(node: ErrorNode): string {
        console.log(node)
        return undefined;
    }

    visitTerminal(node: TerminalNode): string {
        console.log(node)
        return undefined;
    }

}