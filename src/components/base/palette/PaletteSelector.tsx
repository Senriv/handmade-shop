import { useState } from "react";
import CircleIcon from "./CircleIcon";

interface PaletteSelectorProps {
  isHovered: boolean;
  colors?: Record<string, string> | string[];
}

const PaletteSelector = ({ isHovered, colors }: PaletteSelectorProps) => {
  const paletteItems = colors ? Object.values(colors).map((c) => `#${c}`) : [];

  const [selectedColor, setSelectedColor] = useState(paletteItems[0]);
  if (paletteItems.length === 0) return null;

  const displayedPalette = isHovered ? paletteItems : paletteItems.slice(0, 2);

  const remainingCount = paletteItems.length - displayedPalette.length;

  return (
    <div
      className={`flex  flex-row  items-center gap-[1px] h-[8px] sm:h-[14px] sm:gap-[2px] ${
        isHovered ? "w-fit" : "w-[29px] sm:w-[50px]"
      } rounded-[59px] bg-primary100 pr-[2px] cursor-pointer`}
    >
      {displayedPalette.map((color, index) => (
        <div
          key={index}
          className="w-[9px] h-[9px] sm:w-[14px] sm:h-[14px] flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedColor(color);
          }}
        >
          <CircleIcon
            className="w-[9px] h-[9px] sm:w-[14px] sm:h-[14px]"
            fillColor={color}
            outerStrokeColor={
              selectedColor === color ? "text-primary500" : "text-surface"
            }
          />
        </div>
      ))}

      {!isHovered && remainingCount > 0 && (
        <span className=" text-lightGray text-[5px] sm:text-[10px] font-semibold ">
          +{remainingCount}
        </span>
      )}
    </div>
  );
};

export default PaletteSelector;
