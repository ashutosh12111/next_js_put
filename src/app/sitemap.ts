import { getPublishedUserSlugs } from "@/services/homePage";

export default async function sitemap() {
  try {
    const URL = process.env.WEBSITE_URL;
    const members: any = await getPublishedUserSlugs();

    const memberPages = members?.map((route: any) => ({
      url: `${URL}/members/${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    }));

    const routes = ["", "/privacy-policy", "/terms-and-conditions"].map(
      (route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1,
      })
    );

    return [...routes, ...memberPages];
  } catch (err) {
    return [];
  }
}
