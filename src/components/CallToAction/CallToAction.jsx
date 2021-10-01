import "./call-to-action.scss"

const CallToAction = () => {
  return (
    <div className="cta">
      <h2 className="cta__book-now">Good news! We have 4 free rooms for your selected dates!</h2>
      <button className="btn">
        <span className="btn__visible">Book now!</span>
        <span className="btn__hidden">Only 4 rooms left!</span>
      </button>
    </div>
  )
}

export default CallToAction
