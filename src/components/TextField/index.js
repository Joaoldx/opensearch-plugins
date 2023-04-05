import { styles as S } from './style'

const TextField = ({ value, placeholder, onChange }) => (
  <S.Input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)


export default TextField
