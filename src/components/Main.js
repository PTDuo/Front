import Nav_ from "./Nav_";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
function Main() {
  return (
    <>
      <Nav_></Nav_>
      {/* main 전체 프레임 */}
      <div className={styles.mainFrame}>
        {/* 무한스크롤이 있는 왼쪽 구역 */}
        <div className={styles.leftFrame}>
          <InfiniteScroll />
        </div>
        {/* 지도가 있는 오른쪽 구역 */}
        <div className={styles.rightFrame}></div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Main;
