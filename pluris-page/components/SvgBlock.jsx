import Style from './svgBlock.module.scss'
import util from '../styles/util.module.scss'

export default function SvgBlock({ svgClassNameColor, opposite }) {
  const svgClassName = opposite ? Style.svgOpposite : ''
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={svgClassName}>
      <path
        className={svgClassNameColor}
        d="m1001.90005,100.10909c-108.95858,8.26917 -77.74053,-30.90019 -253.89972,-47.389c-52.30614,13.04746 -142.50749,85.51407 -254.99327,26.26822c-187.56662,-60.58661 -277.10331,51.41631 -303.3316,13.29726c-77.66517,-67.07762 -43.99801,20.33455 -112.63623,-30.89796c-37.71258,-48.26156 -91.47306,45.09254 -78.03294,-62.58818c335.33434,-0.26409 665.65373,0.46215 1000.98807,0.19806"
      ></path>
    </svg>
  )
}
