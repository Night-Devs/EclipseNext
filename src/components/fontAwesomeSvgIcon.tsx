import { SvgIcon, SxProps } from "@mui/material";
import React from "react";

type FontAwesomeSvgIconProps = {
  icon: any;
  sx: SxProps;
};

const FontAwesomeSvgIcon = React.forwardRef<
  SVGSVGElement,
  FontAwesomeSvgIconProps
>((props, ref) => {
  const { icon, sx } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon sx={sx} ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d: string, i: number) => (
          <path key={d} style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});
FontAwesomeSvgIcon.displayName = "Font Awesome Svg Icon";

export default FontAwesomeSvgIcon;
