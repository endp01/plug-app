import type { CSSProperties, FC, PropsWithChildren } from "react";
import { memo } from "react";

const styles: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  cursor: "move",
};

export interface BoxProps {
  yellow?: boolean;
  preview?: boolean;
}

export const Box: FC<PropsWithChildren<BoxProps>> = memo(function Box({ children, yellow, preview }) {
  const backgroundColor = yellow ? "yellow" : "white";

  return (
    <div
      style={{ ...styles, backgroundColor }}
      role={preview ? "BoxPreview" : "Box"}
    >
      {children}
    </div>
  );
});
