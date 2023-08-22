export interface propsTypes {
  children?: any;
  className?: string;
  style?:any
}

const OL = (props: propsTypes) => {
  const { children = "" } = props;
  return <ol {...props}>{children}</ol>;
};

export default OL;
