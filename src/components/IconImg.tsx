interface IProps {
  src: string;
  ClassName?: string;
}
const IconImg = ({ src, ClassName }: IProps) => {
  return <img className={`w-5 h-5 ${ClassName}`} src={src} />;
};

export default IconImg;
