import Image from "next/image";
import { portfolios } from "./mocks/portfolios";


export default function Portfolio() {
  return (
    <>
      <div className="my-7">
        <h1 className="font-bold text-3xl mb-5">Portfolio</h1>
        <p className="text-gray-500">학습하며 개발했던 일부 프로젝트들 입니다</p>
      </div>  
        {
          portfolios.map(({id,image, creatY,title,content,tags})=>
            <article key={id} className="flex rounded-xl overflow-hidden mb-2 bg-darkSub hover:bg-darkSubHover transition-all">
              <Image src={image} alt="" width={280} height={280}/>
              <div className="flex flex-col justify-center p-5 border-r-point border-r-4 grow">
                <h5 className="text-point">{creatY}</h5>
                <h1 className="text-2xl font-normal my-2">{title}</h1>
                <p className="text-gray-500 mb-2">{content}</p>
                <div className="flex gap-2">
                  {
                    tags.map((tagName)=> 
                      <div className="bg-dark p-2 px-4 text-sm rounded-md" key={tagName}>{tagName}</div>
                    )
                  }
                </div>
              </div>
            </article>
          )
        }
    </>
  );
}
