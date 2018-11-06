1.  Setup:

    yarn add react-navigation

```javascript
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Detail: DetailScreen
});
```

2.  Initial Route Name:

```javascript
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Home"
  }
);
```

3.  Go to List Screen:

```javascript
<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => this.props.navigation.navigate("List")}
>
```

4.  Go to Detail Screen (without parameters first):

```javascript
<ListItem
  onPress={() =>
    this.props.navigation.navigate("Detail", { flavor: flavorScoop })
  }
>
  <Text style={styles.flavorList}>{flavorScoop.flavorName}</Text>
</ListItem>
```

5.  Add parameters for Detail Navigation:

(List.js)

```javascript
<ListItem
  onPress={() =>
    this.props.navigation.navigate("Detail", { flavor: flavorScoop })
  }
>
```

(Detail.js)

```javascript
render() {
  let flavor = this.props.navigation.getParam("flavor", {
    flavorName: "Chocolate",
    image_url: "http://www.theold27icecreamshop.com/images/icecream.png"
  });
  ...

  <Image
    source={{
      uri: flavor.image_url
    }}

    ...
  <Text>FLAVOR: {flavor.flavorName}</Text>
```

6.  Back Button

```javascript
<Button
  title="BACK"
  color="#6C788E"
  onPress={() => this.props.navigation.goBack()}
/>
```

7.  navigate vs push

```javascript
<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => this.props.navigation.navigate("Home")}
/>

<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => this.props.navigation.push("Home")}
/>
```

8.  Home & List Header Titles

```javascript
class HomeScreen extends Component {
static navigationOptions = {
  title: "Home"
}
  ...
```

9.  Detail Header Title

```javascript
static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("flavor").flavorName
  };
};
```

10. Header Styling

```javascript
{
  initialRouteName: "Home",
  navigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#90d4ed"
    },
    headerTextStyle: {
      fontWeight: "bold"
    }
  }
}
```

11. Customized Header Style for Home Page

```javascript
class HomeScreen extends Component {
static navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: #ffd1dc
  }
}
```

12. Remove Header from Home Page

```javascript
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
```

13. Add a button on the right side of the header

```javascript
static navigationOptions = {
  title: "LIST",
  headerRight: (
    <Button title="Press Me" color="white" onPress={() => alert("HELLO!")} />
  )
};
```

14. Change title when pressing on the button:

```javascript
static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name")

<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => this.props.navigation.setParams({ name: "Lailz" })}
>
  <Text style={styles.buttonTextStyling}>Set title name to 'Lailz'</Text>
</Button>
```

15. Add a counter to the header:

```javascript
headerRight: <Button
  transparent
  light
  onPress={navigation.getParam("increaseCount")}
>
  <Text style={styles.buttonTextStyling}>ICECREAM!!</Text>
</Button>;

-------------

constructor(props) {
  super(props);
  this.state = {
    count: 0
  };
}
componentDidMount() {
  this.props.navigation.setParams({ increaseCount: this._increaseCount });
}

_increaseCount = () => {
  this.setState({ count: this.state.count + 1 });
};

----------------

<Text style={styles.buttonTextStyling}>{this.state.count}</Text>
```
