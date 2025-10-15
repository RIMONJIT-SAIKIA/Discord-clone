import React from 'react'
import { useEffect, useState } from "react";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./job.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading datas:", err));
  }, []);

  
  if (loading) return <p>Loading jobs...</p>;






    return (
        <>
        
        <div className='w-full h-[500px] bg-gradient-to-b from-[#000426] to-indigo-900'><h1 className='pt-[100px] text-center text-[90px] align-middle text-white font-extrabold'>WORK AT DISCORD
</h1><h3 className='text-2xl font-bold text-white text-center pr-8 pl-8'>Our employees aren’t just the most talented folks in the industry (we may be a little biased), they’re also deeply passionate about gaming, fostering meaningful connections, and of course, Discord.
</h3>
<button className='bg-blue-400 hover:bg-indigo-700 h-[40px] w-[160px] rounded-xl ml-[580px] mt-[40px] items-center'><a href="#">See all Jobs</a></button></div>
 

        <div className='w-full h-[600px] bg-gradient-to-b from-indigo-900 to-black'> 
            <img src="./images/67628ca77dc02004de7d588e_Discord_Careers_09.webp" alt="" className='h-[700px] w-auto ml-[120px] rounded-xl' />
        </div>
            <div className='w-full h-[600px] bg-black'><h1 className='pt-[100px] text-center text-[90px] align-middle text-white font-extrabold pl-[100px] pr-[100px]'>BE A PART OF THE FUTURE OF GAMING
</h1><h3 className='text-2xl font-bold text-white text-center pr-8 pl-8'>We believe Discord is uniquely positioned to shape the future of gaming. We aren’t just imagining what it may look like, we’re building Discord to be the perfect place to talk while playing games on any platform, no matter what device you play on.

</h3>
</div>
 <div className='w-full h-[800px] bg-[#000000] flex gap-[300px] pt-[150px]'> <div className='w-[500px] pl-[40px]'><h1 className='text-white font-extrabold text-6xl align-baseline '>Work with people just as passionate as you</h1>
        <h3 className='text-white font-bold text-[20px] pt-[80px]'>Much like the people on Discord, our employees can’t be put in a box (but maybe in a server). We come from all walks of life, and with our own unique perspectives, but we all care about the same thing: making Discord your home while gaming.</h3>
       </div><div className='h-[600px] w-[500px] flex'> <img src="./images/67b5a1dff532eaee97109138_Image.webp" alt="" className='h-[500px] w-[400px] ml-[80px] mt-[100px] rounded-2xl'/>
</div></div>
 <div className='w-full h-[800px] bg-[#000000] flex gap-[300px] pt-[150px]'> <div className='w-[500px] pl-[40px]'><h1 className='text-white font-extrabold text-6xl align-baseline '>Where every idea is heard and valued</h1>
        <h3 className='text-white font-bold text-[20px] pt-[80px]'>We don't just build Discord, we use it too! All of us want to help make Discord the best place to play games with friends, and everyone's input matters..</h3>
       </div><div className='h-[600px] w-[500px]'> <img src="./images/67b5a21a4f30a6644094e917_Image.webp" alt="" className='h-[500px] w-[400px] ml-[80px] mt-[100px] rounded-2xl'/>
</div></div>

<div className='w-full h-[300px] bg-black'><h1 className='pt-[100px] text-center text-[45px] pl-[200px] pr-[200px] align-middle text-white font-extrabold'>DON'T JUST IMAGINE THE FUTURE OF GAMING — BUILD IT WITH US.

</h1><h3 className='text-2xl font-bold text-white text-center pr-8 pl-8'>Explore our careers page and see if any of our open jobs would be a great fit for you.</h3></div>
<div className="bg-black py-16 px-4">
        <h2 className="text-2xl font-extrabold text-center bg-gray-600 text-white mb-12 w-[230px] h-[50px] rounded-xl ml-[550px] hover:bg-gray-800">
          Featured &#8964;
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={job.image}
                alt={job.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{job.name.trim()}</h3>
                <p className="text-gray-300 mt-2">{job.genre.trim()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[500px] bg-gradient-to-b from-black to-indigo-800"></div>
</>
    )
}

export default Careers;
