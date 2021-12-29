/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="bg-indigo-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
          <p className="m-4 Inter text-2xl text-gray-800 text-center">
            あなたの「好き」を見つける。
          </p>

          <form className="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm"
              type="text"
              aria-label="Filter projects"
              placeholder="Filter projects..."
            />
          </form>
        </div>
      </div>
      <p className="m-4 Inter text-2xl text-gray-800 text-center">
        USERさんと相性が合いそうなユーザー
      </p>
      <p className="m-4 Inter text-2xl text-gray-800 text-center">
        相性20%マッチ
      </p>
      <div className="grid grid-cols-3 gap-4 justify-items-auto h-48">
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
      <p className="m-4 Inter text-2xl text-gray-800 text-center">
        相性15%マッチ
      </p>
      <div className="grid grid-cols-3 gap-4 justify-items-auto h-48">
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="text-sm text-gray-800">Product Manager</p>
          </div>
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          5
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-2">
          6
        </div>
      </div>
    </div>
  );
}
