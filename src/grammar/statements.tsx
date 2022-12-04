import { GrammarPoints, many, option, toDefs, union } from "../grammar"
import { base, exprs, stmts, types } from "./refs"

const _defs: Record<keyof typeof stmts, GrammarPoints> = {
    FunctionParam: [base.identifier, ':', types.Type],
    FunctionParams: ['(', many(stmts.FunctionParam, base.commaOrNL), option(stmts.FunctionParam), ')'],
    PropertyDef: [union('val', 'var'), base.identifier, option(':', types.Type), option('=', exprs.Expression)],
    PrimaryParam: [option(union('val', 'var')), stmts.FunctionParam],
    PrimaryParams: ['(', many(stmts.FunctionParam, base.commaOrNL), option(stmts.FunctionParam), ')'],
    Statement: union(stmts.ClassDef, stmts.TraitDef, stmts.PropertyDef, stmts.GetterDef, stmts.SetterDef),
    FunctionLikeDef: [base.identifier, types.TypeParams, stmts.FunctionParams, option('->', types.Type), types.WhereClause, option('=', exprs.Expression)],
    FunctionDef: ['def', stmts.FunctionLikeDef],
    GetterDef: ['get', stmts.FunctionLikeDef],
    SetterDef: ['set', stmts.FunctionLikeDef],
    StatementBody: [many(stmts.Statement, base.commaOrNL), option(stmts.Statement)],
    StatementBlock: ['{', stmts.StatementBody, '}'],
    SuperTypes: ['<:', types.Type, many(',', types.Type)],
    ClassDef: ['class', base.identifier, types.TypeParams, option(stmts.PrimaryParams), stmts.SuperTypes, types.WhereClause, stmts.StatementBlock],
    TraitDef: ['trait', base.identifier, types.TypeParams, stmts.SuperTypes, types.WhereClause, stmts.StatementBlock],
    File: [stmts.Import, stmts.StatementBody],
    ImportGroup: ['{', many(stmts.ImportSegment, base.commaOrNL), option(stmts.ImportSegment), '}'],
    ImportPath: union(base.identifier, [stmts.ImportPath, '.', base.identifier]),
    ImportValue: union(stmts.ImportGroup),
    ImportSegment: [stmts.ImportPath, option(':', stmts.ImportValue)],
    Import: ['import', stmts.ImportValue]
}

export const defs = toDefs(stmts, _defs)