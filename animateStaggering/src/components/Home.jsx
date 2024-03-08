import { motion } from "framer-motion";

const Home = () => {
  const articles = [
    { id: 1, title: "Sputnik Sweetheart", author: "Haruki Murakami" },
    { id: 2, title: "Animal Farm", author: "George Orwell" },
    { id: 3, title: "Namesake", author: "Jhumpa Lahiri" },
    { id: 4, title: "To kill a mockingbird", author: "Harper Lee" },
    { id: 5, title: "One hundred years of solitude", author: "Gabriel Garcia" },
    { id: 6, title: "The catcher in the rye", author: "Sallinger" },
    { id: 7, title: "Lolita", author: "Vladimir Nobokov" },
    { id: 8, title: "Frankenstein", author: "Mary Kelly" },
    { id: 9, title: "Lord of the rings", author: "Tolkein" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 w-7/12 mx-auto">
        {articles.map((ele,i) => (
          <motion.div
            key={ele.id} 
            className="bg-purple-700 text-white p-5 rounded-3xl"
            initial={{opacity:0,translateX : i % 2 === 0 ? -50 : 50,translateY:-50}}
            animate={{opacity:1,translateX:0,translateY:0}}
            transition={{duration:0.8,delay:i*0.1}}
            // transition={{duration:0.8,delay:i*0.03}}
          >
            <h1 className="text-2xl font-semibold py-3">{ele.title}</h1>
            <h3 className="py-3">{ele.author}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
