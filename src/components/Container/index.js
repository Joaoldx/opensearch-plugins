import * as S from './styles'

const Wrapper = ({ children }) => <S.Wrapper>{children}</S.Wrapper>
const Section = ({ children }) => <S.Section>{children}</S.Section>
const Row = ({ children }) => <S.Row>{children}</S.Row>

const Container = {}
Container.Wrapper = Wrapper
Container.Section = Section
Container.Row = Row

export { Container }
