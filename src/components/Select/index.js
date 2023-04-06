import * as S from './styles'

const Select = ({ children, defaultValue }) => (
  <S.Select defaultValue={defaultValue}>{children}</S.Select>
)

export { Select }
