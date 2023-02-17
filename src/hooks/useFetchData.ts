import { API_URL } from "../utils/constants";
import { formatData } from "../utils/helper";
import storage from "@react-native-firebase/storage";
import { TData } from "../types";

const getDownloadUrl = async (url: string) => {
  const ref = storage().ref(`assets/${url}`);
  return ref.getDownloadURL();
};

export const useFetchData = async (
  data: TData[],
  setData: (data: TData[]) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | undefined) => void
) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promises: Promise<void>[] = [];

  if (data.length > 0) {
    return;
  }

  try {
    const resp = await fetch(API_URL, { signal });
    const json = await resp.json();
    setLoading(true);
    const formattedData: TData[] = formatData(json);
    formattedData.forEach((value: TData) => {
      promises.push(
        getDownloadUrl(`${value.id}.png`).then((url: string) => {
          value.imageUrl = url;
        })
      );
    });
    await Promise.all(promises);
    setData(formattedData);
  } catch (err: any) {
    setError(err);
  } finally {
    setLoading(false);
  }
};
