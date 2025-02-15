import { Link } from "react-router-dom";

export default function PostList() {
    return(
        <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">{"지원"}</div>
                <div className="post__date">{"2025-02-15"}</div>
              </div>
              <div className="post__title">
                {" "}
                {"게시글"} {index}
              </div>
              <div className="post__text">
                {"안녕하세요 블로그 등업 신청합니다!!"}
              </div>
              <div className="post__utils-box">
                <div className="post__delete">{"삭제"}</div>
                <div className="post__edit">{"수정"}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>    )
}