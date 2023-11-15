import type { CSSProperties, FC, PropsWithChildren } from "react";
import { memo, useEffect, useState } from "react";

import { Box } from "./Box";

const styles: CSSProperties = {
  display: "inline-block",
  transform: "rotate(-7deg)",
  WebkitTransform: "rotate(-7deg)",
};

export interface BoxPreviewState {
  tickTock: any;
}

export const BoxPreview: FC<PropsWithChildren> = memo(function BoxPreview({
  children,
}) {
  const [tickTock, setTickTock] = useState(false);

  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500);

      return () => { clearInterval(interval); }
    },
    [tickTock]
  );

  return (
    <div style={styles}>
        <Box yellow={tickTock} preview>{children}</Box>
    </div>
  );
});
