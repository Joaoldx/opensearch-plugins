import React, { useState, useEffect } from 'react'
import {
  Container,
  TabsComponent,
  TextField,
  Button,
  Select,
  Image,
  Label,
  SwitchField
} from './components'
import windowsLogo from './assets/windows-icon.png'

const options = ['Select', 'Linux', 'Firewall', 'Azure', 'AWS']
const subType = ['Select', 'OS Logs', 'Fortinet', 'Office365']

const INITIAL_VALUE = {
  1: {
    id: '1',
    label: 'Microsoft Office 365',
    isChecked: false
  },
  2: {
    id: '2',
    label: 'azure Active Directory',
    isChecked: false
  },
  3: {
    id: '3',
    label: 'Windows Defender',
    isChecked: false
  }
}

function App() {
  const [textValue, setTextValue] = useState()
  const [checkSwitch, setCheckedSwitch] = useState(INITIAL_VALUE)

  useEffect(() => {
    if (!checkSwitch) setCheckedSwitch(INITIAL_VALUE)
  }, [checkSwitch])

  const handleText = (e) => {
    setTextValue(e.target.value)
  }

  const handleSwitch = (checked, _, id) => {
    setCheckedSwitch({
      ...checkSwitch,
      [id]: { ...checkSwitch[id], isChecked: checked }
    })
  }

  return (
    <Container.Wrapper>
      <TabsComponent.Tabs>
        <TabsComponent.TabList>
          <TabsComponent.Tab>Connected</TabsComponent.Tab>
          <TabsComponent.Tab>Available</TabsComponent.Tab>
          <TabsComponent.Tab>Azure</TabsComponent.Tab>
          <TabsComponent.Tab>AWS</TabsComponent.Tab>
          <TabsComponent.Tab>Windows</TabsComponent.Tab>
          <TabsComponent.Tab>Firewall</TabsComponent.Tab>
        </TabsComponent.TabList>

        <TabsComponent.TabPanel>
          <Container.Section>
            <TextField
              value={textValue}
              placeholder={'Select your log Source'}
              onChange={handleText}
            />

            <Select defaultValue={options[0]}>
              {options.map((option, idx) => (
                <option key={option} hidden={idx === 0 ? true : false}>
                  {option}
                </option>
              ))}
            </Select>
            <TextField
              value={textValue}
              placeholder={'Select a sub-type'}
              onChange={handleText}
            />

            <Select defaultValue={options[0]}>
              {subType.map((option, idx) => (
                <option key={option} hidden={idx === 0 ? true : false}>
                  {option}
                </option>
              ))}
            </Select>

            <Button
              value={'Next'}
              onClick={() => console.log('Hello from button')}
              alignEnd
            />
          </Container.Section>
        </TabsComponent.TabPanel>

        <TabsComponent.TabPanel>
          <Container.Section>
            <Container.Row>
              <Image src={windowsLogo} />

              <Label text={checkSwitch[1].label} />

              <SwitchField
                id={'1'}
                checked={checkSwitch[1].isChecked}
                onChange={(checked, _, id) => handleSwitch(checked, _, id)}
              />

              <Button
                value={'Manage'}
                onClick={() => console.log('Hello from button')}
              />
            </Container.Row>

            <Container.Row>
              <Image src={windowsLogo} />

              <Label text={checkSwitch[2].label} />

              <SwitchField
                id={'2'}
                checked={checkSwitch[2].isChecked}
                onChange={(checked, _, id) => handleSwitch(checked, _, id)}
              />

              <Button
                value={'Manage'}
                onClick={() => console.log('Hello from button')}
              />
            </Container.Row>

            <Container.Row>
              <Image src={windowsLogo} />

              <Label text={checkSwitch[3].label} />

              <SwitchField
                id={'3'}
                checked={checkSwitch[3].isChecked}
                onChange={(checked, _, id) => handleSwitch(checked, _, id)}
              />

              <Button
                value={'Manage'}
                onClick={() => console.log('Hello from button')}
              />
            </Container.Row>
          </Container.Section>
        </TabsComponent.TabPanel>

        <TabsComponent.TabPanel>
          <Container.Section>
            <h2>Any content 3</h2>
          </Container.Section>
        </TabsComponent.TabPanel>

        <TabsComponent.TabPanel>
          <Container.Section>
            <h2>Any content 4</h2>
          </Container.Section>
        </TabsComponent.TabPanel>

        <TabsComponent.TabPanel>
          <Container.Section>
            <h2>Any content 5</h2>
          </Container.Section>
        </TabsComponent.TabPanel>

        <TabsComponent.TabPanel>
          <Container.Section>
            <h2>Any content 6</h2>
          </Container.Section>
        </TabsComponent.TabPanel>
      </TabsComponent.Tabs>
    </Container.Wrapper>
  )
}

export default App
