import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window === "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1301 : window.innerWidth,
    height: isSSR ? 700 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

export function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}
