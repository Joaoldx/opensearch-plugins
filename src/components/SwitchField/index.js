import Switch from 'react-switch'

const SwitchField = ({ id, checked, onChange }) => (
  <Switch
    id={id}
    onChange={onChange}
    checked={checked}
    uncheckedIcon={false}
    checkedIcon={false}
    onColor="#49be25"
    offColor="#989898"
  />
)

export { SwitchField }
