import { useGlobalContext } from "./Context";
import sublinks from "./data";
import { useRef } from "react";
import rosesleft from "./assets/roses-left.png";
import rosesright from "./assets/roses-right.png";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <div>
        <img src={rosesleft} alt="My Image" className="flowers-left" />
      </div>
      <div className="submenu-content">
        <div className="submenu-links">
          {currentPage?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <img src={rosesright} alt="My Image" className="flowers-right" />
      </div>
    </div>
  );
};
export default Submenu;
