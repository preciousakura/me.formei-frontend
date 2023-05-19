import { Container, Content, TopContent } from "./styles";
import { ProgressCourse, UserInfo } from "../../components/layout";

export function Home() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopContent>
        <UserInfo />
      </TopContent>
      <Content>
      <ProgressCourse />
      </Content>
    </Container>
  );
}
