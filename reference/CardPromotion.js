import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Tags } from "./Tags";
import "./style.css";

export const CardPromotion = ({
  size,
  type,
  stateProp,
  className,
  imageClassName,
  headerClassName,
  tagsProductIconsLogoChances = "logo-chances-2.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "default",
    type: type || "promociones",
    state: stateProp || "default",
  });

  return (
    <div
      className={`card-promotion ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {(state.size === "small" || (state.size === "default" && state.type === "promociones")) && (
        <>
          <div className={`image ${state.size} ${state.type} ${imageClassName}`}>
            {state.type === "transparencia" && <img className="img" alt="Image" src="image-5.png" />}
          </div>
          <div className={`item-list type-${state.type}`}>
            <div className="container-main">
              {state.type === "promociones" && (
                <>
                  <div className={`header ${headerClassName}`}>
                    <div className="frame">
                      <div className="title">SORTEO #6808</div>
                      <Tags
                        className="instance-node"
                        divClassName="tags-instance"
                        productIconsLogoChances={tagsProductIconsLogoChances}
                        stare="default"
                        type="chances"
                      />
                    </div>
                    <div className="container-text">
                      <div className="div">26 de Febrero. 2026</div>
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="text-wrapper-2">PREMIO 640 MILLONES</div>
                  </div>
                </>
              )}

              {state.type === "transparencia" && <>Visualizar</>}
            </div>
          </div>
        </>
      )}

      {(state.size === "hover" || (state.size === "default" && state.type === "transparencia")) && (
        <div className={`image-2 size-${state.size} state-${state.state}`}>
          {state.size === "hover" && <img className="img" alt="Image" src="image-4.png" />}
        </div>
      )}

      {state.state === "focus" && <img className="image-3" alt="Image" src="image.svg" />}

      {(state.size === "focus" ||
        state.size === "hover" ||
        (state.size === "default" && state.type === "transparencia")) && (
        <>
          <div className="container-main-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">PREMIO 640 MILLONES</div>
            </div>
          </div>
          <div className={`visualizar size-${state.size}`}>
            <div className="text-wrapper-4">Visualizar</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "hover" && state.state === "hover" && state.type === "transparencia") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "focus",
          state: "focus",
          type: "transparencia",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        size: "hover",
        state: "hover",
      };
  }

  return state;
}

CardPromotion.propTypes = {
  size: PropTypes.oneOf(["small", "hover", "focus", "default"]),
  type: PropTypes.oneOf(["transparencia", "promociones"]),
  stateProp: PropTypes.oneOf(["hover", "focus", "default"]),
  tagsProductIconsLogoChances: PropTypes.string,
};
