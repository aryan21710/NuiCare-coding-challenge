import { TData, TResponse } from "../types";

export const formatData = (response: TResponse): TData[] => {
const formattedData: TData[] = [];
  for (const key in response) {
    const item = response[key];
    formattedData.push({
      id: key,
      title: item.title.en,
      subtitle: item.intro.en,
      level: `Level${item["level"]}`
    });
  }
  return formattedData;
};

