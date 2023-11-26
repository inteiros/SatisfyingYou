import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';


const Drawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem    
         labelStyle={{color: 'white' }}
         label="usuario@dominio.com"/>
      <Divider />
      <DrawerItemList
       {...props} />
      <DrawerItem
      labelStyle={{color: 'white' }}
      label="Sair" onPress={() => { props.navigation.popToTop() }} 
     />
    </DrawerContentScrollView>
  );
}


export default Drawer;