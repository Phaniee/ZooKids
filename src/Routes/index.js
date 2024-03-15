import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Pages/Welcome';
import Entrar from '../Pages/Entrar';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Entrar"
                component={Entrar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )
}