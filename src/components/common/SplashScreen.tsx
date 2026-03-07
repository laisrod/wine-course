interface SplashScreenProps {
  visible: boolean
}

function SplashScreen({ visible }: SplashScreenProps) {
  return (
    <div
      className={`splash${visible ? '' : ' splash--hidden'}`}
      aria-hidden={!visible}
    >
      <div className="splash__grid" aria-hidden="true" />
      <p className="splash__text">
      Welcome to <span className="splash__name">winewithsimo</span>
      </p>
    </div>
  )
}

export default SplashScreen
