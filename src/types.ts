export type TResponse = {
  [key: string]: {
    en: string | undefined;
    intro: {
      de: string;
      en: string;
    };
    level: string;
    title: {
      de: string;
      en: string;
    };
  };
};

export type TItem = {
  item: {
    id?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    level?: string | undefined;
    imageUrl?: string | undefined;
  };
};
export type TData = {
  id?: string | undefined;
  title?: string | undefined;
  subtitle?: string | undefined;
  level?: string | undefined;
  imageUrl?: string | undefined;
};

export type TService = {
  title?: string;
  subtitle?: string;
  level?: string;
  imageUrl?: string;
};

export type TFilter = {
  query: string;
  onQuery: (newQuery: string) => void;
};

