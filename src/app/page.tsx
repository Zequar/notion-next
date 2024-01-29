import { root } from "postcss";
import { notion } from "../../notion";
import { NotionRenderer } from 'react-notion-x'
import { NotionPage } from "./components/notion";

// https://cheerful-judge-df1.notion.site/COLOSSEL-3d31cf7a24574f209d439c2942d56556?pvs=4
const rootPageId = '3d31cf7a24574f209d439c2942d56556'

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId)
}

export default async function Home() {
  const data = await getData(rootPageId)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NotionPage recordMap={data} rootPageId={rootPageId}/>
    </main>
  );
}
