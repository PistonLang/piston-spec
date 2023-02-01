import { toRefs } from '../grammar'

export const exprs = toRefs('expressions', [
	'NestedExpression',
	'AccessExpression',
	'CallExpression',
	'UnaryExpression',
	'ThisExpression',
	'SuperExpression',
	'IdentifierExpression',
	'LiteralExpression',
	'Term',
	'Expression',
	'TimesExpression',
	'PlusExpression',
	'RelationExpression',
	'EqualsExpression',
	'AndExpression',
	'OrExpression',
	'TernaryExpression',
	'AssignExpression',
] as const)

export const tokens = toRefs('lexical-tokens', [
	'character',
	'charCharacter',
	'stringCharacter',
	'commentCharacter',
	'whitespaceCharacter',
	'letter',
	'digit',
	'lineComment',
	'multiComment',
	'comment',
	'newline',
	'commaOrNL',
	'identifier',
	'identifierHead',
	'identifierTail',
	'whitespace',
	'eof',
	'classKw',
	'traitKw',
	'defKw',
	'valKw',
	'varKw',
	'importKw',
	'getKw',
	'setKw',
	'thisKw',
	'superKw',
	'nullKw',
	'trueKw',
	'falseKw',
	'apostrophe',
	'quote',
	'lParen',
	'rParen',
	'lBracket',
	'rBracket',
	'lBrace',
	'rBrace',
	'plus',
	'minus',
	'star',
	'slash',
	'and',
	'pipe',
	'andAnd',
	'pipePipe',
	'less',
	'greater',
	'lessEq',
	'greaterEq',
	'eq',
	'eqEq',
	'qMark',
	'eMarkEq',
	'colon',
	'subtype',
	'supertype',
	'arrow',
	'dot',
	'comma',
	'binaryDigit',
	'decimalDigit',
	'hexDigit',
	'decimalBody',
	'binaryBody',
	'hexBody',
	'decimalLiteral',
	'binaryLiteral',
	'hexLiteral',
	'floatExponent',
	'intLiteral',
	'floatLiteral',
	'boolLiteral',
	'escapedChar',
	'charLiteral',
	'stringLiteral',
	'underscore',
	'PistonToken',
] as const)

export const props = toRefs('properties', ['PropertyDef', 'SetterDef', 'GetterDef'] as const)

export const funcs = toRefs('functions', [
	'FunctionParam',
	'FunctionParams',
	'FunctionLikeDef',
	'Identifier',
	'FunctionDef',
] as const)

export const packs = toRefs('packages-and-modules', [
	'Import',
	'ImportPath',
	'ImportSegment',
	'ImportValue',
	'ImportGroup',
	'File',
] as const)

export const scopes = toRefs('scopes', ['Statement', 'StatementBody', 'StatementBlock'] as const)

export const types = toRefs('types', [
	'TypeInstance',
	'PathSegment',
	'TypePath',
	'TypeParams',
	'TypeArg',
	'TypeArgs',
	'IntersectionType',
	'TypeGuard',
	'NullableType',
	'NestedType',
	'TypeBound',
	'SuperTypes',
	'ClassDef',
	'TraitDef',
] as const)
