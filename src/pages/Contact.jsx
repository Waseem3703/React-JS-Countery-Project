import "../index.css"

const Contact = () =>{

    return <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <form>
                <div className="mb-4">
                <label className="block text-xl font-sans mb-1 text-gray-800 font-medium">Name</label>
                <input type="text" placeholder="Enter Name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"></input>
                </div>
                <div className="mb-4">
                <label className="block text-xl font-sans mb-1 text-gray-800 font-medium">Email</label>
                <input type="email" placeholder="Enter Email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"></input>
                </div><div className="mb-4">
                <label className="block text-xl font-sans mb-1 text-gray-800 font-medium">Message</label>
                <textarea type="text" placeholder="Enter Message"  rows={4}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"></textarea>
                </div>
                <button type="submit" 
                className="w-full text-white bg-blue-600 rounded-lg p-3 hover:bg-blue-700 transition duration-300">Send Message</button>
            </form>


        </div>
      </div>


    </>
}
export default Contact;