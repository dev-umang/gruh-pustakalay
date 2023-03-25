import { atom } from "recoil";
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
