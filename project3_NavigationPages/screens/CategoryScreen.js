import { FlatList } from "react-native";
import { CATEGORIES } from "./../data/dummy-data";
import CategoryGridTile from "../components/CagegoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemdata) {
    function pressHandler() {
      navigation.navigate("MealOverView", {
        categoryId: itemdata.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind()}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
