import * as S from './styles'

const TextField = ({ id, value, placeholder, onChange }) => (
  <S.Input
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export { TextField }
