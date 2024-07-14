import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "ru"];

export default getRequestConfig(async ({locale}) => {
  const baseLocal = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocal)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
