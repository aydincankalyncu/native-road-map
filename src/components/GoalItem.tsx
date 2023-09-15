import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";

type GoalItemProp = {
  text: string;
  id: string;
  onDeleteItem: (goalItemId: string, event: GestureResponderEvent) => void;
};
const GoalItem = (goalItemProps: GoalItemProp) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({pressed})=> pressed && styles.pressedItem}
        onPress={goalItemProps.onDeleteItem.bind(this, goalItemProps.id)} // for IOS we can know the pressed action with object destruction method.
      >
        <Text style={styles.goalText}>{goalItemProps.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#f31282",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});
