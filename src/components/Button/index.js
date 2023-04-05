import { styles as S } from './style'

const Button = ({ value, onClick }) => (
  <S.Button onClick={onClick} >{value}</S.Button>
)

export default Button
