import React, { useState, useCallback, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

const MIN_LIMIT = 1;
const MAX_LIMIT = 1000;
const STEP = 1;

const TRACK_COLOR_DARK = "#634c9f";
const HANDLE_COLOR = "#4C2C94";

const formatPrice = (price: number) => `$${price.toLocaleString()}`;

interface PriceRangeSliderProps {
  initialMin?: number;
  initialMax?: number;
  minLimit?: number;
  maxLimit?: number;
  step?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  initialMin = 300,
  initialMax = 500,
  minLimit = MIN_LIMIT,
  maxLimit = MAX_LIMIT,
  step = STEP,
}) => {
  const [minVal, setMinVal] = useState<number>(initialMin);
  const [maxVal, setMaxVal] = useState<number>(initialMax);

  const rangeRef = useRef<HTMLDivElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);
  const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);

  const getPercent = useCallback(
    (value: number) => ((value - minLimit) / (maxLimit - minLimit)) * 100,
    [minLimit, maxLimit]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (minInputRef.current && maxInputRef.current) {
      if (activeHandle === "min") {
        minInputRef.current.style.zIndex = "6";
        maxInputRef.current.style.zIndex = "5";
      } else if (activeHandle === "max") {
        maxInputRef.current.style.zIndex = "6";
        minInputRef.current.style.zIndex = "5";
      } else {
        minInputRef.current.style.zIndex = minVal > maxVal - step ? "6" : "5";
        maxInputRef.current.style.zIndex = maxVal > minVal + step ? "6" : "5";
      }
    }
  }, [minVal, maxVal, getPercent, step, activeHandle]);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxVal - step);
    setMinVal(value);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minVal + step);
    setMaxVal(value);
  };

  const getTooltipPosition = (value: number) => {
    const percent = getPercent(value);
    return `calc(${percent}% + (${0.5 - percent / 100} * -40px))`;
  };

  return (
    <div className="relative w-full max-w-xl mx-auto pt-6 pb-6 px-4">
      <div
        className="absolute transition-all duration-100 ease-out z-10"
        style={{ left: getTooltipPosition(minVal), top: "1rem" }}
      >
        <div
          className="px-3 py-1 text-sm font-semibold text-white rounded shadow-lg text-center whitespace-nowrap"
          style={{
            backgroundColor: HANDLE_COLOR,
            transform: "translateX(-50%)",
          }}
        >
          {formatPrice(minVal)}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-x-[6px] border-x-transparent"
            style={{ borderTopColor: HANDLE_COLOR, marginTop: "-1px" }}
          />
        </div>
      </div>

      <div
        className="absolute transition-all duration-100 ease-out z-10"
        style={{ left: getTooltipPosition(maxVal), top: "1rem" }}
      >
        <div
          className="px-3 py-1 text-sm font-semibold text-white rounded shadow-lg text-center whitespace-nowrap"
          style={{
            backgroundColor: HANDLE_COLOR,
            transform: "translateX(-50%)",
          }}
        >
          {formatPrice(maxVal)}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-x-[6px] border-x-transparent"
            style={{ borderTopColor: HANDLE_COLOR, marginTop: "-1px" }}
          />
        </div>
      </div>

      <div className="relative h-1 bg-[#DEE4EC] rounded-full my-8">
        <div
          ref={rangeRef}
          className="absolute h-1 rounded-full pointer-events-none"
          style={{ backgroundColor: TRACK_COLOR_DARK }}
        />

        <div className="flex justify-between absolute w-full -top-12 ">
          <div className="absolute left-0 p-2 text-xs font-semibold rounded-sm bg-[#DEE4EC] text-[#333333]">
            {formatPrice(minLimit)}
          </div>
          <div className="absolute right-0 p-2 text-xs font-semibold rounded-sm bg-[#DEE4EC] text-[#333333]">
            {formatPrice(maxLimit)}
          </div>
        </div>

        <input
          ref={minInputRef}
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minVal}
          step={step}
          onChange={handleMinChange}
          onMouseDown={() => setActiveHandle("min")}
          onMouseUp={() => setActiveHandle(null)}
          onTouchStart={() => setActiveHandle("min")}
          onTouchEnd={() => setActiveHandle(null)}
          className="
                        absolute w-full h-1 appearance-none bg-transparent outline-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-5 
                        [&::-webkit-slider-thumb]:w-5 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-transparent 
                        [&::-webkit-slider-thumb]:border-0 
                        [&::-webkit-slider-thumb]:shadow-none      
                    "
        />

        <input
          ref={maxInputRef}
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxVal}
          step={step}
          onChange={handleMaxChange}
          onMouseDown={() => setActiveHandle("max")}
          onMouseUp={() => setActiveHandle(null)}
          onTouchStart={() => setActiveHandle("max")}
          onTouchEnd={() => setActiveHandle(null)}
          className="
                        absolute w-full h-1 appearance-none bg-transparent outline-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-5 
                        [&::-webkit-slider-thumb]:w-5 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-transparent
                        [&::-webkit-slider-thumb]:border-0
                        [&::-webkit-slider-thumb]:shadow-none
                    "
        />

        <div
          className="absolute h-5 w-5 rounded-full top-1/2 -mt-2.5 z-4 pointer-events-none shadow-md border-2 border-white"
          style={{
            left: `calc(${getPercent(minVal)}% - 10px)`,
            backgroundColor: HANDLE_COLOR,
          }}
        >
          <div className="h-full w-full rounded-full bg-white opacity-40"></div>
        </div>
        <div
          className="absolute h-5 w-5 rounded-full top-1/2 -mt-2.5 z-4 pointer-events-none shadow-md border-2 border-white"
          style={{
            left: `calc(${getPercent(maxVal)}% - 10px)`,
            backgroundColor: HANDLE_COLOR,
          }}
        >
          <div className="h-full w-full rounded-full bg-white opacity-40"></div>
        </div>

        <div className="absolute w-full flex justify-between -bottom-6 text-xs text-[#C0C0C0] pointer-events-none">
          <div className="relative h-2 w-px bg-[#DEE4EC]">
            <span className="absolute bottom-[-1.5rem] left-0 transform -translate-x-1/2">
              {MIN_LIMIT}
            </span>
          </div>
          <div className="absolute left-[25%] h-2 w-px bg-[#DEE4EC] transform -translate-x-1/2">
            <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
              251
            </span>
          </div>
          <div className="absolute left-[50%] h-2 w-px bg-[#DEE4EC] transform -translate-x-1/2">
            <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
              501
            </span>
          </div>
          <div className="absolute left-[75%] h-2 w-px bg-[#DEE4EC] transform -translate-x-1/2">
            <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
              750
            </span>
          </div>
          <div className="relative h-2 w-px bg-[#DEE4EC]">
            <span className="absolute bottom-[-1.5rem] right-0 transform translate-x-1/2">
              {MAX_LIMIT}
            </span>
          </div>
        </div>

        <div className="absolute w-full flex justify-between -bottom-3 pointer-events-none">
          {Array.from({ length: 40 }).map((_, index) => (
            <div key={index} className="h-1 w-px bg-[#DEE4EC]"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
