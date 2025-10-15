import { useEffect, useState } from "react";

 function Discover() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonfakery.com/games/paginated")
      .then((res) => res.json())
      .then((response) => {
    const gamesData = response.data.map((game) => ({
        id: game.id,
        name: game.name,
          description:
            game.description || "Join our gaming community and have fun!!!",
          members: Math.floor(Math.random() * 90000) + 1000,
          banner: game.image || "./images/WhatsApp Image 2025-10-15 at 13.20.37_72f6aee8.jpg",
          category: game.genre || "Gaming",
        }));

        setGames(gamesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching games:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className="bg-gradient-to-b from-[#000426] to-white w-full h-[200px]"></div>
    <div className="bg-[#ffffff] min-h-screen text-white">
     
      <section className="text-center py-16 bg-white ">
        <h1 className="text-7xl md:text-7xl mb-3 pl-4 pr-4 font-extrabold text-blue-600 align-middle">DISCOVER YOUR NEXT FAVORITE SERVER</h1>
        <p className="text-gray-700 text-[20px] max-w-xl mx-auto">
          Find a new space to play games, chill with friends, and hang out.
        </p>
      </section>

      <div className="font-extrabold text-3xl text-gray-800 pl-[50px]">69000 RESULTS FOUND</div>
      <section className="max-w-6xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading games...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-[#2b2d31] rounded-2xl p-5 shadow-lg hover:shadow-indigo-500/20 transition transform hover:-translate-y-1"
              >
                <img
                  src={game.banner}
                  alt={game.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {game.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {game.description}
                </p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>{game.category}</span>
                  <span>{game.members.toLocaleString()} members</span>
                </div>
                <button
                  
                  className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium"
                >
                  Join Server
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
   </>
  );
}

export default Discover