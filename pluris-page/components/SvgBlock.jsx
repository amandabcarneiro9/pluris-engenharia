import Style from './svgBlock.module.scss'

export function SvgBlock({ classNameColor, opposite }) {
  const svgClassName = opposite ? Style.svgOpposite : ''
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={svgClassName}>
      <path className={classNameColor} d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
    </svg>
  )
}
