import { Container } from "./styles";
import {StatusBar, Text} from 'react-native'

export default function Login() {
    return (
        <Container>
        <StatusBar backgroundColor="#277BC0" barStyle="dark-content" />
            <Text>Tela de Login</Text>
        </Container>
    )
}