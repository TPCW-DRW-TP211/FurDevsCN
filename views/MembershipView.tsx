import MemberIntro from "@/components/MemberIntro";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MembershipView() {
  return (
    <div className="bg-white py-24 sm:py-32 rounded-lg">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们的成员（按照加入顺序排列）
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <MemberIntro />
          </li>
        </ul>
      </div>
    </div>
  );
}
