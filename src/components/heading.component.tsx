import React, { ReactNode } from "react";

interface HeadingComponentProps {
    title: string;
    children?: ReactNode
}
const HeadingComponent = ({ title, children }: HeadingComponentProps) => {
   return (
       <div className="d-flex align-items-center justify-content-between my-4">
           <h2 className="mt-3">{ title }</h2>
           { children }
       </div>
   )
}

export default HeadingComponent;
