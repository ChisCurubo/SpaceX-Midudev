
import {type Doc, type APISpaceXRes} from '../types/api'


//Podeis ejecutar ejecua¿tar js que querramos 
//const res = await fetch('https://api.spacexdata.com/v5/launches');
//const data=  await res.json()
//console.log(data)// en el server o tiempi de compilacion

export const getlatestLaunches = async () => {
  const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Corrected typo here
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc'
        },
        limit: 12,
      }
    })
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const { docs : launches } = (await res.json()) as APISpaceXRes;
  console.log(launches);
  return launches;
};

export const getLaunchById = async ({ id }: { id: string }) => {
    console.log('Fetching launch with ID:', id);
  
    try {
      const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const text = await res.text();
      console.log('Raw response:', text);
  
      const launch = JSON.parse(text) as Doc;
      console.log('Parsed JSON:', launch);
  
      return launch;
    } catch (error) {
      console.error('Error fetching launch data:', error);
      throw error;
    }
  };
  
