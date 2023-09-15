import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (goalText: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: goalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalItemHandler = (itemId: string) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(
        (courseGoal) => courseGoal.id !== itemId
      );
    });
  };
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            addGoalHandler={addGoalHandler}
            endGoalHandler={endAddGoalHandler}
          />
        )}
        <View style={styles.golasContainer}>
          {courseGoals.length === 0 && <Text>List of goals...</Text>}
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalItemHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  golasContainer: {
    flex: 5,
  },
});
