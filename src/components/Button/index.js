import * as S from './styles'

const Button = ({ value, onClick }) => (
  <S.Button onClick={onClick}>{value}</S.Button>
)

export { Button }
