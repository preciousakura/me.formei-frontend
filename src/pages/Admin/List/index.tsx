import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { Text, TouchableOpacity, ListRenderItemInfo, Platform, View } from 'react-native';
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Header, ProgressDiscipline, SearchInput, CreateButton } from "../../../components/layout";
import { ButtonHomeCard } from "../../../components/layout/ButtonHomeCard";
import { AdminParam, AdminInfo } from "User";
import { AdminCard } from "../../../components/layout/AdminCard";
import { FlatList, HStack, VStack, Divider } from "native-base";
import { background, border } from "native-base/lib/typescript/theme/styled-system";
import { useNavigation } from "@react-navigation/native";
import { AdminProp } from "../../../types/types";
import { H5 } from "../../../components/shared/text";

export function AdminList() {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  const dataTeste: AdminParam[] = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];

  const data: AdminInfo[] = [
    {
      email: "isa@gmail.com",
      id: '1',
      lastname: "Sobrenome",
      name: "Isa",
      username: "isaisa",
    },
    {
      email: "luis@gmail.com",
      id: '2',
      lastname: "Sobrenome",
      name: "Luis",
      username: "luisluis",
    },
    {
      email: "Italo@gmail.com",
      id: '3',
      lastname: "Sobrenome",
      name: "Italo",
      username: "ItaloItalo",
    },
  ];

  const HeaderElement = () => {
    return (
      <VStack space={2} paddingBottom={4}>
        <Header
          isSpaced={false}
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.white}
        />
        <HStack space={2}>
        <SearchInput title="administrador" />
        <CreateButton
          onPress={() => navigation.navigate("Admins", { screen: "AdminRegister"})}
        />
        </HStack>
      </VStack>
    );
  };


  const renderCard = (itens: ListRenderItemInfo<AdminInfo>) => {
    const { item } = itens;
    return (
      // <TouchableOpacity
      //   style={{ paddingVertical: 16, backgroundColor: "#dddddd", marginBottom: 2 }}
      //   /* onPress={() => navigation.navigate("Admin", {
      //     screen: "AdminDetails",
      //     params: item.id,
      //   })}    */   
      //   >
      //   <Text
      //   style={{ paddingVertical: 16, color: "#456852", marginBottom: 2 }}
      //   >{item.name}</Text>
      // </TouchableOpacity>

      <Container>
        <VStack space={3}>
          <AdminCard
            // onPress={() => navigation.navigate("DisciplineDetails", d)}
            onPress={() => console.log(`${item.id}`)}
            key={`${item.id}`}
            data={item}
            {...item}
          />
        </VStack>
      </Container>
    )
  }



  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.background} />
      <Content>
        <FlatList
          contentContainerStyle={{
            paddingBottom: Platform.OS === "ios" ? 70 : 0,
          }}
          data={data}
          renderItem={renderCard}
          ListHeaderComponent={HeaderElement}
          keyExtractor={(item, i) => `${item.id}_${i}`}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        >
        </FlatList>
      </Content>
    </Container>
  );
}
