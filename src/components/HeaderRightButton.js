import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {BLACK} from '../color';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderRightButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Doubt');
      }}
      hitSlop={10}
      style={{marginRight: 15}}>
      <Icon name="notifications-outline" size={20} color={BLACK} />
    </Pressable>
  );
};
HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};
export default HeaderRightButton;
