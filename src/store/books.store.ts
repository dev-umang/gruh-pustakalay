import { get, ref } from "firebase/database";
import { atom, selector } from "recoil";
import { RTDatabase } from "../common/config/firebase.config";
import { NODES } from "../common/constants/nodes.constant";
import { showError } from "../common/helpers/message.helper";
import { BookDTO } from "../common/models/books.model";

// const AllBooksSelector = selector<BookDTO[]>({
//   key: "allBooksSelector",
//   get: async () => {
//     try {
//       const res = await get(ref(RTDatabase, `${NODES.BOOKS}`));
//       const _data: BookDTO[] = Object.values(res.val() ?? {});
//       console.log({ _data });

//       return _data;
//     } catch (error: any) {
//       showError(error);

//       return [];
//     }
//   },
// });

export const AtomAllBooks = atom<BookDTO[]>({
  key: "atomAllBooks",
  default: [],
});
