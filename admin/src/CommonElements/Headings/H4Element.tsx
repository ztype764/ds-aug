interface propsTypes {
    children?: any;
    className?: string;
  
}

const H4 = (props:propsTypes) => {
  const { children = "" } = props;
  return <h4 {...props}>{children}</h4>;
};

export default H4;
