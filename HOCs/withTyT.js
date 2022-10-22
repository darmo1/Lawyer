import * as React from "react";

// eslint-disable-next-line react/display-name
export const withTyT = (Component) => React.forwardRef((props, ref) => {
  return <Component {...props}  forwardRef={props.ref}/>
});
