import { ReactNode } from "react";
import { Grammar, GrammarInfo } from "./grammar";

export interface Section {
    name: string,
    children: ReactNode,
    subsections: Section[],
    toComponent(level: number): ReactNode
}

export const GrammarSection = (
    name: string, 
    grammar: GrammarInfo[] = [],
    children: ReactNode = [],
    subsections: Section[] = []
): Section => ({
    name, children, subsections, toComponent: (level: number = 0): ReactNode => (<div>
        <div id={name.replace('', '-')} className={`section${level}`}>{name}</div>
        {grammar.length !== 0 ? <Grammar terms={grammar}/> : <></>}
        <div className="section-body">{children}</div>
        {subsections.map((sec) => sec.toComponent(level + 1))} 
    </div>)
})

export const AlgorithmSection = (
    name: string, 
    algorithm: ReactNode,
    children: ReactNode = [],
    subsections: Section[] = []
): Section => ({
    name, children, subsections, toComponent: (level: number = 0): ReactNode => (<div>
        <div id={name.replace('', '-')} className={`section${level}`}>{name}</div>
        <div className="grammar">{algorithm}</div>
        <div className="section-body">{children}</div>
        {subsections.map((sec) => sec.toComponent(level + 1))} 
    </div>)
})

export const CodePoint = ({children}: {children: ReactNode}) => (
    <span className="codepoint">{children}</span>
) 