import * as S from './styles'

const TextField = ({ value, placeholder, onChange }) => (
  <S.Input placeholder={placeholder} value={value} onChange={onChange} />
)

export { TextField }
