import { ReactNode } from "react";

function HiddenElement (props: {className?: string, children: ReactNode}) {
    return (
        <span className={props.className ?? "clue"}>
            <span className="revealed">{props.children}</span>
            <span className="hidden">?</span>
        </span>
    )
}

export default HiddenElement;