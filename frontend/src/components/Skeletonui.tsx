import { Skeleton } from "@nextui-org/react";

export default function Skeletonui() {
  return (
    // <div className="max-w-[300px] w-full flex items-center gap-3">
    //   <div>
    //     <Skeleton className="flex rounded-full w-12 h-12" />
    //   </div>
    //   <div className="w-full flex flex-col gap-2">
    //     <Skeleton className="h-3 w-3/5 rounded-lg" />
    //     <Skeleton className="h-3 w-4/5 rounded-lg" />
    //   </div>
    // </div>
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex flex-row items-center">
        <Skeleton className="ml-1 mb-2 flex rounded-full w-7 h-7" />
        {/* <div className="ml-3 flex items-center">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </div> */}
        <Skeleton className="ml-3 h-4 w-2/5 rounded-lg" />
      </div>

      <Skeleton className="h-6 mb-2  rounded-lg" />
      <Skeleton className="h-4 mb-1  rounded-lg" />
      <Skeleton className="h-4 mb-2  rounded-lg" />

      <Skeleton className="h-3 mb-2 w-2/12 mt-8 rounded-lg" />
    </div>
  );
}
