import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 23,
    left: -20,
  },
  navigation: {
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingBottom: 20,
    justifyContent: "space-between",
    width: "112%",
    backgroundColor: "#395481",
  },
  navButton: {
    color: "#fff",
    fontSize: 22,
    backgroundColor: "#395481",
    borderBottomWidth: 3,
    borderRadius: 0,
    borderBottomColor: "#fff",
  },
  container: {
    height: "100%",
    margin: 30,
  },
  infoContainer: {
    marginTop: 30,
    marginBottom: 50,
  },
  info: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  generated: {
    fontSize: 16,
    lineHeight: 40,
  },
  textInput: {
    borderColor: "#395481",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 15,
    paddingVertical: 7,
    paddingHorizontal: 5,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "sans-serif-condensed",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#395481",
    width: "45%",
    padding: 13,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  btnOutline: {
    width: "43%",
    backgroundColor: "#fff",
    borderColor: "#395481",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  btnOutlineText: {
    color: "#395481",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 10,
  },
  sectionHeader: {
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 5,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
