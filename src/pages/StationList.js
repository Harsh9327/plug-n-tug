import { Card} from '../components/Card';
import evjson from '../data/ev-charging-stations-india.json';

export const StationList = ({locoid,position}) => {

  return (
    <main>
      <section className="mx-w-7px max-auto py-7 bg-cyan-900">
           <div className="flex justify-center flex-wrap other:justify-evenly">
           {locoid==="" ? ( 
            evjson.map((i) => (
              <Card  key={i.id} station={i} position={position}/>
           )) 
           ):(
            evjson.map((i) => (
               (i.code===locoid) ?(
                
                <Card  key={i.id} station={i} position={position}/>  
               ):(
                <div key={i.id} className='hidden'>1</div>
               )
           ))
           )}
         </div>
      </section>
    </main>
  )
}
