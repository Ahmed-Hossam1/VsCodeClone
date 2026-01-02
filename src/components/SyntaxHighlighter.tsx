import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
  content: string | undefined;
}
const Highlighter = ({ content }: IProps) => {
  return (
      <SyntaxHighlighter
        language="javascript"
        style={coldarkDark}
        customStyle={{
          // backgroundColor : 'transparent',
          height: "100vh",
          width: "100%",
          overflowX: "hidden",
          fontSize: "1.5rem",
        }}
        showLineNumbers
      >
        {`${content}`}
      </SyntaxHighlighter>
  );
};

export default Highlighter;
