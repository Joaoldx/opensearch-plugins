import { TabPanel as DefaultTabPanel } from 'react-tabs'
import * as S from './styles'
import './react-tabs.css'

const Tab = ({ children }) => <S.TabStyled>{children}</S.TabStyled>
const Tabs = ({ children }) => <S.TabsStyled>{children}</S.TabsStyled>
const TabList = ({ children }) => <S.TabListStyled>{children}</S.TabListStyled>

const TabsComponent = {}

TabsComponent.Tab = Tab
TabsComponent.Tabs = Tabs
TabsComponent.TabList = TabList
TabsComponent.TabPanel = DefaultTabPanel

TabsComponent.Tab.tabsRole = 'Tab'
TabsComponent.Tabs.tabsRole = 'Tabs'
TabsComponent.TabList.tabsRole = 'TabList'
TabsComponent.TabPanel.tabsRole = 'TabPanel'

export { TabsComponent }
