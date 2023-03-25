import { get, ref } from "firebase/database";
import { atom, selector } from "recoil";
import { RTDatabase } from "../common/config/firebase.config";
import { NODES } from "../common/constants/nodes.constant";

const CategoriesSelector = selector<string[]>({
  key: "categoriesSelector",
  get: async () => {
    try {
      const res = await get(
        ref(RTDatabase, `${NODES.SETTINGS}/${NODES.BOOK_CATEGORIES}`)
      );
      const data = res.val();

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});

export const AtomCategories = atom<string[]>({
  key: "atomCategories",
  default: CategoriesSelector,
});
