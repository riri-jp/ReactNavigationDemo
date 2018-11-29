import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authTitle: {
    color: "#6C788E",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "#6C788E"
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(100, 40, 60, .4)"
  },
  topStyling: {
    top: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  homeTitle: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255, 255, 255, .1)"
  },
  listStyling: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center"
  },
  profileContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60
  },
  buttonStyling: {
    justifyContent: "center",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonTextStyling: {
    fontSize: 20,
    color: "#fff"
  },

  flavorList: {
    textAlign: "left",
    color: "#6C788E",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  icecreamImage: {
    height: 230,
    width: 350
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "white",
    fontStyle: "italic",
    fontFamily: "Baskerville"
  },
  profileimage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "#6C788E",
    fontSize: 16
  }
});

export default styles;
