import { createRef, useImperativeHandle, useState } from "react";
import { Bars } from "react-loader-spinner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loaderRef = createRef() as any;

const Spinner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(
    loaderRef,
    () => {
      return {
        show() {
          setIsVisible(true);
        },
        hide() {
          setIsVisible(false);
        },
      };
    },
    []
  );

  return (
    <div
      ref={loaderRef}
      className="darkBackground"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <Bars
        height="80"
        width="80"
        color="#42AFCB"
        ariaLabel="bars-loading"
        wrapperStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
