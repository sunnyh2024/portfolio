import { ReactNode } from "react";

export default function Background({children}: {children: ReactNode}) {
    return (
        <div className="h-screen bg-black">{children}</div>
    )
}