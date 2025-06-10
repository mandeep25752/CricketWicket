import React, { useState } from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import {Alert, Text, View,TouchableOpacity} from 'react-native'

const RateUs = ()=>{
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");

  const handleStarPress = (star) => {
    setRating(star);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert("Rate Us", "Please select a rating before submitting.");
      return;
    }
    Alert.alert(
      "Thank You!",
      `You rated ${rating} star(s). Your feedback: "${feedback}"`
    );
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate Our App</Text>
      <Text style={styles.subHeader}>We value your feedback!</Text>

      {/* Star Rating */}
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
            <Image
              source={
                star <= rating
                  ? require("../../assets/StarFilledIcon.png")
                  : require("../../assets/star_outline.png")
              }
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Input */}
      <TextInput
        style={styles.feedbackInput}
        placeholder="Leave your feedback here..."
        placeholderTextColor="#808080"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: "#696969",
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  star: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  feedbackInput: {
    width: "100%",
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    color: "black",
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#4fa8b9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  submitText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RateUs;