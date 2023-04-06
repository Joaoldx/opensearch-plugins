import * as S from './styles'

const Wrapper = ({ children }) => <S.Wrapper>{children}</S.Wrapper>
const Section = ({ children }) => <S.Section>{children}</S.Section>

const Container = {}
Container.Wrapper = Wrapper
Container.Section = Section

export { Container }
