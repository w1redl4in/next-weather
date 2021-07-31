import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: String(process.env.NEXT_PUBLIC_ACCESS_KEY),
});
export default unsplash;
