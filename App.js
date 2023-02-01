import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./componenets/GoalInput";
import GoalItem from "./componenets/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    console.log("delete goal");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(data) => {
            return (
              <GoalItem
                text={data.item.text}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
