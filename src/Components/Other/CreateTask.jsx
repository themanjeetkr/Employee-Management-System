import React from 'react'

const CreateTask = () => {
  return (
     <div className="p-8 bg-[#1c1c1c] mt-7 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Create New Task</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Task Title</label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Assign To</label>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Category</label>
              <input
                type="text"
                placeholder="Design, Dev, UI"
                className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            <label className="block text-sm text-gray-300 mb-2">Description</label>
            <textarea
              rows="8"
              placeholder="Write task details here..."
              className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none"
            ></textarea>
          </div>
        </form>

        {/* Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="rounded-lg bg-pink-600 px-6 py-2 text-sm font-medium hover:bg-pink-700 transition-all shadow-md"
          >
            Create Task
          </button>
        </div>
      </div>
  )
}

export default CreateTask
