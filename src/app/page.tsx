import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData(){
const query=`
  *[_type=='blog'] | order(_createdAt desc)
{title,smallDescription,"currentSlug":slug.current,titleImage}`

const data = await client.fetch(query)
return data 
  
}
export default async function Home() {
  const data : simpleBlogCard[] = await getData()
  console.log("🚀 ~ Home ~ data:", data)
  
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.map((post,idx)=>{
<Card key={ idx} >

</Card>
      })}
    </div>
  );
}
