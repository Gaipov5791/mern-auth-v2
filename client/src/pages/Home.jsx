

const Home = () => {
	return (
		<div className="px-4 py-12 max-w-2xl m-auto">
			<h1 className="mb-4 text-3xl font-bold text-slate-800">
				Welcome To My Auth App
			</h1>
			<p className="mb-4 text-slate-700">
				The MERN stack is a popular and powerful technology 
				stack for building web applications. MERN stands for MongoDB, 
				Express.js, React, and Node.js, representing a comprehensive 
				set of tools and technologies that cover the entire web 
				development process. Each component of the stack plays a 
				specific role in the development process.
			</p>
			<p className="mb-4 text-slate-700">
				MongoDB is a NoSQL database that forms the foundation of 
				the MERN stack. It is known for its flexibility and scalability, 
				making it an ideal choice for managing and storing data. Express.js 
				is a backend framework that simplifies the creation of robust and 
				efficient server-side applications. It provides a structured way to 
				handle HTTP requests and responses, making it easier to build APIs.
			</p>
			<p className="mb-4 text-slate-700">
				React is a popular frontend library for building dynamic and interactive 
				user interfaces. It allows developers to create reusable UI components 
				and efficiently manage the state of their applications. Node.js, on the 
				other hand, is used on the server-side to provide a runtime environment 
				for JavaScript. This full-stack JavaScript approach simplifies development, 
				as developers can use a single programming language throughout the entire 
				application.
			</p>
		</div>
	)
}

export default Home;