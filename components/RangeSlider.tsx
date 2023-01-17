import cn from "classnames";
import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";

const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      className="w-full h-full"
      renderMark={(props) => {
        return (
          <div
            {...props}
            className={cn({
              "top-1/2 -translate-y-1/2": !isVertical,
              "left-1/2 -translate-x-1/2": isVertical,
              "w-1 h-1": true,
              "rounded-full bg-indigo-500": true,
            })}
          ></div>
        );
      }}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index === 1;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "h-2 top-1/2 -translate-y-1/2": !isVertical,
              "w-2 left-1/2 -translate-x-1/2": isVertical,
              "rounded-full": true,
              "bg-gray-200": isMulti ? isFirst || isLast : isLast,
              "bg-indigo-500": isMulti ? !isFirst || !isLast : isFirst,
            })}
          ></div>
        );
      }}
      renderThumb={(props, state) => (
        <div
          {...props}
          className={cn({
            "w-8 h-full": !isVertical,
            "h-8 w-full": isVertical,
            "rounded-full bg-indigo-500 text-xs text-white flex items-center justify-center cursor-grab":
              true,
          })}
        >
          {state.valueNow}
        </div>
      )}
    />
  );
};

export default RangeSlider;
