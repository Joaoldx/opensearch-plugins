import Switch from 'react-switch'

const SwitchField = ({ checked, onChange }) => (
  <Switch
    onChange={onChange}
    checked={checked}
    uncheckedIcon={false}
    checkedIcon={false}
    onColor="#49be25"
    offColor="#989898"
  />
)

export { SwitchField }
