import * as S from './styles'

const Button = ({ value, alignEnd, onClick }) => (
  <S.Button onClick={onClick} alignEnd={alignEnd}>
    {value}
  </S.Button>
)

export { Button }
