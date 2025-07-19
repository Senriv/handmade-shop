import { useState } from "react";
import CircleIcon from "./CircleIcon";

interface PaletteSelectorProps {
  isHovered: boolean;
}

const PaletteSelector = ({ isHovered }: PaletteSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState("#FF6B6B");

  const paletteItems = [
    "#FF6B6B",
    "#4ECDC4",
    "#556270",
    "#C7F464",
    "#FFCC5C",
    "#6B5B95",
    "#88D8B0",
    "#FFB347",
    "#92A8D1",
    "#F67280",
  ];

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
