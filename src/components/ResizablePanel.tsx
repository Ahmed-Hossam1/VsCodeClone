import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

interface IProps {
  ShowLeftSide: ReactNode;
  ShowRightSide: ReactNode;
  defaultLayout?: number[] | undefined;
}
const ResizablePanel = ({
  defaultLayout = [20, 80],
  ShowLeftSide,
  ShowRightSide,
}: IProps) => {
  return (
    <Group>
      <Panel defaultSize={defaultLayout[0]}>{ShowLeftSide}</Panel>
      <Separator className="border-r border-2 h-screen" />
      <Panel defaultSize={defaultLayout[1]}>{ShowRightSide}</Panel>
    </Group>
  );
};

export default ResizablePanel;
