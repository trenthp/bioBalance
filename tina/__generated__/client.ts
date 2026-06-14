import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd2f9a9c863af535fc8cbb6070e30d0719a2e3f87', queries,  });
export default client;
  