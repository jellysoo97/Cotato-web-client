import React from "react"

const CardRow = () => {
  const Row = ({ src, title, desc1, desc2 }) => {
    return (
      <div className="col-3 card m-3 p-3 text-center">
        <div className="card-img-top my-1">
          <img className="center-block" src={src} alt={""} width={"100px"} height={"100px"} />
        </div>
        <div className="card-body">
          <h4 className="card-title" style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            {title}
          </h4>
          <p className="card-text">{desc1}</p>
          <p className="card-text">{desc2}</p>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="row text-center">
        <div className="col-3"></div>
        <Row src={"./images/group-chat.png"} title={"정기세션"} desc1={"- IT 이슈 소개"} desc2={"- 스터디/프로젝트 브리핑"} />
        <Row src={"./images/club.png"} title={"스터디"} desc1={"- 원하는 분야 스터디"} desc2={"- 스프링, js, 알고리즘 등등"} />
      </div>
      <div className="row text-center">
        <div className="col-3"></div>
        <Row src={"./images/development.png"} title={"프로젝트"} desc1={"- 원하는 프로젝트 진행"} desc2={"- 웹개발, 안드로이드 등등"} />
        <Row src={"./images/group.png"} title={"네트워크 형성"} desc1={"- 개발 분야 친목 다지기"} desc2={"- 자유로운 소모임"} />
      </div>
    </>
  )
}

export default CardRow